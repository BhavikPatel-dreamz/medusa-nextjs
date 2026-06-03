import { retrieveOrder } from "@lib/data/orders"
import OrderCompletedTemplate from "@modules/order/templates/order-completed-template"
import { notFound } from "next/navigation"

type Props = {
  params: Promise<{ id: string }>
}

export default async function OrderConfirmedPage({ params }: Props) {
  const { id } = await params
  const order = await retrieveOrder(id)
  if (!order) {
    return notFound()
  }

  return <OrderCompletedTemplate order={order} />
}
