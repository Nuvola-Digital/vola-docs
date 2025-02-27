import React from "react";
import type { Props } from "@theme/Footer/Copyright";

export default function FooterCopyright({ copyright }: Props): JSX.Element {
  return (
    <div
      className="footer__copyright"
      style={{ flexShrink: 1, minWidth: 0 }}
      // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: copyright }}
    />
  );
}
