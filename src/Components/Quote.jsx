import React from 'react'
import axios from 'axios';

function Quote({ details}) {

  function sendEmail(details) {
    const emailData = {
      from: 'muirurim@britam.com',
      to: ``,
      subject: 'Travel Insurance Quote',
      text: JSON.stringify(details),
    };
//Email API request
    axios.post('', emailData)
    .then(response => {
      console.log('Email sent successfully');
    })
    .catch(error => {
      console.log('Failed to send email', error);
    });
  }
  return (
    <div className='flex w-full min-h-screen justify-evenly items-center pt-4'>
        <div className='flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 bg-white w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg overflow-hidden'>
            <div className='flex flex-col justify-between'>
            <header>
          <h1 className="text-secondary-300 text-4xl font-semibold">
            Here' Your Quote!
          </h1>
        </header>
        <div>
        <h1 className="font-bold font-body text-2xl tracking-wide pt-4">
                Client's Details
              </h1>
              <div className='flex flex-col-2 gap-5'>
              <p className='pt-4 tracking-wide pl-4 font-normal'><span className='font-bold border pr-3'>FirstName:</span>{details.firstname}</p>
              <p className='pt-4 tracking-wide pl-4 font-normal'><span className='font-bold border pr-3'>Lastname:</span>{details.lastname}</p>
              </div>
              <p className='pt-4 tracking-wide pl-4 font-normal'><span className='font-bold border pr-3'>National_ID:</span>{details.national_id}</p>
              <p className='pt-4 tracking-wide pl-4 font-normal'><span className='font-bold border pr-3'>Phone Number:</span>{details.phone}</p>
              <p className='pt-4 tracking-wide pl-4 font-normal'><span className='font-bold border pr-3'>Email:</span>{details.email}</p>
              <p className='pt-4 tracking-wide pl-4 font-normal'><span className='font-bold border pr-3'>Date of Birth:</span>{details.dob}</p>
              <p className='pt-4 tracking-wide pl-4 font-normal'><span className='font-bold border pr-3'>Purpose:</span>{details.purpose}</p>
              <p className='pt-4 tracking-wide pl-4 font-normal'><span className='font-bold border pr-3'>Mode:</span>{details.mode}</p>
              <p className='pt-4 tracking-wide pl-4 font-normal'><span className='font-bold border pr-3'>Country:</span>{details.country}</p>
              <p className='pt-4 tracking-wide pl-4 font-normal'><span className='font-bold border pr-3'>Date of Departure:</span>{details.date}</p>
              <p className='pt-4 tracking-wide pl-4 font-normal'>*NB* We have received your uploads</p>
        </div>
            </div>

            {/* Calculator part */}

            <div className='relative'>
                <div className='relative z-10 bg-white/90 rounded-xl shadow-lg p-12'>
                <h1 className="font-bold mt-2 pb-2 border-b border-gray-200 text-2xl text-red-600 tracking-wide">
                Insurance Cart
              </h1>
              <p className="pt-10 text-sm">
                This is not a general health policy. Coverage is intended for
                use by the insured in the event of sudden and unexpected
                sickness arising when the insured is outside of their home
                country
              </p>
              <div className='pt-6'>
              <button 
              onClick={() => sendEmail(details)}
              className='rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider bg-secondary-300 text-white'>
                Send Email</button>
              </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Quote