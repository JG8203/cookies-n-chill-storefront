"use client";
import { useState, useEffect } from "react";

const BACKEND_URL = "https://localhost:9000";

export default function ProductCardActions({ productPreview }) {
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState(null);

  useEffect(() => {
    // Retrieve cart from local storage
    const cartId = localStorage.getItem("_medusa_cart_id");
    if (cartId) {
      fetch(`${BACKEND_URL}/store/carts/${cartId}`, {
        credentials: "include",
      })
        .then(response => response.json())
        .then(({ cart }) => setCart(cart));
    } else {
      createCart();
    }
  }, []);

  const createCart = () => {
    fetch(`${BACKEND_URL}/store/carts`, {
      method: "POST",
      credentials: "include",
    })
      .then(response => response.json())
      .then(({ cart }) => {
        localStorage.setItem("_medusa_cart_id", cart.id);
        setCart(cart);
      });
  };

  const handleAddToCart = () => {
    if (!cart || !productPreview?.variants?.length) return;

    const variantId = productPreview.variants[0].id;
    const existingItem = cart.items?.find(item => item.variant_id === variantId);

    if (existingItem) {
      updateLineItem(existingItem.id, existingItem.quantity + quantity);
    } else {
      addItemToCart(variantId, quantity);
    }
  };

  const addItemToCart = (variantId, quantity) => {
    const cartId = localStorage.getItem("_medusa_cart_id");
    fetch(`${BACKEND_URL}/store/carts/${cartId}/line-items`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        variant_id: variantId,
        quantity,
      }),
    })
      .then(response => response.json())
      .then(({ cart }) => setCart(cart));
  };

  const updateLineItem = (lineItemId, quantity) => {
    const cartId = localStorage.getItem("_medusa_ cart_id");
    fetch(`${BACKEND_URL}/store/carts/${cartId}/line-items/${lineItemId}`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity,
      }),
    })
      .then(response => response.json())
      .then(({ cart }) => setCart(cart));
  };

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(Math.max(1, quantity - 1));

  return (
    <div className="w-full">
      <div className="flex justify-center items-center mt-2">
        <button
          onClick={decreaseQuantity}
          className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
          </svg>
        </button>
        <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
          {quantity}
        </div>
        <button
          onClick={increaseQuantity}
          className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-l border-gray-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
      <button
        onClick={handleAddToCart}
        className="py-2 px-4 bg-darkPink text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center"
      >
        ADD TO CART
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </button>
    </div>
  );
}
