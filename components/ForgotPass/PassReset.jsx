import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function ResetPassword() {
  const location = useLocation();
  const { role } = location.state || {};  // Get role from navigation state
  const { username } = useParams();  // Get username from URL params
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);


  const handlePasswordReset = async () => {
    try {
      const response = await axios.post(`http://localhost:3001/client/reset-password/${username}`, {
        newPassword,
      });

      setMessage(response.data.message);

      // Navigate or show success message
      if (response.data.message === 'Password updated successfully') {
        navigate('/login');  // Redirect to login page after successful password reset
      }
    } catch (error) {
      setMessage(error.response?.data?.error || 'An error occurred.');
    }
  };
    const handlePasswordResetUser = async () => {
    try {
      const response = await axios.post(`http://localhost:3001/users/reset-password/${username}`, {
        newPassword,
      });

      setMessage(response.data.message);

      // Navigate or show success message
      if (response.data.message === 'Password updated successfully') {
        navigate('/login');  // Redirect to login page after successful password reset
      }
    } catch (error) {
      setMessage(error.response?.data?.error || 'An error occurred.');
    }
  };
    return (
        <div>
            <h2>Reset Password</h2>
            {role === 'CLIENT' ? (
            <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
              <input
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handlePasswordReset}
                disabled={loading}
                className={`w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Resetting...' : 'Reset Password'}
              </button>
              {message && <p className="mt-4 text-center text-green-500">{message}</p>}
            </div>
            ) : (
            <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
              <input
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handlePasswordResetUser}
                disabled={loading}
                className={`w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Resetting...' : 'Reset Password'}
              </button>
              {message && <p className="mt-4 text-center text-green-500">{message}</p>}
            </div>
            )}
        </div>
    );
}