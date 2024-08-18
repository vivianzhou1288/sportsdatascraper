"use client";
import React, { useState } from "react";
import NavBar from "../components/NavBar";
import {
  ArrowLongRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { AppAuth } from "../context/AppContext";
import { useRouter } from "next/navigation";
import LoadingPage from "../components/LoadingPage";

const SearchPage = () => {
  const { setData } = AppAuth();
  const [userInput, setUserInput] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const apiUrl = `/api/player?url=${encodeURIComponent(userInput)}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setData(data);
      setUserInput("");
      setLoading(false);
      router.push("/playerpage");
    } catch (error) {
      console.log(error.message);
    }
  };

  if (loading) return <LoadingPage />;

  return (
    /* Container */
    <div className="relative flex flex-col min-h-screen bg-[#E8E3DE]">
      <NavBar />

      {/* Seraching Functionality: */}
      <div className="flex flex-col justify-center items-center mt-56 mb-16">
        {/* Search Bar: */}
        <div className="relative flex">
          <MagnifyingGlassIcon
            className="w-9 h-9 absolute pl-5 top-1/2 transform
                        -translate-y-1/2 text-[#45242D]"
          />
          <input
            type="text"
            value={userInput}
            placeholder="Enter link..."
            className="border-black border-2 p-2 px-4 pl-12 w-96 h-16
                    bg-[#E8E3DE] text-neutral-600 rounded-2xl"
            onChange={(e) => setUserInput(e.target.value)}
          />
        </div>
        <button
          className="text-sm text-white border-black border-2 p-2 px-4
                           w-32 h-12 mt-5 bg-[#45242D] rounded-md
                          hover:bg-[#D2ADE7] hover:text-black hover:border-[#45242D] hover:border-2"
          onClick={fetchData}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchPage;
