import { Metadata } from "next"
import StoreTemplate from "@modules/store/templates"

export const metadata: Metadata = {
  title: "فروشگاه",
  description: "محصولات ما را کاوش کنید.",
}

export default function StorePage() {
  return <StoreTemplate />
}
