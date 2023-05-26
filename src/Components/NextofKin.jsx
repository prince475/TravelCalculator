import React from 'react';
import { useState } from 'react';

function NextofKin() {
  const [serviceList, setServiceList] = useState([{ service: '', relation: '', phoneNumber: '' }]);

  const handleServiceAdd = () => {
    setServiceList(serviceList.concat({ service: '', relation: '', phoneNumber: '' }));
  };

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  const handleServiceAdded = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };

  return (
    <div className='flex justify-between'>
      <form className='flex flex-col'>
        <div className='form-field'>
          <div className='services'>
            {serviceList.map((singleService, index) => (
              <div key={index} className='input-field flex flex-row'>
                <div className='flex flex-col'>
                  
                  <input
                    className='border-b mb-1 mr-1'
                    name='service'
                    type='text'
                    id={`service-${index}`}
                    required
                    value={singleService.service}
                    onChange={(e) => handleServiceAdded(e, index)}
                  />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor={`relation-${index}`} className='label'>Relation</label>
                  <input
                    className='border-b mb-1 mr-1'
                    name='relation'
                    type='text'
                    id={`relation-${index}`}
                    required
                    value={singleService.relation}
                    onChange={(e) => handleServiceAdded(e, index)}
                  />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor={`phoneNumber-${index}`} className='label'>Phone Number</label>
                  <input
                    className='border-b mb-1 mr-1'
                    name='phoneNumber'
                    type='text'
                    id={`phoneNumber-${index}`}
                    required
                    value={singleService.phoneNumber}
                    onChange={(e) => handleServiceAdded(e, index)}
                  />
                </div>

                {index > 0 && (
                  <button
                    type='button'
                    className='remove-btn'
                    onClick={() => handleServiceRemove(index)}
                  >
                    <span>Remove</span>
                  </button>
                )}
              </div>
            ))}
          </div>

          <button
            type='button'
            className='add-btn rounded-full py-2 px-3 text-xs font-bold cursor-pointer tracking-wider bg-secondary-300 text-white'
            onClick={handleServiceAdd}
          >
            <span>Add</span>
          </button>
        </div>

        {/* <div className='output ml-3 flex-1'>
          <h2>Output</h2>
          {serviceList.map((singleService, index) => (
            <ul key={index}>
              {singleService.service && (
                <li>
                  Service: {singleService.service}, Relation: {singleService.relation}, Phone Number: {singleService.phoneNumber}
                </li>
              )}
            </ul>
          ))}
        </div> */}

        <div>
          <table>
            <thead>
              <tr>
                <th>List</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                Service: {}
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
}

export default NextofKin;
