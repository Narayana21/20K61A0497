import React, { useState, useEffect } from 'react';

function Fib() {
  const [fibonacciNumbers, setFibonacciNumbers] = useState([]);

  useEffect(() => {

    const url = 'http://20.244.56.144/numbers/fibo';


    fetch(url)
      .then((response) => response.json())
      .then((data) => {

        const { numbers } = data;
        setFibonacciNumbers(numbers);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>

      <ul>
        {fibonacciNumbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default Fib;
