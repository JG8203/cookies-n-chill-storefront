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
    <footer className="border-t border-ui-border-base w-full bg-heroBeige">
      <div className="content-container flex flex-col w-full items-center justify-center">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-center py-12">
          <div>
            <LocalizedClientLink
              href="/"
              className="text-3xl text-black font-raleway font-bold hover:text-ui-fg-base"
            >
              Get in Touch
            </LocalizedClientLink>
            <a
              target="_blank"
              rel="noreferrer"
              className="block hover:text-ui-fg-base"
            >
              Address:
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="block hover:text-ui-fg-base"
            >
              Contact: 0947 107 7692
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="block hover:text-ui-fg-base"
            >
              G-Mail: cookies_n_chill@gmail.com
            </a>
            <a href="https://www.facebook.com/cookiesnchillph?mibextid=LQQJ4d" target="_blank" rel="noreferrer">
              <div className="relative" style={{marginTop: "5px" }} >
                <Image
                  src={fb}
                  alt="Facebook"
                  height={30}
                  width={30}
                  className="object-contain cursor-pointer"
                />
              </div>
            </a>
          </div>

            
          {/*<div className="text-small-regular gap-5 md:gap-x-8 grid grid-cols-2 sm:grid-cols-3">
            {product_categories && product_categories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Categories
                </span>
                <ul className="grid grid-cols-1 gap-2" data-testid="footer-categories">
                  {product_categories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-ui-fg-base",
                            children && "txt-small-plus"
                          )}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                    className="hover:text-ui-fg-base"
                                    href={`/categories/${child.handle}`}
                                    data-testid="category-link"
                                  >
                                    {child.name}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Collections
                </span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
                    {
                      "grid-cols-2": (collections?.length || 0) > 3,
                    }
                  )}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-ui-fg-base"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}*/}

            {/* Vertical line to divide the two*/}
            <div className="h-40 bg-black w-px mx-24"></div>

            <div className="flex flex-col gap-y-2" style={{ marginRight: "20px", marginTop: "30px" }}>
              <h1
                className="text-4xl text-black font-raleway font-bold hover:text-ui-fg-base"
              >
                We 
              </h1>
              <h1
                className="text-4xl text-black font-raleway font-bold hover:text-ui-fg-base"
              >
                Accept
              </h1>
            </div>
        

            <div className="flex flex-col gap-y-2">
            <div className="bg-darkerBeige py-1 px-1" style={{ width: "215px", height: "100px", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "30px" }}>
              <div className="relative">
                <Image
                  src={gcash}
                  alt="Gcash"
                  height={200} 
                  width={200} 
                  className="object-contain cursor-pointer"
                />
              </div>
            </div>

              {/*<span className="txt-small-plus txt-ui-fg-base">Medusa</span>8*/}
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                {/*<li>
                  <a
                    href="https://github.com/medusajs"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    GitHub
                  </a>
                </li>*/}
                {/*<li>
                  <a
                    href="https://docs.medusajs.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Documentation
                  </a>
                </li>*/}
                {/*<li>
                  <a
                    href="https://github.com/medusajs/nextjs-starter-medusa"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Source code
                  </a>
                </li>*/}
              </ul>
            {/*</div>*/}
          </div>
        </div>
        <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} Medusa Store. All rights reserved.
          </Text>
          <MedusaCTA />
        </div>
      </div>
    </footer>
  )
}
