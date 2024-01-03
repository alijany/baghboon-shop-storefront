import { CheckoutFormValues } from "@lib/context/checkout-context"
import { emailRegex } from "@lib/util/regex"
import ConnectForm from "@modules/common/components/connect-form"
import Input from "@modules/common/components/input"
import { useMeCustomer } from "medusa-react"
import AddressSelect from "../address-select"
import CountrySelect from "../country-select"
import Checkbox from "@modules/common/components/checkbox"
import { Container } from "@medusajs/ui"

const ShippingAddress = ({
  checked,
  onChange,
}: {
  checked: boolean
  onChange: () => void
}) => {
  const { customer } = useMeCustomer()

  return (
    <div>
      {customer && (customer.shipping_addresses?.length || 0) > 0 && (
        <Container className="mb-6 flex flex-col gap-y-4 p-5">
          <p className="text-small-regular">
            {`سلام ${customer.first_name}, آیا می خواهید از یکی از آدرس های ذخیره شده خود استفاده کنید?`}
          </p>
          <AddressSelect addresses={customer.shipping_addresses} />
        </Container>
      )}
      <ConnectForm<CheckoutFormValues>>
        {({ register, formState: { errors, touchedFields } }) => (
          <>
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="نام"
                {...register("shipping_address.first_name", {
                  required: "نام اجباری است",
                })}
                autoComplete="given-name"
                errors={errors}
                touched={touchedFields}
                required
              />
              <Input
                label="نام خانوادگی"
                {...register("shipping_address.last_name", {
                  required: "نام خانوادگی اجباری است",
                })}
                autoComplete="family-name"
                errors={errors}
                touched={touchedFields}
                required
              />
              <Input
                label="آدرس"
                {...register("shipping_address.address_1", {
                  required: "آدرس اجباری است",
                })}
                autoComplete="address-line1"
                errors={errors}
                touched={touchedFields}
                required
              />
              <Input
                label="شرکت"
                {...register("shipping_address.company")}
                autoComplete="organization"
                errors={errors}
                touched={touchedFields}
              />
              <Input
                label="کد پستی"
                {...register("shipping_address.postal_code", {
                  required: "کد پستی اجباری است",
                })}
                autoComplete="postal-code"
                errors={errors}
                touched={touchedFields}
                required
              />
              <Input
                label="شهر"
                {...register("shipping_address.city", {
                  required: "شهر اچباری است",
                })}
                autoComplete="address-level2"
                errors={errors}
                touched={touchedFields}
                required
              />
              <CountrySelect
                {...register("shipping_address.country_code", {
                  required: "کشور اجباری است",
                })}
                autoComplete="country"
                errors={errors}
                touched={touchedFields}
                required
              />
              <Input
                label="شهر / استان"
                {...register("shipping_address.province")}
                autoComplete="address-level1"
                errors={errors}
                touched={touchedFields}
              />
            </div>
            <div className="my-8">
              <Checkbox
                label="مشابه آدرس صورت حساب"
                checked={checked}
                onChange={onChange}
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <Input
                label="پست الکترونیک"
                {...register("email", {
                  required: "پست الکترونیک اجباری است",
                  pattern: emailRegex,
                })}
                autoComplete="email"
                errors={errors}
                touched={touchedFields}
                required
              />
              <Input
                label="شماره تماس"
                {...register("shipping_address.phone")}
                autoComplete="tel"
                errors={errors}
                touched={touchedFields}
              />
            </div>
          </>
        )}
      </ConnectForm>
    </div>
  )
}

export default ShippingAddress
