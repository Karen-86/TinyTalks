// "use client";

// import React, { useRef, ReactNode } from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
//   type CarouselApi,
// } from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay";

// type CarouselDemoProps = {
//   className?: string;
//   itemClassName?: string;
//   angles?: boolean;
//   orientation?: "horizontal" | "vertical" | undefined;
//   loop?: boolean;
//   align?: "start" | "center";
//   autoplay?: boolean;
//   items?: { [key: string]: string | number | (() => void) }[];
//   children: (props: { item: { [key: string]: string | number | (() => void) }; index: number }) => ReactNode;
// };

// export function CarouselDemo({
//   className = "",
//   itemClassName = "md:basis-1/2 lg:basis-1/3",
//   angles= true,
//   orientation = "horizontal",
//   loop = true,
//   align = "start",
//   autoplay = false,
//   items = [{}, {}, {}, {}],
//   children = () => "",
// }: CarouselDemoProps) {
//   const carouselRef = useRef(null);

//   const [api, setApi] = React.useState<CarouselApi>();

//   React.useEffect(() => {
//     if (!api) {
//       return;
//     }

//     api.on("select", () => {
//       // Do something on select.
//       console.log("trigger");
//     });
//   }, [api]);

//   return (
//     <Carousel
//       ref={carouselRef}
//       setApi={setApi}
//       className={`${className} m-0 mb-[100px] border w-full `}
//       opts={{
//         align: align,
//         loop: loop,
//       }}
//       orientation={orientation}
//       plugins={autoplay ? [Autoplay({ delay: 2000 })] : []}
//     >
//       <CarouselContent className="-ml-1">
//         {items.map((item, index) => (
//           <CarouselItem key={index} className={`pl-1 ${itemClassName}`}>
//             <div className="p-1">
//             {children({ item, index })}
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>

//       {/* Navigation Arrows */}
//       {angles &&
//       <div className="carousel-angles absolute md:static left-[50%] md:left-[none] translate-x-[-50%] md:translate-x-[none] bottom-[-30px] md:bottom-[none]">
//         <CarouselPrevious className="" />
//         <CarouselNext />
//       </div>
//       }
//     </Carousel>
//   );
// }

"use client";

import React from "react";

type CarouselDemoProps = {
  className?: string;
  itemClassName?: string;
  backwards?: boolean;
  items?: any[];
  children: (props: {
    item: { [key: string]: string | number | (() => void) };
    index: number;
  }) => React.ReactNode;
};

export function CarouselDemo({
  className = "",
  itemClassName = "mx-2",
  items = [{}, {}, {}, {}],
  backwards = false,
  children = () => "",
}: CarouselDemoProps) {
  return (
    <>
      <div className={`relative overflow-hidden ${className}`}>
        <div
          className={`whitespace-nowrap flex  hover:[animation-play-state:paused] ${
            backwards ? "animate-scroll-backwards" : "animate-scroll"
          }`}
        >
          {items.concat(items).map((item, index) => (
            <div key={index} className={`inline-block shrink-0 ${itemClassName}`}>
              {children({ item, index })}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scrollBackwards {
          100% { transform: translateX(0%); }
          0% { transform: translateX(-50%); }
        }

        .animate-scroll {
          animation: scroll 15s linear infinite;
        }

        .animate-scroll-backwards {
          animation: scrollBackwards 15s linear infinite;
        }

      `}</style>
    </>
  );
}
