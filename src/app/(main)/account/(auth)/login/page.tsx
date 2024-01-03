import LoginTemplate from "@modules/account/templates/login-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "ورود",
  description: "وارد حساب باغبون خود شوید.",
}

export default function Login() {
  return <LoginTemplate />
}
