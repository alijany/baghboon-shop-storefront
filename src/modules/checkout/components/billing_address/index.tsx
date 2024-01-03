import { CheckoutFormValues } from "@lib/context/checkout-context"
import ConnectForm from "@modules/common/components/connect-form"
import Input from "@modules/common/components/input"
import CountrySelect from "../country-select"

const BillingAddress = () => {
  return (
    <ConnectForm<CheckoutFormValues>>
      {({ register, formState: { errors, touchedFields } }) => (
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="نام"
            {...register("billing_address.first_name", {
              required: "نام اجباری است",
            })}
            autoComplete="given-name"
            errors={errors}
            touched={touchedFields}
            required
          />
          <Input
            label="نام خانوادگی"
            {...register("billing_address.last_name", {
              required: "نام خانواداجباری است",
            })}
            autoComplete="family-name"
            errors={errors}
            touched={touchedFields}
            required
          />
          <Input
            label="آدرس"
            {...register("billing_address.address_1", {
              required: "آدرس اجباری است",
            })}
            autoComplete="address-line1"
            errors={errors}
            touched={touchedFields}
            required
          />
          <Input
            label="شرکت"
            {...register("billing_address.company")}
            autoComplete="organization"
            errors={errors}
            touched={touchedFields}
          />
          <Input
            label="کد پستی"
            {...register("billing_address.postal_code", {
              required: "کد پستی اجباری است",
            })}
            autoComplete="postal-code"
            errors={errors}
            touched={touchedFields}
            required
          />
          <Input
            label="شهر"
            {...register("billing_address.city", {
              required: "شهر اجباری است",
            })}
            autoComplete="address-level2"
            errors={errors}
            touched={touchedFields}
            required
          />
          <CountrySelect
            {...register("billing_address.country_code", {
              required: "کشور اجباری است",
            })}
            autoComplete="country"
            errors={errors}
            touched={touchedFields}
            required
          />
          <Input
            label="شهر / استان"
            {...register("billing_address.province")}
            autoComplete="address-level1"
            errors={errors}
            touched={touchedFields}
          />
          <Input
            label="تلفن"
            {...register("billing_address.phone")}
            autoComplete="tel"
            errors={errors}
            touched={touchedFields}
          />
        </div>
      )}
    </ConnectForm>
  )
}

export default BillingAddress
