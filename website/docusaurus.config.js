const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const simplePlantUML = require('@akebifiky/remark-simple-plantuml');

const config = {
  title: 'React',
  tagline: 'Dinosaurs are cool',
  url: 'https://hondilla.github.io',
  baseUrl: '/react-course/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'hondilla',
  projectName: 'react-course',
  trailingSlash: true,
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },
  presets: [[
    'classic',
    ({
      docs: {
        routeBasePath: '/',
        sidebarPath: require.resolve('./sidebars.js'),
        remarkPlugins: [
          [simplePlantUML, { baseUrl: "https://www.plantuml.com/plantuml/svg" }],
        ],
        sidebarCollapsible: false,
      },
      theme: {
        customCss: require.resolve('./src/css/custom.css'),
      },
    })
  ]],
  themes: [
    '@saucelabs/theme-github-codeblock',
  ],
  themeConfig: ({
    algolia: {
      appId: '0HBWCCMQT7',
      apiKey: '00042203412523a81a275ab379d44029',
      indexName: 'react-course',
    },
    navbar: {
      title: 'React Course',
      logo: {
        alt: '',
        src: 'img/react.svg',
      },
      items: [{
        type: 'search',
        position: 'left',
      }, {
        href: 'https://github.com/hondilla/react-course',
        label: 'GitHub',
        position: 'right',
      }],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Christian Bohollo Sáez. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  }),
};

module.exports = config;
