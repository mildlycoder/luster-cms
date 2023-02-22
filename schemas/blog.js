export default {
    name: 'blog',
    type: 'document',
      title: 'blog',
    fields: [
      {
        name: 'Title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'meta',
        type: 'string',
        title: 'Meta description'
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [
          {
            type: 'block'
          },
          {
            type: 'image',
            fields: [
              {
                type: 'text',
                name: 'alt',
                title: 'Alternative text',
                description: `Some of your visitors cannot see images, 
                  be they blind, color-blind, low-sighted; 
                  alternative text is of great help for those 
                  people that can rely on it to have a good idea of 
                  what\'s on your page.`,
              }
            ]
          }
        ]
      },
      {
        name: 'Date',
        type: 'datetime',
        title: 'Created at',
        options: {
            dateFormat: 'YYYY-MM-DD',
            timeFormat: 'HH:mm',
            timeStep: 15,
            calendarTodayLabel: 'Today'
          }
      },

      {
        title: 'Blog poster',
        name: 'poster',
        type: 'image',
        options: {
          hotspot: true // <-- Defaults to false
        },
        fields: [
          {
            name: 'caption',
            type: 'string',
            title: 'Caption',
          },
          {
            // Editing this field will be hidden behind an "Edit"-button
            name: 'attribution',
            type: 'string',
            title: 'Attribution',
          }
        ]
      },

      {
        name: 'author',
        type: 'object',
        fields: [
          {
            title: 'Author',
            name: 'Author',
            type: 'reference',
            to: [{type: 'author'}]
          }
        ]
      }
    ]
  }