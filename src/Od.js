import React, { useState, useEffect } from 'react';

function OddNumbers() {
  const [oddNumbers, setOddNumbers] = useState([]);

  useEffect(() => {
  
    const url = 'http://20.244.56.144/numbers/odd';


    fetch(url)
      .then((response) => response.json())
      .then((data) => {

        const { numbers } = data;
        setOddNumbers(numbers);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>

      <ul>
        {oddNumbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default OddNumbers;
