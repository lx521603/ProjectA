import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '首页',
      href: getPermalink('/'),
    },
    {
      text: '博客',
      href: getBlogPermalink(),
    },
    {
      text: '文章',
      href: getPermalink('markdown-elements-demo-post', 'post'),
    },
    {
      text: '分类',
      href: getPermalink('tutorials', 'category'),
    },
    {
      text: '标签',
      href: getPermalink('astro', 'tag'),
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
  actions: [
    {
      text: '联系',
      href: '/contact',
      target: '_blank',
    },
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    {
      ariaLabel: 'Github',
      icon: 'tabler:brand-github',
      href: 'https://github.com/arthelokyo/astrowind',
    },
  ],
  footNote: `
Made by <a class="text-blue-600 underline dark:text-muted" href="https://91.pt">老李</a> · All rights reserved.
  `,
};