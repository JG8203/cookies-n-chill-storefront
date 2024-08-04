import { Order } from "@medusajs/medusa"
import { Text } from "@medusajs/ui"

type DeliveryDateProps = {
    order: Order
}

const DeliveryDate = ({ order }: DeliveryDateProps) => {
  const calculateDeliveryDate = (createdAt: Date) => {
    const date = new Date(createdAt)
    const dayOfWeek = date.getDay() // 0 (Sunday) to 6 (Saturday)

    let deliveryDate: Date
    let deliveryMessage: string = ''

    if (dayOfWeek === 0 || dayOfWeek === 1 || dayOfWeek === 2) {
      // Sunday, Monday or Tuesday
      deliveryDate = new Date(date)
      deliveryDate.setDate(date.getDate() + (4 - dayOfWeek)) // This week's Thursday
      deliveryMessage = `on ${deliveryDate.toDateString()}`
    } else if (dayOfWeek === 3) {
      // Wednesday
      deliveryDate = new Date(date)
      deliveryDate.setDate(date.getDate() + 2) // This week's Friday
      deliveryMessage = `on ${deliveryDate.toDateString()}`
    } else if (dayOfWeek === 4) {
      // Thursday
      deliveryDate = new Date(date)
      deliveryDate.setDate(date.getDate() + 2) // This week's Saturday
      deliveryMessage = `on ${deliveryDate.toDateString()}`
    } else if (dayOfWeek === 5 || dayOfWeek === 6) {
      // Friday or Saturday
      deliveryDate = new Date(date)
      deliveryDate.setDate(date.getDate() + (11 - dayOfWeek)) // Next week's Thursday
      deliveryMessage = "on Thursday next week"
    }

    return deliveryMessage
  }

  return (
    <div>
    <Text className="mt-2">Your Order Delivery Date</Text> 
      <Text>
        Your order is expected to arrive <span className="text-ui-fg-subtle " data-testid="order-delivery-date">{calculateDeliveryDate(order.created_at)}</span>
      </Text>
    
    </div>
      

    
  )
}

export default DeliveryDate
