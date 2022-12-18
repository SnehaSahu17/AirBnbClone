import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 ml-2 md:ml-16 m '>
        <div className='space-y-4 text-sm mb-8 '>
            <h5 className='font-bold text-lg text-red-500'>ABOUT</h5>
            <p>How AirBnb works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>AirBnb Plus</p>
            <p>AirBnb Luxe</p>
        </div>
        <div className='space-y-4 text-sm mb-8'>
        <h5 className='font-bold text-lg text-red-500'>COMMUNITY</h5>
            <p>Accessibility</p>
            <p>This is not a real website</p>
            <p>It's a clone</p>
            <p>Referrals accepted</p>
            <p>Dummy project</p>
        </div>
        <div className='space-y-4 text-sm mb-8 '>
        <h5 className='font-bold text-lg text-red-500'>HOST</h5>
            <p>Done By</p>
            <p>Sneha Sahu</p>
            <p>Using React</p>
            <p>Next JS</p>
            <p>Tailwind CSS</p>
        </div>
        <div className='space-y-4 text-sm mb-8'>
            <h5 className='font-bold text-lg text-red-500'>SUPPORT</h5>
            <p>Help</p>
            <p>Trust & Security</p>
            <p>Plans</p>
            <p>AirBnb Plus</p>
            <p>AirBnb Luxe</p>
        </div>
        
    </div>
  )
}

export default Footer;