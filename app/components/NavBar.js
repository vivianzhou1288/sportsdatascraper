import Link from 'next/link';
import React from 'react';


const NavBar = (props) => {
  return (
    /* NavBar: */
    <div className='flex flex-row mt-6 mx-20 justify-between items-center'>
      {/* Logo: */}
      <Link href="/">
        <p className='font-extrabold text-lg'>
          SPORTLY
        </p>
      </Link>
      {/* Buttons: */}
      <div className='flex flex-row justify-between space-x-2'>
        <button className='text-xs border-black border-2 p-2 px-4 rounded-md
                           hover:font-semibold'>
          Sign in
        </button>
        <button className='text-xs text-white border-black border-2 p-2 px-4
                        bg-[#45242D] rounded-md hover:font-semibold'>
          Sign up
        </button>
      </div>
    </div>
  );
}


export default NavBar;
