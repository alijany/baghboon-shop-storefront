import { Button, Heading, Text } from "@medusajs/ui"
import Link from "next/link"

const SignInPrompt = () => {
  return (
    <div className="bg-white flex items-center justify-between">
      <div>
        <Heading level="h2" className="txt-xlarge">
          حساب کاربری دارید؟
        </Heading>
        <Text className="txt-medium text-ui-fg-subtle mt-2">
          برای تجربه بهتر وارد شوید.
        </Text>
      </div>
      <div>
        <Link href="/account/login">
          <Button variant="secondary" className="h-10">
            ورود
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default SignInPrompt
