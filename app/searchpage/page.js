import React from 'react';
import NavBar from '../components/NavBar';
import { ArrowLongRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';



const SearchPage = () => {
  return (
    /* Container */
    <div className="relative flex flex-col min-h-screen bg-[#E8E3DE]">
      <NavBar />

      {/* Seraching Functionality: */}
      <div className='flex flex-col justify-center items-center mt-56 mb-16'>
        {/* Search Bar: */}
        <div className='relative flex'>
          <MagnifyingGlassIcon
            className="w-9 h-9 absolute pl-5 top-1/2 transform
                        -translate-y-1/2 text-[#45242D]"
          />
          <input 
            type='text' 
            placeholder='Enter link...'
            className='border-black border-2 p-2 px-4 pl-12 w-96 h-16
                    bg-[#E8E3DE] text-neutral-600 rounded-2xl'
          />
        </div>
        <button className='text-sm text-white border-black border-2 p-2 px-4
                           w-32 h-12 mt-5 bg-[#45242D] rounded-md
                          hover:bg-[#D2ADE7] hover:text-black hover:border-[#45242D] hover:border-2'>
          Search
        </button>

      </div>

    </div>
  );
}


export default SearchPage;
