import { Text, clx } from "@medusajs/ui"

import { getCategoriesList, getCollectionsList } from "@lib/data"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"

import Image from 'next/image'
import fb from "@modules/common/icons/fb.png"
import gcash from "@modules/common/icons/gcash.png"

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <footer className="border-t border-ui-border-base w-full bg-heroBeige flex">
      <div className="content-container flex flex-col w-full items-center justify-center">
        <div className="grid grid-cols-3 gap-6 items-start justify-center py-12">
          <div>
            <div className="text-3xl text-black font-raleway font-bold hover:text-ui-fg-base">
              Get in Touch
            </div>
            <div className="block hover:text-ui-fg-base">
              Address:
            </div>
            <div className="block hover:text-ui-fg-base">
              Contact: 0947 107 7692
            </div>
            <div className="block hover:text-ui-fg-base">
              G-Mail: cookies_n_chill@gmail.com
            </div>
            <div className="relative mt-1">
              <Image
                src={fb}
                alt="Facebook"
                className="h-7 w-7 object-contain cursor-pointer"
              />
            </div>
          </div>
          <div className="h-40 bg-black w-px mx-auto"></div>
          <div className="flex flex-col items-center gap-y-2">
            <div className="text-4xl text-black font-raleway font-bold hover:text-ui-fg-base">
              We Accept
            </div>
            <div className="bg-darkerBeige py-1 px-1 flex justify-center items-center mt-7 h-24 w-52">
              <div className="relative">
                <Image
                  src={gcash}
                  alt="Gcash"
                  className="h-full w-full object-contain cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
          <div className="txt-compact-small">
            © {new Date().getFullYear()} Medusa Store. All rights reserved.
          </div>
          <div>
            <MedusaCTA />
          </div>
        </div>
      </div>
    </footer>
  )
}
