// @ts-check
import { defineConfig } from "astro/config"

import sanity from "@sanity/astro"
import react from "@astrojs/react"
import { loadEnv } from "vite"
import { format } from "date-fns"

import netlify from "@astrojs/netlify"

import tailwindcss from "@tailwindcss/vite"

const { PUBLIC_SANITY_STUDIO_PROJECT_ID, PUBLIC_SANITY_STUDIO_DATASET } = loadEnv(
	process.env.NODE_ENV,
	process.cwd(),
	""
)

export default defineConfig({
	output: "static",
	integrations: [
		sanity({
			projectId: PUBLIC_SANITY_STUDIO_PROJECT_ID,
			dataset: PUBLIC_SANITY_STUDIO_DATASET,
			useCdn: true,
			studioBasePath: "/admin",
			apiVersion: "2025-03-30",
			stega: {
				studioUrl: "/admin",
			},
		}),
		react(),
	],

	adapter: netlify(),
	vite: {
		plugins: [tailwindcss()],
	},
})
