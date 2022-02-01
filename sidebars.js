module.exports = {
  someSidebar: [
    'introduction',
    'releaseNotes',
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
    'tournament',
    'seedChart',
    'clubs',
    'teams',
    'schedule',
    'scoring',
    'placements',
    'forms',
    {
      type: 'category',
      label: 'Project',
      collapsed: true,
      items: ['mdx', 'styleGuide'],
    },
  ],
};
