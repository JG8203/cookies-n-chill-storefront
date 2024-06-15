import { Github } from "@medusajs/icons"
import {ArrowLongRight} from "@medusajs/icons"
import heroCookies from '@modules/common/icons/heroCookies.png'
import { Button, Heading } from "@medusajs/ui"
import Image from 'next/image'
import logo from "@modules/common/icons/logo.png"

const Hero = () => {
  // @ts-ignore
  return (
    <div className="h-[50vh] w-full border-b border-ui-border-base relative bg-heroBeige overflow-hidden">
      <div className="absolute inset-0 z-10 flex flex-col p-32 pl-80 gap-8 ">

        <span>
          <Heading
            level="h1"
            className="text-7xl text-ui-fg-base font-niconne text-brownColor"
          >
            Welcome to
          </Heading>
          <Heading
            level="h2"
            className="text-7xl  text-ui-fg-subtle font-raleway font-bold text-brownColor"
          >
            Cookies N’ Chill!
          </Heading>
        </span>
        <a
          href="/store"
          target="_blank"
        >

          {/*to change*/}
          <Button variant="secondary">
            SHOP NOW {<ArrowLongRight/>}
          </Button>
        </a>
          <Image
            src={heroCookies.src}
            alt="cookies"
            height={500}
            width={600}
          className="object-cover absolute top-64  left-1/2 transform -translate-y-1/2 rotate-[80.675deg] z-30"
        />
        <Image
          src={heroCookies.src}
          alt="cookies"
          height={500}
          width={600}
          className="object-cover absolute top-64 left-[45%] transform -translate-y-1/2 rotate-[80.675deg] opacity-50 mix-blend-multiply z-20"
        />

      </div>
    </div>
  )
}

export default Hero
