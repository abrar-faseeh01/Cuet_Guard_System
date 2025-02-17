import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { baseUrl } from '../utils/baseUrl';
import axios from 'axios';

export default function AdminUserPage() {

  const { user, loading } = useSelector((state) => state.auth);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const config = {
          headers: {
              'Content-Type': 'application/json'
          },
          withCredentials: true
        }
        const response = await axios.get(`${baseUrl}/user`, config);
        setUsers(response.data.users);
      } catch (error) {
        console.log('Failed to load queries: ', error);
      }
    };
    fetchUsers();
  }, []);

  const handleMakeUserAdmin = async (userId) => {
    try {
      const config = {
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true
      }
      const response = await axios.put(`${baseUrl}/user/${userId}`, config);
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };

  

  return (
    (user && user.is_admin) ? 
    <div>
        <div className=' flex items-center justify-center py-8 text-3xl font-extrabold text-white bg-blue-500'>
            Admin Panel
        </div>
        <div className='w-full flex flex-col justify-center items-center gap-6 mt-12'>
        <div className='w-[90%] flex justify-between items-center'>
          <span className='font-medium text-2xl text-gray-700'>User List</span>

          {/* add search option */}

        </div>
        <div className="w-[90%] overflow-x-auto rounded shadow-md">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-purple-500 text-white text-center">Name</th>
                <th className="py-2 px-4 bg-purple-500 text-white text-center">Email</th>
                <th className="py-2 px-4 bg-purple-500 text-white text-center">Role</th>
                <th className="py-2 px-4 bg-purple-500 text-white text-center">Active</th>
                <th className="py-2 px-4 bg-purple-500 text-white text-center">Admin</th>
                <th className="py-2 px-4 bg-purple-500 text-white text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.length > 0 ? (
                users.map((us, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 px-4 border-r-2 text-center">{us.name}</td>
                    <td className="py-2 px-4 border-r-2 text-center">{us.email}</td>
                    <td className="py-2 px-4 border-r-2 text-center">{us.role}</td>
                    <td className="py-2 px-4 border-r-2 text-center">{us.is_active ? "True": "False"}</td>
                    <td className="py-2 px-4 border-r-2 text-center">{us.is_admin ? "True": "False"}</td>
                    <td className="py-2 px-4 flex flex-col justify-center items-center gap-2">
                        <button 
                            onClick={() => handleMakeUserAdmin(us._id)} 
                            className={`bg-green-500 text-white px-2 py-1 rounded ${us.is_admin ? 'opacity-60 cursor-not-allowed': ''}`}
                            disabled = {us.is_admin}
                        >
                            Make Admin
                        </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="py-2 px-4 text-center" colSpan="10">
                    No data found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>:<div>
      Access Denied
    </div>
  )
}
