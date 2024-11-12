import { DefaultTheme, defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  title: 'Changesets',
  head: [
    ['link', { rel: 'icon', href: '/logo.svg ' }],
  ],

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  themeConfig: {
    logo: '/logo.svg',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/changesets/changesets' }
    ],
  } as DefaultTheme.Config,
})