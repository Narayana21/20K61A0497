import React, { useState, useEffect } from 'react';

function Prime() {
  const [primeNumbers, setPrimeNumbers] = useState([]);

  useEffect(() => {
 
    const url = 'http://20.244.56.144/numbers/primes';

    
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
       
        const { numbers } = data;
        setPrimeNumbers(numbers);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
     
      <ul>
        {primeNumbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default Prime;
