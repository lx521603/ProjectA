import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: '主页', href: getPermalink('/'), links: [] },
    { text: '博客', href: getBlogPermalink(), links: [] },
    { text: '分类', href: getPermalink('tutorials', 'category'), },
    { text: '标签', href: getPermalink('astro', 'tag'), },
    { text: '关于', href: getPermalink('/about'), links: [] },
    { text: '联系', href: getPermalink('/contact'), links: [] },
  ],
  actions: [], // 不需要按钮
};

export const footerData = {
  links: [], // 不需要产品/平台等链接
  secondaryLinks: [], // 不需要 Terms/Privacy
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/arthelokyo/astrowind' },
  ],
  footNote: `<div class="text-center">Next.yt © ${new Date().getFullYear()}</div>`,
};