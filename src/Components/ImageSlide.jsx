import React from "react";
import hospital from "../Components/Images/hospital.png";
import { FaTag } from "react-icons/fa";
import medical from "../Components/Images/medical.png";
import trip from "../Components/Images/tripdisruption.jpg";
import suitcase from "../Components/Images/suitcase.png";

function ImageSlide() {
  return (
    <>
      <div>
        <div
          className="hero min-h-screen"
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content bg-sky-600 bg-opacity-50">
            <div className="max-w-md">
              <h2 className="mb-5 text-3xl font-bold">
                Travel with Confidence: Your Ultimate Travel Insurance Partner!
              </h2>
              <p className="mb-5">
                Our comprehensive coverage, personalized service, and seamless
                claims process ensure peace of mind. Focus on making memories
                while we handle the rest. Don't let uncertainties hold you back
                - travel confidently with us!
              </p>
            </div>
          </div>
        </div>

        <hr className="border-sky-400 w-3/4 m-auto mb-4" />

        {/* Cards go here */}

      
        {/* Cards end here */}

        <div className="mt-8 flex flex-col-3 gap-5 justify-around">

        <div className="cardPart">
          <img
            src={medical}
            alt="food"
            className="w-full h-32 sm:h-48 object-cover"
          ></img>
          <div className="m-4 justify-around">
            <span className="font-bold">Medical Coverage</span>
            <div className="flex">
                <FaTag className="w-5 h-5 pt-2 pl-2" />
                <span>Emergency Medical Expenses and Evacuation</span>
              </div>
              <div className="flex">
                <FaTag className="w-5 h-5 pt-2 pl-2" />
                <span>Hospital Benefits</span>
              </div>
              <div className="flex">
                <FaTag className="w-5 h-5 pt-2 pl-2" />
                <span>Emergency Dental Care</span>
              </div>
          </div>
        </div>
        <div className="cardPart">
          <img
            src={medical}
            alt="food"
            className="w-full h-32 sm:h-48 object-cover"
          ></img>
          <div className="m-4 justify-around">
            <span className="font-bold">Trip Disruption</span>
            <div className="flex">
                <FaTag className="w-5 h-5 pt-2 pl-2" />
                <span>Travel Delay</span>
              </div>
              <div className="flex">
                <FaTag className="w-5 h-5 pt-2 pl-2" />
                <span>Trip cancellation and curtailment</span>
              </div>
              <div className="flex">
                <FaTag className="w-5 h-5 pt-2 pl-2" />
                <span>Loss of Passport</span>
              </div>
          </div>
        </div>
        <div className="cardPart">
          <img
            src={suitcase}
            alt="food"
            className="w-full h-32 sm:h-48 object-cover"
          ></img>
          <div className="m-4 justify-around">
            <span className="font-bold">Travel Mishaps</span>
            <div className="flex">
                <FaTag className="w-5 h-5 pt-2 pl-2" />
                <span>Personal Liability</span>
              </div>
              <div className="flex">
                <FaTag className="w-5 h-5 pt-2 pl-2" />
                <span>Loss of checked Luggage</span>
              </div>
              <div className="flex">
                <FaTag className="w-5 h-5 pt-2 pl-2" />
                <span>Delayed Luggage</span>
              </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default ImageSlide;
