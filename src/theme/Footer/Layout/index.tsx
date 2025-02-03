import React from "react";
import clsx from "clsx";
import type { Props } from "@theme/Footer/Layout";
import styles from "./styles.module.css";

const BackToTop = () => {
  return (
    <button
      onClick={() => document.body.scrollIntoView()}
      className={styles.backToTopButton}
    >
      <span>Back to Top </span>
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
  );
};

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
        }}
      >
        {(logo || copyright) && (
          <div className={`footer__bottom text--center ${styles.footerBottom}`}>
            <div>
              {logo && <div className="margin-bottom--sm">{logo}</div>}
              {copyright}
            </div>
            <div>
              {/* <a href="/legal/terms-of-service" className="custom-footer-link">
                Terms of Service
              </a>
              <span>|</span> */}
              <a href="/legal/disclaimer" className="custom-footer-link">
                Disclaimer
              </a>
              {/* <span>|</span>
              <a href="/legal/privacy-policy" className="custom-footer-link">
                Privacy
              </a> */}
            </div>
            <div>
              {links}
              <BackToTop />
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}
