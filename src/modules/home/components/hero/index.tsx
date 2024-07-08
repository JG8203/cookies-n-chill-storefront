import { Github } from "@medusajs/icons"
import { ArrowLongRight } from "@medusajs/icons"
import heroCookies from '@modules/common/icons/heroBackground.png'
import { Button, Heading } from "@medusajs/ui"
import Image from 'next/image'
import logo from "@modules/common/icons/logo.png"

const Hero = () => {
  return (
    <div className="relative h-[50vh] w-full border-b border-ui-border-base overflow-hidden bg-heroBeige">
      <div className="absolute inset-0 flex justify-end items-end">
        <Image
          src={heroCookies.src}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0"
        />
      </div>
      <div className="absolute inset-0 z-10 flex flex-col p-8 md:p-16 lg:p-32 lg:pl-80 gap-4 md:gap-6 lg:gap-8 bg-heroBeige bg-opacity-0">
        <span>
          <Heading
            level="h1"
            className="text-4xl md:text-5xl lg:text-7xl text-ui-fg-base font-niconne text-brownColor"
          >
            Welcome to
          </Heading>
          <Heading
            level="h2"
            className="text-4xl md:text-5xl lg:text-7xl text-ui-fg-subtle font-raleway font-bold text-brownColor"
          >
            Cookies N’ Chill!
          </Heading>
        </span>
        <Button variant="secondary" className="w-[180px] md:w-[220px] px-[40px] md:px-[55px] py-[20px] md:py-[30px] flex items-center justify-center rounded-full bg-[#F38989] text-white font-raleway text-[14px] md:text-[16px]">
          <a href="/store" target="_blank" className="flex items-center justify-center">
            SHOP NOW <ArrowLongRight />
          </a>
        </Button>
      </div>
    </div>
  )
}

export default Hero