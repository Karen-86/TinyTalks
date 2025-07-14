// import Link from "next/link";

// export default function TimeoutPage() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-100 px-4">
//       <div className="text-center space-y-4">
//         <h1 className="text-3xl font-semibold text-neutral-800">
//           You've Been Logged Out
//         </h1>
//         <p className="text-neutral-500 text-base">
//           No activity was detected for 3 minutes.
//         </p>
//         <Link
//           href="/"
//           className="mt-4 inline-block px-6 py-2 rounded-md bg-neutral-200 text-neutral-700 hover:bg-neutral-300 transition"
//         >
//           Return to Home
//         </Link>
//       </div>
//     </div>
//   );
// }
import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Timeout | Thel",

};

export default function TimeoutPage() {
  return (
    <div className="min-h-screen  bg-[#fafafa] text-[#333] font-serif flex flex-col justify-center items-center h-screen m-0 p-8 text-center">
      <div className="quote text-[1.25rem] leading-[1.8] max-w-[600px] mb-8 whitespace-pre-line">
        Out beyond ideas of wrongdoing and rightdoing,
        <br />
        <br />
        there is a field. I’ll meet you there.
        <br />
        <br />
        When the soul lies down in that grass, the world is too full to talk about.
        <br />
        <br />
        Ideas, language, even the phrase “each other” doesn’t make any sense.
        <div className="attribution mt-4 text-base italic text-[#555]">— Rumi, 13th-century Persian poet and Sufi mystic</div>
      </div>
      <a href="https://thel.agency/" className="button inline-block px-6 py-3 bg-black text-white no-underline rounded text-base transition-colors duration-300 ease-in-out hover:bg-[#333333]">
        Return to Thel
      </a>
    </div>
  );
}
