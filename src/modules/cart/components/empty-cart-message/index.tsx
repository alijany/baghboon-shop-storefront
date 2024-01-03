import { Heading, Text } from "@medusajs/ui"
import UnderlineLink from "@modules/common/components/interactive-link"

const EmptyCartMessage = () => {
  return (
    <div className="py-48 flex flex-col justify-center items-start">
      <Heading
        level="h1"
        className="flex flex-row text-3xl-regular gap-x-2 items-baseline"
      >
        سبد خرید
      </Heading>
      <Text className="text-base-regular mt-4 mb-6 max-w-[32rem]">
        چیزی در سبد خرید ندارید. برای مشاهده محصولات روی لینک زید کلیک کنید
      </Text>
      <div>
        <UnderlineLink href="/store">مشاهده محصولات</UnderlineLink>
      </div>
    </div>
  )
}

export default EmptyCartMessage
