export default {
    name: 'author',
    type: 'document',
      title: 'author',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Author name'
      },

      {
        title: 'Author image',
        name: 'authorImg',
        type: 'image',
      }
    ]
  }