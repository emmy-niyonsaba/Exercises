import React from 'react'
import { fetchTool } from '../hooks/fetchData'
function User() {
    const {data,error,loading} = fetchTool('https://dummy.restapiexample.com/api/v1/employees');
    
     if (loading) return <p>Loading.....</p>;
  if (error) return <p>Error.....{error.message}</p>; 
  return (
    <div className='App'>
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
  
    </div>
  );
}

export default User
