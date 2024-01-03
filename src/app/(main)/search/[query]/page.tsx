import { Metadata } from "next"
import { search } from "../actions"
import SearchResultsTemplate from "@modules/search/templates/search-results-template"

export const metadata: Metadata = {
  title: "جستجو",
  description: "جستجو میان محصولات.",
}

export default async function StorePage({
  params,
}: {
  params: { query: string }
}) {
  const { query } = params
  const hits = await search(query)

  return <SearchResultsTemplate query={query} hits={hits} />
}
