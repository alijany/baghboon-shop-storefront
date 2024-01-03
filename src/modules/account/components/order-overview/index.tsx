"use client"

import { Button } from "@medusajs/ui"
import Spinner from "@modules/common/icons/spinner"
import { useCustomerOrders } from "medusa-react"
import Link from "next/link"
import OrderCard from "../order-card"

const OrderOverview = () => {
  const { orders, isLoading } = useCustomerOrders()

  if (isLoading) {
    return (
      <div className="text-gray-900 w-full flex justify-center pt-12">
        <Spinner size={36} />
      </div>
    )
  }

  if (orders?.length) {
    return (
      <div className="flex flex-col gap-y-8 w-full">
        {orders.map((o) => (
          <div
            key={o.id}
            className="border-b border-gray-200 pb-6 last:pb-0 last:border-none"
          >
            <OrderCard order={o} />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col items-center gap-y-4">
      <h2 className="text-large-semi">چیزی برای مشاهده کردن نیست</h2>
      <p className="text-base-regular">
      شما هنوز سفارشی ندارید، ما بخواهیم آن را تغییر دهیم {":)"}
      </p>
      <div className="mt-4">
        <Link href="/" passHref>
          <Button>ادامه به خرید کردن</Button>
        </Link>
      </div>
    </div>
  )
}

export default OrderOverview
