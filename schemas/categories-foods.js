export default {
    name: 'categories-foods',
    title: 'Categories-foods',
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
        }
    ]
}
