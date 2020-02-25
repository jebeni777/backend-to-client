export default {
  name: 'categories-ailments',
  title: 'Categories-ailments',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image'
    },
    {
      name: 'imageAltText',
      title: 'Image alt text',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    },
    {
      name: 'nutrients',
      title: 'Nutrients',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'foods',
      title: 'Foods',
      type: 'array',
      of: [{ type: 'string' }]
    }
  ]
}
