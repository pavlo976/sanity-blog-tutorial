import { defineType, defineField } from "sanity"

export const authorType = defineType({
	name: "author",
	title: "Author",
	type: "document",
	fields: [
		defineField({ name: "name", type: "string" }),
		defineField({ name: "slug", type: "slug", options: { source: "name", maxLength: 96 } }),
		defineField({
			type: "image",
			name: "image",
			options: { hotspot: true },
			fields: [{ name: "alt", type: "string", title: "Alternative Text" }],
		}),
		defineField({
			name: "bio",
			type: "array",
			of: [{ type: "block", styles: [{ title: "Normal", value: "normal" }], lists: [] }],
		}),
	],
	preview: {
		select: {
			title: "name",
			media: "image",
		},
	},
})
