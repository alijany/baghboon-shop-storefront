import OrderOverview from "../components/order-overview"

const OrdersTemplate = () => {
  return (
    <div className="w-full">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-2xl-semi">سفارش ها</h1>
        <p className="text-base-regular">
        سفارشات قبلی و وضعیت آنها را مشاهده کنید. همچنین می‌توانید در صورت نیاز برای سفارش‌های خود بازده یا مبادله ایجاد کنید.
        </p>
      </div>
      <div>
        <OrderOverview />
      </div>
    </div>
  )
}

export default OrdersTemplate
