/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Canyon Network",
  tagline:
    "A permanent storage layer for Web3.0, with high data durability and retrievability",
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
            {
              label: "White Paper",
              href: "https://canyon-network.io/canyon-white-paper/canyon_network.pdf",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/canyon_network",
            },
            {
              label: "Medium",
              href: "https://canyon-network.medium.com",
            },
            {
              label: "Telegram",
              href: "https://t.me/CanyonNetwork",
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
      copyright: `Copyright © ${new Date().getFullYear()} Canyon Labs.`,
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
