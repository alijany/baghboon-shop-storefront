import OverviewTemplate from "@modules/account/templates/overview-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "حساب کاربری",
  description: "نمای کلی از فعالیت حساب شما.",
}

export default function Account() {
  return <OverviewTemplate />
}
