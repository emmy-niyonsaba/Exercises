import React, { useState, useEffect } from 'react';

function NameTransfer() {
  const [initialNames, setInitialNames] = useState(['Alice', 'Bob', 'Charlie', 'David', 'Eve']);

  const [transferredNames, setTransferredNames] = useState([]);

  useEffect(() => {
    if (initialNames.length === 0) return;

    setTimeout(() => {
      const firstName = initialNames[0]
        setInitialNames(prev => prev.slice(1));
      setTransferredNames(prev => [...prev, firstName]);
    }, 2000);


  }, [initialNames]);

  return (
    <div>
      <h3>Original Names</h3>
      <ul style={{ backgroundColor: "red" }}>
        {initialNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <h3>Transferred Names</h3>

      {transferredNames.length<1 && (<h1>No transfered name yet now</h1> )}
      <ul style={{ backgroundColor: "green" }}>
        {transferredNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default NameTransfer;