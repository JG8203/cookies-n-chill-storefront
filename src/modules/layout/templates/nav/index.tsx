import { Suspense } from "react"
import Image from 'next/image'
import logo from '@modules/common/icons/logo.png'
import user_pic from '@modules/common/icons/user_pic.png'

import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav
          className="content-container text-sm font-bold text-ui-fg-subtle flex items-center justify-between w-full h-full  bg-#FFFBED">
          <div className="flex items-center h-full gap-2">

            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base flex items-center"
              data-testid="nav-store-link"
            >
              <Image
                src={logo.src}
                alt="Logo"
                height={50}
                width={50}
                className="object-cover"
              />
            </LocalizedClientLink>

            <LocalizedClientLink
              href="/"
              className=" hover:text-ui-fg-base flex items-center font-neuton font-bold text-2xl"
              data-testid="nav-store-link"
            >

              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Cookies N' Chill
            </LocalizedClientLink>

          </div>


          {/*<div className="flex-1 basis-0 h-full flex items-center">*/}
          {/*  <div className="h-full">*/}
          {/*    <SideMenu regions={regions} />*/}
          {/*  </div>*/}
          {/*</div>*/}


          <div className="flex items-center h-full gap-10">
            <LocalizedClientLink
              className="hover:text-ui-fg-base font-raleway uppercase"
              href="/"
              data-testid="nav-store-link"
            >
              Home
            </LocalizedClientLink>


            <LocalizedClientLink
              className="hover:text-ui-fg-base font-raleway uppercase"
              href="/store"
              data-testid="nav-store-link"
            >
              Shop
            </LocalizedClientLink>

            <LocalizedClientLink
              className="hover:text-ui-fg-base font-raleway uppercase"
              href="/reviews"
              data-testid="nav-reviews-link"
            >
              Reviews
            </LocalizedClientLink>

            <LocalizedClientLink
              className="hover:text-ui-fg-base font-raleway uppercase"
              href="/about-us"
              data-testid="nav-about-us-link"
            >
              About Us
            </LocalizedClientLink>


            <LocalizedClientLink
              className="hover:text-ui-fg-base font-raleway uppercase"
              href="/account"
              data-testid="nav-account-link"
            >
              <Image
                src={user_pic.src}
                alt="Logo"
                height={40}
                width={40}
                className="object-cover"
              />
            </LocalizedClientLink>

            {/*This part is the cart that comes with medusa front end should be changed */}
            <div className="flex items-center">
              <div className="hidden small:flex items-center h-full">
                {process.env.FEATURE_SEARCH_ENABLED && (
                  <LocalizedClientLink
                    className="hover:text-ui-fg-base font-raleway uppercase"
                    href="/search"
                    scroll={false}
                    data-testid="nav-search-link"
                  >
                    Search
                  </LocalizedClientLink>
                )}
              </div>
              <Suspense
                fallback={
                  <LocalizedClientLink
                    className="hover:text-ui-fg-base flex gap-2"
                    href="/cart"
                    data-testid="nav-cart-link"
                  >
                    Cart (0)
                  </LocalizedClientLink>
                }
              >
                <CartButton />
              </Suspense>
            </div>


          </div>
        </nav>
      </header>
    </div>
  )
}
