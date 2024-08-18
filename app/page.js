import Image from "next/image";
import HomePage from "./components/HomePage";
// import SearchPage from "./components/SearchPage";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#E8E3DE]">
      <HomePage />
      {/* <SearchPage /> */}
    </div>
  );
}
