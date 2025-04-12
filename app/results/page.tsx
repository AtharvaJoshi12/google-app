// app/results/page.tsx

"use client";

import { BsFillMicFill } from "react-icons/bs";
import { FaBars, FaRegBell } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { IoMdSearch } from "react-icons/io";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineWatchLater,
} from "react-icons/md";
import { SiGooglelens } from "react-icons/si";

// import { useSearchParams } from "next/navigation";

export default function ResultsPage() {
  // const searchParams = useSearchParams();
  // const query = searchParams.get("query");

  const dummyResults = [
    {
      title: "Vercel",
      url: "https://vercel.com",
      heading: "Login – Vercel",
      description:
        "Log in to Vercel. Continue with GitHub. Continue with GitLab. Continue with Bitbucket. SAML SSO. Login with Passkey. Email login.",
      tags: ["Account", "Access", "Changelog"],
    },
    {
      title: "Notion",
      url: "https://notion.so",
      heading: "Sign In – Notion",
      description:
        "One workspace. Every team. Sign in with Google, Apple, or email to access your Notion dashboard.",
      tags: ["Productivity", "Team", "Workspaces"],
    },
    {
      title: "Figma",
      url: "https://figma.com",
      heading: "Login – Figma",
      description:
        "Sign in to your Figma account. Use Google or email to access design and collaboration tools.",
      tags: ["Design", "Collaboration", "Prototyping"],
    },
    {
      title: "GitHub",
      url: "https://github.com/login",
      heading: "Sign In to GitHub",
      description:
        "Sign in to GitHub to manage your repositories, pull requests, and code collaboration.",
      tags: ["Code", "Repository", "DevOps"],
    },
  ];
  

  const filtered = dummyResults.filter((item) =>
    item.title.toLowerCase().includes("")
  );

  return (
    <div className="min-h-screen bg-[#1f2125] text-white p-4 pb-20 font-sans">
      <div className="border-b pb-5 border-gray-200">
        {/* Top Icons */}
        <div className="flex justify-between items-center mb-4">
          <div className="text-xl text-white">
            <svg
              className="w-8 h-8 fill-[#a8c7fb]"
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
            >
              {" "}
              <path d="M209-120q-42 0-70.5-28.5T110-217q0-14 3-25.5t9-21.5l228-341q10-14 15-31t5-34v-110h-20q-13 0-21.5-8.5T320-810q0-13 8.5-21.5T350-840h260q13 0 21.5 8.5T640-810q0 13-8.5 21.5T610-780h-20v110q0 17 5 34t15 31l227 341q6 9 9.5 20.5T850-217q0 41-28 69t-69 28H209Zm221-660v110q0 26-7.5 50.5T401-573L276-385q-6 8-8.5 16t-2.5 16q0 23 17 39.5t42 16.5q28 0 56-12t80-47q69-45 103.5-62.5T633-443q4-1 5.5-4.5t-.5-7.5l-78-117q-15-21-22.5-46t-7.5-52v-110H430Z"></path>{" "}
            </svg>
          </div>
          <p className="text-3xl font-semibold">Google</p>
          <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-lg">
            A
          </div>
        </div>
        <div className="flex flex-col w-full items-center">
          <div className="flex items-center w-full mb-4">
            {/* Search Bar */}
            <div className="bg-[#2f3133] w-full rounded-full flex flex-row items-center lg:w-[60%] mx-auto justify-between px-5 py-3 mt-5">
              <div className="flex flex-row justify-start items-center">
                <p className="text-gray-400">
                  <IoMdSearch className="text-2xl" />
                </p>
                <div className="w-[80%] lg:w-[600px] text-lg ml-2 text-white outline-none bg-transparent">
                  Search
                </div>
              </div>
              <div className="flex flex-row justify-center items-center">
                <p className="mr-5 cursor-pointer">
                  <BsFillMicFill className="text-xl" />
                </p>
                <p className="mr-5 cursor-pointer">
                  <SiGooglelens className="text-xl" />
                </p>
              </div>
            </div>
          </div>
          <div className="ml-4 flex space-x-1 text-sm">
            <span className="px-3 py-1 text-white border-b-2 border-white">
              All
            </span>
            <span className="px-3 py-1 text-gray-400 font-semibold">
              Images
            </span>
            <span className="px-3 py-1 text-gray-400 font-semibold">
              Videos
            </span>
            <span className="px-3 py-1 text-gray-400 font-semibold">
              Shopping
            </span>
            <span className="px-3 py-1 text-gray-400 font-semibold">News</span>
            <span className="px-3 py-1 text-gray-400 font-semibold">Web</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Top result */}
        <div className="mb-8">
          <div className="flex items-start flex-col">
          {dummyResults.map((result, index) => (
  <div key={index} className="border-b-2 pb-5 mt-5 border-gray-500">
    <h2 className="text-xl text-white font-medium">{result.title}</h2>
    <p className="text-white text-sm">{result.url}</p>
    <h3 className="text-lg text-blue-400 font-medium mt-2">
      {result.heading}
    </h3>
    <p className="text-gray-400 mt-1">{result.description}</p>
    <div className="flex mt-2 text-sm text-blue-400 flex-wrap">
      {result.tags.map((tag, idx) => (
        <span
          key={idx}
          className="mr-4 mb-2 border-2 border-gray-600 px-3 py-2 rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
))}

          </div>
        </div>

        {/* People also search for */}
        <div className="mt-12">
          <h4 className="text-lg font-medium text-gray-200 mb-4">
            People also search for
          </h4>
          <div className="flex space-x-6 text-gray-500">
            <span>Home</span>
            <span>Search</span>
            <span>Saved</span>
            <span>Notifications</span>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-[#2f3133] flex justify-around items-center py-5 text-xl border-t border-gray-700">
        <span>
          <GoHomeFill className="text-gray-500 w-10 h-6" />
        </span>
        <span className=" bg-[#394357] px-2 py-1 rounded-full">
          <IoMdSearch className="text-blue-500 w-10 h-6" />
        </span>
        <span>
          <FaRegBell className="text-gray-500 w-10 h-6" />
        </span>
        <span>
          <FaBars className="text-gray-500 w-10 h-6" />
        </span>
      </div>
    </div>
  );
}
