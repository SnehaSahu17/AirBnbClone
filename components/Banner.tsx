import React from 'react'
import Image from 'next/image'

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] md:h-[420px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px]'>
        <Image src='https://links.papareact.com/0fm' alt='banner-image' layout='fill'
        objectFit='cover' />

        <div className='absolute top-1/2 text-center w-full text-black'>
          <p className='text-sm sm:text-lg '>Not sure where to go? Perfect.</p>
          <button className='text-purple-500 bg-white px-10 py-2 shadow-md rounded-full my-3 cursor-pointer font-bold hover:shadow-xl active:scale-90 transition duration-150'>I'm flexible</button>
        </div>

    </div>
  )
}

export default Banner