import React, { useState } from "react";
// import { Mpesa } from "mpesa-api";

function Payment() {
  // const mpesa = new Mpesa(credentials, environment);

  // const credentials = {
  //   clientKey: 'CONSUMER_KEY_HERE',
  //   clientSecret: 'CONSUMER_SECRET_HERE',
  //   initiatorPassword: 'INITIATOR_PASSWORD',
  //   securityCredenial: 'SECURITY_CREDENTIALS',
  //   certificatePath: 'keys/certificates.cert',
  // };

  // const environment = 'sandbox';

  // mpesa
  // .lipaNaMpesaOnline({
  //   BusinessShortCode:123456,
  //   Amount:10000,
  //   PartyA: 'Party A',
  //   PartyB: 'Party B',
  //   PhoneNumber:'phoneNumber',
  //   CallBackURL: 'CallBack URL',
  //   AccountReference: 'Account Reference',
  //   passKey: 'passKey',
  //   TransactionType: 'Transaction Type',
  //   TransactionDesc: 'Transaction',
  // })
  // .then((response) => {
  //   console.log(response);
  // })
  // .catch((error) => {
  //   console.error(error);
  // })

  return (
    <div className='flex w-full min-h-screen justify-evenly items-center pt-4'>
    <div className='flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 bg-white w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg overflow-hidden'>
        <div className='flex flex-col justify-between'>
        <header>
      <h1 className="text-secondary-300 text-4xl font-semibold">
        M-pesa Details
      </h1>
    </header>
    <div>
    <h1 className="text-2xl mb-3 font-bold font-body">
              Follow the details below:
            </h1>
    <ol>
      <li>1. Open your M-pesa App or dial *334#</li>
      <li>2. Lipa na M-pesa option</li>
      <li>3. Paybill Number: <span className="font-bold">112233</span></li>
      <li>4. Enter your premium amount</li>
      <li>5. Complete payment</li>
    </ol>
    </div>
        </div>

        {/* Calculator part */}

        <div className='relative'>
        <div className="absolute z-0 w-40 h-40 bg-red-400 rounded-full -right-28 -top-28"></div>
            <div className='relative z-10 bg-white/90 rounded-xl shadow-lg p-12'>
            <h1 className="font-bold mt-2 pb-2 border-b border-gray-200 text-2xl text-red-600 tracking-wide">
            Enter your M-pesa phone number:
          </h1>
         <div className="pt-4">
         <label className="text-gray-500 text-small">
          Mpesa No.
         <input
          type="tel"
          id="phone_number"
          required
          placeholder="07/01"
          className="border border-gray-400 py-1 px-2 font-body rounded"></input>
         </label>
         </div>
          <div className='pt-6'>
          <button className='rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider bg-secondary-300 text-white'>
            Complete Payment</button>
          </div>
            </div>
        </div>

    </div>
</div>
  );
}

export default Payment;
