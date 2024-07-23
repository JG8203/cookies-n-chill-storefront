'use client'

import { useState } from "react"
import { Copy, Check } from "lucide-react"

type OrderIdDisplayProps = {
  orderId: string
}

export default function OrderIdDisplay({ orderId }: OrderIdDisplayProps) {
  const [copied, setCopied] = useState(false)

  const formatOrderId = (id: string) => {
    const shortId = id.slice(-8).toUpperCase();
    return `${shortId.slice(0, 4)}-${shortId.slice(4)}`;
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(orderId).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    })
  }

  return (
    <div className="flex items-center gap-2 text-lg font-neuton mb-4">
      <span>Order ID:</span>
      <span className="font-semibold text-darkPink bg-heroBeige px-2 py-1 rounded">
        {formatOrderId(orderId)}
      </span>
      <button
        onClick={copyToClipboard}
        className="p-1 rounded-full bg-brownColor text-white hover:bg-opacity-80 transition-colors"
        title="Copy order ID"
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>
    </div>
  )
}