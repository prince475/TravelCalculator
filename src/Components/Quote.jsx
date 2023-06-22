import React from 'react'

function Quote({ details}) {
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
              <div className='flex flex-col-2'>
              <p className=''><span>FirstName:</span>{details.firstname}</p>
              <p className=''><span>Lastname:</span>{details.lastname}</p>
              </div>
              <p className=''><span>National_ID:</span>{details.national_id}</p>
              <p className=''><span>Phone Number:</span>{details.phone}</p>
              <p className=''><span>Email:</span>{details.email}</p>
              <p className=''><span>Date of Birth:</span>{details.dob}</p>
              <p className=''><span>Purpose:</span>{details.purpose}</p>
              <p className=''><span>Mode:</span>{details.mode}</p>
              <p className=''><span>Country:</span>{details.country}</p>
              <p className=''><span>Date of Departure:</span>{details.date}</p>
              <p className=''>*NB* We have received your uploads</p>
        </div>
            </div>

            {/* Calculator part */}

            <div className='relative'>
                <div className='relative z-10 bg-white/90 rounded-xl shadow-lg p-12'>
                <h1 className="font-bold font-body text-2xl tracking-wide">
                Travel Calculator
              </h1>
              <p className="pt- text-sm">
                This is not a general health policy. Coverage is intended for
                use by the insured in the event of sudden and unexpected
                sickness arising when the insured is outside of their home
                country
              </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Quote