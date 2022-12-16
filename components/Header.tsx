import React from 'react'
import Image from 'next/image'
import { MagnifyingGlassIcon,
         GlobeAltIcon,
         UserCircleIcon,
         UserIcon,
         Bars3Icon } from '@heroicons/react/24/solid'

function Header() {
  return (
    <div className='sticky top-0 z-50 grid grid-cols-3 bg-black shadow-slate-800 shadow-sm p-5 md:px-10'>

        <div className='relative flex items-center h-10 cursor pointer my-auto'>
            <Image src="https://links.papareact.com/qd3" alt='airbnb-logo' width={150} height={500}/>
        </div>

        <div className='flex items-center justify-between md:border-2 border-red-500 rounded-full py-2 '>

          <input type="text" placeholder='Start your search' className='flex-grow bg-transparent outline-none pl-5 text-sm text-white '/>

          <MagnifyingGlassIcon className='hidden md:inline-flex h-8 bg-red-500 text-black font-bold rounded-full p-2 cursor-pointer md:mx-2'/>

        </div>

        <div className='flex items-center justify-end space-x-3 text-red-500'>
          <p className='hidden md:inline-flex cursor-pointer'>Become a Host</p>
          <GlobeAltIcon className='h-6 cursor-pointer'/>

          <div className='flex items-center space-x-1 border-2 p-2 rounded-full border-red-500'>
            <Bars3Icon className='h-6'/>
            <UserCircleIcon className='h-6'/>
          </div>

        </div>
    </div>
  )
}

export default Header