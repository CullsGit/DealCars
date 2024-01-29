import React, { useEffect, useState } from "react";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api/cars")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <div>
      {typeof backendData.cars === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backendData.cars.map((car, idx) => (
          <div key={idx}>
            <p>
              {car.make}: {car.model}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
