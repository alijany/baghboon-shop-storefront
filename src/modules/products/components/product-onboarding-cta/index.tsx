import { Button, Container, Text } from "@medusajs/ui"

const ProductOnboardingCta = () => {
  return (
    <Container className="max-w-4xl h-full bg-ui-bg-subtle w-full p-8">
      <div className="flex flex-col gap-y-4 center">
        <Text className="text-ui-fg-base text-xl">
          محصول آزمایشی شما با موفقیت ایجاد شد!🎉
        </Text>
        <Text className="text-ui-fg-subtle text-small-regular">
          اکنون می توانید تنظیم فروشگاه خود را در مدیریت انجام دهید.
        </Text>
        <a href="http://localhost:7001/a/orders?onboarding_step=create_order_nextjs">
          <Button className="w-full">تنظیمات بیشتر را در مدیریت انجام دهید</Button>
        </a>
      </div>
    </Container>
  )
}

export default ProductOnboardingCta
