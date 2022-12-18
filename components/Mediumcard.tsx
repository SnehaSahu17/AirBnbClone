import React from 'react'
import Image from 'next/image'
import one from './images/Mediumcard/1.png'
import two from './images/Mediumcard/2.png'
import three from './images/Mediumcard/3.png'
import four from './images/Mediumcard/4.png'

function Mediumcard() {
    const cards = [
        {
          id:1,
          img:one,
          title:"Outdoor getaways"
        },
        { 
          id:2,
          img:two,
          title:"Unique stays"
        },
        {
          id:3,
          img:three,
          title:"Entire homes"
        },
        {
          id:4,
          img:four,
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



