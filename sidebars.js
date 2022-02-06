module.exports = {
  someSidebar: [
    'introduction',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: true,
      items: [
        'gettingStarted/info',
        'gettingStarted/entries',
        'gettingStarted/judges',
        'gettingStarted/divisions',
        'gettingStarted/seedChart',
        'gettingStarted/createSchedule',
      ],
    },
    {
      type: 'category',
      label: 'Tournament',
      collapsed: false,
      items: [
        'tournament/info',
        'tournament/entries',
        'tournament/divisions',
        'tournament/seedChart',
        'tournament/judges',
      ],
    },
    'clubs',
    'teams',
    'schedule',
    'scoring',
    'placements',
    'forms',
    'faq',
    'releaseNotes',
    {
      type: 'category',
      label: 'Project',
      collapsed: true,
      items: ['mdx', 'styleGuide'],
    },
  ],
};
