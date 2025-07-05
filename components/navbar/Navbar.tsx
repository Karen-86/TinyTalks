"use client";

import React from "react";
import localData from "@/localData";
import {  ButtonDemo } from "@/components/index.js";
import { NavigationMenuDemo } from "./NavigationMenuDemo";
import { SidebarNavigationMenuDemo } from "./SidebarNavigationMenuDemo";

const { logo } = localData.images;

export const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Products", href: "/products" },
];

export const dropdownLinksModules: { title: string; href: string; description: string }[] = [
  {
    title: "item 1",
    href: "/modules/item-1",
    description: "",
  },
  {
    title: "item 2",
    href: "/modules/item-2",
    description: "",
  },
  {
    title: "item 3",
    href: "/modules/item-3",
    description: "",
  },


];

export default function Navbar() {
  return (
    <nav className="navbar ">
      <div className="container flex flex-col md:flex-row gap-3 items-end md:items-start justify-between py-[50px]">
        {/* <img src={logo} alt="" className="max-w-[50px] h-auto " /> */}
        <a href="#contact" className="text-[1.1rem] md:text-[1.2rem] max-w-[300px] font-medium leading-[1.4] text-end md:text-start underline md:no-underline">
          Achieving Big Goals Starts With Stating Them: We’re Listening
        </a>
        {/* <NavigationMenuDemo /> */}

        {/* <SidebarNavigationMenuDemo /> */}

        <div className="btn-group   md:flex gap-[50px] ">
          {/* <a href="#" target="_blank" className="text-[1.1rem] md:text-[1.2rem] block underline md:no-underline font-medium hover:underline">Instagram</a>
          <a href="#" target="_blank" className="text-[1.1rem] md:text-[1.2rem] block underline md:no-underline font-medium hover:underline">LinkedIn</a> */}
        </div>
      </div>
    </nav>
  );
}
