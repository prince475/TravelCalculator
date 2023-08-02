import React from "react";
import { useState } from "react";
import Random from "./Random";
import Upload from "./Upload";
import { useNavigate } from "react-router-dom";


function HelloTravel() {
  const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cabo Verde',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Comoros',
    'Congo (Democratic Republic of the)',
    'Congo (Republic of the)',
    'Costa Rica',
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Eswatini',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kosovo',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'North Macedonia',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ];
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [relation, setRelation] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileUpload = (event, fileType) => {
    const file = event.target.files[0];

    if (file) {
      if (file.type.includes("image") && fileType === "image") {
        convertFileToBase64(file, (base64Data) => {
          setImageFile(base64Data);
        });
        setErrorMessage("");
      } else if (file.type === "application/pdf" && fileType === "pdf") {
        convertFileToBase64(file, (base64Data) => {
          setPdfFile(base64Data);
        });
        setErrorMessage("");
      } else {
        setErrorMessage(
          fileType === "image"
            ? "Please select a valid image file."
            : "Please select a valid PDF file."
        );
      }
    } else {
      setImageFile(null);
      setPdfFile(null);
      setErrorMessage("");
    }
  };

  const convertFileToBase64 = (file, callback) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64Data = reader.result;
      console.log('Base64 Data:', base64Data);
      callback(base64Data);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveFile = (fileType) => {
    if (fileType === "image") {
      setImageFile(null);
    } else if (fileType === "pdf") {
      setPdfFile(null);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleRelationChange = (e) => {
    setRelation(e.target.value);
  };


  const handleAdd = () => {
    if (name && phone && relation) {
      // console.log('logwdedwdws')
      const newData = [...data, { name, phone, relation }];
      setData(newData);
      setName("");
      setPhone("");
      setRelation("");
    }
    // else (
    //   console.log("HEHEHEHE")
    // )
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };


  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    national_id: "",
    phone: "",
    email: "",
    dob: "",
    purpose: "",
    mode: "",
    country: "",
    date: "",
    idFile: "",
    kraPin: "",
  });
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const [number, setNumber] = useState("");
  const handleNumberChange = (e) => {
    const value = e.target.value;
    setNumber(value);
  };

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  }

  const handleSubmit = (e) => {
    if (!isChecked) {
      setErrorMessage("Please review the terms before submitting.");
      return;
    }
    e.preventDefault();

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/xml");

    let raw =
      '<soapenv:Envelope   xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">\r\n<soap:Header    xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\r\n</soap:Header>\r\n<soapenv:Body>\r\n<ws:registerCustomer    xmlns:ws="http://ws.britam/">\r\n<!--Optional:-->\r\n<arg0>\r\n<Firstname>string</Firstname>\r\n<Lastname>string</Lastname>\r\n<nationalIdNumber>string</nationalIdNumber>\r\n<PhoneNumber>string</PhoneNumber>\r\n<Email>string</Email>\r\n<DateOfBirth>1914-09-29</DateOfBirth>\r\n<Purpose>string</Purpose>\r\n<Mode>string</Mode>\r\n<country>string</country>\r\n<DepatureDate>string</DepatureDate>\r\n<NextOfKin1>string</NextOfKin1>\r\n<NextOfKin2>string</NextOfKin2>\r\n<NextOfKin3>string</NextOfKin3>\r\n<IdImage>testing</IdImage>\r\n<KraPinImage>test</KraPinImage>\r\n</arg0>\r\n</ws:registerCustomer>\r\n</soapenv:Body>\r\n</soapenv:Envelope>';

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "http://10.10.4.62:9005/TravelCalculator/ProxyService/TravelPipelineProxyService",
      requestOptions
    )
      .then((response) => {
        response.text();
        setFormData({
          firstname: "",
          lastname: "",
          national_id: "",
          phone: "",
          email: "",
          dob: "",
          purpose: "",
          mode: "",
          country: "",
          date: "",
          idFile: "",
          kraPin: "",
        });
      })
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    setErrorMessage("");
    navigate("/payments");







    const handleSubmit = async (event) => {
      event.preventDefault();

      // Handle the submission logic here, such as sending the Base64 data to the server

      // Example: Create a FormData object and append the Base64 data
      const formData = new FormData();
      if (imageFile) {
        formData.append("imageFile", imageFile);
      }
      if (pdfFile) {
        formData.append("pdfFile", pdfFile);
      }

      try {
        const response = await fetch("http://localhost:8000/clients", {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
  };

  return (
    <div className="min-h-screen py-5 body">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row  bg-white/80 rounded mx-auto shadow-l overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-4 ">
            {/* add background image later --bg-[url(../Components/Images/visa.png)] bg-no-repeat bg-cover bg-center */}
            <h1 className="text-2xl mb-3 font-bold font-body">
              Ensure you have filled the Calculator
            </h1>
            <form action="#">
              <div className="grid grid-cols-2 gap-5 pt-2">
                <label className="firstName text-gray-500 text-small">
                  First Name
                  <input
                    type="text"
                    id="firstname"
                    required
                    value={formData.firstname}
                    onChange={handleChange}
                    placeholder="John"
                    className="border border-gray-400 py-1 px-2 font-body rounded"
                    style={{ backgroundColor: 'white', color: 'black' }}
                  ></input>
                </label>
                <label className="lastName text-gray-500 text-small">
                  Last Name
                  <input
                    type="text"
                    id="lastname"
                    required
                    value={formData.lastname}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="border border-gray-400 py-1 px-2 font-body rounded"
                    style={{ backgroundColor: 'white', color: 'black' }}
                  ></input>
                </label>
              </div>
              <div className="mt-5">
                <label className="idNo text-gray-500 text-small">
                  National ID/Passport
                  <input
                    type="number"
                    id="national_id"
                    required
                    value={formData.national_id}
                    onChange={handleChange}
                    placeholder="12345678"
                    className="border border-gray-400 py-1 px-2 w-full font-body rounded"
                    style={{ backgroundColor: 'white', color: 'black' }}
                  ></input>
                </label>
              </div>
              <div className="mt-5">
                <label className="phoneNo text-gray-500 text-small">
                  Phone Number
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="07XXXXXXXX"
                    className="border border-gray-400 py-1 px-2 w-full font-body rounded"
                    style={{ backgroundColor: 'white', color: 'black' }}
                  ></input>
                </label>
              </div>
              <div className="mt-5">
                <label className="email text-gray-500 text-small">
                  Email
                  <input
                    type="email address"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="border border-gray-400 py-1 px-2 w-full font-body rounded"
                    style={{ backgroundColor: 'white', color: 'black' }}
                  ></input>
                </label>
              </div>
              <div className="mt-5">
                <label className="dob text-gray-500 text-small">
                  Date of Birth
                  <input
                    type="date"
                    id="dob"
                    required
                    value={formData.dob}
                    onChange={handleChange}
                    placeholder="dd-mm-yy"
                    min="1997-01-01"
                    max="2023-05-25"
                    className="border border-gray-400 py-1 px-2 w-full font-body rounded"
                    style={{ backgroundColor: 'white', color: 'black' }}
                  ></input>
                </label>
              </div>

              <div className="mt-5 flex flex-col-3 gap-5">
                <label className="nextOfKin text-gray-500 text-small">
                  Next of Kin
                  <div className="">
                    <div className="mt-4 grid grid-cols-3 pr-1">
                      <input
                        required
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={handleNameChange}
                        className="border border-gray-400 py-1 px-2 w-full font-body rounded"
                        style={{ backgroundColor: 'white', color: 'black' }}
                      />
                      <input
                        required
                        type="number"
                        placeholder="Age"
                        value={phone}
                        onChange={handlePhoneChange}
                        className="border border-gray-400 py-1 px-2 w-full font-body rounded"
                        style={{ backgroundColor: 'white', color: 'black' }}
                      />
                      <input
                        required
                        type="tel"
                        placeholder="Relation"
                        value={relation}
                        onChange={handleRelationChange}
                        className="border border-gray-400 py-1 px-2 w-full font-body rounded"
                        style={{ backgroundColor: 'white', color: 'black' }}
                      />
                    </div>

                    <button
                      onClick={handleAdd}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded"
                    >
                      Add
                    </button>

                    <table className="w-full border">
                      <thead>
                        <tr className="bg-gray-200">
                          <th className="border px-4 py-2">Name</th>
                          <th className="border px-4 py-2">Phone Number</th>
                          <th className="border px-4 py-2">Relation</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item, index) => (
                          <tr key={index} className="bg-white">
                            <td className="border px-4 py-2">{item.name}</td>
                            <td className="border px-4 py-2">{item.phone}</td>
                            <td className="border px-4 py-2">{item.relation}</td>
                            <td className="border px-4 py-2">
                              <button
                                className="bg-red-500 hover:bg-red-600 text-white font-bold px-2 py-1 rounded"
                                onClick={() => handleDelete(index)}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </label>
              </div>
            </form>
          </div>
          <div className="w-full lg:w-1/2 py-20 p-12 border border-gray-200 ">
            <form action="#">
              <div className="grid grid-cols-2 gap-5">
                <label className="purpose text-gray-500 text-small">
                  Purpose of Travel
                  <select
                    className="border border-gray-400 py-1 px-2 w-full font-body rounded"
                    id="purpose"
                    required
                    value={formData.purpose}
                    onChange={handleChange}
                    style={{ backgroundColor: 'white', color: 'black' }}
                  >
                    <option value="Leisure">Leisure</option>
                    <option value="Education">Education</option>
                    <option value="Business">Business</option>
                    <option value="Personal">Personal</option>
                  </select>
                </label>
                <label className="lastName text-gray-500 text-small">
                  Mode of Travel
                  <select
                    className="border border-gray-400 py-1 px-2 w-full font-body rounded"
                    id="mode"
                    required
                    value={formData.mode}
                    onClick={handleChange}
                    style={{ backgroundColor: 'white', color: 'black' }}
                  >
                    <option value="Leisure">Plane</option>
                  </select>
                </label>
              </div>
              <div className="mt-5">
                <label className="purpose text-gray-500 text-small">
                  Country of Travel
                  <select
                    className="border border-gray-400 py-1 px-2 w-full font-body rounded"
                    id="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    style={{ backgroundColor: 'white', color: 'black' }}
                  >
                    {countries.map((country, index) => (
                      <option key={index} value={country}>{country}</option>
                    ))}

                  </select>
                </label>
              </div>
              <div className="mt-5">
                <label className="quotationDate text-gray-500 text-small">
                  Date of Departure
                  <input
                    type="date"
                    id="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    placeholder="Quotation Date"
                    className="border border-gray-400 py-1 px-2 w-full font-body rounded"
                    style={{ backgroundColor: 'white', color: 'black' }}
                  ></input>
                </label>
              </div>

              {/* <Upload /> */}
              <div className="flex mt-5">
                <label className="text-gray-500 text-small">
                  Upload ID File
                  <input
                    className="border-gray-400 font-body rounded"
                    type="file"
                    id="idFile"
                    accept=".pdf, image/*"
                    onChange={(event) => handleFileUpload(event, "image")}
                  />
                  {imageFile && (
                    <div>
                      <p>Selected Image:</p>
                      <img src={imageFile} alt="Uploaded" />
                      <button
                        className="rounded-full py-2 px-3 text-xs font-bold cursor-pointer tracking-wider bg-secondary-500 text-white"
                        onClick={() => handleRemoveFile("image")}
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </label>

                <label className="text-gray-500 text-small">
                  Upload KRA Pin File
                  <input
                    className="border-gray-400 font-body rounded"
                    type="file"
                    id="kraPin"
                    accept=".pdf, image/*"
                    onChange={(event) => handleFileUpload(event, "pdf")}
                  />
                  {pdfFile && (
                    <div>
                      <p>Selected PDF: {pdfFile.name}</p>
                      <button
                        className="rounded-full py-2 px-3 text-xs font-bold cursor-pointer tracking-wider bg-secondary-500 text-white"
                        onClick={() => handleRemoveFile("pdf")}
                      >
                        Remove
                      </button>
                    </div>
                  )}

                  {errorMessage && (
                    <p className="error text-secondary-500">{errorMessage}</p>
                  )}
                </label>
              </div>


              <div className="pt-6">
                <input
                  type="checkbox"
                  onChange={handleCheckboxChange}
                  className="border border-gray-400 font-body rounded"
                ></input>
                <span>
                  I have reviewed the terms for{" "}
                  <a
                    href="/policies"
                    className="text-orange-500 font-semibold font-body"
                  >
                    Travel Insurance policies
                  </a>
                </span>
              </div>

              {/* Buttons */}
              <div className="flex text-center pt-6 gap-10">
                <button className="btn" onClick={handleSubmit}>
                  Proceed To Payment
                </button>

                {/* <button className="btn" onClick={handleQuote}>
                  Get a Quote
                </button> */}
              </div>
              {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  // function handleSubmit(e) {
  //   if (!isChecked) {
  //     setErrorMessage("Please review the terms before submitting.");
  //     return;
  //   }
  //   e.preventDefault();
  //   fetch('http://localhost:8000/clients', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(formData)
  //   })

  //   setErrorMessage('');
  //   navigate('/payments')
  // }
  function handleQuote(e) {
    if (!isChecked) {
      setErrorMessage("Please review the terms before submitting.");
      return;
    }
    setErrorMessage("");
    handleSubmit(e);
    navigate("/details");
  }

}

export default HelloTravel;
