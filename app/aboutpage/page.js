import React from "react";
import NavBar from "../components/NavBar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AboutPage = () => {
  return (
    /* Container */
    <div className="relative flex flex-col min-h-screen bg-[#E8E3DE]">
      <NavBar />

      {/* Center the Accordion vertically and horizontally */}
      <div className="flex flex-1 justify-center items-center mt-25 px-8">
        <div className="w-full max-w-lg">
          {/* Display the Mission, Vision, and Core Values */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="border-[3px] border-black bg-[#D2ADE7] text-black text-lg px-3 rounded-xl mb-2">
                MISSION
              </AccordionTrigger>
              <AccordionContent className="px-3 mb-5 text-base">
                Empowering sports enthusiasts and professionals with real-time,
                accurate data on athletes worldwide. We leverage cutting-edge
                web scraping technology to deliver insights that fuel informed
                decisions, enhance fan experiences, and drive the sports
                industry forward.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="border-[3px] border-black bg-[#D2ADE7] text-black text-lg px-3 rounded-xl mb-2">
                VISION
              </AccordionTrigger>
              <AccordionContent className="px-3 mb-5 text-base">
                To be the world&apos;s leading source of comprehensive athlete
                data, revolutionizing the way sports information is accessed and
                utilized across the globe. We aspire to create a platform where
                every fan, analyst, and sports professional can effortlessly tap
                into the wealth of data needed to elevate their understanding
                and engagement with the sports they love.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="border-[3px] border-black bg-[#D2ADE7] text-black text-lg px-3 rounded-xl mb-5">
                CORE VALUES
              </AccordionTrigger>
              <AccordionContent className="px-3 mb-5 text-base">
                1. Integrity: Upholding the highest standards of honesty and
                transparency in our data collection and reporting.<br></br>
                2. Innovation: Continuously advancing our technology to meet the
                evolving needs of the sports industry.<br></br>
                3. Excellence: We strive for perfection in every aspect of our
                service, ensuring that our users receive accurate, reliable, and
                timely data.<br></br>
                4. User-Centricity: Our users are at the heart of everything we
                do. We are dedicated to delivering an intuitive and seamless
                experience that empowers them to achieve their goals.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
