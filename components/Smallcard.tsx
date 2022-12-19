import React from 'react'
import Image from 'next/image'
import One from './images/smallcard /1.png'
import Two from './images/smallcard /2.png'
import Three from './images/smallcard /3.png'
import Four from './images/smallcard /4.png'
import Five from './images/smallcard /5.png'
import Six from './images/smallcard /6.png'
import Seven from './images/smallcard /7.png'
import Eight from './images/smallcard /8.png'

function Smallcard() {
    const links = [
        {
          id: 1,
          img:One,
          location: "London",
          distance: "45-minute drive",
        },
        {
          id: 2,
          img: Two,
          location: "Manchester",
          distance: "4.5-hour drive",
        },
        {
          id: 3,
          img: Three,
          location: "Liverpool",
          distance: "4.5-hour drive",
        },
        {
          id: 4,
          img: Four,
          location: "York",
          distance: "4-hour drive",
        },
        {
          id: 5,
          img: Five,
          location: "Cardiff",
          distance: "45-minute drive",
        },
        {
          id: 6,
          img: Six,
          location: "Birkenhead",
          distance: "4.5-hour drive",
        },
        {
          id: 7,
          img:Seven ,
          location: "Newquay",
          distance: "6-hour drive",
        },
        {
          id: 8,
          img: Eight,
          location: "Hove",
          distance: "2-hour drive",
        },
      ];
  return (
    <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5 text-red-500">
            Explore Nearby
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4">
            {links.map(({ id, img, location, distance }) => (
              <div
                key={id}
                className="flex items-center m-2 mt-5  space-x-4 rounded-xl cursor-pointer hover:bg-gray-800 hover:scale-105 transition transform duration-200 ease-out"
              >
                <div className="relative h-16 w-16">
                  <Image
                    src={img}
                    alt="destination"
                    layout="fill"
                    className="rounded-lg"
                  ></Image>
                </div>
                <div>
                  <h2>{location}</h2>
                  <h3 className="text-gray-300">{distance}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
  )
}

export default Smallcard
