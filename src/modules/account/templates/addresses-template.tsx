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
        <h1 className="text-2xl-semi">ادرس تحویل گیرنده</h1>
        <p className="text-base-regular">
        آدرس های حمل و نقل خود را مشاهده و به روز کنید، می توانید هر تعداد که دوست دارید اضافه کنید. ذخیره آدرس‌های شما باعث می‌شود در حین تسویه حساب در دسترس باشند.
        </p>
      </div>
      <AddressBook customer={customer} />
    </div>
  )
}

export default AddressesTemplate
