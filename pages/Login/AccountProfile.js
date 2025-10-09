import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AccountProfile = () => {
  const [name, setName] = useState('');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [isBroker, setIsBroker] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No token found. Please log in again.');
        return;
      }

      try {
        const res = await axios.get('http://localhost:8000/api/user/profile', {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ Fixed
          },
        });

        const { name, identifier, type } = res.data;
        setName(name);
        setIdentifier(identifier);
        setIsBroker(type === 'Broker');
      } catch (err) {
        console.error('Error loading profile:', err);
        setError('Error loading profile.');
      }
    };

    fetchProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      await axios.patch(
        'http://localhost:8000/api/user/profile',
        {
          name,
          identifier,
          password,
          type: isBroker ? 'Broker' : '',
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ Fixed
          },
        }
      );

      setSuccessMsg('Profile updated successfully!');
      setPassword('');
      setTimeout(() => setSuccessMsg(''), 3000);
    } catch (err) {
      console.error('Update failed:', err);
      setError('Error updating profile.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center">Your Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Username Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Full Name:
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            //   placeholder="Enter your name"
              placeholder={name ? '' : 'Enter your name'}    
              required
            />
          </div>

          {/* Identifier Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Phone/Email:
            </label>
            <input
              type="text"
              value={identifier}
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
              disabled
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              New Password:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          {/* Broker Checkbox */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={isBroker}
              onChange={() => setIsBroker(!isBroker)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label className="text-gray-700">Are you a broker?</label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Save Changes
          </button>

          {/* Messages */}
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {successMsg && <p className="text-green-600 text-sm">{successMsg}</p>}
        </form>
      </div>
    </div>
  );
};

export default AccountProfile;

