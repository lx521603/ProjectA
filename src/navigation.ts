import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: '主页', href: getPermalink('/'), links: [] },
    { text: '博客', href: getBlogPermalink(), links: [] },
    { text: '分类', href: getPermalink('categories', 'category'), links: [] },
    { text: '标签', href: getPermalink('tags', 'tag'), links: [] },
    { text: '关于', href: getPermalink('/about'), links: [] },
    { text: '联系', href: getPermalink('/contact'), links: [] },
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