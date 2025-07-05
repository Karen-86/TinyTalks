// 'use client'

import React from "react";
import { CountdownTimer } from "@/components/index";

const Footer = () => {
  return (
    <footer className="bg-neutral-100 text-dark  py-[3rem] md:pt-[4.5rem]">
      <div className="container">
        <div className="footer-content md:flex gap-5 items-end justify-between mb-8">
          <h5 className="text-2xl md:text-4xl font-medium mb-[100px] md:mb-0">
            The end.
            <br /> or a new beginning...{" "}
          </h5>
          <p className="text-sm  ml-auto w-fit">
            ©Thel LLC <br /> All rights reserved
          </p>
        </div>
        <CountdownTimer />
      </div>
    </footer>
  );
};

export default Footer;
