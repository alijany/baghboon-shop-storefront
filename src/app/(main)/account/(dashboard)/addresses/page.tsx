import AddressesTemplate from "@modules/account/templates/addresses-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "آدرس ها",
  description: "آدرس های خود را مشاهده کنید",
}

export default function Addresses() {
  return <AddressesTemplate />
}
