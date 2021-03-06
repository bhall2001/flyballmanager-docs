module.exports = {
  title: 'Flyball Manager Documentation',
  tagline: 'Everything you need to know',
  url: 'https://fbm-docs.ondeckmanager.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'bhall2001', // Usually your GitHub org/user name.
  projectName: 'flyballmanager-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Flyball Manager Docs',
      logo: {
        alt: 'Flyball Manager Logo',
        src: 'img/tennis_128x128.png',
      },
      items: [
        // {
        //   to: 'docs/',
        //   activeBasePath: 'docs',
        //   label: 'Docs',
        //   position: 'left',
        // },
        // {to: 'blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/',
            },
            {
              label: 'Getting Started',
              to: '/gettingStarted/info/',
            },
          ],
        },
        {
          title: 'Contact',
          items: [{ html: '<p>bhall_2001 at yahoo dot com</p>' }],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Robert D. Hall. All rights reserved.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/bhall2001/flyballmanager-docs/edit/main/',
          routeBasePath: '/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
