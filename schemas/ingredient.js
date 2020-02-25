export default {
    name: 'ingredient',
    title: 'Ingredient',
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
        {
            name: 'benefits',
            title: 'Benefits',
            type: 'string'
        },
        {
            name: 'nutrients',
            title: 'Nutrients',
            type: 'array',
            // of: [{ type: 'reference', to: { type: 'nutrient' } }]
            of: [{ type: 'string' }]
        },
        {
            name: 'recipes',
            title: 'Recipes',
            type: 'array',
            // of: [{ type: 'reference', to: { type: 'recipe' } }]
            of: [{ type: 'string' }]
        }
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage'
        },
        prepare(selection) {
            const { author } = selection
            return Object.assign({}, selection, {
                subtitle: author && `by ${author}`
            })
        }
    }
}
