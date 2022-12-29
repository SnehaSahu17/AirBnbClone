import React, { useState } from 'react'
import Image from 'next/image'
import { MagnifyingGlassIcon,
         GlobeAltIcon,
         UserCircleIcon,
         UserIcon,
         Bars3Icon, 
         UsersIcon} from '@heroicons/react/24/solid'
import Logo from '../assests/images/logo.png'         
import { useRouter } from 'next/router'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';


function Header({ placeholder }: {
  placeholder: any;
}) {
  const [searchInput, setsearchInput] = useState("");
  const [noOfGuests, setnoOfGuests] = useState("1");
  const [startDate, setstartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());

  const handleSelect = (ranges) => {
      setstartDate(ranges.Selection.startDate);
      setendDate(ranges.Selection.endDate);
  }

  const selectionRange = {
      startDate : startDate,
      endDate : endDate,
      key:'Selection'
  }
  const router = useRouter();
  const search = () => {
    router.push ({

      pathname: "/search",
      query: {
        location:searchInput,
        startDate: new Date (startDate).getTime(),
        endDate: new Date (endDate).getTime(),
        noOfGuests,
      },
    });
  }
  return (
    <div className='sticky top-0 z-50 grid grid-cols-3 bg-black shadow-slate-800 shadow-sm p-5 md:px-10'>

        <div onClick={() => router.push("/")} className=' relative flex items-center h-10 cursor pointer my-auto cursor-pointer'>
            <Image src={Logo} alt='airbnb-logo' width={150} height={500}/>
        </div>

        <div className='flex items-center justify-between md:border-2 border-red-500 rounded-full py-2 '>

          <input value={searchInput} onChange={(e) => (setsearchInput(e.target.value))} type="text" placeholder={placeholder || 'Start your search'}className='flex-grow bg-transparent outline-none pl-5 text-sm text-white '/>

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
        
        {searchInput && <div className='flex flex-col col-span-3 mx-auto'>
        <DateRangePicker ranges={[selectionRange]} minDate={new Date()} rangeColors={["#f56565"]} onChange={handleSelect}/>

         <div className='bg-white flex items-center border-b'>
            <h2 className='text-2xl flex-grow font-semibold text-black'>Number of Guests</h2>
            <UsersIcon className='h-5'/>
            <input value={noOfGuests} onChange={(e) => (setnoOfGuests(e.target.value))} min={"1"} type="number" className='w-12 pl-2 text-lg outline-none text-red-500' />
         </div>

         <div className='flex bg-white py-2'>
          <button value={searchInput} onClick={(e) => (setsearchInput(""))} className='flex-grow text-black'>Cancel</button>
          <button onClick={search} className='flex-grow text-red-500'>Search</button>
         </div>
        </div> }
    </div>
  )
}

export default Header