import medusaRequest from "@lib/medusa-fetch"
import OrderDetailsTemplate from "@modules/order/templates/order-details-template"

import { Metadata } from "next"

type Props = {
  params: { id: string }
}

async function getOrder(id: string) {
  const res = await medusaRequest("GET", `/orders/${id}`)

  if (!res.ok) {
    throw new Error(`خطا در دریافت سفارش: ${id}`)
  }

  return res.body
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { order } = await getOrder(params.id)

  return {
    title: `سفارش #${order.display_id}`,
    description: `سفارش خود را مشاهده کنید`,
  }
}

export default async function CollectionPage({ params }: Props) {
  const { order } = await getOrder(params.id)

  return <OrderDetailsTemplate order={order} />
}
