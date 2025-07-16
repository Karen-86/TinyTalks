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
//   items?: any[];
//   children: (props: { item: { [key: string]: string | number | (() => void) }; index: number }) => ReactNode;
// };

// export function CarouselDemo({
//   className = "",
//   itemClassName = "sm:basis-1/2 md:basis-1/3 lg:basis-1/5 xl:basis-1/6 select-none",
//   angles = true,
//   orientation = "horizontal",
//   loop = true,
//   align = "start",
//   autoplay = false,
//   items = [{}, {}, {}, {}],
//   children = () => "",
// }: CarouselDemoProps) {
//   const carouselRef = useRef(null);
//   const autoplayPlugin = useRef(Autoplay({ delay: 1200, stopOnInteraction: true }));

//   const [api, setApi] = React.useState<CarouselApi>();

//   React.useEffect(() => {
//     if (!api) return;
//     api.on("select", () => {
//       console.log("slide changed");
//     });
//   }, [api]);

//   const handleMouseEnter = () => {
//     autoplayPlugin.current?.stop();
//   };

//   const handleMouseLeave = () => {
//     autoplayPlugin.current?.play();
//   };

//   return (
//     <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//       <Carousel
//         ref={carouselRef}
//         setApi={setApi}
//         className={`${className} m-0 mb-[100px] w-full`}
//         opts={{
//           align,
//           loop, skipSnaps: true
//         }}
//         orientation={orientation}
//         plugins={autoplay ? [autoplayPlugin.current] : []}
//       >
//         <CarouselContent className="-ml-1">
//           {items.map((item, index) => (
//             <CarouselItem key={index} className={`pl-1 ${itemClassName}`}>
//               <div className="p-1">
//                 {children({ item, index })}
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>

//         {angles && (
//           <div className="carousel-angles absolute md:static left-[50%] md:left-[none] translate-x-[-50%] md:translate-x-[none] bottom-[-30px] md:bottom-[none]">
//             <CarouselPrevious />
//             <CarouselNext />
//           </div>
//         )}
//       </Carousel>
//     </div>
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
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
        .animate-scroll:hover {
            animation-play-state: paused;
        }
      `}</style>
    </>
  );
}


// "use client";

// import React, { useRef, useEffect, useState } from "react";

// type CarouselDemoProps = {
//   className?: string;
//   itemClassName?: string;
//   backwards?: boolean;
//   speed?: number; // seconds
//   items?: any[];
//   children: (props: {
//     item: { [key: string]: string | number | (() => void) };
//     index: number;
//   }) => React.ReactNode;
// };

// export function CarouselDemo({
//   className = "",
//   itemClassName = "w-[250px] mx-2",
//   backwards = false,
//   speed = 15,
//   items = [],
//   children = () => "",
// }: CarouselDemoProps) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [contentWidth, setContentWidth] = useState(0);

//   // Measure width of content on mount
//   useEffect(() => {
//     if (containerRef.current) {
//       setContentWidth(containerRef.current.scrollWidth / 2);
//     }
//   }, [items]);

//   return (
//     <>
//       <div className={`relative overflow-hidden ${className}`}>
//         <div
//           ref={containerRef}
//           className={`flex whitespace-nowrap will-change-transform animate-marquee ${
//             backwards ? "reverse" : ""
//           } hover:[animation-play-state:paused]`}
//           style={{
//             animationDuration: `${speed}s`,
//           }}
//         >
//           {/* Duplicate content for seamless loop */}
//           {[...items, ...items].map((item, index) => (
//             <div key={index} className={`inline-block shrink-0 ${itemClassName}`}>
//               {children({ item, index })}
//             </div>
//           ))}
//         </div>
//       </div>

//       <style>{`
//         @keyframes marquee {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }

//         .animate-marquee {
//           animation-name: marquee;
//           animation-timing-function: linear;
//           animation-iteration-count: infinite;
//         }

//         .reverse {
//           animation-direction: reverse;
//         }
//       `}</style>
//     </>
//   );
// }
