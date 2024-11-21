import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type {Options as IdealImageOptions} from '@docusaurus/plugin-ideal-image';
import type * as Preset from '@docusaurus/preset-classic';
import {EnumChangefreq} from 'sitemap';

const config: Config = {
  title: 'CloudNOS',
  tagline: 'Realize intelligent management of data center facilities.',
  //favicon: 'img/favicon.png',
  trailingSlash: true,

  // Set the production url of your site here
  url: 'https://www.cloudnos.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cloudnos', // Usually your GitHub org/user name.
  projectName: 'cloudnos', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    'docusaurus-plugin-matomo',
    '@docusaurus/theme-mermaid',
    [
      './custom-blog-plugin',
      {
        id: 'blog',
        routeBasePath: 'blog',
        path: './blog',
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      /** @type {import("@docusaurus/plugin-ideal-image").PluginOptions} */
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      } satisfies IdealImageOptions,
    ],
    [
      'content-docs',
      {
        id: 'guides',
        path: 'guides',
        routeBasePath: 'guides',
        editCurrentVersion: true,
        sidebarPath: './sidebar-guides.ts',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      'posthog-docusaurus',
      {
        apiKey: 'phc_EloQUW6cgfbTc0pI9c5CXElhQ4gVGRoBsrUAoakJVoQ',
        appUrl: 'https://p.glasskube.eu',
        ui_host: 'https://eu.posthog.com',
        enableInDevelopment: false,
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/glasskube/glasskube/tree/main/website/',
        },
        blog: false,
        theme: {
          customCss: ['./src/css/custom.css'],
        },
        sitemap: {
          changefreq: EnumChangefreq.DAILY,
          priority: 1,
          ignorePatterns: ['/blog/archive', '/blog/tags', '/blog/tags/**'],
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],
  themes: [
    [
      require.resolve('@getcanary/docusaurus-theme-search-pagefind'),
      { 
        includeRoutes: ["**/*"],
        group: true,
        tabs: [
          { name: "All", pattern: "**/*" },
          { name: "Docs", pattern: "/docs/**" },
          { name: "Guides", pattern: "/guides/**" },
          { name: "Blog", pattern: "/blog/**" },
        ],
       },
    ],
  ],
  markdown: {
    mermaid: true,
  },
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
  //  announcementBar: {
  //    id: 'announcementBar-1', // Increment on change
  //    content: `🧊 Glasskube Native Packages are on the horizon! 😎 <a target="_blank" href="https://github.com/glasskube/glasskube/discussions/1018">Help us make architecture decisions</a> 💡`,
  //    isCloseable: false,
  //  },
    image:
      'https://opengraph.githubassets.com/3fbd03d4d860275ee154ca566f24ecce9243e229fe367523fbcab52e8b43db3f/glasskube/glasskube',
    navbar: {
      title: 'CloudNOS',
      logo: {
        alt: 'Glasskube Logo',
        src: 'img/glasskube-logo.svg',
      },
      items: [
        {
          sidebarId: 'products',
          label: 'Products',
          position: 'left',
          items: [
            {to: '/products/DCIM', label: 'Cloud DCIM'},
            // {to: '/products/kcl', label: 'Glasskube Native Packages (coming soon)'},
            {to: '/products/hub', label: 'Glasskube Hub (new)'},
            // {to: '/products/cloud', label: 'Glasskube Cloud (coming soon)'},
          ],
        },
       // {to: '/packages', label: 'Packages', position: 'left'},
        {to: '/pricing', label: 'Pricing', position: 'left'},
        {
          sidebarId: 'resources',
          label: 'Resources',
          position: 'left',
          items: [
            {type: 'docSidebar', sidebarId: 'docs', label: 'Docs'},
            {to: '/guides/cert-manager', label: 'Guides'},
            {to: '/blog', label: 'Blog'},
          ]
        },
        {
          type: 'search',
          position: 'left',
        },
      // Here is search
        {
          type: 'custom-wrapper',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Architecture',
              to: '/docs/',
            },
            {
              label: 'Getting started',
              to: '/docs/getting-started/install',
            },
          ],
        },
        {
          title: 'Services',
          items: [
            {
              label: 'Integration',
              to: '/docs/comparisons/helm',
            },
            {
              label: 'Request Demo',
              to: '/docs/comparisons/timoni',
            },
            {
              label: 'Support Ticket',
              to: '/docs/comparisons/olm',
            },
            {
              label: 'Client Area',
              to: '/docs/comparisons/olm',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'About Us',
              to: '/blog',
            },
            {
              label: 'Privacy Policy',
              to: '/roadmap',
            },
            {
              label: 'Terms of Service',
              href: '/#',
            },
            {
              label: 'Refund Policy',
              href: '/#',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: '/#',
            },
            {
              label: 'Twitter / X',
              href: '/#',
            },
            {
              label: 'LinkedIn',
              href: '/#',
            },
            {
              label: 'GitHub',
              href: '/#',
            },
          ],
        }
      ],
      copyright: `<br>Copyright © ${new Date().getFullYear()} CloudNOS.<br>Built with Docusaurus.`,
      //copyright: `<img src="/img/glasskube-logo-white.png" class="footer-logo"/><br>Copyright © ${new Date().getFullYear()} CloudNOS.<br>Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    matomo: {
      matomoUrl: 'https://a.glasskube.eu/',
      siteId: '5',
      phpLoader: 'matomo.php',
      jsLoader: 'matomo.js',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
