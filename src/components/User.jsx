import React from 'react'
import { fetchTool } from '../hooks/fetchData'
function User() {

    const {data,error,loading} = fetchTool('https://jsonplaceholder.typicode.com/users');
    
    if (loading) return (
      <div className='flex items-center justify-center py-8'>
        <div className='text-lg text-red-600 font-semibo500d'>Loading.....</div>
      </div>
    );
    
    if (error) return (
      <div className='bg-red-50 border-2 border-red-600 text-red-600 rounded-lg p-6 font-semibold'>
        Error: {error.message}
      </div>
    );
    
    return (
      <div className='space-y-6'>
        <div className='overflow-x-auto shadow-lg rounded-lg'>
          <table className='w-full border-collapse'>
            <thead>
              <tr className='bg-red-600 text-white'>
                <th className='px-6 py-4 text-left font-bold'>ID</th>
                <th className='px-6 py-4 text-left font-bold'>Name</th>
                <th className='px-6 py-4 text-left font-bold'>Email</th>
                <th className='px-6 py-4 text-left font-bold'>Phone</th>
                <th className='px-6 py-4 text-left font-bold'>Website</th>
                <th className='px-6 py-4 text-left font-bold'>Company</th>
              </tr>
            </thead>
            <tbody>
              {data && data.map((user, index) => (
                <tr 
                  key={user.id}
                  className={`border-b border-red-200 hover:bg-red-50 transition duration-200 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-red-50'
                  }`}
                >
                  <td className='px-6 py-4 font-semibold text-red-600'>{user.id}</td>
                  <td className='px-6 py-4 font-medium text-gray-800'>{user.name}</td>
                  <td className='px-6 py-4 text-gray-700'>{user.email}</td>
                  <td className='px-6 py-4 text-gray-700'>{user.phone}</td>
                  <td className='px-6 py-4 text-blue-600 hover:underline'>
                    <a href={`https://${user.website}`} target='_blank' rel='noopener noreferrer'>
                      {user.website}
                    </a>
                  </td>
                  <td className='px-6 py-4 text-gray-700'>{user.company.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {data && data.length > 0 && (
          <div className='text-center text-sm text-red-600 font-medium'>
            Showing {data.length} users
          </div>
        )}
      </div>
    );
}

export default User
