import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { baseUrl } from '../utils/baseUrl';
import axios from 'axios';

export default function AdminPostPage() {

  const { user, loading } = useSelector((state) => state.auth);
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const config = {
          headers: {
              'Content-Type': 'application/json'
          },
          withCredentials: true
        }
        const response = await axios.get(`${baseUrl}/post`, config);
        setPosts(response.data.jobPosts);
      } catch (error) {
        console.log('Failed to load queries: ', error);
      }
    };
    fetchPosts();
  }, []);

  const handleApproval = async (postId) => {
    try {
      const config = {
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true
      }
      const response = await axios.put(`${baseUrl}/post/approve/${postId}`, config);
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDelete = async (postId) => {
    try {
      const config = {
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true
      }
      const response = await axios.delete(`${baseUrl}/post/${postId}`, config);
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    (user && user.is_admin) ? 
    <div>
      <div className='flex items-center justify-center py-8 text-3xl font-extrabold text-white bg-blue-500'>
        Admin Panel
      </div>
      <div className='w-full flex flex-col justify-center items-center gap-6 mt-12'>
        <div className='w-[90%] flex justify-between items-center'>
          <span className='font-medium text-2xl text-gray-700'>Posts</span>
        </div>
        <div className="w-[90%] overflow-x-auto rounded shadow-md">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="w-[10%] py-2 px-4 bg-purple-500 text-white text-center">Posted By</th>
                <th className="w-[14%] py-2 px-4 bg-purple-500 text-white text-center">Title</th>
                <th className="w-[38%] py-2 px-4 bg-purple-500 text-white text-center">Description</th>
                <th className="py-2 px-4 bg-purple-500 text-white text-center">Created At</th>
                <th className="py-2 px-4 bg-purple-500 text-white text-center">Approval</th>
                <th className="py-2 px-4 bg-purple-500 text-white text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts?.length > 0 ? (
                posts.map((post, index) => (
                  <tr key={index} className="border-b">
                    <td className="w-[10%] py-2 px-4 border-r-2 text-center">{post.postedBy.name}</td>
                    <td className="w-[14%] py-2 px-4 border-r-2 text-center">{post.title}</td>
                    <td className="w-[38%] py-2 px-4 border-r-2 text-center">{post.description}</td>
                    <td className="w-[38%] py-2 px-4 border-r-2 text-center">{post.date}</td>
                    <td className="w-[38%] py-2 px-4 border-r-2 text-center">{post.isApprove === 'yes' ? 'Yes': 'No'}</td>
                    <td  className=' flex flex-col items-center gap-1'>
                      <button 
                        onClick={() => handleApproval(post._id)} 
                        className={`bg-green-500 text-white px-2 py-1 rounded ${post.isApprove === 'yes' ? "opacity-60":""}`}
                        disabled = {post.isApprove === 'yes'}
                      >
                        Approve
                      </button>
                      <button 
                        onClick={() => handleDelete(post._id)}
                        className={`bg-red-700 text-white px-2 py-1 rounded`}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="py-2 px-4 text-center" colSpan="6">
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
