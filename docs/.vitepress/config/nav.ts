interface NavbarItem {
  text: string
  link?: string
  children?: Array<NavbarItem>
}

const nav: Array<NavbarItem> = [
  { text: '指南', link: '/guide/' },
  { text: '参考', link: '/reference/' },
  { text: '更新日志', link: 'https://github.com/kyoumeia/configuration-system-docs' },
]

export default nav