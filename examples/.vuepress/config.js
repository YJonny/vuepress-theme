module.exports = {
  title: '二营长',
  description: '是我的意大利炮',
  base: '/',
  dest: 'dist/',
  theme: require.resolve('../../'),
  themeConfig: {
    defaultTheme: { dark: [19, 6] },
    showThemeButton: false,
    cover: '/cover.jpg',
    // logo: '/logo.png',
    search: true,
    backgroundImage: false,
    pageGroup: 5,
    postTime: {
      createTime: 'Create Time',
      lastUpdated: 'Last Updated',
      options: {
        dateStyle: 'full',
        timeStyle: 'short',
        hour12: false,
        weekday: 'long'
      }
    },
    nav: [
      { text: '主页', link: '/' },
      { text: '博客', link: '/posts/' },
      { text: '档案', link: '/doc/' },
      { text: '标签', link: '/tag/' },
      { text: '分类', link: '/category/' },
      { text: '关于我', link: '/about/' }
    ],
    footer: [
      { text: 'Github', link: 'https://github.com/YJonny' }
    ]
  },
  // postcss: {
  //   plugins: [
  //     require('css-prefers-color-scheme/postcss'),
  //     require('autoprefixer')
  //   ]
  // }
  plugins: [
    // 你可以多次使用这个插件
    [
      'vuepress-plugin-container',
      {
        type: 'right',
        defaultTitle: '',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'theorem',
        before: info => `<div class="theorem"><p class="title">${info}</p>`,
        after: '</div>',
      },
    ],

    // 这是 VuePress 默认主题使用这个插件的方式
    [
      'vuepress-plugin-container',
      {
        type: 'tip',
        defaultTitle: {
          '/': '提示',
          '/zh/': '提示',
        },
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'warning',
        defaultTitle: {
          '/': '警告',
          '/zh/': '警告',
        },
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'danger',
        defaultTitle: {
          '/': '危险',
          '/zh/': '危险',
        },
      },
    ],
  ]
}
