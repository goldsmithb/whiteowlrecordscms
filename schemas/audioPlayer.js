import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'audioPlayer',
    title: 'Audio Player',
    type: 'object',
    description: 'Add an optional audio player:',
    fields: [
        defineField({
            name: "hello",
            title: 'test',
            type: 'string',
        })
    ]
    // fields: [
        // defineField({
        //     name: 'hasAudioPlayer',
        //     title: 'Include an optional audio player',
        //     type: 'string',
        //     options: {
        //         list: [
        //           {title: 'SoundCloud', value: 'SoundCloud'},
        //           {title: 'Bandcamp', value: 'Bandcamp'}
        //         ],
        //     },
        // }),
        // defineField({
        //     name: 'soundCloudURL', 
        //     type: 'string', 
        //     title: 'Sound Cloud URL:',
        //     description: 'Simply paste the share URL of the track or album below.',
        //     hidden: ({document}) => {
        //         console.log(document)
        //         return document?.hasAudioPlayer !== "SoundCloud"}
        // }),
        // defineField({
        //     name: 'bandCampMobile', 
        //     type: 'string', 
        //     title: 'Bandcamp embedded player (mobile view):',
        //     description: 'Navigate to the track or album you would like a player for, and click on "Share / Embed". Select the verticle, condensed option. Paste the "Embed code" below (it will be an HTML iframe element).',
        //     hidden: ({document}) => document?.hasAudioPlayer !== "Bandcamp",
        // }),
        // defineField({
        //     name: 'bandCampWeb', 
        //     type: 'string', 
        //     title: 'Bandcamp embedded player (desktop view):',
        //     description: 'Repeat the steps for a mobile player, but select the large, horizontal option. Paste the "Embed code" below (it will be an HTML iframe element).',
        //     hidden: ({document}) => document?.hasAudioPlayer !== "Bandcamp",
        // }),
    // ],
})