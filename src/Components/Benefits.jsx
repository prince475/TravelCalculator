import React, { useState } from "react";
import { Link } from "react-router-dom";

function Benefits({ selectedPlan, setSelectedPlan }) {
  //const [selectedPlan, setSelectedPlan] = useState('Gold');
  const tabStyle = {
    textAlign: "center",
  };
  // Define the max sum insured values based on the selected plan
  const maxSumInsuredValues = {
    Gold: {
      "Personal Accident - DEATH/PTD": "$27,500",
      "Emergency Medical Expenses and Evacuation": "$150,000",
      "Emergency Dental Care": "$750",
      "Repatriation of Mortal Remains": "$12,500",
      "Hospital Benefits": "USD25 per day but a maximum of USD250",
      "Loss of Checked Baggage": "$1,000",
      "Delayed Baggage": "USD50 per 12 Hours but maximum of USD250",
      "Personality Liability": "$250,000",
      "Hijack ($50 per each 24 hour period of detention)": "$750",
      "Loss of Passport": "$500",
      "Cancellation and Curtailment": "$1,500",
      "Travel Delay": "USD50 per 8 hrs up to a maximum of USD150",
      "War & Terrorism": "Included",
    },
    Premium: {
      "Personal Accident - DEATH/PTD": "$25,000",
      "Emergency Medical Expenses and Evacuation": "$100,000",
      "Emergency Dental Care": "$600",
      "Repatriation of Mortal Remains": "$10,000",
      "Hospital Benefits": "USD10 per day maximum of USD100",
      "Loss of Checked Baggage": "$1,000",
      "Delayed Baggage": "USD50 per 12 Hours but maximum of USD250",
      "Personality Liability": "$200,000",
      "Hijack ($50 per each 24 hour period of detention)": "$500",
      "Loss of Passport": "$500",
      "Cancellation and Curtailment": "$1,000",
      "Travel Delay": "USD10 per 12 up to a maximum of USD100",
      "War & Terrorism":
        "Optional - Covered at an additional premium of 25% of the Basic premium",
    },
    Schnegen: {
      "Personal Accident - DEATH/PTD": "$10,000",
      "Emergency Medical Expenses and Evacuation": "$60,000",
      "Emergency Dental Care": "$500",
      "Repatriation of Mortal Remains": "$5,000",
      "Hospital Benefits": "Nil",
      "Loss of Checked Baggage": "$1,000",
      "Delayed Baggage": "USD50 per 12 Hours but maximum of USD250",
      "Personality Liability": "$200,000",
      "Hijack ($50 per each 24 hour period of detention)": "$500",
      "Loss of Passport": "$500",
      "Cancellation and Curtailment": "$1,000",
      "Travel Delay": "USD10 per 12 up to a maximum of USD100",
      "War & Terrorism":
        "Optional - Covered at an additional premium of 25% of the Basic premium",
    },
    Group: {
      "Personal Accident - DEATH/PTD": "$10,000",
      "Emergency Medical Expenses and Evacuation": "$50,000",
      "Emergency Dental Care": "$500",
      "Repatriation of Mortal Remains": "$5,000",
      "Hospital Benefits": "Nil",
      "Loss of Checked Baggage": "$1,000",
      "Delayed Baggage": "USD50 per 12 Hours but maximum of USD250",
      "Personality Liability": "$100,000",
      "Hijack ($50 per each 24 hour period of detention)": "$500",
      "Loss of Passport": "$500",
      "Cancellation and Curtailment": "$500",
      "Travel Delay": "USD10 per 12 up to a maximum of USD100",
      "War & Terrorism":
        "Optional - Covered at an additional premium of 25% of the Basic premium",
    },
    Student: {
      "Personal Accident - DEATH/PTD": "$25,000",
      "Emergency Medical Expenses and Evacuation": "$100,000",
      "Emergency Dental Care": "$600",
      "Repatriation of Mortal Remains": "$10,000",
      "Hospital Benefits": "USD10 per day maximum of USD100",
      "Loss of Checked Baggage": "$1,000",
      "Delayed Baggage": "USD50 per 12 Hours but maximum of USD250",
      "Personality Liability": "$200,000",
      "Hijack ($50 per each 24 hour period of detention)": "$500",
      "Loss of Passport": "$500",
      "Cancellation and Curtailment": "$1,000",
      "Travel Delay": "USD10 per 12 up to a maximum of USD100",
      "War & Terrorism":
        "Optional - Covered at an additional premium of 25% of the Basic premium",
    },
  };

  // Event handler for plan selection
  const handlePlanChange = (event) => {
    setSelectedPlan(event.target.value);
  };

  const handleTabClick = (plan) => {
    setSelectedPlan(plan);
  };

  const exchangeRate = 140;

  const targetUrl = selectedPlan == 'Group' ? '/group' : '/form';

  return (
    <div className="text-gray-600 font-body">
      <main className="px-16 py-6 body bg-white/80">
        <header>
          <h2 className="text-black text-3xl font-semibold">Benefits</h2>
        </header>

        {/* Dropdown menu */}
        {/* <div className='mt-4'>
          <label className='block text-sm font-medium text-gray-700'>Select Plan:</label>
          <select
            className='mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={selectedPlan}
            onChange={handlePlanChange}
          >
            <option value='Gold'>Gold</option>
            <option value='Premium'>Premium</option>
            <option value='Schnegen'>Schnegen</option>
            <option value='Group'>Group</option>
            <option value='Student'>Student</option>
          </select>
        </div> */}
        {/* End of Dropdown menu */}

        {/* Tabs */}
        <div className="flex justify-around">
          <div
            style={tabStyle}
            className={`py-2 px-4 text-sm font-semibold cursor-pointer ${
              selectedPlan === "Gold" ? "bg-red-300" : "bg-gray-100"
            }`}
            onClick={() => handleTabClick("Gold")}
          >
            Gold Plan
          </div>
          <div
            style={tabStyle}
            className={`py-2 px-4 text-sm font-semibold cursor-pointer ${
              selectedPlan === "Premium" ? "bg-red-300" : "bg-gray-100"
            }`}
            onClick={() => handleTabClick("Premium")}
          >
            Premium Plan
          </div>
          <div
            style={tabStyle}
            className={`py-2 px-4 text-sm font-semibold cursor-pointer ${
              selectedPlan === "Schnegen" ? "bg-red-300" : "bg-gray-100"
            }`}
            onClick={() => handleTabClick("Schnegen")}
          >
            Schnegen Plan
          </div>
          <div
            style={tabStyle}
            className={`py-2 px-4 text-sm font-semibold cursor-pointer ${
              selectedPlan === "Group" ? "bg-red-300" : "bg-gray-100"
            }`}
            onClick={() => handleTabClick("Group")}
          >
            Group Plan
          </div>
          <div
            style={tabStyle}
            className={`py-2 px-4 text-sm font-semibold cursor-pointer ${
              selectedPlan === "Student" ? "bg-red-300" : "bg-gray-100"
            }`}
            onClick={() => handleTabClick("Student")}
          >
            Student Plan
          </div>
        </div>
        {/* End of Tabs */}

        <div className="overflow-auto rounded-lg shadow">
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
              {Object.entries(maxSumInsuredValues[selectedPlan]).map(
                ([section, maxSumInsured]) => (
                  <tr key={section}>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      <span className="trow">{section}</span>
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {maxSumInsured}
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {maxSumInsured * exchangeRate}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>

          <div className="text-center pt-4 pb-4">
          <Link to={targetUrl}>
            <button className="rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider bg-secondary-300 text-white">
              Buy Now
            </button>
          </Link>
        </div>
        </div>

      </main>
    </div>
  );
}

export default Benefits;
