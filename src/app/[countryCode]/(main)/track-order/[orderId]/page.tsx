// prolly should use native medusajs types lmao. will fix next time
import { notFound } from "next/navigation";

interface Customer {
  id: string;
  email: string;
  first_name: string | null;
  last_name: string | null;
}

interface Region {
  name: string;
  currency_code: string;
}

interface ShippingAddress {
  first_name: string;
  last_name: string;
  address_1: string;
  city: string;
  country_code: string;
  postal_code: string;
}

interface Order {
  id: string;
  created_at: string;
  status: string;
  fulfillment_status: string;
  payment_status: string;
  display_id: number;
  customer: Customer;
  region: Region;
  currency_code: string;
  shipping_address: ShippingAddress;
  subtotal: number;
  total: number;
}

interface OrderData {
  order?: Order;
}

// Fetch order data
async function getOrderData(orderId: string) {
  const res = await fetch(`http://localhost:9000/store/orders/${orderId}`, {
    credentials: 'include',
  });

  if (!res.ok) {
    return null;
  }
  return res.json();
}

// Display order data
export default async function Page({ params }: { params: { orderId: string } }) {
  const orderObject = await getOrderData(params.orderId);
  if (!orderObject) {
    notFound();
  }
  return (
    <main className="p-8 font-sans">
      <h1 className="text-2xl font-bold mb-4">Order Details</h1>
      <div className="mb-4">
        <p><strong>Order ID:</strong> {orderObject.order.id}</p>
        <p><strong>Created At:</strong> {new Date(orderObject.order.created_at).toLocaleString()}</p>
        <p><strong>Status:</strong> {orderObject.order.status}</p>
        <p><strong>Fulfillment Status:</strong> {orderObject.order.fulfillment_status}</p>
        <p><strong>Payment Status:</strong> {orderObject.order.payment_status}</p>
        <p><strong>Display ID:</strong> {orderObject.order.display_id}</p>
        <p><strong>Customer Email:</strong> {orderObject.order.customer.email}</p>
        <p><strong>Region:</strong> {orderObject.order.region.name}</p>
        <p><strong>Currency:</strong> {orderObject.order.currency_code};</p>
      </div>
      <h2 className="text-xl font-semibold mb-2">Shipping Address</h2>
      <div className="mb-4">
        <p>{orderObject.order.shipping_address.first_name} {orderObject.order.shipping_address.last_name}</p>
        <p>{orderObject.order.shipping_address.address_1}</p>
        <p>{orderObject.order.shipping_address.city}</p>
        <p>{orderObject.order.shipping_address.country_code}, {orderObject.order.shipping_address.postal_code}</p>
      </div>
      <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
      <div>
        <p><strong>Subtotal:</strong> {orderObject.order.subtotal}</p>
        <p><strong>Total:</strong> {orderObject.order.total}</p>
      </div>
    </main>
  );
}
