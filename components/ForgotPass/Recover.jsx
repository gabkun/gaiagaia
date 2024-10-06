import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Recover() {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [timer, setTimer] = useState(0); // State to handle the timer

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      const response = await axios.get(`http://localhost:3001/accounts/forgot-password/${username}`);
      setMessage(response.data.message);
      navigate(`/recover/otp/${username}`);
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.error);
      } else {
        setError('Something went wrong. Please try again.');
      }
    }

    // Start the 30-second timer after the button is clicked
    setTimer(30);
  };

  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown); // Clear timeout on unmount or when timer changes
    }
  }, [timer]);

  return (
    <main id="content" role="main" className="w-full max-w-md mx-auto p-6">
      <div className="mt-7 bg-white rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Forgot password?</h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Remember your password?
              <a className="text-blue-600 decoration-2 hover:underline font-medium" href="#">
                Login here
              </a>
            </p>
          </div>

          <div className="mt-5">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-y-4">
                <div>
                  <label htmlFor="username" className="block text-sm font-bold ml-1 mb-2 dark:text-white">Username</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      id="username" 
                      name="username" 
                      value={username} 
                      onChange={handleUsernameChange}
                      className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" 
                      required 
                    />
                  </div>
                </div>

                {error && <p className="text-xs text-red-600 mt-2">{error}</p>}
                {message && <p className="text-xs text-green-600 mt-2">{message}</p>}

                <button 
                  type="submit" 
                  className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                  disabled={timer > 0} // Disable button if the timer is running
                >
                  {timer > 0 ? `Wait ${timer} seconds` : 'Reset password'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
