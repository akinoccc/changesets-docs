import { DefaultTheme, defineConfig } from 'vitepress'

export default defineConfig({
  base: '/changesets-docs/',
  title: 'Changesets',
  head: [
    ['link', { rel: 'icon', href: '/logo.svg ' }],
  ],

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  srcDir: 'src',

  themeConfig: {
    logo: '/logo.svg',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/changesets/changesets' }
    ],
  } as DefaultTheme.Config,
})