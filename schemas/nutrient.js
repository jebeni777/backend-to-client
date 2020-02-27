export default {
  name: 'nutrient',
  title: 'Nutrient',
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
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'imageAltText',
      title: 'ImageAltText',
      type: 'string'
    },
    // {
    //   name: 'nutrient',
    //   title: 'Nutrient',
    //   type: 'array',
    //   of: [{ type: 'reference', to: { type: 'categories-ailments' } }]
    // },
    {
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      // of: [{ type: 'reference', to: { type: 'recipe' } }]
      of: [{ type: 'string' }]
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    }
  ],

  preview: {
    select: {
      title: 'title',
      author: 'recipe.name',
      media: 'mainImage'
    },
    prepare(selection) {
      const { recipe } = selection
      return Object.assign({}, selection, {
        subtitle: recipe && `by ${recipe}`
      })
    }
  }
}
