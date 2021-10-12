interface SideBarItem {
  text: string
  link?: string
  children?: Array<SideBarItem>
}

const guideSideBar: Array<SideBarItem> = [
  {
    text: '一：配置路由', children: [
      { text: '配置路由child1', link: '/guide/guide1' },
      { text: '配置路由child2', link: '/guide/guide2' },
    ]
  },
  {
    text: '二：配置字段', children: [
      { text: '配置字段child1', link: '/guide/guide1' },
      { text: '配置字段child2', link: '/guide/guide2' },
    ]
  }
]

const referenceSideBar: Array<SideBarItem> = [
  { text: '指南一', link: '/reference/', children: [{ text: '指南一child', link: '/reference/reference1' }] }
]

export default {
  '/guide/': guideSideBar,
  '/reference/': referenceSideBar
}