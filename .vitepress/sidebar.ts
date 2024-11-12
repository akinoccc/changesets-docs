export function sidebarGuide() {
  return [
    {
      text: 'Intro',
      base: '/guide/intro/',
      items: [
        { text: 'What are Changesets', link: 'what-are-changesets' },
        { text: 'Concepts', link: 'concepts' },
        { text: 'Getting Stared', link: 'getting-started' },
      ],
    },
    {
      text: 'Usage',
      base: '/guide/basic/',
      items: [
        { text: 'Adding a Changesets', link: 'adding-a-changeset' },
        { text: 'Automating Changesets', link: 'automating-changesets' },
        { text: 'Checking for Changesets', link: 'checking-for-changesets' },
        { text: 'Configuration', link: 'configuration' },
      ]
    },
    {
      text: 'Advance',
      base: '/guide/advance/',
      items: [
        { text: 'Fixed Packages', link: 'fixed-packages' },
        { text: 'Linked Packages', link: 'linked-packages' },
        { text: 'Modifying Changelog Format', link: 'modifying-changelog-format' },
        { text: 'Pre Releases', link: 'pre-releases' },
        { text: 'Snapshot Releases', link: 'snapshot-releases' },
      ]
    },
    {
      text: 'Api Reference',
      base: '/guide/api/',
      items: [
        { text: 'CLI', link: 'cli' }
      ]
    }
  ]
}