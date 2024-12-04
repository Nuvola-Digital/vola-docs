import React, { type ReactNode } from "react";
import { useThemeConfig, ErrorCauseBoundary } from "@docusaurus/theme-common";
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
} from "@docusaurus/theme-common/internal";
import NavbarItem, { type Props as NavbarItemConfig } from "@theme/NavbarItem";
import NavbarColorModeToggle from "@theme/Navbar/ColorModeToggle";
import SearchBar from "@theme/SearchBar";
import NavbarMobileSidebarToggle from "@theme/Navbar/MobileSidebar/Toggle";
import NavbarSearch from "@theme/Navbar/Search";

import styles from "./styles.module.css";
import VolaLogo from "./VolaLogo";

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items as NavbarItemConfig[];
}

function NavbarItems({ items }: { items: NavbarItemConfig[] }): JSX.Element {
  return (
    <>
      {items.map((item, i) => (
        <ErrorCauseBoundary
          key={i}
          onError={(error) =>
            new Error(
              `A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
${JSON.stringify(item, null, 2)}`,
              { cause: error }
            )
          }
        >
          <NavbarItem {...item} />
        </ErrorCauseBoundary>
      ))}
    </>
  );
}

function NavbarContentLayout({
  left,
  right,
  center,
}: {
  left: ReactNode;
  right: ReactNode;
  center: ReactNode;
}) {
  return (
    <div className="navbar__inner">
      <div className="navbar__items">{left}</div>
      <div className="navbar__items  navbar__items--center">{center}</div>
      <div className="navbar__items navbar__items--right">{right}</div>
    </div>
  );
}

export default function NavbarContent(): JSX.Element {
  const mobileSidebar = useNavbarMobileSidebar();

  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);

  const searchBarItem = items.find((item) => item.type === "search");

  return (
    <NavbarContentLayout
      left={
        // TODO stop hardcoding items?
        <div style={{ display: "flex", alignItems: "center" }}>
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
          <a
            href="/"
            title="Vola Network Docs"
            style={{ display: "flex", alignItems: "center" }}
          >
            <VolaLogo />
          </a>
          <NavbarItems items={leftItems} />
        </div>
      }
      center={
        <>
          {!searchBarItem && (
            <NavbarSearch>
              <SearchBar />
            </NavbarSearch>
          )}
        </>
      }
      right={
        // TODO stop hardcoding items?
        // Ask the user to add the respective navbar items => more flexible
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <NavbarColorModeToggle className={styles.colorModeToggle} />
          <div style={{ display: "flex", gap: "12px" }}>
            <NavbarItems items={rightItems} />
          </div>
          <button
            disabled
            style={{
              backgroundColor: "var(--primary)",
              color: "white",
              display: "grid",
              borderRadius: "4px",
              padding: "6px 20px",
              border: "none",
            }}
          >
            <span style={{ fontSize: "16px", fontWeight: "bold" }}>App</span>
            <span style={{ fontSize: "12px", whiteSpace: "nowrap" }}>
              Coming Soon
            </span>
          </button>
        </div>
      }
    />
  );
}
