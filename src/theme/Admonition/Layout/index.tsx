import React, { type ReactNode } from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";

import type { Props } from "@theme/Admonition/Layout";

import styles from "./styles.module.css";

function AdmonitionContainer({
  type,
  className,
  children,
}: Pick<Props, "type" | "className"> & { children: ReactNode }) {
  return (
    <div
      className={clsx(
        ThemeClassNames.common.admonition,
        ThemeClassNames.common.admonitionType(type),
        styles.admonition,
        className
      )}
    >
      {children}
    </div>
  );
}

function AdmonitionHeading({
  title,
  children,
}: Pick<Props, "title" | "children">) {
  return (
    <div className={styles.admonitionHeading}>
      <div className={styles.admonitionHeading}>{title}</div>
      <AdmonitionContent>{children}</AdmonitionContent>
    </div>
  );
}

function AdmonitionContent({ children }: Pick<Props, "children">) {
  return children ? (
    <div className={styles.admonitionContent}>{children}</div>
  ) : null;
}

export default function AdmonitionLayout(props: Props): JSX.Element {
  const { type, icon, title, children, className } = props;
  return (
    <AdmonitionContainer type={type} className={className}>
      <span className={styles.admonitionIcon}>{icon}</span>
      <AdmonitionHeading title={title} children={children} />
    </AdmonitionContainer>
  );
}
