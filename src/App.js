import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://swapi.dev/api/people/1/');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      
      <div className='data'>
      {data ? (
        <div>
          <h1>Person 1</h1>
          <h3>Name: {data.name}</h3>
          <h3>Height: {data.height}</h3>
          <h3>Mass: {data.mass}</h3>
          <h3>Gender: {data.gender}</h3>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      </div>
      
    </div>
  );
}

export default App;
