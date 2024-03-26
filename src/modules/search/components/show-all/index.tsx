import { useModal } from "@lib/context/modal-context"
import { Container, Text } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"
import { useHits, useSearchBox } from "react-instantsearch-hooks-web"

const ShowAll = ({ close }: { close: () => void }) => {
  const { hits } = useHits()
  const { query } = useSearchBox()

  if (query === "") return null
  if (hits.length > 0 && hits.length <= 6) return null

  if (hits.length === 0) {
    return (
      <Container className="flex gap-2 justify-center h-fit py-2">
        <Text>نتیجه ای پیدا نشد.</Text>
      </Container>
    )
  }

  return (
    <Container className="flex flex-col small:flex-row gap-2 justify-center items-center h-fit py-4 small:py-2">
      <Text>6 نتیجه اول را نشان بده.</Text>
      <InteractiveLink href={`/search/${query}`} onClick={close}>
        نمایش همه
      </InteractiveLink>
    </Container>
  )
}

export default ShowAll
