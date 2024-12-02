import React from "react";

import { useThemeConfig } from "@docusaurus/theme-common";
import FooterLinks from "@theme/Footer/Links";
import FooterLogo from "@theme/Footer/Logo";
import FooterCopyright from "@theme/Footer/Copyright";
import FooterLayout from "@theme/Footer/Layout";

type FooterLinkItem = {
  label?: string;
  to?: string;
  href?: string;
  html?: string;
  prependBaseUrlToHref?: string;
  className: string;
} & { [key: string]: unknown };

function Footer(): JSX.Element | null {
  const { footer } = useThemeConfig();
  if (!footer) {
    return null;
  }
  const { copyright, links, logo, style } = footer;

  const socialLinkGroup = links?.filter((item) => item.title === "Social")?.[0];
  const socialLinks = socialLinkGroup?.items;

  return (
    <>
      <FooterLayout
        style={style}
        links={links && links.length > 0 && <FooterLinks links={links} />}
        logo={logo && <FooterLogo logo={logo} />}
        copyright={copyright && <FooterCopyright copyright={copyright} />}
      />
      {socialLinks && (
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          {(socialLinks as FooterLinkItem[]).map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={item.className}
              title={item.label}
            ></a>
          ))}
        </div>
      )}
    </>
  );
}

export default React.memo(Footer);
