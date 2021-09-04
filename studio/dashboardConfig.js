export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6132cc74f37407f3f1fd289a',
                  title: 'Sanity Studio',
                  name: 'cms-studio-ptfkz5u6',
                  apiId: '8f8c99ff-8484-40ec-941b-efc0d45d25ea'
                },
                {
                  buildHookId: '6132cc74fba0d1ff5dee1ef4',
                  title: 'Blog Website',
                  name: 'cms-web-q699j2qu',
                  apiId: 'f3b20c16-0cbd-45c2-8370-d64357c60b2b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alitored/cms',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://cms-web-q699j2qu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
