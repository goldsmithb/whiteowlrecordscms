import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
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
    //   validation: Rule => Rule.required(),
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
    // defineField({
    //     name: 'audioPlayerA',
    //     title: 'Include an Audio Player',
    //     type: 'reference',
    //     to: {type: 'audioPlayer'},
    // })
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
        name: 'soundCloudURL', 
        type: 'string', 
        title: 'Sound Cloud URL:',
        description: 'Paste the URL of the track or album below. A correctly sized player will be made automatically.',
        hidden: ({document}) => document?.hasAudioPlayer !== "SoundCloud",
    }),
    defineField({
        name: 'bandCampIFrameBrowser', 
        type: 'string', 
        title: 'MOBILE Bandcamp embedded player:',
        description: 'Navigate to the track or album, click on "Share / Embed", and then "Embed this album." Select the style of player you would like to display on the MOBILE website. Copy and Paste the "Embed code" below (it will be an HTML iframe element: <iframe...> </iframe>).',
        hidden: ({document}) => document?.hasAudioPlayer !== "Bandcamp",
    }),
    defineField({
      name: 'bandCampIFrameMobile', 
      type: 'string', 
      title: 'BROWSER Bandcamp embedded player:',
        description: 'Navigate to the track or album and click on "Share / Embed". Select the style of player you would like to display on the BROWSER website. Copy and Paste the "Embed code" below (it will be an HTML iframe element: <iframe...> </iframe>).',
      hidden: ({document}) => document?.hasAudioPlayer !== "Bandcamp",
  }),
    // defineField({
    //     name: 'bandCampWeb', 
    //     type: 'string', 
    //     title: 'Bandcamp embedded player (desktop view):',
    //     description: 'Repeat the steps for a mobile player, but select the large, horizontal option. Paste the "Embed code" below (it will be an HTML iframe element).',
    //     hidden: ({document}) => document?.hasAudioPlayer !== "Bandcamp",
    // }),
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
