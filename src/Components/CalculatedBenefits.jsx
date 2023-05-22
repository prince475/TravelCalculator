import React from 'react'

function CalculatedBenefits() {
    const exchangeRate = 136.35;

  return (
    <div className='text-gray-600 font-body'>

        <main className='px-14 py-6 body bg-white/80'>
            {/* p-5 h-screen g-gray */}
        <header>
          <h2 className='text-black text-3xl font-semibold'>Benefits</h2>
        </header>  

        <div className='overflow-auto bg-white rounded-lg shadow'>
          <table className='w-full'>
            <thead className='bg-gray-40 border-b-2 border-gray-400 text-xl'>
              <tr>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Section of Cover</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Max. Sum Insured</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>KES</th>
              </tr>
            </thead>

            <tbody className='divide divide-gray-300'>
             
                <tr>
                  <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                    <span className='trow'>Personal Accident</span>
                  </td>
                  <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>$27,500</td>
                  <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>KES 3,400,000</td>
                </tr>
                <tr>
                  <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                    <span className='trow'>Emergency Medical Expenses and Evacuation</span>
                  </td>
                  <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>$150,000</td>
                  <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>KES 3,400,000</td>
                </tr>
                <tr>
                  <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                    <span className='trow'>Emergency Dental Care</span>
                  </td>
                  <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>$750</td>
                  <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>KES 3,400,000</td>
                </tr>
                <tr>
                  <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                    <span className='trow'>Repatriation of Mortal Remains</span>
                  </td>
                  <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>$12,500</td>
                  <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>KES 3,400,000</td>
                </tr>
                <tr>
                  <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                    <span className='trow'>Hospital Benefits</span>
                  </td>
                  <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>$25 per day</td>
                  <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>KES 3,400,000</td>
                </tr>
                <tr>
                  <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                    <span className='trow'>Loss of checked luggage</span>
                  </td>
                  <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>$1000</td>
                  <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>KES 3,400,000</td>
                </tr>
                <tr>
                  <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                    <span className='trow'>Delayed Luggage</span>
                  </td>
                  <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>$50 per 12 hours, max of $250</td>
                  <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>KES 3,400,000</td>
                </tr>
                <tr>
                  <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                    <span className='trow'>Personality Liability</span>
                  </td>
                  <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>$250,000</td>
                  <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>KES 3,400,000</td>
                </tr>
                <tr>
                  <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                    <span className='trow'>Hijack</span>
                  </td>
                  <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>$50(per each 24hr period of detention)</td>
                  <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>KES 3,400,000</td>
                </tr>
                <tr>
                  <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                    <span className='trow'>Loss of passport</span>
                  </td>
                  <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>$500</td>
                  <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>KES 3,400,000</td>
                </tr>
                <tr>
                  <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                    <span className='trow'>Cancellation and Curtailment</span>
                  </td>
                  <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>$1,500</td>
                  <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>KES 3,400,000</td>
                </tr>
                <tr>
                  <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                    <span className='trow'>Travel Delay</span>
                  </td>
                  <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>$50 per 8 hours, max of $150</td>
                  <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>KES 3,400,000</td>
                </tr>
            </tbody>
          </table>
        </div>      
        </main>
    </div>
  )
}

export default CalculatedBenefits