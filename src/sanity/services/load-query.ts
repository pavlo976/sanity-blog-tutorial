import { type QueryParams } from "sanity"
import { sanityClient } from "sanity:client"

type LoadQuery = {
	query: string
	params?: QueryParams
}
const visualEditingEnabled = import.meta.env.PUBLIC_SANITY_VISUAL_EDITING_ENABLED === "true"
console.log(visualEditingEnabled)
const token = import.meta.env.SANITY_API_READ_TOKEN

export async function loadQuery<QueryResponse>({ query, params }: LoadQuery) {
	if (visualEditingEnabled && !token) {
		throw new Error("The `SANITY_API_READ_TOKEN` environment variable is required during Visual Editing.")
	}

	const perspective = visualEditingEnabled ? "previewDrafts" : "published"
	const { result, resultSourceMap } = await sanityClient.fetch<QueryResponse>(query, params ?? {}, {
		filterResponse: false,
		perspective,
		resultSourceMap: visualEditingEnabled ? "withKeyArraySelector" : false,
		stega: visualEditingEnabled,
		// ...(visualEditingEnabled ? { token } : {}),
		token,
	})

	// const xd = { ...(visualEditingEnabled ? { token } : {}) }

	// console.log(xd)

	return { data: result, sourceMap: resultSourceMap, perspective }
}
