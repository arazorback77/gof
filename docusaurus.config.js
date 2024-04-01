// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "GoF",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "arzorback77", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css",
      },
    },
    {
      tagName: "script",
      attributes: {
        type: "text/javascript",
      },
      innerHTML: `
      algoliasearchNetlify({
        appId: '95JXYNK74Y',
        apiKey: '8122f86c4cacdf2f2ba27842ac2744f5',
        siteId: 'a17ea549-8c0e-4599-8512-c102af1256b8',
        branch: 'main',
        selector: 'div#search',
      });
      `,
    },
  ],
  stylesheets: [
    // String format.
    // 'https://docusaurus.io/style.css',
    // Object format.
    // {
    //   href: 'https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css',
    // },
  ],
  scripts: [
    // String format.
    // 'https://docusaurus.io/script.js',
    // Object format.
    {
      type: "text/javascript",
      src: "https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js",
      // async: true,
    },
    // {
    // type: "text/javascript",
    // innerHTML: `algoliasearchNetlify({
    //     appId: '95JXYNK74Y',
    //     apiKey: '8122f86c4cacdf2f2ba27842ac2744f5',
    //     siteId: 'a17ea549-8c0e-4599-8512-c102af1256b8',
    //     branch: 'main',
    //     selector: 'div#search',
    //   });
    // `,
    // },
    // {
    //   src: 'https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js',
    //   async: true,
    // },
    // {
    //   src: 'https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js',
    //   async: true,
    // },
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          changefreq: "daily",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "GoF Books",
        logo: {
          alt: "My Site Logo",
          src: "img/G_logo_black_o.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Tutorial",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/facebook/docusaurus",
            label: "GitHub",
            position: "right",
          },
          // {
          //   type: "search",
          //   position: "right",
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      // algolia: {
      //   appId: "95JXYNK74Y",
      //   apiKey: "8122f86c4cacdf2f2ba27842ac2744f5",
      //   indexName: "netlify_a17ea549-8c0e-4599-8512-c102af1256b8_main_all",
      //   contextualSearch: true,
      // },
    }),
};

export default config;
