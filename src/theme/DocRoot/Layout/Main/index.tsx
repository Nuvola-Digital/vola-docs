import React from 'react';
import clsx from 'clsx';
import {useDocsSidebar} from '@docusaurus/plugin-content-docs/client';
import type {Props} from '@theme/DocRoot/Layout/Main';

import styles from './styles.module.css';
import { useAtomValue } from 'jotai';
import { hideSidebarAtom } from '@site/src/store';

export default function DocRootLayoutMain({
  children,
}: Props): JSX.Element {
  const sidebar = useDocsSidebar();
  const hiddenSidebarContainer = useAtomValue(hideSidebarAtom);
  return (
    <main
      className={clsx(
        styles.docMainContainer,
        (hiddenSidebarContainer || !sidebar) && styles.docMainContainerEnhanced,
      )}>
      <div
        className={clsx(
          'container padding-top--md padding-bottom--lg',
          styles.docItemWrapper,
          hiddenSidebarContainer && styles.docItemWrapperEnhanced,
        )}>
        {children}
      </div>
    </main>
  );
}
