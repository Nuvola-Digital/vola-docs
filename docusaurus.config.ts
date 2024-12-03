import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Vola Network",
  tagline: "Unified Storage Aggregator Network",
  favicon: "img/vola-logo.png",

  // Set the production url of your site here
  url: "https://docs.vola.network",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "nuvola-digital", // Usually your GitHub org/user name.
  projectName: "Vola.Network Docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        sitemap: {
          lastmod: "date",
          changefreq: "weekly",
          priority: 0.5,
          filename: "sitemap.xml",
        },
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/Nuvola-Digital/vola-docs/tree/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    defaultMode: "dark",
    respectPrefersColorScheme: false,
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    algolia: {
      appId: "A58HZ2V7SM",
      apiKey: "e9bea8062bbe469e30a93f7c5e1fc2ee",
      indexName: "vola",
    },
    navbar: {
      title: "Vola Network",
      logo: {
        alt: "Vola Network",
        src: "img/vola-logo.png",
      },
      items: [
        {
          href: "https://github.com/facebook/docusaurus",
          position: "right",
          className: "header-icon-link x",
          "aria-label": "Vola Network X (Twitter) handle",
        },
        {
          href: "https://github.com/facebook/docusaurus",
          position: "right",
          className: "header-icon-link facebook",
          "aria-label": "Vola Network Facebook page",
        },
        {
          href: "https://github.com/facebook/docusaurus",
          position: "right",
          className: "header-icon-link discord",
          "aria-label": "Nuvola Digital Discord server",
        },
        {
          href: "https://github.com/facebook/docusaurus",
          position: "right",
          className: "header-icon-link github",
          "aria-label": "Vola Network GitHub repository",
        },
      ],
    },
    footer: {
      links: [
        {
          label: "X (Twitter)",
          href: "https://x.com/NuvolaDigital",
          className: "header-icon-link x",
        },
        {
          label: "Facebook",
          href: "https://x.com/NuvolaDigital",
          className: "header-icon-link facebook",
        },
        {
          label: "Discord",
          href: "https://discord.gg/nuvola",
          className: "header-icon-link discord",
        },
        {
          label: "GitHub",
          href: "https://github.com/vola-network",
          className: "header-icon-link github",
        },
      ],
      copyright: `<p class="truncate" style="width:max-content;margin:0;">Copyright © 2024 Vola Network | Disclaimer | Privacy</p>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
