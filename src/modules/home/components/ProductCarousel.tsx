"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const products = [
  {
    name: "Caramel Macchiato",
    image: "https://i.imgur.com/WQSnOl3.png",
  },
  {
    name: "Classic Black",
    image: "https://i.imgur.com/XVjrYpl.png",
  },
  {
    name: "Coffee Jelly",
    image: "https://i.imgur.com/a7X7uZ2.png",
  },
  {
    name: "White Chocolate Mocha",
    image: "https://i.imgur.com/VXEjj1r.png",
  },
];

export function ProductCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div>
      <Carousel setApi={setApi} className="w-full max-w-xs md:max-w-2xl lg:max-w-4xl mx-auto">
        <CarouselContent>
          {products.map((product, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex flex-col aspect-video items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill={true}
                    objectFit="contain"
                  />
                  <span className="mt-4 text-lg font-semibold">{product.name}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  );
}
