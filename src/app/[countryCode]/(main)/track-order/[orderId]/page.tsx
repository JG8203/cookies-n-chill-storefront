import React from 'react';
import { notFound } from "next/navigation";

interface LineItem {
  // Define line item properties
}

interface OrderEdit {
  // Define order edit properties
}

interface GiftCardTransaction {
  // Define gift card transaction properties
}

interface SalesChannel {
  id: string;
  name: string;
  description: string | null;
  is_disabled: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

interface Order {
  id: string;
  status: string;
  fulfillment_status: string;
  payment_status: string;
  display_id: number;
  cart_id: string;
  customer_id: string;
  email: string;
  billing_address_id: string;
  shipping_address_id: string;
  region_id: string;
  currency_code: string;
  tax_rate: number;
  draft_order_id: string | null;
  canceled_at: string | null;
  no_notification: boolean;
  idempotency_key: string;
  external_id: string | null;
  created_at: string;
  updated_at: string;
  metadata: Record<string, any> | null;
  items: LineItem[]; // Expandable
  edits: OrderEdit[]; // Expandable
  gift_card_transactions: GiftCardTransaction[]; // Expandable
  sales_channel_id: string | null;
  sales_channel: SalesChannel | null; // Expandable
  shipping_total: number | null;
  shipping_tax_total: number;
  raw_discount_total: number;
  discount_total: number;
  tax_total: number;
  item_tax_total: number | null;
  refunded_total: number;
  total: number;
  subtotal: number;
  paid_total: number;
  refundable_amount: number;
  gift_card_total: number;
  gift_card_tax_total: number;
  returnable_items: LineItem[]; // Expandable
}

const formatStatus = (status: string) => {
  return status.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

const formatCurrency = (amount: number, currencyCode: string) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: currencyCode }).format(amount / 100);
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
    hour: '2-digit', minute: '2-digit', hour12: true
  });
};

async function getOrderData(orderId: string): Promise<{ order: Order } | null> {
  const res = await fetch(`http://localhost:9000/store/orders/${orderId}`, {
    credentials: 'include',
  });
  if (!res.ok) {
    return null;
  }
  return res.json();
}

export default async function OrderDetailsPage({ params }: { params: { orderId: string } }) {
  const orderData = await getOrderData(params.orderId);
  if (!orderData) {
    notFound();
  }

  const { order } = orderData;

  return (
    <main className="container mx-auto p-8 font-raleway bg-heroBeige text-brownColor">
      <h1 className="text-4xl font-niconne mb-8 text-center text-brownColor">Order Details</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-neuton mb-4 text-darkPink">Order Information</h2>
            <p><span className="font-semibold">Order ID:</span> {order.display_id}</p>
            <p><span className="font-semibold">Date Placed:</span> {formatDate(order.created_at)}</p>
            <p><span className="font-semibold">Status:</span> {formatStatus(order.status)}</p>
            <p><span className="font-semibold">Fulfillment Status:</span> {formatStatus(order.fulfillment_status)}</p>
            <p><span className="font-semibold">Payment Status:</span> {formatStatus(order.payment_status)}</p>
          </div>
          <div>
            <h2 className="text-2xl font-neuton mb-4 text-darkPink">Customer Information</h2>
            <p><span className="font-semibold">Email:</span> {order.email}</p>
            {/* Add more customer details here if available */}
          </div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-2xl font-neuton mb-4 text-darkPink">Order Summary</h2>
          <div className="grid grid-cols-2 gap-2">
            <p><span className="font-semibold">Subtotal:</span></p>
            <p className="text-right">{formatCurrency(order.subtotal, order.currency_code)}</p>
            <p><span className="font-semibold">Shipping:</span></p>
            <p className="text-right">{formatCurrency(order.shipping_total || 0, order.currency_code)}</p>
            <p><span className="font-semibold">Tax:</span></p>
            <p className="text-right">{formatCurrency(order.tax_total, order.currency_code)}</p>
            <p><span className="font-semibold">Discount:</span></p>
            <p className="text-right">-{formatCurrency(order.discount_total, order.currency_code)}</p>
            <p><span className="font-semibold">Total:</span></p>
            <p className="text-right font-bold">{formatCurrency(order.total, order.currency_code)}</p>
          </div>
        </div>
      </div>
    </main>
  );
}