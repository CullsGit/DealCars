import React, { useEffect, useState } from "react";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
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
        backendData.cars.map((car, idx) => <p key={idx}>{car}</p>)
      )}
    </div>
  );
}

export default App;
