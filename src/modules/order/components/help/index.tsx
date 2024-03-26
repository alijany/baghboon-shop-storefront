import { Heading } from "@medusajs/ui"
import Link from "next/link"
import React from "react"

const Help = () => {
  return (
    <div className="mt-6">
      <Heading className="text-base-semi">کمک خواستن؟</Heading>
      <div className="text-base-regular my-2">
        <ul className="gap-y-2 flex flex-col">
          <li>
            <Link href="/contact">مخاطب</Link>
          </li>
          <li>
            <Link href="/contact">بازده و مبادله</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Help
