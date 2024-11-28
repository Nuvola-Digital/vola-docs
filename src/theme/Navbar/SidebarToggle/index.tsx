/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useCallback } from "react";
import { prefersReducedMotion } from "@docusaurus/theme-common";
import { useNavbarMobileSidebar } from "@docusaurus/theme-common/internal";
import { translate } from "@docusaurus/Translate";
import IconMenu from "@theme/Icon/Menu";
import { useAtom } from "jotai";
import { hideSidebarAtom, hideSidebarContainerAtom } from "@site/src/store";

export default function SidebarToggle(): JSX.Element {
  const [hiddenSidebarContainer,setHiddenSidebarContainer] = useAtom(hideSidebarContainerAtom);
  const [hiddenSidebar, setHiddenSidebar] = useAtom(hideSidebarAtom);
  const toggleSidebar = useCallback(() => {
    if (hiddenSidebar) {
      setHiddenSidebar(false);
    }
    // onTransitionEnd won't fire when sidebar animation is disabled
    // fixes https://github.com/facebook/docusaurus/issues/8918
    if (!hiddenSidebar && prefersReducedMotion()) {
      setHiddenSidebar(true);
    }
    setHiddenSidebarContainer((value) => !value);
  }, [setHiddenSidebarContainer, hiddenSidebar]);
  return (
    <button
      onClick={toggleSidebar}
      aria-label={translate({
        id: "theme.docs.sidebar.toggleSidebarButtonAriaLabel",
        message: "Toggle sidebar",
        description:
          "The ARIA label for hamburger menu button of mobile navigation",
      })}
      aria-expanded={hiddenSidebarContainer}
      className="navbar__toggle sidebar__toggle clean-btn" 
      type="button"
    >
      <IconMenu />
    </button>
  );
}
