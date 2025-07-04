"use client";

import React, { useState, useEffect } from "react";
import { Navbar, Footer, InputDemo, TextareaDemo, ButtonDemo } from "@/components/index.js";
import localData from "@/localData";
import { useGlobalContext } from "@/context";


const { headerCoverIcon, introCoverIcon } = localData.svgs;

const Content = () => {
  return (
    <>
      <header className=" mb-[0px]">
        <Navbar />
      </header>
      <main className="home-page">
        <ShowcaseSection />
        <AboutSection />
        <IntroSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

const ShowcaseSection = () => {
  return (
    <header className="showcase   flex items-center text-center">
      <div className="container">
        <div className="header-cover max-w-[400px] 4xl:max-w-[40%] mx-auto mb-[0px]">{headerCoverIcon}</div>
        <h1 className="text-[8vw] md:text-[6vw] font-medium leading-none ">Website Title here</h1>
      </div>
    </header>
  );
};

const AboutSection = () => {
  return (
    <section className="about bg-black text-white text-[1.2rem] md:text-[1.8rem] font-[300] py-[3rem] md:py-[7.5rem]">
      <div className="container">
        <div className="about-content max-w-[800px] 6xl:max-w-none mx-auto xl:mx-0">
          <p className="mb-[2rem]">
            "Brands that don’t move, don’t get noticed."—and we couldn’t agree more!
          </p>
          <p className="mb-[2rem]">
            At stickbird.studio, motion isn’t an afterthought—it’s the secret sauce, the main course, the
            whole damn feast. We don’t just add movement; we breathe life into brands, making sure they don’t
            just exist but stand out, captivate, and stick. Motion is not a “nice to have” anymore—it’s the
            future, and we’re here for it.
          </p>
          <p className="">
            So if you’re still thinking of brand identity as a static thing… well, it’s time to get things
            moving. Literally.
          </p>
        </div>
      </div>
    </section>
  );
};

const IntroSection = () => {
  return (
    <section className="intro  text-[1rem]  font-normal py-[3rem] md:pb-[3rem] md:py-[7.5rem]">
      <div className="container lg:flex">
        <div className="about-content max-w-[500px] lg:max-w-none mx-auto xl:mx-[50px]">
          <p className="mb-[2rem]">
            We believe in keeping things real: honesty, integrity, and building strong, respectful
            relationships are at the core of what we do.{" "}
          </p>
          <p className="mb-[2rem]">
            As creative industry pros, we’re passionate about pushing boundaries and having fun while moving
            the industry forward. With a combined 38 years of experience across Europe and Australia, we've
            learned a lot—but we never stop learning.
          </p>
          <p className="">
            At stickbird studio, we acknowledge the Traditional Owners and Custodians of Country throughout
            Australia and honour their deep connection to land, waters, and community. We pay our respects to
            the cultures, the people, and the elders—past, present, and emerging.
          </p>
        </div>
        <div className="intro-cover w-full max-w-[500px]  mx-auto">{introCoverIcon}</div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const { sendEmail } = useGlobalContext();


  const [state, setState] = useState({
    name: "",
    submitted_email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false)
  
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className=" py-[3rem] md:pt-[3rem] md:py-[7.5rem]">
      <div className="container">
        <div className="contact-content lg:flex gap-[100px] max-w-[1060px] mx-auto ">
          <h2 className="contact-title text-2xl md:text-3xl font-medium mx-auto lg:mx-0 mb-8 lg:mb-0 max-w-[500px]  lg:max-w-[250px] text-center lg:text-right">
            Say hi and tell us more about your creative challenge
          </h2>
          <form
            className="row flex-1"
            id="contact-form-2 "
            action="#/"
            method="POST"
            onSubmit={(e) =>
              sendEmail({
                event: e,
                service: "service_v5syn9r",
                template: "template_6ra30nj",
                form: e.target,
                public_key: "w7ph9DnOyRTPjx2Mq",
                setIsLoading: setIsLoading
              })
            }
          >
            <input
              type="hidden"
              name="hidden_text"
              value="this is hidden text"
              className="form-control block border"
            />
            <InputDemo
              placeholder="John"
              className="mb-6"
              inputClassName="py-6"
              name="name"
              type="text"
              label="Your Name"
              required={true}
              value={state.name}
              callback={(e) => handleOnChange(e)}
            />
            <InputDemo
              placeholder="john@loremipsum.com"
              className="mb-6"
              inputClassName="py-6"
              name="submitted_email"
              type="text"
              label="Your Email"
              required={true}
              value={state.submitted_email}
              callback={(e) => handleOnChange(e)}
            />

            <TextareaDemo
              label="Your Message"
              placeholder="Please tell us about you..."
              className="mb-6"
              textareaClassName="py-3 min-h-[120px]"
              name="message"
              type="text"
              required={true}
              value={state.message}
              callback={(e) => handleOnChange(e)}
            />

            <ButtonDemo disabled={isLoading} text="Submit" className="w-full py-5" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Content;
