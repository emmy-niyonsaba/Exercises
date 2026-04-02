import React, { useState, useEffect } from 'react';

function NameTransfer() {
  const initialNames = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

  const [names, setNames] = useState(initialNames);
  const [transferred, setTransferred] = useState([]);

  useEffect(() => {
    if (names.length === 0) return;

    const interval = setInterval(() => {
      setNames(prevNames => {
        if (prevNames.length === 0) return prevNames;

        const firstName = prevNames[0];

        // move name
        setTransferred(prev => [...prev, firstName]);

        return prevNames.slice(1); // remove first name
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [names]);

  return (
    <div>
      <h3>Original Names</h3>
      <ul style={{ backgroundColor: "red" }}>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <h3>Transferred Names</h3>
      <ul style={{ backgroundColor: "green" }}>
        {transferred.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default NameTransfer;