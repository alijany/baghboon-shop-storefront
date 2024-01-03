import { medusaClient } from "@lib/config"
import { LOGIN_VIEW, useAccount } from "@lib/context/account-context"
import { Button } from "@medusajs/ui"
import Input from "@modules/common/components/input"
import { Spinner } from "@medusajs/icons"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"

interface SignInCredentials extends FieldValues {
  email: string
  password: string
}

const Login = () => {
  const { loginView, refetchCustomer } = useAccount()
  const [_, setCurrentView] = loginView
  const [authError, setAuthError] = useState<string | undefined>(undefined)
  const router = useRouter()

  const handleError = (_e: Error) => {
    setAuthError("Invalid email or password")
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInCredentials>()

  const onSubmit = handleSubmit(async (credentials) => {
    await medusaClient.auth
      .authenticate(credentials)
      .then(() => {
        refetchCustomer()
        router.push("/account")
      })
      .catch(handleError)
  })

  return (
    <div className="max-w-sm w-full flex flex-col items-center">
      {isSubmitting && (
        <div className="z-10 fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center">
          <Spinner />
        </div>
      )}
      <h1 className="text-large-semi uppercase mb-6">خوش آمدید</h1>
      <p className="text-center text-base-regular text-gray-700 mb-8">
        برای تجربه خریدی بهتر لطفا وارد حساب کاربری خود شوید
      </p>
      <form className="w-full" onSubmit={onSubmit}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="ایمیل"
            {...register("email", { required: "وارد کردن ایمیل الزامی است" })}
            autoComplete="email"
            errors={errors}
          />
          <Input
            label="کلمه عبور"
            {...register("password", {
              required: "وارد کردن کلمه عبور الزامی است",
            })}
            type="password"
            autoComplete="current-password"
            errors={errors}
          />
        </div>
        {authError && (
          <div>
            <span className="text-rose-500 w-full text-small-regular">
              کاربری با این مشخصات وجود ندارد
            </span>
          </div>
        )}
        <Button className="mt-6 w-full" size="large">
          ورود
        </Button>
      </form>
      <span className="text-center text-gray-700 text-small-regular mt-6">
        عضو نیستید?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
          className="underline"
        >
          عضویت
        </button>
        .
      </span>
    </div>
  )
}

export default Login
