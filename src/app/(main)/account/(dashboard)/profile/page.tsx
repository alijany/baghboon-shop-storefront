import ProfileTemplate from "@modules/account/templates/profile-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "مشخصات",
  description: "مشخصات حساب باغبون خود را مشاهده و ویرایش کنید.",
}

export default function Profile() {
  return <ProfileTemplate />
}
