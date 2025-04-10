import { defineLocations } from "sanity/presentation"

import type { PresentationPluginOptions } from "sanity/presentation"

export const resolve: PresentationPluginOptions["resolve"] = {
	locations: {
		post: defineLocations({
			select: {
				title: "title",
				slug: "slug.current",
			},
			resolve: document => {
				return {
					locations: [
						{
							title: document?.title || "Untitled",
							href: `/post/${document?.slug}`,
						},
					],
				}
			},
		}),
	},
}
