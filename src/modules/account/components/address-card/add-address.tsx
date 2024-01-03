import { medusaClient } from "@lib/config"
import { useAccount } from "@lib/context/account-context"
import useToggleState from "@lib/hooks/use-toggle-state"
import CountrySelect from "@modules/checkout/components/country-select"
import { Button, Heading } from "@medusajs/ui"
import Input from "@modules/common/components/input"
import Modal from "@modules/common/components/modal"
import { Plus } from "@medusajs/icons"
import { Spinner } from "@medusajs/icons"
import React, { useState } from "react"
import { useForm } from "react-hook-form"

type FormValues = {
  first_name: string
  last_name: string
  city: string
  country_code: string
  postal_code: string
  province?: string
  address_1: string
  address_2?: string
  phone?: string
  company?: string
}

const AddAddress: React.FC = () => {
  const { state, open, close } = useToggleState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | undefined>(undefined)

  const { refetchCustomer } = useAccount()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>()

  const handleClose = () => {
    reset({
      first_name: "",
      last_name: "",
      city: "",
      country_code: "",
      postal_code: "",
      address_1: "",
      address_2: "",
      company: "",
      phone: "",
      province: "",
    })
    close()
  }

  const submit = handleSubmit(async (data: FormValues) => {
    setSubmitting(true)
    setError(undefined)

    const payload = {
      first_name: data.first_name,
      last_name: data.last_name,
      company: data.company || "",
      address_1: data.address_1,
      address_2: data.address_2 || "",
      city: data.city,
      country_code: data.country_code,
      province: data.province || "",
      postal_code: data.postal_code,
      phone: data.phone || "",
      metadata: {},
    }

    medusaClient.customers.addresses
      .addAddress({ address: payload })
      .then(() => {
        setSubmitting(false)
        refetchCustomer()
        handleClose()
      })
      .catch(() => {
        setSubmitting(false)
        setError("افزودن آدرس با خطا مواجه شد، لطفاً دوباره تلاش کنید")
      })
  })

  return (
    <>
      <button
        className="border border-ui-border-base rounded-rounded p-5 min-h-[220px] h-full w-full flex flex-col justify-between"
        onClick={open}
      >
        <span className="text-base-semi">آدرس جدید</span>
        <Plus />
      </button>

      <Modal isOpen={state} close={handleClose}>
        <Modal.Title>
          <Heading className="mb-2">افزودن آدرس</Heading>
        </Modal.Title>
        <Modal.Body>
          <div className="flex flex-col gap-y-2">
            <div className="grid grid-cols-2 gap-x-2">
              <Input
                label="نام"
                {...register("first_name", {
                  required: "وارد کردن نام الزامی است",
                })}
                required
                errors={errors}
                autoComplete="given-name"
              />
              <Input
                label="نام خانوادگی"
                {...register("last_name", {
                  required: "وارد کردن نام خوانوادگی الزامی است",
                })}
                required
                errors={errors}
                autoComplete="family-name"
              />
            </div>
            <Input label="Company" {...register("company")} errors={errors} />
            <Input
              label="آدرس"
              {...register("address_1", {
                required: "وارد کردن آدرس لازم است",
              })}
              required
              errors={errors}
              autoComplete="address-line1"
            />
            <Input
              label="پلاک"
              {...register("address_2")}
              errors={errors}
              autoComplete="address-line2"
            />
            <div className="grid grid-cols-[144px_1fr] gap-x-2">
              <Input
                label="کد پستی"
                {...register("postal_code", {
                  required: " وارد کردن کد پستی الزامی است ",
                })}
                required
                errors={errors}
                autoComplete="postal-code"
              />
              <Input
                label="شهر"
                {...register("city", {
                  required: "وارد کردن شهر الزامی است",
                })}
                errors={errors}
                required
                autoComplete="locality"
              />
            </div>
            <Input
              label="استان / شهر"
              {...register("province")}
              errors={errors}
              autoComplete="address-level1"
            />
            <CountrySelect
              {...register("country_code", { required: true })}
              autoComplete="country"
            />
            <Input
              label="شماره تماس"
              {...register("phone")}
              errors={errors}
              autoComplete="phone"
            />
          </div>
          {error && (
            <div className="text-rose-500 text-small-regular py-2">{error}</div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <div className="flex gap-3 mt-4">
            <Button
              variant="secondary"
              onClick={handleClose}
              disabled={submitting}
            >
              لغو
            </Button>
            <Button className="min-h-0" onClick={submit} isLoading={submitting}>
              ذخیره
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddAddress
