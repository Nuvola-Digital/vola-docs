import React from "react";
import clsx from "clsx";
import type { Props } from "@theme/Footer/Layout";

export default function FooterLayout({
  style,
  links,
  logo,
  copyright,
}: Props): JSX.Element {
  return (
    <footer
      className={clsx("footer", {
        "footer--dark": style === "dark",
      })}
    >
      <div
        style={{
          padding: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {(logo || copyright) && (
          <div
            className="footer__bottom text--center"
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            <div style={{ flex: 1 }}>
              {logo && <div className="margin-bottom--sm">{logo}</div>}
              {copyright}
            </div>
            <div style={{ flex: 1, display: "flex" }}>
              {links}
              <button
                onClick={() => document.body.scrollIntoView()}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1rem",
                  background: "none",
                  border: "none",
                  padding: 0,
                  margin: 0,
                  boxShadow: "none",
                  whiteSpace: "nowrap",
                  color: "var( --ifm-font-color-base)",
                }}
              >
                Back to Top{" "}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5V19M12 5L16 9M12 5L8 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}
