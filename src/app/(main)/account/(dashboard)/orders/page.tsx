import OrdersTemplate from "@modules/account/templates/orders-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "سفارش",
  description: "نمای کلی از سفارشات اخیر شما.",
}

export default function Orders() {
  return <OrdersTemplate />
}
