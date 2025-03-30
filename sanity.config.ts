// ./sanity.config.ts
import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { presentationTool } from "sanity/presentation"
import { schema } from "./src/sanity/schemaTypes"
import { resolve } from "./src/sanity/services/resolver"

export default defineConfig({
	title: "Netlify Sanity",
	projectId: import.meta.env.PUBLIC_SANITY_STUDIO_PROJECT_ID,
	dataset: import.meta.env.PUBLIC_SANITY_STUDIO_DATASET,
	plugins: [
		structureTool(),
		presentationTool({
			previewUrl: location.origin,
			resolve,
		}),
	],
	schema,
})
