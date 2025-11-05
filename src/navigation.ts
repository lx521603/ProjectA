import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: '主页', href: getPermalink('/'), links: [] },
    { text: '博客', href: getBlogPermalink(), links: [] },
    { text: '分类', href: '/category', links: [] }, // 指向分类总览页
    { text: '标签', href: '/tag', links: [] },      // 指向标签总览页
    { text: '关于', href: getPermalink('/about'), links: [] },
    { text: '联系', href: getPermalink('/contact'), links: [] },
  ],
  actions: [], // 如果不需要按钮就留空
};

export const footerData = {
  links: [], // 不需要产品/平台/公司等
  secondaryLinks: [], // 如果不需要 Terms/Privacy 可以留空
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