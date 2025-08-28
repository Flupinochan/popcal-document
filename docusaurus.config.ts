import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "PopCal Document",
  tagline:
    "Popup notifications and Calendar scheduling for meeting facilitators and note-takers on a mobile app.",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  url: "https://flupinochan.github.io",
  baseUrl: "/popcal-document/",

  organizationName: "Flupinochan",
  projectName: "popcal-document",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "ja",
    locales: ["ja"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.module.scss",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: ["docusaurus-plugin-sass"],

  themeConfig: {
    image: "img/social-card.png",
    navbar: {
      title: "PopCal",
      logo: {
        alt: "PopCal Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "アーキテクチャ",
        },
        {
          href: "https://github.com/Flupinochan/popcal",
          label: "GitHub",
          position: "right",
        },
        {
          type: "docsVersionDropdown",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "アーキテクチャ",
              to: "/docs/next/category/アーキテクチャ",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "Home Page",
              href: "https://metalmental.net/",
            },
            {
              label: "GitHub",
              href: "https://github.com/Flupinochan",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MetalMental. All rights reserved.`,
    },
    colorMode: {
      defaultMode: "dark",
    },
    prism: {
      theme: prismThemes.palenight,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ["dart"],
    },
  } satisfies Preset.ThemeConfig,

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
};

export default config;
