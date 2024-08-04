'use client'

import React, { useState } from "react";
import { Copy, Check, Printer } from "lucide-react";

type OrderIdDisplayProps = {
  orderId: string
}

export default function OrderIdDisplay({ orderId }: OrderIdDisplayProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(orderId).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  }

  const handlePrint = () => {
    window.print();
  }

  return (
    <div className="flex items-center gap-2 text-lg font-neuton mb-4">
      <span>Order ID:</span>
      <span className="font-semibold text-darkPink bg-heroBeige px-2 py-1 rounded">
        {orderId}
      </span>
      <button
        onClick={copyToClipboard}
        className="p-1 rounded-full bg-brownColor text-white hover:bg-opacity-80 transition-colors"
        title="Copy order ID"
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>
      <button
        onClick={handlePrint}
        className="p-1 rounded-full bg-brownColor text-white hover:bg-opacity-80 transition-colors ml-2"
        title="Print order details"
      >
        <Printer size={16} />
      </button>
    </div>
  );
}