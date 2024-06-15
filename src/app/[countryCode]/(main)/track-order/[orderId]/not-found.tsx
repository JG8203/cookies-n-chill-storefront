import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-[#f5f5f5] dark:bg-[#1a1a1a] p-6">
      <div className="max-w-md text-center space-y-4">
        <h1 className="text-6xl font-bold text-[#ff9900]">Oops!</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          The page you're looking for couldn't be found. Maybe try heading back to the homepage?
        </p>
        <Link
          href="/ph"
          className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-[#ff9900] text-white font-medium hover:bg-[#e68900] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff9900] focus-visible:ring-opacity-75"
          prefetch={false}
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  )
}