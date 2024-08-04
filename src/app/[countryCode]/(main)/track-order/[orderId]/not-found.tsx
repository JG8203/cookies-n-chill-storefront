import React from 'react';
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-heroBeige dark:bg-brownColor p-6 font-raleway">
      <div className="max-w-md text-center space-y-6">
        <AlertTriangle className="w-24 h-24 mx-auto text-darkPink" />
        <h1 className="text-6xl font-niconne text-brownColor dark:text-heroBeige">Oops!</h1>
        <p className="text-brownColor dark:text-heroBeige text-lg font-neuton">
          The page you're looking for couldn't be found. Perhaps try heading back to the homepage?
        </p>
        <Link
          href="/ph"
          className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-darkPink text-white font-medium hover:bg-pink-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-darkPink transition-colors duration-200 ease-in-out"
          prefetch={false}
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  )
}