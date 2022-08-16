// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '随心',
  tagline: '随心记录',
  url: 'http://lookmori.cn',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '', // Usually your GitHub org/user name.
  projectName: '', // Usually your repo name.
  // to replace "en" with "zh-Hans".

  plugins: ['@docusaurus/theme-live-codeblock'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          routeBasePath: "/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '随心',
        logo: {
          alt: 'My Site Logo',
          src: 'img/love.jpg',
        },
        items: [
          { to: '/', label: '博客', position: 'right' },
          {
            position: 'right',
            label: '笔记',
            to: 'docs/allways/'
          },
          {
            to: 'docs/question/', label: '问题', position: 'right'
          },
          {
            to: 'docs/utils/', label: '常用', position: 'right'
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              }
            ],
          },
          {

            items: [
              {
                label: '豫ICP备2022017677号-1',
                href: 'https://beian.miit.gov.cn/#/Integrated/index'
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 随心, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      liveCodeBlock: {
        /**
         * 实时效果显示的位置，在编辑器上方还是下方。
         * 可为："top" | "bottom"
         */
        playgroundPosition: 'bottom',
      },
    }),
};

module.exports = config;
