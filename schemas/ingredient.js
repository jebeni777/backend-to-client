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
            name: 'category',
            title: 'Food Category',
            type: 'string',
            options: {
                list: [
                    { title: 'vegetable', value: 'vegetable' },
                    { title: 'dairy', value: 'dairy' },
                    { title: 'fruit', value: 'fruit' },
                    { title: 'meat-n-eggs', value: 'meat-n-eggs' },
                    { title: 'grains', value: 'grains' },
                    { title: 'sugar', value: 'sugar' },
                ],
                layout: 'dropdown'
            }
            // to: { type: 'categories-foods' }
        },
        {
            name: 'body',
            title: 'Benefits',
            type: 'blockContent'
        },
        {
            name: 'nutrients',
            title: 'Nutrients',
            type: 'array',
            // of: [{ type: 'reference', to: { type: 'nutrient' } }]
            of: [{ type: 'string' }]
        },
        {
            name: 'uses',
            title: 'Ways to use',
            type: 'array',
            // of: [{ type: 'reference', to: { type: 'uses' } }]
            of: [{ type: 'string' }]
        }
    ],

    preview: {
        select: {
            title: 'title',
            // author: 'author.name',
            media: 'mainImage'
        },
        prepare(selection) {
            const { uses } = selection
            return Object.assign({}, selection, {
                subtitle: uses && `by ${uses}`
            })
        }
    }
}
