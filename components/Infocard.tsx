import React from 'react'
import Image from 'next/image'
import { HeartIcon } from '@heroicons/react/24/solid'
import { StarIcon } from '@heroicons/react/24/solid'

function Infocard({img,location,title,description,star,price,total}) {
  return (
    <div className='flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg hover:shadow-gray-600 transition duration-200 ease-out first:border-t'>
        <div className='relative h-24 w-40 sm:h-52 sm:w-80 flex-shrink-0'>
            <Image src={img} alt='place' layout='fill' objectFit='cover'className='sm:rounded-2xl'/>
        </div>
        <div className='flex flex-col flex-grow pl-5'>
            <div className='flex justify-between'>
                <p className='text-gray-500'>{location}</p>
                <HeartIcon className='h-7 cursor-pointer text-white '/>
            </div>
            <h4 className='text-xl text-gray-200'>{title}</h4>
            <div className='border-b w-10 mt-2 bg-slate-400'></div>
            <p className=' text-sm pt-2 flex-grow text-gray-400'>{description}</p>

            <div className='flex justify-between items-end pt-5'>
                <p className='flex items-center'>
                    <StarIcon className='h-5 text-red-500'/>
                    <span className='text-white'>{star}</span>
                </p>

                <div>
                    <p className='text-white text-lg font-semibold pb-2 lg:text-2xl'>{price}</p>
                    <p className='text-white text-right font-extralight'>{total}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Infocard