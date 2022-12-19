import React from 'react'
import Image from 'next/image'
import One from '../assests/images/mediumcard/1.png'
import Two from '../assests/images/mediumcard/2.png'
import Three from '../assests/images/mediumcard/3.png'
import Four from '../assests/images/mediumcard/4.png'

function Mediumcard() {
    const cards = [
        {
          id:1,
          img:One,
          title:"Outdoor getaways"
        },
        { 
          id:2,
          img:Two,
          title:"Unique stays"
        },
        {
          id:3,
          img:Three,
          title:"Entire homes"
        },
        {
          id:4,
          img:Four,
          title:"Pet allowed"
        }
      ];
      
  return (
    
    <section>
          <h2 className="text-4xl font-semibold py-8 text-red-500">Live Anywhere</h2>

          <div className="flex space-x-4 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cards.map(({id,img,title})=>
            (
              <div 
              key={id}
              className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out '>
                <div className="relative h-80 w-80">
                    <Image src={img} alt="destination"
                    layout="fill"
                    className="rounded-xl " />
                </div>
                <h3 className="text-2xl mt-3">{title}</h3>
              </div>
            ))}
          </div>

        </section>
  )
}

export default Mediumcard



