import React from 'react'

function ClientPage() {
  return (
    <div className='antialised'>
      <div className='flex w-full min-h-screen justify-center items-center'>
        <div className='flex flex-col space-y-6 bg-blue-700 w-full max-w-4xl p-8 rounded-xl shadow-lg'>
          <div className='flex flex-col justify-between'>
            <div>
              <h1 className='font-bold font-body text-4xl tracking-wide'>Travel with Confidence</h1>
              <p className='pt- text-sm'>We are providing comprehensive travel insurance for a worry-free experience.
                 Don't let unexpected events ruin your trip</p>
            </div>
          </div>

          <div>
            <div className='bg-white rounded-xl shadow-lg p-8'>
            <h2 className='text-3xl mb-4 font-body'>Register</h2>
            <form action='#' className='flex flex-col space-y-4'>
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

    </div>
  )
}

export default ClientPage