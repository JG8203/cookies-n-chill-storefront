import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { redirect } from 'next/navigation';

export default function Component() {
    async function redirectTracking(formData: FormData) {
        'use server'
        const orderId = formData.get('orderId') as string;
        redirect(`/track-order/${orderId}`);
    }
  return (
        <div className="flex flex-col min-h-screen">
            <header className="flex items-center h-14 px-4 border-b lg:h-20 xl:h-24 md:px-6">
                <div className="flex items-center gap-4">
                    <Link href="#" className="flex items-center gap-2 text-lg font-semibold md:text-base" prefetch={false}>
                        <Package2Icon className="w-6 h-6" />
                        <span className="sr-only">Acme Inc</span>
                    </Link>
                </div>
            </header>
            <main className="flex-1 flex flex-col items-center justify-center gap-4 p-4 md:gap-10 md:p-6">
                <form action={redirectTracking} className="w-full max-w-sm space-y-4">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold">Track your order</h1>
                        <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                            Enter your order number to track your package
                        </p>
                    </div>
                    <div className="space-y-2">
                        <Input
                            type="text"
                            name="orderId"
                            placeholder="Enter your order number"
                            className="border-gray-200 dark:border-gray-800"
                        />
                        <Button type="submit" size="lg" className="w-full">
                            Track Order
                        </Button>
                    </div>
                </form>
            </main>
        </div>
    );
}

// Icon component
function Package2Icon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
            <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
            <path d="M12 3v6" />
        </svg>
    );
}
