import React, { useState } from "react";

const Table = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [relation, setRelation] = useState("");

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
      const newData = [...data, { name, phone, relation }];
      setData(newData);
      setName("");
      setPhone("");
      setRelation("");
    }
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <div className="">
      <div className="mt-4 grid grid-cols-3 pr-1">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          className="border border-gray-400 py-1 px-2 w-full font-body rounded"
          style={{ backgroundColor: 'white', color: 'black' }}
        />
        <input
          type="number"
          placeholder="Age"
          value={phone}
          onChange={handlePhoneChange}
          className="border border-gray-400 py-1 px-2 w-full font-body rounded"
          style={{ backgroundColor: 'white', color: 'black' }}
        />
        <input
          type="tel"
          placeholder="Relation"
          value={relation}
          onChange={handleRelationChange}
          className="border border-gray-400 py-1 px-2 w-full font-body rounded"
          style={{ backgroundColor: 'white', color: 'black' }}
        />
        <br/>
      </div>
         
        <br/>
         
      <button
          onClick={handleAdd}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded"
      >
        Add
      </button>

      <br/>

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
  );
};

export default Table;
