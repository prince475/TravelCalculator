import React, { useState } from "react";

function Payment() {
  const [showPayment, setShowPayment] = useState(true);
  const [showMpesaDetails, setShowMpesaDetails] = useState(false);

  const handlePaymentButtonClick = () => {
    setShowPayment(true);
    setShowMpesaDetails(false);
  };

  const handleMpesaButtonClick = () => {
    setShowPayment(false);
    setShowMpesaDetails(true);
  };

  return (
    <div>
      <div className="card rounded">
        <div className="join grid grid-cols-2">
          <button
            className="join-item btn btn-outline"
            onClick={handlePaymentButtonClick}
          >
            Mpesa Payment
          </button>
          <button
            className="join-item btn btn-outline"
            onClick={handleMpesaButtonClick}
          >
            Mpesa Details
          </button>
        </div>
      </div>

      {showPayment && (
        <div className="bg-white opacity-60">
         <div className="card">
         <h2 className="text-secondary-300 text-4xl font-semibold">Payment Details</h2>
          <label className="firstName text-gray-500 text-small">
            <input
            className="bg-white text-white border-blue-300 w-fit" 
            type="tel" placeholder="Enter your M-pesa Number"></input>
          </label>
          <p>
            Please note! Once you have entered your number, you will receive a
            prompt to enter your pin number and complete payment
          </p>
         </div>
        </div>
      )}

      {showMpesaDetails && (
        <div>
          <h2>Mpesa Details</h2>
          <ol>
            <li>Go to the M-pesa application or *334#</li>
            <li>Enter the M-pesa till number: 111111</li>
            <li>Enter the amount</li>
          </ol>
        </div>
      )}
    </div>
  );
}

export default Payment;
