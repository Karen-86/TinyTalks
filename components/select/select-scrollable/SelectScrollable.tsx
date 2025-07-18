"use client";

// import * as React from "react";
import React, { useState, ReactElement, useEffect } from "react";
import {
  Select,
  SelectContent,
  // SelectGroup,
  SelectItem,
  // SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { v4 as uuidv4 } from "uuid";

type ItemsProps = {
  label: string | number;
  value: string | number;
  isSelected?: boolean;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
};

type SelectScrollableProps = {
  label?: string;
  className?: string;
  contentClassName?: string;
  triggerClassName?: string;
  placeholder?: string;
  defaultItems?: ItemsProps[];
  callback?: (item: ItemsProps) => void;
};

export function SelectScrollable({
  label = "",
  className = '',
  contentClassName = "",
  triggerClassName = "",
  placeholder = "Select",
  defaultItems = [],
  callback = () => {},
}: SelectScrollableProps) {
  const [items, setItems] = useState<ItemsProps[]>([]);
  const [value, setValue] = useState<string | number>("");

    const [id, setId] = useState("");

  useEffect(() => {
    setId(uuidv4());
  }, []);

  useEffect(() => {
    setItems([...defaultItems]);
    const selectedItem = [...defaultItems].find((item: ItemsProps) => item?.isSelected);
    if (selectedItem) setValue(selectedItem?.value);
  }, [defaultItems]);

  return (
   <div className={`field grid items-center gap-1.5 ${className}`}>
         {label && (
        <Label htmlFor={id} className=" font-medium text-xs">
          {label}
        </Label>
      )}
     <Select
       value={value.toString()}
       onValueChange={(value) => {
         setValue(value);
         const selectedItem = items.find((item) => item.value == value);
         if (selectedItem) callback(selectedItem);
       }}
       // open={true}
     >
       <SelectTrigger className={`select-scrollable-trigger w-[280px]  ${triggerClassName}`}>
         <SelectValue placeholder={placeholder} />
       </SelectTrigger>
       <SelectContent className={`select-scrollable-content max-w-[95vw]  ${contentClassName}`}>
         {items.length ? (
           items.map((item, index) => {
             return (
               <SelectItem key={index} value={item.value.toString()} className="select-scrollable-item">
                 <div className="select-scrollable-item-inner flex items-center gap-2 ">
                   {item.startIcon && <span className="w-[16px]">{item.startIcon}</span>}
                   <span className="select-scrollable-text flex-1">{item.label}</span>{" "}
                   {/* max-w-[180px] truncate */}
                   {item.endIcon && <span className="ml-auto w-[16px]">{item.endIcon}</span>}
                 </div>
               </SelectItem>
             );
           })
         ) : (
           <SelectItem value="empty" disabled>
             Empty
           </SelectItem>
         )}
       </SelectContent>
     </Select>
   </div>
  );
}





// the default value not working in above example, also there were redundant useeffect codes, so test, double check and remove if possible



// "use client";

// // import * as React from "react";
// import React, { useState, ReactElement, useEffect, ReactNode } from "react";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   // SelectGroup,
//   SelectItem,
//   // SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { v4 as uuidv4 } from "uuid";

// type ItemsProps = {
//   label: string | number;
//   value: string | number;
//   isSelected?: boolean;
//   startIcon?: ReactElement;
//   endIcon?: ReactElement;
// };

// type SelectScrollableProps = {
//   label?: ReactNode;
//   contentClassName?: string;
//   triggerClassName?: string;
//   placeholder?: string;
//   defaultItems?: ItemsProps[];
//   callback?: (item: ItemsProps) => void;
// };

// export function SelectScrollable({
//   label = "",
//   contentClassName = "",
//   triggerClassName = "",
//   placeholder = "Select",
//   defaultItems = [],
//   callback = () => {},
// }: SelectScrollableProps) {
//   const [items, setItems] = useState<ItemsProps[]>([...defaultItems]);

//   const selectedDefaultItem = defaultItems.find((item) => item.isSelected);
//   const [value, setValue] = useState<string | number>(
//     selectedDefaultItem ? selectedDefaultItem.value : ""
//   );
//   const [id, setId] = useState("");

//   useEffect(() => {
//     setId(uuidv4());
//   }, []);

//   return (
//     <Select
//       value={value.toString()}
//       onValueChange={(value) => {
//         setValue(value);
//         const selectedItem = items.find((item) => item.value === value);
//         if (selectedItem) callback(selectedItem);
//       }}
//       // open={true}
//     >
//       {label && (
//         <Label htmlFor={id} className=" font-medium mb-2">
//           {label}
//         </Label>
//       )}
//       <SelectTrigger className={`select-scrollable-trigger w-[280px]  ${triggerClassName}`}>
//         <SelectValue placeholder={placeholder} />
//       </SelectTrigger>
//       <SelectContent className={`select-scrollable-content max-w-[95vw]  ${contentClassName}`}>
//         {items.length ? (
//           items.map((item, index) => {
//             return (
//               <SelectItem key={index} value={item.value.toString()} className="select-scrollable-item">
//                 <div className="select-scrollable-item-inner flex items-center gap-2 ">
//                   {item.startIcon && <span className="w-[16px]">{item.startIcon}</span>}
//                   <span className="select-scrollable-text flex-1">{item.label}</span>{" "}
//                   {/* max-w-[180px] truncate */}
//                   {item.endIcon && <span className="ml-auto w-[16px]">{item.endIcon}</span>}
//                 </div>
//               </SelectItem>
//             );
//           })
//         ) : (
//           <SelectItem value="empty" disabled>
//             Empty
//           </SelectItem>
//         )}
//       </SelectContent>
//     </Select>
//   );
// }
