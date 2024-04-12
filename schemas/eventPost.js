import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'eventPost',
  title: 'Event Post',
  type: 'document',
  fields: [
    defineField({
        name: 'name',
        title: 'Name',
        description: "We will use this field to keep track of the events you create here on the Sanity Dashboard. \n It's only used here; the Name will not be displayed on whiteowl.xyz, just the Body and Image will.",
        type: 'string',
    }),
    defineField({
      name: 'eventDate',
      title: 'Date',
      type: 'datetime',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
        name: 'body',
        title: 'Body',
        type: 'blockContent',
    }),
  ],
})
