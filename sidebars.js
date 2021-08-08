module.exports = {
  someSidebar: [
    'introduction',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'gettingStarted/info',
        'gettingStarted/entries',
        'gettingStarted/judges',
        'gettingStarted/divisions',
        'gettingStarted/seedChart',
      ],
    },
    {
      type: 'category',
      label: 'Scoring',
      collapsed: true,
      items: ['doc2', 'doc3'],
    },
    {
      type: 'category',
      label: 'Project',
      collapsed: true,
      items: ['mdx', 'styleGuide'],
    },
  ],
};
