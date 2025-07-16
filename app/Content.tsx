"use client";

import React, { useState, useEffect } from "react";
import {
  Navbar,
  Footer,
  InputDemo,
  ButtonDemo,
  SelectScrollable,
  TextareaDemo,
  CarouselDemo,
} from "@/components/index.js";
import localData from "@/localData";
import { useGlobalContext } from "@/context";

const { headerCoverIcon, introCoverIcon, kurgo, kamado, forGood,detroit  } = localData.svgs;
const { mercedes, soleilCreative, ams ,parkService} = localData.images;

const Content = () => {
  return (
    <>
      <header className=" mb-[0px]">
        <Navbar />
      </header>
      <main className="home-page">
        <ShowcaseSection />
        <AboutSection />
        <BrandsSection />
        {/* <IntroSection /> */}
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
        <h1 className="text-[10vw] md:text-[6vw] font-medium leading-none ">Thel LLC</h1>
      </div>
    </header>
  );
};

const AboutSection = () => {
  return (
    <section className="about bg-black text-white text-[1.2rem] md:text-[1.8rem] font-[300] py-[3rem] md:py-[7.5rem]">
      <div className="container">
        <div className="about-content max-w-[750px] 6xl:max-w-none mx-auto xl:mx-0">
          <p className="mb-[2rem]">
            Thel.agency is a modern consultancy focused on practical, high-impact improvements. We combine
            precision marketing, operational streamlining, and digital transformation to help brands like
            yours find their own way forward.
          </p>
          <p className="mb-[2rem]">
            From leading ad campaigns, to rethinking outdated workflows, to guiding you through AI-powered
            solutions — we help businesses like yours unlock what's next.
          </p>
        </div>
      </div>
    </section>
  );
};

const BrandLogo = ({ item }: any) => {
  return (
    <>
      <div className="brand-item px-[40px] py-[22px] rounded-[25px] ">
        {item.cover && <div className="w-[115px] h-[40px] object-contain mx-auto">{item.cover}</div>}
        {item.coverImage && <img className="w-[115px] h-[40px] object-contain mx-auto" src={item.coverImage} alt="" />}
      </div>
      <style>
        {`
          .brand-item {
            background: #faf9fb;
            &:hover {
              background: #f6f4f9;
              // background: #000;
              svg path {
                // fill: #fff;
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

const BrandsSection = () => {
  return (
    <section className="brands  text-[1.2rem] md:text-[1.8rem] font-[300] py-[3rem] md:py-[7.5rem]">
      <div className="container">
        <h2 className="contact-title text-2xl md:text-3xl font-medium mx-auto lg:mb-[80px] mb-[20px] max-w-[300px]  lg:max-w-[400px] text-center">
          Brands Our Team Has Worked With
        </h2>
      </div>
      <div className="brands-content">
        <CarouselDemo
          angles={false}
          className="custom-carousel mb-4"
          autoplay={true}
          loop={true}
          items={[
            { coverImage: mercedes },
            { cover: kurgo },
            { cover: kamado },
            { cover: forGood },
            { coverImage: soleilCreative },
            { coverImage: parkService },
            { coverImage: ams },
            { cover: detroit },
            

          
      
          ]}
        >
          {({ item, index }) => <BrandLogo item={item} index={index} />}
        </CarouselDemo>
        {/* <CarouselDemo
          // angles={false}
          className="custom-carousel"
          // autoplay={true}
          backwards={true}
          items={[
            { coverImage: mercedes },
            { cover: kurgo },
            { cover: kamado },
            { cover: forGood },
            { coverImage: mercedes },
            { cover: kurgo },
            { cover: kamado },
            { cover: forGood },
            { coverImage: mercedes },
            { cover: kurgo },
            { cover: kamado },
            { cover: forGood },
          ]}
        >
          {({ item, index }) => <BrandLogo item={item} index={index} />}
        </CarouselDemo> */}
      </div>
      <style>{`
        .brands-content:hover {
          .animate-scroll {
            animation-play-state: paused;
          }
          .animate-scroll-backwards {
            animation-play-state: paused;
          }
        }
      `}</style>
    </section>
  );
};

// const IntroSection = () => {
//   return (
//     <section className="intro  text-[1rem]  font-normal py-[3rem] md:pb-[3rem] md:py-[7.5rem]">
//       <div className="container lg:flex justify-between items-center max-w-[1000px]">
//         <div className="about-content max-w-[400px]  mx-auto xl:mx-[50px]">
//           <p className="mb-[2rem]">
//             Local legends. Startup rebels. Enterprise reshapers. If you're ready to grow with intent and
//             integrity, we’re here to collaborate.
//           </p>
//         </div>
//         <div className="intro-cover  max-w-[300px] mx-auto">{introCoverIcon}</div>
//       </div>
//     </section>
//   );
// };

const ContactSection = () => {
  const { sendEmail } = useGlobalContext();

  const [state, setState] = useState({
    name: "",
    submitted_email: "",
    company: "",

    problems: "",
    timeline: "",
    budgetRange: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [timeline, setTimeline] = useState([
    {
      id: 1,
      label: "ASAP",
      value: "ASAP",
    },
    {
      id: 2,
      label: "a couple of weeks",
      value: "a couple of weeks",
    },
    {
      id: 3,
      label: "a couple of month",
      value: "a couple of month",
    },
    {
      id: 4,
      label: "long term engagement",
      value: "long term engagement",
    },
    {
      id: 5,
      label: "to be confirmed",
      value: "to be confirmed",
    },
  ]);

  // const [problems, setProblems] = useState([
  //   {
  //     id: 1,
  //     label: "Low conversion rates",
  //     value: "Low conversion rates",
  //   },
  //   {
  //     id: 2,
  //     label: "Tracking issues",
  //     value: "Tracking issues",
  //   },
  //   {
  //     id: 3,
  //     label: "Scaling campaigns",
  //     value: "Scaling campaigns",
  //   },
  // ]);
  const [budgetRange, setBudgetRange] = useState([
    {
      id: 1,
      label: "Under $10K",
      value: "Under $10K",
    },
    {
      id: 2,
      label: "$10K - 30K",
      value: "$10K - 30K",
    },
    {
      id: 3,
      label: "$30K - 50K",
      value: "$30K - 50K",
    },
    {
      id: 4,
      label: "$50K +",
      value: "$50K +",
    },
    {
      id: 5,
      label: "to be confirmed",
      value: "to be confirmed",
    },
  ]);

  const callback = (item: any) => {
    setState((prev) => ({
      ...prev,
      [item.name]: item.value,
    }));
  };

  return (
    <section id="contact" className=" py-[3rem] md:pt-[3rem] md:py-[7.5rem]">
      <div className="container">
        <div className="contact-content lg:flex gap-[100px] max-w-[1060px] mx-auto ">
          <h2 className="contact-title text-2xl md:text-3xl font-medium mx-auto lg:mx-0 mb-8 lg:mb-0 max-w-[500px]  lg:max-w-[300px] text-center lg:text-right">
            Let’s start the conversation—reach out and tell us what you’re working on.
          </h2>
          <form
            className="row flex-1"
            id="contact-form-2 "
            action="#/"
            method="POST"
            onSubmit={(e) =>
              sendEmail({
                event: e,
                service: "service_m0znoir",
                template: "template_u1lzg8d",
                form: e.target,
                public_key: "XROQkLsbKgfMPUjh6",
                setIsLoading: setIsLoading,
              })
            }
          >
            <InputDemo
              placeholder="Jane"
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
              placeholder="jane@company.com"
              className="mb-6"
              inputClassName="py-6"
              name="submitted_email"
              type="text"
              label="Your Email"
              required={true}
              value={state.submitted_email}
              callback={(e) => handleOnChange(e)}
            />
            <InputDemo
              placeholder="Acme Inc."
              className="mb-6"
              inputClassName="py-6"
              name="company"
              type="text"
              label="Company Name"
              required={true}
              value={state.company}
              callback={(e) => handleOnChange(e)}
            />

            <SelectScrollable
              label="Your Timeline"
              defaultItems={timeline}
              callback={(item) => callback({ ...item, name: "timeline" })}
              placeholder="Select Speed..."
              triggerClassName={`selectScrollable-trigger-custom py-6 mb-6 w-full`}
              contentClassName={`selectScrollable-content-custom `}
            />
            <input type="hidden" name="timeline" value={state.timeline} />
            <SelectScrollable
              label="Your Budget Range"
              defaultItems={budgetRange}
              callback={(item) => callback({ ...item, name: "budgetRange" })}
              placeholder="Select Range..."
              triggerClassName={`selectScrollable-trigger-custom py-6 mb-6 w-full`}
              contentClassName={`selectScrollable-content-custom `}
            />
            <input type="hidden" name="budgetRange" value={state.budgetRange} />

            <TextareaDemo
              label="Key Problem"
              placeholder="State the Problem(s) to Be Solved..."
              className="mb-6"
              textareaClassName="py-3 min-h-[120px]"
              name="problems"
              type="text"
              // required={true}
              value={state.problems}
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
