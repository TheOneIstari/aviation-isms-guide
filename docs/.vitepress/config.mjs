export default {
  title: 'Aviation ISMS Guide',
  description: 'Practical Part-IS summary for aviation software makers',
  base: '/aviation-isms-guide/',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/' },
      { text: 'Part-IS in practice', link: '/expectations' },
      { text: 'Checklist', link: '/checklist' },
      { text: 'Controls', link: '/controls' }
    ],
    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'Start here', link: '/' },
          { text: 'What Part-IS expects in practice', link: '/expectations' },
          { text: 'Practical checklist', link: '/checklist' },
          { text: 'Architecture & controls', link: '/controls' }
        ]
      }
    ],
    search: { provider: 'local' }
  }
}
