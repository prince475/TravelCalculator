import React from "react";
import Random from './Random'
import Upload from "./Upload";



function Group() {
  return (
    <div className="min-h-screen py-5 body">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row  bg-white/80 rounded mx-auto shadow-l overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-4 ">
            {/* add background image later --bg-[url(../Components/Images/visa.png)] bg-no-repeat bg-cover bg-center */}
            <h1 className="text-2xl mb-3 font-bold font-body">
              Ensure You have filled the Calculator //Group Plan
            </h1>
            <form action="#">
              <div className="grid grid-cols-2 gap-5 pt-2">
              <label className="firstName text-gray-500 text-small">
                  FirstName
                <input
                  type="text"
                  placeholder="John"
                  className="border border-gray-400 py-1 px-2 font-body rounded"
                ></input>
                </label>
                <label className="lastName text-gray-500 text-small">
                  Lastname
                <input
                  type="text"
                  placeholder="Doe"
                  className="border border-gray-400 py-1 px-2 font-body rounded"
                ></input>
                </label>
              </div>
              <div className="mt-5">
                <label className="idNo text-gray-500 text-small">
                  National ID/Passport
                <input
                  type="number"
                  placeholder="12345678"
                  className="border border-gray-400 py-1 px-2 w-full font-body rounded"
                ></input>
                </label>
              </div>
              <div className="mt-5">
               <label className="phoneNo text-gray-500 text-small">
                Phone Number
               <input
                  type="tel"
                  placeholder="+254 "
                  className="border border-gray-400 py-1 px-2 w-full font-body rounded"
                ></input>
               </label>
              </div>
              <div className="mt-5">
               <label className="email text-gray-500 text-small">
                Email
               <input
                  type="email address"
                  placeholder="Email"
                  className="border border-gray-400 py-1 px-2 w-full font-body rounded"
                ></input>
               </label>
              </div>
              <div className="mt-5">
               <label className="dob text-gray-500 text-small">
                Date of Birth
               <input
                  type="date"
                  placeholder="dd-mm-yy"
                  value=''
                  min='1997-01-01' max='2023-05-25'
                  className="border border-gray-400 py-1 px-2 w-full font-body rounded"
                ></input>
               </label>
              </div>
              {/* <div className="mt-5 flex flex-col-3 gap-5">
              <label className="nextOfKin text-gray-500 text-small">
                Next of Kin

              <Random/>
              </label>
              </div> */}

            </form>
          </div>
          <div className="w-full lg:w-1/2 py-20 p-12 border border-gray-200 ">
            <form action="#">
              <div className="grid grid-cols-2 gap-5">
                <label className="purpose text-gray-500 text-small">
                  Purpose of Travel
                <select
                className="block w-64 border-gray-400 font-light">
                  <option value='Leisure'>Leisure</option>
                  <option value='Education'>Education</option>
                  <option value='Business'>Business</option>
                  <option value='Personal'>Personal</option>
                </select>
                </label>
                <label className="lastName text-gray-500 text-small">
                  Mode of Travel
                  <select
                className="block w-64 border-gray-400 font-light">
                  <option value='Leisure'>Plane</option>
                </select>
                </label>
              </div>
              <div className="mt-5">
              <label className="purpose text-gray-500 text-small">
                  Country of Travel
                <select
                className="block w-64 border-gray-400 font-light">
                  <option value='Kenya'>Kenya</option>
                  <option value='USA'>USA</option>
                </select>
                </label>
              </div>
             


              <div className="mt-5">
               <label className="quotationDate text-gray-500 text-small">
                Date of Departure
               <input
                  type="date"
                  placeholder="Quotation Date"
                  className="border border-gray-400 py-1 px-2 w-full font-body rounded"
                ></input>
               </label>
              </div>
            
              <Upload/>

              <div className="pt-6">
                <input
                  type="checkbox"
                  className="border border-gray-400 font-body rounded"
                ></input>
                <span>
                  I have reviewed the terms for{" "}
                  <a
                    href="#"
                    className="text-orange-500 font-semibold font-body"
                  >
                    Travel Insurance policies
                  </a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Group;
