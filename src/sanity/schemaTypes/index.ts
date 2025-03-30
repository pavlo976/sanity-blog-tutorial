import type { SchemaTypeDefinition } from "sanity"
import { authorType } from "./author"
import { blockContentType } from "./blockContent"
import { categoryType } from "./category"
import { postType } from "./post"

export const schema: { types: Array<SchemaTypeDefinition> } = {
	types: [authorType, blockContentType, categoryType, postType],
}
