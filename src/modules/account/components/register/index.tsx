import { medusaClient } from "@lib/config"
import { LOGIN_VIEW, useAccount } from "@lib/context/account-context"
import { Button } from "@medusajs/ui"
import Input from "@modules/common/components/input"
import { Spinner } from "@medusajs/icons"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"

interface RegisterCredentials extends FieldValues {
  first_name: string
  last_name: string
  email: string
  password: string
  phone?: string
}

const Register = () => {
  const { loginView, refetchCustomer } = useAccount()
  const [_, setCurrentView] = loginView
  const [authError, setAuthError] = useState<string | undefined>(undefined)
  const router = useRouter()

  const handleError = (e: Error) => {
    setAuthError("An error occured. Please try again.")
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterCredentials>()

  const onSubmit = handleSubmit(async (credentials) => {
    await medusaClient.customers
      .create(credentials)
      .then(() => {
        refetchCustomer()
        router.push("/account")
      })
      .catch(handleError)
  })

  return (
    <div className="max-w-sm flex flex-col items-center mt-12">
      {isSubmitting && (
        <div className="z-10 fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center">
          <Spinner />
        </div>
      )}
      <h1 className="text-large-semi uppercase mb-6">
        عضو فروشگاه باغبون شوید
      </h1>
      <p className="text-center text-base-regular text-gray-700 mb-4">
        پروقایل فروشگاه باغبون خود را ایجاد کنید و به یک تجربه خرید پیشرفته
        دسترسی داشته باشید.
      </p>
      <form className="w-full flex flex-col" onSubmit={onSubmit}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="نام"
            {...register("first_name", { required: "نام الزامی است." })}
            autoComplete="given-name"
            errors={errors}
          />
          <Input
            label="نام خانوادگی"
            {...register("last_name", { required: "نام خانوادگی الزامی است." })}
            autoComplete="family-name"
            errors={errors}
          />
          <Input
            label="ایمیل"
            {...register("email", { required: "ایمیل الزامی است" })}
            autoComplete="email"
            errors={errors}
          />
          <Input
            label="تلفن"
            {...register("phone")}
            autoComplete="tel"
            errors={errors}
          />
          <Input
            label="کلمه عبور"
            {...register("password", {
              required: "رمز عبر الزامی است.",
            })}
            type="password"
            autoComplete="new-password"
            errors={errors}
          />
        </div>
        {authError && (
          <div>
            <span className="text-rose-500 w-full text-small-regular">
              مشخصات وارد شده معتبر نیست
            </span>
          </div>
        )}
        <span className="text-center text-gray-700 text-small-regular mt-6">
          با ایجاد حساب کاربری در فروشگاه باغبون با{" "}
          <Link href="/content/privacy-policy" className="underline">
            سیاست حفظ حریم خصوصی
          </Link>{" "}
          و{" "}
          <Link href="/content/terms-of-use" className="underline">
            شرایط استفاده
          </Link>
          موافقت می کنید.
        </span>
        <Button className="mt-6 w-full" size="xlarge">
          عضویت
        </Button>
      </form>
      <span className="text-center text-gray-700 text-small-regular mt-6">
        قبلا عضو شده اید؟{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline"
        >
          ورود
        </button>
        .
      </span>
    </div>
  )
}

export default Register
