import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Otp() {
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();  // Added for navigation

    const handleVerifyOtp = async () => {
        setLoading(true);
        setMessage('');

        try {
            const response = await axios.post('http://localhost:3001/accounts/verify-otp', { otp });

            setMessage(response.data.message);

            // Check if OTP was successfully verified
            if (response.data.message === 'OTP verified successfully') {
                const { role, username } = response.data;

                // Navigate to reset password page with username and role
                navigate(`/reset/${otp}/${username}`, { state: { role } });
            }
        } catch (error) {
            setMessage(error.response?.data?.error || 'An error occurred.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="w-full max-w-md space-y-5 p-6 bg-white shadow-md rounded-md">
                <h2 className="text-3xl font-bold text-center">Verify OTP</h2>
                <p className="text-center">Please enter your OTP.</p>

                <input
                    type="text"
                    placeholder="Enter your OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />

                <button
                    onClick={handleVerifyOtp}
                    className="w-full p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
                    disabled={loading}
                >
                    {loading ? 'Verifying...' : 'Verify OTP'}
                </button>

                {message && (
                    <p className="text-center mt-3 text-red-500">{message}</p>
                )}
            </div>
        </div>
    );
}
