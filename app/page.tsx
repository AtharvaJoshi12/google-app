"use client";
import Image from "next/image";

import { IoMdSearch } from "react-icons/io";
import { BsFillMicFill } from "react-icons/bs";
import { SiGooglelens } from "react-icons/si";
import { MdImageSearch } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
import { RiGraduationCapLine } from "react-icons/ri";
import { IoMdMusicalNote } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";
const newsFeed = [
  {
    image:
      "https://t3.ftcdn.net/jpg/03/27/55/60/360_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg",
    text: "Apple's latest iPhone revealed with major camera improvements.",
  },
  {
    image:
      "https://media.gettyimages.com/id/1289018094/photo/female-anchor-presenting-breaking-news-about-severe-weather-causing-power-outage.jpg?s=612x612&w=gi&k=20&c=57r5JzuA13OpI2fj65xQLax5WTY51rYWN9n3anjk99I=",
    text: "NASA discovers Earth-like planet in nearby solar system.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMZcbrgaA8A4LuFWVfp9PjANP-PoSj7S5dMw&s",
    text: "New electric vehicle breaks 1000 km range barrier.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAIoD2S84BfmfzlRHAQjb-8Djt04XaTdN_Cg&s",
    text: "Meta introduces VR headset with real-world mapping.",
  },
  {
    image:
      "https://t3.ftcdn.net/jpg/03/27/55/60/360_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg",
    text: "Apple's latest iPhone revealed with major camera improvements.",
  },
  {
    image:
      "https://media.gettyimages.com/id/1289018094/photo/female-anchor-presenting-breaking-news-about-severe-weather-causing-power-outage.jpg?s=612x612&w=gi&k=20&c=57r5JzuA13OpI2fj65xQLax5WTY51rYWN9n3anjk99I=",
    text: "NASA discovers Earth-like planet in nearby solar system.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMZcbrgaA8A4LuFWVfp9PjANP-PoSj7S5dMw&s",
    text: "New electric vehicle breaks 1000 km range barrier.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAIoD2S84BfmfzlRHAQjb-8Djt04XaTdN_Cg&s",
    text: "Meta introduces VR headset with real-world mapping.",
  },
];
export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="min-h-screen bg-[#1f2125] text-white p-4 pb-20 font-sans">
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
          <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-lg">
            A
          </div>
        </div>

        {/* Google Logo */}
        <h1 className="text-4xl lg:text-8xl lg:mt-32 font-normal text-center my-4">
          Google
        </h1>

        {/* Search Bar */}
        <div
          onClick={() => router.push("/search")}
          className="bg-[#2f3133] rounded-full flex flex-row items-center lg:w-[60%] mx-auto justify-between px-5 py-6 mb-4 mt-10 m-1"
        >
          <div className="flex flex-row justify-center  items-center ">
            <p className="text-gray-400">
              <IoMdSearch className="text-2xl" />
            </p>
            <button className="text-2xl ml-3 text-gray-400 outline-none ">
              Search
            </button>
          </div>
          <div className="flex flex-row justify-center  items-center">
            <p className="mr-5">
              <BsFillMicFill className="text-xl" />
            </p>
            <p>
              <SiGooglelens className="text-xl" />
            </p>
          </div>
        </div>

        <div className="hidden lg:flex mx-auto  justify-center items-center space-x-5 mt-10">
          <button className="bg-[#2f3133] rounded px-6 py-3">
            Google Search
          </button>
          <button className="bg-[#2f3133] rounded px-6 py-3">
            I'm Feeling Lucky
          </button>
        </div>

        {/* Fidgets */}
        <div className="lg:hidden flex flex-row justify-center items-center gap-3 overflow-x-auto w-full mb-4 pb-4 border-b-2 border-[#37393d]">
          <div className="min-w-[80px] h-[60px] bg-[#4d4531] rounded-full flex items-center justify-center text-xl">
            <MdImageSearch className="text-yellow-500" />
          </div>{" "}
          <div className="min-w-[80px] h-[60px] bg-[#363f4e] rounded-full flex items-center justify-center text-xl">
            <IoLanguage className="text-blue-500" />
          </div>{" "}
          <div className="min-w-[80px] h-[60px] bg-[#33423b] rounded-full flex items-center justify-center text-xl">
            <RiGraduationCapLine className="text-green-600" />
          </div>{" "}
          <div className="min-w-[80px] h-[60px] bg-[#493034] rounded-full flex items-center justify-center text-xl">
            <IoMdMusicalNote className="text-red-600" />
          </div>
        </div>

        {/* Info Cards */}
        <div className="lg:hidden grid grid-cols-2 gap-3 mb-4">
          <div className="border-2 border-[#37393d]  p-3 rounded-xl">
            <div className="text-sm text-gray-400 mb-2">Gurugram</div>
            <div className="text-2xl font-bold">30° 🌙</div>
          </div>
          <div className="border-2 border-[#37393d]  p-3 rounded-xl">
            <div className="text-sm text-gray-400 mb-2">Air Quality - 170</div>
            <div className="text-lg font-semibold">Moderate 🟡</div>
          </div>
        </div>

        {/* News Feed */}
        <div className="lg:hidden space-y-4 w-full">
          {newsFeed.map((item, i) => (
            <div key={i} className="bg-[#2f3133] rounded-2xl overflow-hidden">
              <img
                src={item.image}
                alt="news"
                className="w-full h-48 object-cover"
              />
              <p className="p-3 py-5 text-base font-medium leading-tight">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Nav */}
        <div className="lg:hidden fixed bottom-0 left-0 w-full bg-[#2f3133] flex justify-around items-center py-5 text-xl border-t border-gray-700">
          <Link href={"/"} className=" bg-[#394357] px-2 py-1 rounded-full">
            <GoHomeFill className="text-blue-500 w-10 h-6" />
          </Link>
          <Link href={"/search"}>
            <IoMdSearch className="text-gray-500 w-10 h-6" />
          </Link>
          <span>
            <FaRegBell className="text-gray-500 w-10 h-6" />
          </span>
          <span>
            <FaBars className="text-gray-500 w-10 h-6" />
          </span>
        </div>
      </div>
    </>
  );
}
