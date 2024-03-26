import CartTemplate from "@modules/cart/templates"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "سبدخرید",
  description: "مشاهده سبد خرید",
}

export default function Cart() {
  return <CartTemplate />
}
