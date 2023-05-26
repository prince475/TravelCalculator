import React, { useState } from 'react';

const Table = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleAdd = () => {
    if (name && age) {
      const newData = [...data, { name, age }];
      setData(newData);
      setName('');
      setAge('');
    }
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">CRUD Table</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Age</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="bg-white">
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.age}</td>
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

      <div className="mt-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          className="border px-4 py-2 mr-2"
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={handleAgeChange}
          className="border px-4 py-2 mr-2"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Table;
