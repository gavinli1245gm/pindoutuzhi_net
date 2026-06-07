import type { SiteConfig } from './src/types/config';

/**
 * 🔧 站点唯一配置文件
 * 所有页面内容、SEO、模块开关、统计代码等均在此处配置
 * 模板代码不写死任何内容，一切通过本文件控制
 */
export const siteConfig: SiteConfig = {
  site: {
    name: '拼豆图纸',
    url: 'https://pindoutuzhi.net',
    locale: 'zh-CN',
    language: 'zh',
    logo: '/logo.png',
  },

  seo: {
    title: '拼豆图纸 - 整理收集全网的免费拼豆图纸素材',
    description:
      '拼豆图纸提供高高颜值的拼豆模板与图纸合集，支持按标签浏览、拼豆图纸免费下载，包含了三角洲，小狗，十二星座，甜品等又小又可爱的100多个拼豆图纸',
    ogImage: '/og-image.png',
  },

  nav: [
    { label: '首页', href: '/' },
    { label: '关于', href: '/about' },
  ],

  list: {
    title: '拼豆图纸',
    description: '用心分享高颜值的各种ip拼豆图纸素材',
    postsPerPage: 12,
    defaultAuthor: '拼豆图纸',
  },

  about: {
    title: '关于我们',
    description: '知晓我们做拼豆图纸的初衷和内容范畴',
    content:
      '拼豆图纸专注于整理高质量拼豆模板与图纸内容，帮助用户在制作前快速预览、收藏和下载参考图。',
    sections: [
      {
        title: '站点定位',
        text: '我们专注于图纸内容展示，不提供在线绘制工具。',
      },
      {
        title: '内容结构',
        text: '图纸内容按标签分类，支持分页浏览与详情阅读。',
      },
      {
        title: '使用建议',
        text: '建议在详情页查看大图轮播后，再下载原图进行打印或对照制作。',
      },
    ],
  },

  schema: {
    type: 'WebPage',
    applicationCategory: 'Reference',
    operatingSystem: 'All',
    offers: {
      price: '0',
      priceCurrency: 'CNY',
    },
  },

  analytics: {
    baidu: '',
    google: '',
    adsense: '',
  },

  sitemap: {
    changefreq: 'weekly',
    priority: 1.0,
  },

  robots: {
    rules: [
      {
        userAgent: '*',
        disallow: ['/api/', '/admin/'],
      },
    ],
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} 拼豆图纸`,
    icp: '',
    columns: [
      {
        links: [
          { label: '关于我们', url: '/about' },
          { label: '隐私政策', url: '/privacy' },
          { label: '使用条款', url: '/terms' },
        ],
      },
    ],
  },
};
