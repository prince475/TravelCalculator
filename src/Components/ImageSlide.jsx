import React from "react";
import hospital from "../Components/Images/hospital.png";
import { FaTag } from "react-icons/fa";
import medical from "../Components/Images/medical.png";
import trip from "../Components/Images/tripdisruption.jpg";
import suitcase from "../Components/Images/suitcase.png";
import Benefits from './Benefits'

function ImageSlide() {
  return (
    <>
      <div>
        <div className="hero min-h-screen">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className=" text-center text-neutral-content bg-sky-600 bg-opacity-50">
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

        <hr className="border-sky-400 w-3/4 m-auto mb-4 mt-3" />

        <div className="flex flex-col w-full lg:flex-row">
          <div className="grid flex-grow card  rounded-box place-items-center">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={medical}
                  alt="Shoes"
                  className="w-full h-32 sm:h-48"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Medical
                  <div className="badge badge-secondary">HEALTH</div>
                </h2>
                <div className="flex">
                <FaTag className="w-7 h-7 pt-2 pl-2" />
                <p>Emergency Medical Expenses and Evacuation</p>
                </div>
                <div className="flex">
                <FaTag className="w-5 h-5 pt-2 pl-2" />
                <p>Hospital Benefits</p>
                </div>
                <div className="flex">
                <FaTag className="w-5 h-5 pt-2 pl-2" />
                <p>Emergency Dental Care</p>
                </div>
              </div>
            </div>
          </div>
          <div className="divider lg:divider-horizontal divide-red-500">
            AND
          </div>
          <div className="grid flex-grow card bg-base-300 rounded-box place-items-center">
          <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={suitcase}
                  alt="Shoes"
                  className="w-full h-32 sm:h-48"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Trip Mishaps
                  <div className="badge badge-secondary">SAFETY</div>
                </h2>
                <div className="flex">
                <FaTag className="w-5 h-5 pt-2 pl-2" />
                <p>Travel Delay</p>
                </div>
                <div className="flex">
                <FaTag className="w-5 h-5 pt-2 pl-2" />
                <p>Cancellation and Curtailment</p>
                </div>
                <div className="flex">
                <FaTag className="w-5 h-5 pt-2 pl-2" />
                <p>Loss of passport & checked luggage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageSlide;
