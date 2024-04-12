import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

const devOnlyPlugins = [visionTool()]

export default defineConfig({
  name: 'default',
  title: 'whiteowlrecordsCMS',

  projectId: '4xbrcs0m',
  dataset: 'production',

  plugins: [
    deskTool(), 
    (process.env.NODE_ENV === "development" ? devOnlyPlugins : []),
    visionTool({
      defaultDataset: "production",
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
console.log(process.env.NODE_ENV)
