import nav from './config/nav'
import sidebar from './config/sideBar'

export default {
  base: '/',
  title: '配置系统说明文档',
  description: 'Configuration System Document',
  head: [
    ['link', { rel: 'icon', href: '/images/logo.png' }]
  ],
  themeConfig: {
    repo: '/kyoumeia/configuration-system-docs',
    docsDir: 'docs',
    docsBranch: 'master',
    logo: '/images/logo.png',

    // nav
    nav,

    // sideBar
    sidebar,

    // page meta
    editLink: true,
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新'
  }
}