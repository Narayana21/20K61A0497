import React, { useState, useEffect } from 'react';

function RandomNumbers() {
  const [randomNumbers, setRandomNumbers] = useState([]);

  useEffect(() => {
   
    const url = 'http://20.244.56.144/numbers/rand';

  
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        
        const { numbers } = data;
        setRandomNumbers(numbers);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
    
      <ul>
        {randomNumbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default RandomNumbers;
