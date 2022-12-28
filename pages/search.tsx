import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import {format} from 'date-fns'
import  {results} from '../json/data.json'
import Infocard from '../components/Infocard'

export const getStaticProps= async () => {
  return {
    props: {
      results,
    },
  }
}

function search({results}) {

  const router = useRouter();
  const {location,startDate,endDate,noOfGuests} = router.query;
  const formattedStartdate = format(new Date(startDate), "dd MMMM yyyy");
  const formattedEnddate = format(new Date(endDate), "dd MMMM yyyy");
  const range = `${formattedStartdate} - ${formattedEnddate}`;

  return (
    <div className='bg-black'>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} Guests`}/>
      <main className='flex'>
        <section className='flex-grow pt-14 px-6'>
          <p className='text-sm text-white'>300+ stays - {range} - for {noOfGuests} guests </p>
          <h1 className='text-3xl font-semibold mt-2 mb-6 text-white capitalize'>Stays in {location}</h1>

          <div className='hidden sm:inline-flex mb-5 space-x-3 whitespace-nowrap'>
            <p className='button'>Cancellation Flexibility</p>
            <p className='button'> Type of Place</p>
            <p className='button'>Price</p>
            <p className='button'>Rooms and Beds </p>
            <p className='button'>More filters</p>
          </div>

         <div className='flex flex-col pb-2'>
         {results.map(item => (
              <Infocard key={item.img} img={item.img} location={item.location} title={item.title} description={item.description} star={item.star} price={item.price} total={item.total}/>
          ))}
         </div>
        </section>
      </main>
      <div className='px-6'><Footer/></div>
    </div>
  )
}

export default search;



