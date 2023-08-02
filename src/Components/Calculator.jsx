import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const premiums = {
  Gold: {
    "1-15": {
      7: 19,
      10: 33,
      15: 47,
      21: 62,
      31: 90,
      62: 102,
      93: 160,
      185: 204,
    },
    "16-60": {
      7: 38,
      10: 66,
      15: 94,
      21: 124,
      31: 180,
      62: 204,
      93: 320,
      185: 408,
    },
    "61-70": {
      7: 46,
      10: 94,
      15: 128,
      21: 152,
      31: 233,
      62: 273,
      93: 349,
      185: 459,
    },
    "71-74": {
      7: 92,
      10: 188,
      15: 256,
      21: 304,
      31: 466,
      62: 546,
      93: 698,
      185: 918,
    },
    "75-80": {
      7: 138,
      10: 282,
      15: 384,
      21: 456,
      31: 699,
      62: 819,
      93: 1047,
      185: 1377,
    },
  },
  Schnegen: {
    "1-15": {
      7: 13.5,
      10: 19.5,
      15: 25,
      21: 30.5,
      31: 36.5,
      62: 46.5,
      93: 83,
      185: 135.5,
    },
    "16-60": {
      7: 27,
      10: 39,
      15: 50,
      21: 61,
      31: 73,
      62: 93,
      93: 166,
      185: 271,
    },
    "61-70": {
      7: 32,
      10: 48,
      15: 62,
      21: 73,
      31: 92,
      62: 105,
      93: 186,
      185: 287,
    },
    "71-74": {
      7: 64,
      10: 96,
      15: 124,
      21: 146,
      31: 184,
      62: 210,
      93: 372,
      185: 574,
    },
    "75-80": {
      7: 96,
      10: 144,
      15: 186,
      21: 219,
      31: 276,
      62: 315,
      93: 558,
      185: 861,
    },
  },
  Premium: {
    Single: {
      "1-15": {
        7: 15.5,
        10: 26.5,
        15: 38,
        21: 50,
        31: 73,
        62: 82,
        93: 130,
        185: 165,
      },
      "16-60": {
        7: 31,
        10: 53,
        15: 76,
        21: 100,
        31: 146,
        62: 165,
        93: 260,
        185: 331,
      },
      "61-70": {
        7: 38,
        10: 76,
        15: 104,
        21: 123,
        31: 189,
        62: 222,
        93: 284,
        185: 373,
      },
      "71-74": {
        7: 76,
        10: 152,
        15: 208,
        21: 246,
        31: 378,
        62: 444,
        93: 568,
        185: 746,
      },
      "75-80": {
        7: 114,
        10: 228,
        15: 312,
        21: 369,
        31: 567,
        62: 666,
        93: 852,
        185: 1119,
      },
    },
    Inbound: {
      "1-15": {
        7: 12.5,
        10: 19,
        15: 26.5,
        21: 33.5,
        31: 40.5,
        62: 50,
        93: "Not applicable",
        185: "Not applicable",
      },
      "16-60": {
        7: 25,
        10: 38,
        15: 53,
        21: 67,
        31: 81,
        62: 100,
        93: "Not applicable",
        185: "Not applicable",
      },
      "61-70": {
        7: 29,
        10: 47,
        15: 62,
        21: 81,
        31: 96,
        62: 124,
        93: "Not applicable",
        185: "Not applicable",
      },
      "71-74": {
        7: 58,
        10: 94,
        15: 124,
        21: 162,
        31: 192,
        62: 248,
        93: "Not applicable",
        185: "Not applicable",
      },
      "75-80": {
        7: 87,
        10: 141,
        15: 186,
        21: 243,
        31: 288,
        62: 372,
        93: "Not applicable",
        185: "Not applicable",
      },
    },
  },
};

export default function TI_Calculator({ selectedPlan, setSelectedPlan }) {
  const [clientAge, setClientAge] = useState(1);
  const [clientType, setClientType] = useState("Individual");
  const [ageRange, setAgeRange] = useState("");
  //const [selectedPlan, setSelectedPlan] = useState("Gold");
  const [numberOfTravellers, setNumberOfTravellers] = useState(1);
  const [selectedTripType, setSelectedTripType] = useState("Single");
  const [selectedDestination, setSelectedDestination] = useState(
    "Excluding USA and Canada"
  );
  const [periodOfCover, setPeriodOfCover] = useState("1-7");
  const [warAndTerrorism, setWarAndTerrorism] = useState("no");
  const [totalPremium, setTotalPremium] = useState(0);
  //const [exchangeRate, setExchangeRate] = useState(0)

  // Show this field if plan or client type is individual
  const showIndividualPeriodOfCover =
    (clientType === "Individual" || clientType === "") &&
    selectedPlan !== "Student";

  // Show this field if plan or client type is student
  const showStudentPeriodOfCover =
    clientType === "Student" || selectedPlan === "Student";

  // Show this field if client type is group
  const showGroup = clientType === "Group";

  //current exchange rate
  const exchangeRate = 140;

  //fetchData
  const [calcData, setCalcData] = useState({
    client_age: '',
    client_type: '',
    type_of_plan: '',
    no_of_travellers: '',
    type_of_trip: '',
    destination: '',
    period_of_days: '',
    cover_of_days: '',
    war: '',
    total_premium: '',
    total_premium_exchange: '',
  })

  function handleCalcChange(e) {
    setCalcData({
      ...calcData,
      [e.target.id]: e.target.value,
    });
  }

  //fetch exchange rate function

  /** uncomment this code to fetch exchange rate from api
   useEffect(()=> {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch("https://api.apilayer.com/exchangerates_data/convert?to=KES&from=USD&amount=1", {
          headers: { apikey: "" },
        });
        const responseData = await response.json();
        console.log('responseData', responseData.result)
        setExchangeRate(responseData.result);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchExchangeRate();
  }, [])
  console.log('exchangeRate', exchangeRate)
  */

  //set agerange if client type is individual
  useEffect(() => {
    if (clientType === "Individual") {
      if (clientAge >= 1 && clientAge <= 15) {
        setAgeRange("1-15");
      } else if (clientAge >= 16 && clientAge <= 60) {
        setAgeRange("16-60");
      } else if (clientAge >= 61 && clientAge <= 70) {
        setAgeRange("61-70");
      } else if (clientAge >= 71 && clientAge <= 74) {
        setAgeRange("71-74");
      } else if (clientAge >= 75 && clientAge <= 80) {
        setAgeRange("75-80");
      } else {
        setAgeRange("");
        console.log(
          "You have to be below 80 yrs to qualify for an insurance plan"
        );
      }
    }
  }, [clientAge, clientType]);

  console.log("ageRange", ageRange);

  //calculate Total Premium
  function calculatePremium(e) {
    e.preventDefault();
    //calculate Group Premium
    if (clientType === "Group") {
      const ratePerDay = 5;
      let totalPremium = numberOfTravellers * periodOfCover * ratePerDay;
      if (warAndTerrorism === "yes") {
        totalPremium *= 1.25; // add 25% premium for War & Terrorism
      }
      setTotalPremium(totalPremium);
      handleSubmit();
    }
    //calculate Student Premium
    else if (clientType === "Student" || selectedPlan === "Student") {
      let totalPremium;
      if (selectedDestination === "Including USA and Canada") {
        if (periodOfCover === "1-90") {
          totalPremium = 257;
        } else if (periodOfCover === "91-180") {
          totalPremium = 334;
        } else {
          totalPremium = 488;
        }
      } else {
        if (periodOfCover === "1-90") {
          totalPremium = 213;
        } else if (periodOfCover === "91-180") {
          totalPremium = 277;
        } else {
          totalPremium = 362;
        }
      }
      if (warAndTerrorism === "yes") {
        totalPremium *= 1.25; // add 25% premium for War & Terrorism
      }
      totalPremium *= numberOfTravellers;
      setTotalPremium(totalPremium);
    }
    //calculate Individual Premium
    else if (clientType === "Individual" || selectedPlan !== "Student") {
      const rangeUpperBound = parseInt(periodOfCover.split("-")[1], 10); // extract the upper bound of the range
      console.log(rangeUpperBound);
      let totalPremium;
      console.log(totalPremium);
      if (selectedPlan === "Premium") {
        totalPremium =
          premiums[selectedPlan][selectedTripType][ageRange][rangeUpperBound];
      } else {
        totalPremium = premiums[selectedPlan][ageRange][rangeUpperBound];
      }
      //warandTerrorism is included in Gold Plans
      if (warAndTerrorism === "yes" && selectedPlan !== "Gold") {
        totalPremium *= 1.25; // add 25% premium for War & Terrorism
      }
      setTotalPremium(totalPremium);
    }
  }

  return (
    <div className="text-gray-600 font-body">
      <main className="px-16 py-6 body bg-white/80">
        <header>
          <h1 className="text-black text-4xl font-semibold">
            Travel Calculator
          </h1>
        </header>

        <div>
          <h4 className="font-bold mt-2 pb-2 border-b border-sky-500">
            Kindly Fill in all the details
          </h4>

          <div className="mt-8 flex gap-8 justify-between w-full flex-wrap">
            {/* Cards go here */}
            <div className="card flex-1">
              <div className="flex gap-8  flex-wrap justify-around w-max-[623px]">
                <div className="m-2">
                  <label className="age font-bold text-gray-500 text-small">
                    Client age:
                    <input
                      className="border border-gray-400 py-1 px-2 w-full font-body rounded font-light" type="number"
                      value={clientAge}
                      onChange={(e) => setClientAge(e.target.value)}
                      required
                      style={{ backgroundColor: 'white', color: 'black' }}
                    />
                    {(selectedPlan === "Student" || clientType === "Student") &&
                      (clientAge < 16 || clientAge > 45) && (
                        <small className="flex text-xs w-64" style={{ color: "red" }}>
                          Warning: Client age must be between 16 and 45 for
                          student plan. Please purchase an individual plan if
                          you are older than 45.
                        </small>
                      )}
                    {(clientType === "Individual") &&
                      (clientAge > 80) && (
                        <small className="flex text-xs w-64" style={{ color: "red" }}>
                          Warning: Maximum age at expiry of insurance is 80 yrs
                        </small>
                      )}
                  </label>
                  <br />
                  <label className="age font-bold text-gray-500 text-small">
                    Client type
                    <select
                      className="border border-gray-400 py-1 px-2 w-full font-body rounded font-light custom-select-dropdown" value={clientType}
                      onChange={(e) => setClientType(e.target.value)}
                      style={{ backgroundColor: 'white', color: 'black' }}
                    >
                      <option value="Individual"> Individual</option>
                      <option value="Student"> Student</option>
                      <option value="Group"> Group</option>
                    </select>
                  </label>
                  <br />
                  <label className="age font-bold text-gray-500 text-small">
                    Type of plan
                    <select
                      className="border border-gray-400 py-1 px-2 w-full font-body rounded font-light" value={selectedPlan}
                      onChange={(e) => setSelectedPlan(e.target.value)}
                      style={{ backgroundColor: 'white', color: 'black' }}
                    >
                      {clientType === "Individual" ? (
                        <>
                          <option value="Gold"> Gold</option>
                          <option value="Premium"> Premium</option>
                          <option value="Schnegen"> Schnegen</option>
                          <option value="Student"> Student</option>
                        </>
                      ) : clientType === "Student" ? (
                        <option value="Student"> Student</option>
                      ) : (
                        <option value="Group"> Group</option>
                      )}
                    </select>
                  </label>
                  <br />
                  <label className="age font-bold text-gray-500 text-small">
                    No. of travellers:
                    <input
                      className="border border-gray-400 py-1 px-2 w-full font-body rounded font-light" type="number"
                      value={numberOfTravellers}
                      onChange={(e) => setNumberOfTravellers(e.target.value)}
                      style={{ backgroundColor: 'white', color: 'black' }}
                      // set min and max value for no of travellers in a group
                      {...(clientType === "Group" && { min: "10", max: "500" })}
                      // set value to 1 if client is student or individual
                      {...((clientType === "Student" ||
                        clientType === "Individual") && { disabled: true })}
                    />
                    {clientType === "Group" &&
                      (numberOfTravellers < 10 || numberOfTravellers > 500) && (
                        <>
                          <br />
                          <small style={{ color: "red" }}>
                            Warning: Number of travellers must be between 10 and
                            500
                          </small>
                        </>
                      )}
                  </label>
                </div>
                <div>
                  <label className="age font-bold text-gray-500 text-small">
                    Type of trip
                    <select
                      className="border border-gray-400 py-1 px-2 w-full font-body rounded font-light" value={selectedTripType}
                      onChange={(e) => setSelectedTripType(e.target.value)}
                      style={{ backgroundColor: 'white', color: 'black' }}
                    >
                      {/* Only premium plan allows for single and inbound trip. The other plans (gold, student, schnegen, group) only allow for single trip. */}

                      {selectedPlan === "Premium" ? (
                        <>
                          <option value="Single"> Single</option>
                          <option value="Inbound"> Inbound</option>
                        </>
                      ) : (
                        <option value="Single"> Single</option>
                      )}
                    </select>
                  </label>
                  <br />
                  <label className="age font-bold text-gray-500 text-small">
                    Destination
                    <select
                      className="border border-gray-400 py-1 px-2 w-full font-body rounded font-light"
                      value={selectedDestination}
                      onChange={(e) => setSelectedDestination(e.target.value)}
                      style={{ backgroundColor: 'white', color: 'black' }}
                    >
                      {/* This code conditionally renders destination options based on the client type. */}
                      {clientType === "Student" ||
                        selectedPlan === "Student" ? (
                        <>
                          <option value="Including USA and Canada">
                            Including USA and Canada
                          </option>
                          <option value="Excluding USA and Canada">
                            Excluding USA and Canada
                          </option>
                        </>
                      ) : (
                        <option value="Including USA and Canada">
                          Including USA and Canada
                        </option>
                      )}
                    </select>
                  </label>
                  <br />
                  <label className="age font-bold text-gray-500 text-small">
                    Period of cover(days)
                    {showIndividualPeriodOfCover && (
                      <select
                        className="border border-gray-400 py-1 px-2 w-full font-body rounded font-light"
                        value={periodOfCover}
                        onChange={(e) => setPeriodOfCover(e.target.value)}
                        style={{ backgroundColor: 'white', color: 'black' }}
                      >
                        <option value="1-7"> 1-7</option>
                        <option value="8-10"> 8-10</option>
                        <option value="11-15"> 11-15</option>
                        <option value="16-21"> 16-21</option>
                        <option value="22-31"> 22-31</option>
                        <option value="32-62"> 32-62</option>
                        <option value="63-93">63-93</option>
                        <option value="94-185"> 94-185</option>
                        <option value=" Annual Multi trip">
                          {" "}
                          Annual Multi trip
                        </option>
                      </select>
                    )}
                    {/* show if plan or client type is student */}
                    {showStudentPeriodOfCover && (
                      <select
                        className="border border-gray-400 py-1 px-2 w-full font-body rounded font-light"
                        value={periodOfCover}
                        style={{ backgroundColor: 'white', color: 'black' }}
                        onChange={(e) => setPeriodOfCover(e.target.value)}>
                        <option value="1-90"> 1-90</option>
                        <option value="91-180"> 91-180</option>
                        <option value="Annual"> Annual</option>
                      </select>
                    )}
                    {/* show if client type is group */}
                    {showGroup && (
                      <div>
                        <label className="age font-bold text-gray-500 text-small">
                          <input
                            className="border border-gray-400 py-1 px-2 w-full font-body rounded font-light"
                            style={{ backgroundColor: 'white', color: 'black' }}
                            type="number"
                            value={periodOfCover}
                            {...(clientType === "Group" && {
                              min: "3",
                              max: "200",
                            })}
                            onChange={(e) => setPeriodOfCover(e.target.value)} />
                        </label>
                        <br />
                        {periodOfCover < 3 || periodOfCover > 200 ? (
                          <small style={{ color: "red" }}>
                            Period of cover must be between 3 and 200 days
                          </small>
                        ) : null}
                      </div>
                    )}
                  </label>
                  <br />

                  <div>
                    <label className="age font-bold text-gray-500 text-small">
                      War & Terrorism:
                    </label>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <label
                          className="age font-bold text-gray-500 text-small"
                          htmlFor="yes"
                        //style={{ color: warAndTerrorism === "yes" ? "black" : "white" }}
                        >
                          Yes
                        </label>
                        <input
                          className=" w-12 border-b border-gray-600"
                          type="radio"
                          id="yes"
                          name="warTerrorism"
                          value="yes"
                          checked={warAndTerrorism === "yes"}
                          onChange={(e) => setWarAndTerrorism(e.target.value)}
                          style={{ color: warAndTerrorism === "yes" ? "black" : "white" }}
                        />
                      </div>
                      <div className="flex items-center">
                        <label
                          className="age font-bold text-gray-500 text-small"
                          htmlFor="no"
                        //style={{ color: warAndTerrorism === "no" ? "black" : "white" }}
                        >
                          No
                        </label>
                        <input
                          className="w-12 border-b border-gray-800"
                          type="radio"
                          id="no"
                          name="warTerrorism"
                          value="no"
                          checked={warAndTerrorism === "no"}
                          onChange={(e) => setWarAndTerrorism(e.target.value)}
                          style={{ color: warAndTerrorism === "no" ? "black" : "white" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button className="btn " onClick={calculatePremium}>
                  Calculate
                </button>
              </div>
            </div>

            <div className="card w-min-[500px]">
              <div id="result">
                <h4 className="font-bold mt-2 pb-2 border-b border-gray-200 text-2xl text-red-600">
                  Insurance Cart
                </h4>
                <span className="block text-gray-500 text-small font-bold">
                  Total Premium
                </span>
                ${totalPremium}
                <br />
                <span className="block text-gray-500 text-small font-bold">
                  War $ Terrorism Extension
                </span>
                {warAndTerrorism === 'yes' && selectedPlan !== 'Gold' ? totalPremium * 0.25 : 0}
                <br />
                <span className="block text-gray-500 text-small font-bold">
                  Total Premium * Exchange Rate
                </span>
                KES {totalPremium * exchangeRate}
                <span className="block text-gray-500 text-small font-light mt-12">
                  Current Exchange rate * KES 140
                </span>
                <br />

                <div className="text-center">
                  <Link to='/benefits'>
                    <button className="rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider bg-secondary-300 text-white">
                      Proceed to Benefits
                    </button></Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );

  function handleSubmit(e) {
    fetch('http://localhost:8000/calculator', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(calcData)
    })
  }
}
