import React from "react";


function Home() {
  return (
    <div className="min-h-screen py-20 body">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row  bg-white/80 rounded mx-auto shadow-l overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12  ">
            {/* add background image later --bg-[url(../Components/Images/visa.png)] bg-no-repeat bg-cover bg-center */}
            <h1 className="text-2xl mb-3 font-bold font-body">
              Ensure You have filled the Calculator
            </h1>
            <form action="#">
              <div className="grid grid-cols-2 gap-5">
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
                  type="number"
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
                  placeholder="Quotation Date"
                  className="border border-gray-400 py-1 px-2 w-full font-body rounded"
                ></input>
               </label>
              </div>

            </form>
          </div>
          <div className="w-full lg:w-1/2 py-16 p-12 border border-gray-200 ">
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
               <label className="nextofKin text-gray-500 text-small">
                Next of Kin
               <input
                  type="text"
                  placeholder="Add another form"
                  className="border border-gray-400 py-1 px-2 w-full font-body rounded"
                ></input>
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

          {/* Britam Logo badge
      <div>
        <img src={Britam} alt='logo'></img>
      </div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
