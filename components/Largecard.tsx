import React from 'react'
import Image from 'next/image'
import Largecardimage from '../assests/images/largecard.png'

function largecard() {
  return (
    <section className='relative cursor-pointer py-16 '>
        <div className='relative h-96 min-w-[300px]'>
            <Image src= {Largecardimage} alt="image" layout='fill' objectFit='cover' className='rounded-2xl'/>
        </div>
        <div className='absolute top-32 left-12  '>
            <h3 className=' capitalize text-black text-4xl mb-3 w-64'>the greatest outdoors</h3>
            <p className='text-black'>Wishlist curated by AirBnb.</p>
            <button className='capitalize bg-black text-white px-4 py-2 rounded-lg mt-5 hover:scale-105 duration-150'>get inspired</button>
        </div>
    </section>
  )
}

export default largecard