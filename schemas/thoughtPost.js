import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'thoughtPost',
  title: 'Thought Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    // defineField({
    //   name: 'slug',
    //   title: 'Slug',
    //   type: 'slug',
    //   options: {
    //     source: 'title',
    //     maxLength: 96,
    //   },
    // }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    // defineField({
    //     name: 'teaser',
    //     title: 'Teaser',
    //     type: 'string',
    //   }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    // defineField({
    //   name: 'categories',
    //   title: 'Categories',
    //   type: 'array',
    //   of: [{type: 'reference', to: {type: 'category'}}],
    // }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
        name: 'hasAudioPlayer',
        title: 'Include an optional audio player',
        type: 'string',
        options: {
            list: [
              {title: 'SoundCloud', value: 'SoundCloud'},
              {title: 'Bandcamp', value: 'Bandcamp'}
            ],
        },
    }),
    defineField({
        name: 'audioPlayerValue',
        type: 'object',
        description: 'Add an optional audio player:',
        hidden: ({document}) => {
            console.log(document)
            return !document?.hasAudioPlayer;},
        fields: [
            {
                name: 'soundCloudURL', 
                type: 'string', 
                title: 'Sound Cloud URL:',
                description: 'Simply paste the share URL of the track or album below.',
                hidden: ({document}) => document?.hasAudioPlayer !== "SoundCloud",
            },
            {
                name: 'bandCampMobile', 
                type: 'string', 
                title: 'Bandcamp embedded player (mobile view):',
                description: 'Navigate to the track or album you would like a player for, and click on "Share / Embed". Select the verticle, condensed option. Paste the "Embed code" below (it will be an HTML iframe element).',
                hidden: ({document}) => document?.hasAudioPlayer !== "Bandcamp",
            },
            {
                name: 'bandCampWeb', 
                type: 'string', 
                title: 'Bandcamp embedded player (desktop view):',
                description: 'Repeat the steps for a mobile player, but select the large, horizontal option. Paste the "Embed code" below (it will be an HTML iframe element).',
                hidden: ({document}) => document?.hasAudioPlayer !== "Bandcamp",
            },
        ],
    })
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
