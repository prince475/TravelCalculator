import React from "react";
import britam from "../Components/Images/logoBritam.png";

function Benefits() {
  return (
    <div className="text-gray-600 font-body">
      <main className="px-16 py-6 body bg-white/50">
        {/* <div>
        <img src={britam} alt='logo' style={{width: '150px'}}></img>
        </div>  */}
        <header>
          <h2 className="text-black text-3xl font-semibold">Benefits</h2>
        </header>
        <div className="overflow-auto rounded-lg">
          <table className="w-full">
            <thead className="bg-gray-40 border-b-2 border-gray-400 text-xl">
              <tr>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Section of Cover
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Max. Sum Insured
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  KES
                </th>
              </tr>
            </thead>

            <tbody className="divide divide-gray-300">
              <tr className="">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <span className="trow">Personal Accident(Death/PID)</span>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  USD 25,000
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  KES 3,400,000
                </td>
              </tr>

              <tr className="">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <span className="trow">Medical Expenses and Evacuation</span>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  USD 25,000
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  KES 3,400,000
                </td>
              </tr>
              <tr>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <span className="trow">Emergency Dental Care</span>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  USD 25,000
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  KES 3,400,000
                </td>
              </tr>
              <tr>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <span className="trow">Repatriation of Mortal Remains</span>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  USD 25,000
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  KES 3,400,000
                </td>
              </tr>
              <tr>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <span className="trow">Hospital Benefits</span>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  USD 25,000
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  KES 3,400,000
                </td>
              </tr>
              <tr>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <span className="trow">Loss of Checked Baggage</span>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  USD 25,000
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  KES 3,400,000
                </td>
              </tr>
              <tr>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <span className="trow">Travel Delay</span>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  USD 25,000
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  KES 3,400,000
                </td>
              </tr>
              <tr>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <span className="trow">Delayed Baggage</span>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  USD 25,000
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  KES 3,400,000
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Benefits;
