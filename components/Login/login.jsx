import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Nav from '../nav/nav';

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); 

    try {
      const response = await axios.post('http://localhost:3001/accounts/login', user);
      console.log(response.data);
      alert('Log in successful');

 
      switch (response.data.user.role) {
        case 3:
          navigate(`/admindashboard/${response.data.user.userid}`);
          break;
        case 1:
          navigate(`/userdashboard/${response.data.user.userid}`);
          break;
        case 2:
          navigate(`/clientdashboard/${response.data.user.userid}`);
          break;
        default:
          navigate('/dashboard');
      }
    } catch (error) {
      console.error('Error during login:', error);
      if (error.response && error.response.status === 401) {
        setError('Invalid username or password');
      } else {
        setError('An unexpected error occurred. Please try again later.');
      }
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
    <Nav />

    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-blue-600">
    <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Sign In</h2>
      {error && <p className="text-red-500 text-center mb-6">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">Username</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <div className="mb-8">
          <label className="block text-gray-700 font-medium mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Login
        </button>
      </form>
      <p className="text-center text-gray-600 mt-6">
        Don't have an account?{' '}
        <a href="/signup" className="text-blue-500 hover:underline">
          Sign up
        </a>
      </p>
      <p className="text-center text-gray-600 mt-6">
       {' '}
        <a href="/recover" className="text-blue-500 hover:underline">
        Forgot Password?
        </a>
      </p>
    </div>
  </div>
  </>
  );
}