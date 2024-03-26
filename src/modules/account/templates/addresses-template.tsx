"use client"

import { useAccount } from "@lib/context/account-context"
import AddressBook from "../components/address-book"

const AddressesTemplate = () => {
  const { customer, retrievingCustomer } = useAccount()

  if (retrievingCustomer || !customer) {
    return null
  }

  return (
    <div className="w-full">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-2xl-semi">آدرس ها</h1>
        <p className="text-base-regular">
          آدرس های خود را مشاهده و بروز کنید، می توانید هر تعداد که دوست دارید
          آدرس اضافه کنید. با ذخیره آدرس ها می توانید در هنگام تسویه از انها را
          انتخاب کنید
        </p>
      </div>
      <AddressBook customer={customer} />
    </div>
  )
}

export default AddressesTemplate
