import React from "react";
import {FaPhoneAlt} from 'react-icons/fa'
import { FaMailBulk } from "react-icons/fa";
 
function Policy() {
  return (
    <div className="antialised">
      <div className="flex w-full min-h-screen justify-evenly items-center pt-4" >
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 bg-white w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col justify-between">
          <header>
          <h1 className="text-secondary-300 text-4xl font-semibold">
            Policies and Terms
          </h1>
        </header>
            <div>
              <h1 className="font-bold font-body text-2xl tracking-wide pt-4">
                Nature for Coverage
              </h1>
              <p className="pt- text-sm">
                This is not a general health policy. Coverage is intended for
                use by the insured in the event of sudden and unexpected
                sickness arising when the insured is outside of their home
                country
              </p>
              <h1 className="font-bold font-body text-2xl tracking-wide">
                General Health Exclusion
              </h1>
              <p className="pt- text-sm">
                No claim under this policy will be paid where the insured;
              </p>
              <p className="pt- text-sm">
                1. is traveling against the advice of the physician, or,
              </p>
              <p className="pt- text-sm">
                2. is receiving, or on a waiting list for treatment, or awaiting
                results of medical tests or investigations for medical declared
                by a physician
              </p>
              <p className="pt- text-sm">
                3. is traveling for the purpose of attaining treatment
              </p>
              <p className="pt- text-sm">
                4. Has received a terminal prognosis for a medical illness
              </p>
              <h1 className="font-bold font-body text-2xl tracking-wide pt-12">
                Contact Details
              </h1>
              <p className="pt- text-sm">
                This is not a general health policy. Coverage is intended for
                use by the insured in the event of sudden and unexpected
                sickness arising when the insured is outside of their home
                country
              </p>
                <div className="flex">
                <FaPhoneAlt className="pt-2"/><p className="text-sm">24HR - +44(0)2079027405</p>
                </div>
                <div className="flex">
                <FaMailBulk className="pt-2"/><p className="text-sm">24HR - assistance@specialty-group.com</p>
                </div>
               
              
            </div>
          </div>
{/* The white card */}
          <div className="relative">
            <div className="absolute z-0 w-40 h-40 bg-red-400 rounded-full -right-28 -top-28"></div>
            <div className="absolute z-0 w-40 h-40 bg-red-400 rounded-full -right+38 -bottom-16"></div>

            <div className="relative z-10 bg-white/90 rounded-xl shadow-lg p-12">
              {/* <h2 className="text-3xl mb-4 font-body">Register</h2> */}
              <h1 className="font-bold font-body text-2xl tracking-wide">
                Pre-existing Exclusion
              </h1>
              <p className="pt- text-sm">
                This is not a general health policy. Coverage is intended for
                use by the insured in the event of sudden and unexpected
                sickness arising when the insured is outside of their home
                country
              </p>
              <h1 className="font-bold font-body text-2xl tracking-wide">
                Incase of Emergency
              </h1>
              <p className="pt- text-sm">
                Speciality assistance must be contacted immediately in the event of the insured;
              </p>
              <p className="pt- text-sm">
                a. Dying
              </p>
              <p className="pt- text-sm">
                b. Incurring medical expenses in excess of USD 500
              </p>
              <p className="pt- text-sm">
                c. Being involved in an accident
              </p>
              <p className="pt- text-sm">
                d. Being admited to the hospital
              </p>
              <p className="pt- text-sm">
                The company will not be liable for any costs without the express prior approval
                of speciality assistance.
              </p>
              <h1 className="font-bold font-body text-2xl tracking-wide">
                Non emergency Medical
              </h1>
              <p className="pt- text-sm">
                You will need to complete a claim as soon as possible within 31 days of return to your home country.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Policy;
