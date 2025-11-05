import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '主页',
      href: getPermalink('/'),
    },
    {
      text: '博客',
      href: getBlogPermalink(),
    },
    {
      text: '分类',
      href: getPermalink('categories', 'category'),
    },
    {
      text: '标签',
      href: getPermalink('tags', 'tag'),
    },
    {
      text: '关于',
      href: getPermalink('/about'),
    },
    {
      text: '联系',
      href: getPermalink('/contact'),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/arthelokyo/astrowind' },
  ],
  footNote: `
    © ${new Date().getFullYear()} · Made with ❤️ using <a class="text-blue-600 underline dark:text-muted" href="https://astro.build">Astro</a> and <a class="text-blue-600 underline dark:text-muted" href="https://github.com/onwidget/astrowind">Astrowind</a>.
  `,
};