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
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
      <div>
        <h3 className='text-xl font-bold text-red-500 mb-4'>Original Names</h3>
        <ul className='bg-red-500 text-white rounded-lg shadow-lg p-4 space-y-2'>
          {initialNames.map((name, index) => (
            <li key={index} className='py-2 px-3 bg-red-700 rounded'>{name}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className='text-xl font-bold text-red-500 mb-4'>Transferred Names</h3>
        {transferredNames.length < 1 ? (
          <div className='bg-white border-2 border-red-500 text-red-500 rounded-lg shadow-lg p-6 text-center'>
            <p className='font-semibold'>No transferred names yet</p>
          </div>
        ) : (
          <ul className='bg-white border-2 border-red-500 rounded-lg shadow-lg p-4 space-y-2'>
            {transferredNames.map((name, index) => (
              <li key={index} className='py-2 px-3 bg-red-50 text-red-500 rounded font-semibold'>{name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default NameTransfer;