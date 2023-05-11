
import React from 'react'

function Home() {
  return (
    <div className='min-h-screen py-20 body'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white/80 rounded mx-auto shadow-l overflow-hidden'>
          <div className='w-full lg:w-1/2 flex flex-col items-center justify-center p-12  '> 
          {/* add background image later --bg-[url(../Components/Images/visa.png)] bg-no-repeat bg-cover bg-center */}
            <h1 className='text-3xl mb-3 font-bold font-body'>Travel in Confidence</h1>
            <div>
            <p className='font-body'>
            We are providing comprehensive travel insurance for a worry-free experience.
            Don't let unexpected events ruin your trip
            </p>
            </div>
          </div>
          <div className='w-full lg:w-1/2 py-16 p-12 border border-gray-200 '>
            <h2 className='text-3xl mb-4 font-body'>Register</h2>
            <form action='#'>
             <div className='grid grid-cols-2 gap-5'>
             <input
              type='text'
              placeholder='Firstname'
              className='border border-gray-400 py-1 px-2 font-body rounded'></input>
               <input
              type='text'
              placeholder='Lastname'
              className='border border-gray-400 py-1 px-2 font-body rounded'></input>
             </div>
             <div className='mt-5'>
             <input
              type='number'
              placeholder='ID number/Passport'
              className='border border-gray-400 py-1 px-2 w-full font-body rounded'></input>
             </div>
             <div className='mt-5'>
             <input
              type='number'
              placeholder='Phone number'
              className='border border-gray-400 py-1 px-2 w-full font-body rounded'></input>
             </div>
             <div className='mt-5'>
             <input
              type='email address'
              placeholder='Email'
              className='border border-gray-400 py-1 px-2 w-full font-body rounded'></input>
             </div>
             <div className='mt-5'>
             <input
              type='date'
              placeholder='Quotation Date'
              className='border border-gray-400 py-1 px-2 w-full font-body rounded'></input>
             </div>
             <div>
              <input type='checkbox' className='border border-gray-400 font-body rounded'></input>
                <span>
                  I have reviewed the terms for <a href='#' className='text-orange-500 font-semibold font-body'>Travel Insurance policies</a>
                </span>
              
             </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home