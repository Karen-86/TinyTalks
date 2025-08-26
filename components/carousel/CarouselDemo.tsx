
// "use client";

// import React from "react";

// type CarouselDemoProps = {
//   className?: string;
//   itemClassName?: string;
//   backwards?: boolean;
//   items?: any[];
//   children: (props: {
//     item: { [key: string]: string | number | (() => void) };
//     index: number;
//   }) => React.ReactNode;
// };

// export function CarouselDemo({
//   className = "",
//   itemClassName = "mx-2",
//   items = [{}, {}, {}, {}],
//   backwards = false,
//   children = () => "",
// }: CarouselDemoProps) {
//   return (
//     <>
//       <div className={`relative overflow-hidden ${className}`}>
//         <div
//           className={`whitespace-nowrap flex  hover:[animation-play-state:paused] ${
//             backwards ? "animate-scroll-backwards" : "animate-scroll"
//           }`}
//         >
//           {items.concat(items).map((item, index) => (
//             <div key={index} className={`inline-block shrink-0 ${itemClassName}`}>
//               {children({ item, index })}
//             </div>
//           ))}
//         </div>
//       </div>

//       <style>{`
//         @keyframes scroll {
//           0% { transform: translateX(0%); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-scroll {
//           animation: scroll 15s linear infinite;
//         }
//         .animate-scroll:hover {
//             animation-play-state: paused;
//         }
//       `}</style>
//     </>
//   );
// }



"use client";

import React, { useEffect } from "react";

type CarouselDemoProps = {
  className?: string;
  items?: any[];
};

export function CarouselDemo({ className = "", items = [{}, {}, {}, {}] }: CarouselDemoProps) {
  return (
    <>
      <div className="logos whitespace-nowrap ">
        <div className="logos-slide whitespace-nowrap inline-block ml-4">
          {items.map((item, index) => {
            return <BrandLogo key={index} item={item} />;
          })}
        </div>
        <div className="logos-slide whitespace-nowrap inline-block">
          {items.map((item, index) => {
            return <BrandLogo key={index} item={item} />;
          })}
        </div>
      </div>
      <style>{`
        @keyframes slide {
        from { transform: translateX(0); }
        to { transform: translateX(-100%); }
        }
        .logos-slide {
        animation: 15s slide infinite linear;
        }
        .logos:hover .logos-slide {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
}

const BrandLogo = ({ item }: any) => {
  return (
    <>
      <div className="brand-item px-[40px] py-[22px] rounded-[25px] min-w-[200px] inline-block ml-4">
        {item.cover && <div className="w-[115px] h-[40px] object-contain mx-auto">{item.cover}</div>}
        {item.coverImage && <img className="w-[115px] h-[40px] object-contain mx-auto" src={item.coverImage} alt="" />}
      </div>
      <style>
        {`
          .brand-item {
            background: #faf9fb;
            &:hover {
              // background: #f6f4f9;
              background: #000;
              svg path {
                fill: #fff;
              }
            }
            svg {
             width: 100%;
             height: 100%;
             object-fit:contain;
             path {
              // fill: #000;
             }
            }
          }
          `}
      </style>
    </>
  );
};
