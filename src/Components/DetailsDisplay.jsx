import React from 'react'
import Quote from './Quote'
import { useEffect, useState } from 'react'

function DetailsDisplay() {
    const [getDetails, setGetDetails]  = useState(null);

    const fetchData = () => {
        fetch('http://localhost:8000/clients')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const lastIndex = data.length - 1;
            const lastDetails = data[lastIndex];
            setGetDetails(lastDetails)
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

  return (
    <div>
        {getDetails && <Quote details = {getDetails}/>}
    </div>
  )
}

export default DetailsDisplay