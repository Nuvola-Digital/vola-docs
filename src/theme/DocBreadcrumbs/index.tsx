import React, { type ReactNode } from "react";
import Link from "@docusaurus/Link";
import { ThemeClassNames } from "@docusaurus/theme-common";
import { useSidebarBreadcrumbs } from "@docusaurus/plugin-content-docs/client";
import { useHomePageRoute } from "@docusaurus/theme-common/internal";
import type DocBreadcrumbsType from "@theme/DocBreadcrumbs";
import type { WrapperProps } from "@docusaurus/types";
import { translate } from "@docusaurus/Translate";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import clsx from "clsx";
import styles from "./styles.module.css";

type Props = WrapperProps<typeof DocBreadcrumbsType>;
// TODO move to design system folder
function BreadcrumbsItemLink({
  children,
  href,
  isLast,
}: {
  children: ReactNode;
  href: string | undefined;
  isLast: boolean;
}): JSX.Element {
  const className = "breadcrumbs__link";
  if (isLast) {
    return (
      <span className={className} itemProp="name">
        {children}
      </span>
    );
  }
  return href ? (
    <Link className={className} href={href} itemProp="item">
      <span itemProp="name">{children}</span>
    </Link>
  ) : (
    // TODO Google search console doesn't like breadcrumb items without href.
    // The schema doesn't seem to require `id` for each `item`, although Google
    // insist to infer one, even if it's invalid. Removing `itemProp="item
    // name"` for now, since I don't know how to properly fix it.
    // See https://github.com/facebook/docusaurus/issues/7241
    <span className={className}>{children}</span>
  );
}

// TODO move to design system folder
function BreadcrumbsItem({
  children,
  active,
  index,
  addMicrodata,
}: {
  children: ReactNode;
  active?: boolean;
  index: number;
  addMicrodata: boolean;
}): JSX.Element {
  return (
    <li
      {...(addMicrodata && {
        itemScope: true,
        itemProp: "itemListElement",
        itemType: "https://schema.org/ListItem",
      })}
      className={clsx("breadcrumbs__item", {
        "breadcrumbs__item--active": active,
      })}
    >
      {children}
      <meta itemProp="position" content={String(index + 1)} />
    </li>
  );
}
export default function DocBreadcrumbsWrapper(props: Props): JSX.Element {
  const breadcrumbs = useSidebarBreadcrumbs();
  const homePageRoute = useHomePageRoute();

  if (!breadcrumbs) {
    return null;
  }
  let hideBreadcrumbs: boolean;
  try {
    const { frontMatter } = useDoc();
    hideBreadcrumbs = frontMatter?.["hide_breadcrumbs"] ?? false;
  } catch (e) {
    // Gracefully handle the case where useDoc is not applicable
    hideBreadcrumbs = false;
  }
  if (hideBreadcrumbs) {
    return null; // Do not render breadcrumbs if the custom flag is set
  }
  return (
    <nav
      className={clsx(
        ThemeClassNames.docs.docBreadcrumbs,
        styles.breadcrumbsContainer
      )}
      aria-label={translate({
        id: "theme.docs.breadcrumbs.navAriaLabel",
        message: "Breadcrumbs",
        description: "The ARIA label for the breadcrumbs",
      })}
    >
      <ul
        className="breadcrumbs"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {/* {homePageRoute && <HomeBreadcrumbItem />} */}
        <BreadcrumbsItem
          key={"home"}
          active={false}
          index={-1}
          addMicrodata={true}
        >
          <BreadcrumbsItemLink href={"/"} isLast={false}>
            Home
          </BreadcrumbsItemLink>
        </BreadcrumbsItem>
        {breadcrumbs.map((item, idx) => {
          const isLast = idx === breadcrumbs.length - 1;
          const href =
            item.type === "category" && item.linkUnlisted
              ? undefined
              : item.href;
          return (
            <BreadcrumbsItem
              key={idx}
              active={isLast}
              index={idx}
              addMicrodata={!!href}
            >
              <BreadcrumbsItemLink href={href} isLast={isLast}>
                {item.label}
              </BreadcrumbsItemLink>
            </BreadcrumbsItem>
          );
        })}
      </ul>
    </nav>
  );
}
