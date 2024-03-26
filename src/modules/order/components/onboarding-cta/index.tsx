import { Button, Container, Text } from "@medusajs/ui"

const OnboardingCta = ({ orderId }: { orderId: string }) => {
  const resetOnboarding = () => {
    window.sessionStorage.setItem("onboarding", "false")
  }

  return (
    <Container className="max-w-4xl h-full bg-ui-bg-subtle w-full">
      <div className="flex flex-col gap-y-4 center p-4 md:items-center">
        <Text className="text-ui-fg-base text-xl">
          سفارش ازمایشی شما با موفقیت ایجاد شد!🎉
        </Text>
        <Text className="text-ui-fg-subtle text-small-regular">
          اکنون می توانید تنظیم فروشگاه خود را در مدیریت کامل کنید.
        </Text>
        <a
          href={`http://localhost:7001/a/orders/${orderId}`}
          onClick={resetOnboarding}
        >
          <Button className="w-full">راه اندازی کامل در مدیریت</Button>
        </a>
      </div>
    </Container>
  )
}

export default OnboardingCta
