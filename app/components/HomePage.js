import React from 'react';
import Link from 'next/link';
import NavBar from './NavBar';
import { ArrowLongRightIcon, ArrowRightIcon, ArrowUpRightIcon, ChartBarIcon, CheckBadgeIcon, CircleStackIcon, CodeBracketIcon, CodeBracketSquareIcon } from '@heroicons/react/24/solid';



const HomePage = () => {
  return (
    /* Container */
    <div className="relative flex flex-col min-h-screen">
      <NavBar />

      {/* Hero Section: */}
      <div className='w-full max-w-7xl mx-auto p-6 pt-14'>
        {/* Grids: */}
        <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-x-8 gap-y-5 grid-flow-row-dense">
          
          {/* Left Big Box: */}
          <div className='relative col-span-4 row-span-3 h-[650px] bg-[#D2C2BC] rounded-xl flex items-center'>
            <div className='flex flex-row items-center gap-1 bg-[#45242D] absolute top-4 left-4
                           text-white text-xs font-light px-[9px] py-[6px] rounded-lg z-10'>
              <ChartBarIcon className='w-3 h-3'/>
              Player Data
            </div>
            {/* Hero Text: */}
            <div className='relative flex items-center justify-center text-center text-[#45242D] font-medium text-7xl px-1'>
              Track Your Fav Athletes
            </div>

            {/* Hero Images: */}
            <div className='bg-[#e8edd9] w-[100px] h-[100px] rounded-full absolute top-2/3 left-1/4 flex justify-center items-center'>
              <img src='/images/basketball.png' alt='Basketball' className='w-[80px] h-[80px]'/>
            </div>
            <div className='bg-[#e8edd9] w-[100px] h-[100px] rounded-full absolute top-2/3 right-1/4 flex justify-center items-center'>
              <img src='/images/football.png' alt='Basketball' className='w-[70px] h-[70px]'/>
            </div>
            <div className='bg-[#C2F52F] w-[100px] h-[100px] rounded-full absolute top-2/3 left-[44%] flex justify-center items-center'>
              <img src='/images/soccer.png' alt='soccer' className='w-[80px] h-[80px]'/>
            </div>
          </div>


          {/* Right Top Box: */}
          <div className='flex flex-col col-span-2 bg-[#D2ADE7] rounded-xl'>
            <p className='text-2xl w-1/2 pt-5 pl-5'>
              Sign up to get early access
            </p>
            <div className='border-black border-0 border-b-0 h-[300px] w-56 self-center mt-10'>
              {/* Put soccer.png image here */}
              <img src='/images/sports.png' alt='soccer' className='w-full h-full'/>
              <div>
                {/* asda */}
              </div>
              
            </div>
          </div>

          {/* Right Bottom Box: */}
          <div className='col-span-2 bg-[#45242D] text-white rounded-xl'>
            <div className='flex flex-row justify-between gap-2 px-4 py-3'>
              <p className='w-1/2 text-xl'>
                Best app to get info on your fav athletes
              </p>
              <ArrowUpRightIcon className='w-4 h-4'/>
            </div>

            <div className='flex flex-row justify-between items-center gap-2 px-4 py-3'>
              <button className='flex justify-center items-center bg-white p-2 px-5 h-10
                            text-black text-[13px] font-semibold rounded-xl gap-2 border-2 border-[#45242D]
                            hover:bg-[#D2ADE7] hover:text-black hover:border-[#45242D] hover:border-2'>
                <p>Quick Demo</p>
                <ArrowLongRightIcon className='w-4 h-4'/>
              </button>
              {/* Rating: */}
              <div className='flex flex-row gap-1'>
                <CheckBadgeIcon className='w-5 h-5'/>
                <p className='text-7xl'>4.9</p>
              </div>
            </div>
            
          </div>
        </div>


        {/* Bottom Part of Home Page: */}
        <div className='flex flex-row justify-between space-x-20 mt-10 items-end mb-12'>
          {/* About Section: */}
          <div className='flex flex-row justify-start space-x-20 items-start'>
            <div className='text-3xl'>
              <div>
                <p>About</p>
                <p>Our App</p>
              </div>
            </div>

            <div className='text-sm w-1/2'>
              <p>
                We specialize in web scraping to deliver comprehensive data on athletes. 
                Whether you're interested in stats, records, or personal details, 
                we've got you covered. Get the insights you need on any 
                athlete you want to know about.
              </p>
              {/* Link to about page: */}
              <a href='#'>
                <p className='mt-8 text-[#45242D] underline font-bold hover:underline'>
                  LEARN MORE
                </p>
              </a>
            </div>
          </div>

          <Link href={"/searchpage"}
          className='flex justify-center items-center bg-[#45242D] p-2 px-4 h-10
                          text-white text-xs rounded-md gap-2 border-2 border-[#45242D]
                          hover:bg-[#D2ADE7] hover:text-black hover:border-[#45242D] hover:border-2'>
            <p>Demo</p>
            <ArrowLongRightIcon className='w-4 h-4'/>
          </Link>

        </div>
      </div>
    </div>
  );
}


export default HomePage;
