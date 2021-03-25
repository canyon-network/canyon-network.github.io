/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Canyon Network",
  tagline:
    "Permanent storage layer for limitless scalability powered by the new storage-based computation paradigm",
  url: "https://canyon-network.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "canyon-network", // Usually your GitHub org/user name.
  projectName: "canyon", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Canyon Network",
      logo: {
        alt: "Canyon Network Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/canyon-network/canyon",
          label: "GitHub",
          position: "right",
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
              label: "Getting Started",
              to: "docs/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Telegram",
              href: "https://t.me/CanyonNetwork",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/canyon_network",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/canyon-network/canyon",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Canyon Network Contributors.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/canyon-network/canyon-network.github.io/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
