"use client";

import React, { useRef, ReactNode } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

type CarouselDemoProps = {
  className?: string;
  itemClassName?: string;
  angles?: boolean;
  orientation?: "horizontal" | "vertical" | undefined;
  loop?: boolean;
  align?: "start" | "center";
  autoplay?: boolean;
  items?: { [key: string]: string | number | (() => void) }[];
  children: (props: { item: { [key: string]: string | number | (() => void) }; index: number }) => ReactNode;
};

export function CarouselDemo({
  className = "",
  itemClassName = "md:basis-1/2 lg:basis-1/3",
  angles= true,
  orientation = "horizontal",
  loop = false,
  align = "start",
  autoplay = false,
  items = [{}, {}, {}, {}],
  children = () => "",
}: CarouselDemoProps) {
  const carouselRef = useRef(null);

  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      // Do something on select.
      console.log("trigger");
    });
  }, [api]);

  return (
    <Carousel
      ref={carouselRef}
      setApi={setApi}
      className={`${className} mb-[100px] border`}
      opts={{
        align: align,
        loop: loop,
      }}
      orientation={orientation}
      plugins={autoplay ? [Autoplay({ delay: 2000 })] : []}
    >
      <CarouselContent className="-ml-1">
        {items.map((item, index) => (
          <CarouselItem key={index} className={`pl-1 ${itemClassName}`}>
            <div className="p-1">
            {children({ item, index })}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Navigation Arrows */}
      {angles &&
      <div className="carousel-angles absolute md:static left-[50%] md:left-[none] translate-x-[-50%] md:translate-x-[none] bottom-[-30px] md:bottom-[none]">
        <CarouselPrevious className="" />
        <CarouselNext />
      </div>
      }
    </Carousel>
  );
}
