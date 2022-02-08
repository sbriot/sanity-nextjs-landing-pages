export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '6202cd36dbcc4f5d6a4d3eeb',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-8xa2omct',
                  apiId: '795f5c5f-19f2-4842-b946-d902b0ae5012'
                },
                {
                  buildHookId: '6202cd36d3934d5efd18d2c0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ysno26nj',
                  apiId: 'da8da770-05cf-492e-a975-f17c0dd7621e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sbriot/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ysno26nj.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
