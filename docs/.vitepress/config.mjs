export default {
  title: 'Aviation ISMS Guide',
  description: 'Practical Part-IS summary for aviation software makers',
  base: '/aviation-isms-guide/',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/' },
      { text: 'Checklist', link: '/checklist' },
      { text: 'Controls', link: '/controls' }
    ],
    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'What this is', link: '/' },
          { text: 'Practical checklist', link: '/checklist' },
          { text: 'Architecture & controls', link: '/controls' }
        ]
      }
    ],
    search: { provider: 'local' }
  }
}
