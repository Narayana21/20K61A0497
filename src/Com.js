import React, { useState, useEffect } from 'react';

function CombinedNumbers() {
  const [combinedNumbers, setCombinedNumbers] = useState([]);

  useEffect(() => {
    
    const urls = [
      'http://20.244.56.144/numbers/prime',
      'http://20.244.56.144/numbers/rand',
      'http://20.244.56.144/numbers/odd',
      'http://20.244.56.144/numbers/fibo'
    ];

    const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error fetching data from ${url}`);
        }
        const data = await response.json();
        return data.numbers;
      } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
        return [];
      }
    };

    const fetchAndCombineData = async () => {
      const combinedData = new Set();
      for (const url of urls) {
        const data = await fetchData(url);
        data.forEach((number) => combinedData.add(number));
      }

      const sortedData = Array.from(combinedData).sort((a, b) => a - b);
      const jsonResult = JSON.stringify({ numbers: sortedData });


      setCombinedNumbers(jsonResult);
    };

    fetchAndCombineData();
  }, []);

  return (
    <div>
      
      <pre>{combinedNumbers}</pre>
    </div>
  );
}

export default CombinedNumbers;
