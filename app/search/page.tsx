"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { BsFillMicFill } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";
import { SiGooglelens } from "react-icons/si";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineWatchLater,
} from "react-icons/md";
import Webcam from "react-webcam";
export default function SearchOverlay() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [showMicOverlay, setShowMicOverlay] = useState(false);
  const [showImageOverlay, setShowImageOverlay] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [lensCameraStream, setLensCameraStream] = useState<MediaStream | null>(
    null
  );
  const lensVideoRef = useRef<HTMLVideoElement>(null);

  const [history] = useState([
    "sleeveless gilet jacket men india",
    "sequins skirt less than 2000",
    "cut out bodysuit india",
    "floral crop top",
    "black leather skirt with button",
    "neon shirt",
    "oversized women's leather jacket india",
  ]);

  const recognitionRef = useRef<any>(null);

  // Setup Speech Recognition
  useEffect(() => {
    if (typeof window !== "undefined" && "webkitSpeechRecognition" in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.lang = "en-US";
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setSearch(transcript);
        setShowMicOverlay(false);
      };

      recognition.onerror = (err: any) => {
        console.error("Speech Recognition Error:", err);
        setShowMicOverlay(false);
      };

      recognitionRef.current = recognition;
    }
  }, []);

  const handleMicClick = () => {
    setShowMicOverlay(true);
    if (recognitionRef.current) {
      recognitionRef.current.start();
    }
  };

  const handleSearch = () => {
    if (search.trim()) {
      router.push(`/results?query=${encodeURIComponent(search)}`);
    }
  };

  const handleLensClick = async () => {
    setShowImageOverlay(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "environment", // or try "user" for front camera
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
      });

      if (lensVideoRef.current) {
        lensVideoRef.current.srcObject = stream;
      }
      setLensCameraStream(stream);
    } catch (err) {
      console.error("Camera access denied or error:", err);
    }
  };

  const handleCloseLensOverlay = () => {
    setShowImageOverlay(false);
    if (lensCameraStream) {
      lensCameraStream.getTracks().forEach((track) => track.stop());
      setLensCameraStream(null);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    inputFileRef.current?.click();
  };

  return (
    <div className="fixed inset-0 bg-[#1f2125] text-white z-50 font-sans">
      {/* Mic Overlay */}
      {showMicOverlay && (
        <div className="fixed inset-0 bg-[#1f2125] bg-opacity-80 flex flex-col items-center justify-center z-50">
          <div className="">
            <p
              onClick={() => {
                recognitionRef.current?.stop();
                setShowMicOverlay(false);
              }}
              className="absolute top-4 left-4 p-[6px] bg-[#2f3133] rounded-full"
            >
              <MdOutlineKeyboardArrowLeft className="text-4xl" />
            </p>
          </div>
          <p className="text-gray-500 text-2xl mb-26">Speak now</p>
          <div className="flex gap-2 mb-6">
            <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
            <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            <span className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" />
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          </div>
          <button
            onClick={() => {
              recognitionRef.current?.stop();
              setShowMicOverlay(false);
            }}
            className="bg-gray-700 px-4 py-2 mt-10 rounded-full text-sm text-gray-200"
          >
            Search a song
          </button>
        </div>
      )}

{showImageOverlay && (
  <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center">
    <p
      onClick={handleCloseLensOverlay}
      className="absolute top-4 left-4 p-[6px] bg-gray-700 rounded-full cursor-pointer"
    >
      <MdOutlineKeyboardArrowLeft className="text-4xl text-white" />
    </p>

    <div className="flex flex-col items-center mt-12">
      {!selectedImage ? (
        <>
          <video
            ref={lensVideoRef}
            autoPlay
            playsInline
            muted
            className="w-[300px] h-[300px] rounded-lg mb-4 object-cover"
          />
          <div className="flex gap-4">
            <button
              onClick={handleUploadClick}
              className="text-white bg-gray-700 px-4 py-2 rounded-full"
            >
              Upload from Gallery
            </button>
            <input
              type="file"
              accept="image/*"
              ref={inputFileRef}
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
        </>
      ) : (
        <>
          <img src={selectedImage} className="w-[300px] rounded-lg mb-4" />
          <button
            onClick={() => {
              handleCloseLensOverlay(); // stop camera before redirecting
              router.push(`/results?image=1`);
            }}
            className="bg-blue-600 text-white px-6 py-2 rounded-full"
          >
            Search Image
          </button>
        </>
      )}
    </div>
  </div>
)}

      <div className="flex items-center mb-4">
        {/* Search Bar */}
        <div className="bg-[#2f3133] w-full rounded-full flex flex-row items-center lg:w-[60%] mx-auto justify-between px-5 py-3 mt-5">
          <div className="flex flex-row justify-start items-center">
            <p onClick={() => router.push("/")} className="text-gray-400">
              <MdOutlineKeyboardArrowLeft className="text-4xl" />
            </p>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Search or type URL"
              className="w-[80%] lg:w-[600px] text-lg ml-2 text-white outline-none bg-transparent"
              autoFocus
            />
          </div>
          <div className="flex flex-row justify-center items-center">
            <p className="mr-5 cursor-pointer" onClick={handleMicClick}>
              <BsFillMicFill className="text-xl" />
            </p>
            <p className="mr-5 cursor-pointer" onClick={handleLensClick}>
              <SiGooglelens className="text-xl" />
            </p>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-400 mb-2 mx-2">Recent searches</p>
      <ul className="mx-2">
        {history.map((item, idx) => (
          <li
            key={idx}
            className="flex items-center py-2 text-lg text-gray-300 cursor-pointer"
            onClick={() => setSearch(item)}
          >
            <span className="mr-3 bg-[#2f3133] p-[6px] rounded-full">
              <MdOutlineWatchLater className="w-5 h-5" />
            </span>{" "}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
