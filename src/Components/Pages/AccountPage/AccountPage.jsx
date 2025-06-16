import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react'; // lucide-react for icons

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState('register');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);
    const bdPhoneRegex = /^01[0-9]{9}$/;
    if (!bdPhoneRegex.test(value)) {
      setPhoneError('Phone number must be a valid Bangladeshi number starting with 01 and 11 digits long.');
    } else {
      setPhoneError('');
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(value.length < 8 ? 'Password must be at least 8 characters long.' : '');
  };

  return (
    <div>
        <div className="text-center my-10 w-9/12 mx-auto">
        <h2 className=" text-2xl  font-bold">Account</h2>
        <p className="text-xs w-10/12 mx-auto font-semibold mt-2">
          Login if you already our customer. Otherwise please register yourself.


        </p>
        <hr
          className="h-1 w-3/12 md:w-1/12 bg-[#45B6E7] mx-auto mt-3 rounded"
          style={{ height: "6px" }}
        />
      </div>
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-6xl w-full grid md:grid-cols-2 bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Side Form */}
        <div className="p-8">
          

          {/* Tabs */}
          <div className="flex mb-6 border rounded overflow-hidden">
            <button
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-2 text-sm font-medium ${activeTab === 'login' ? 'bg-gray-200' : ''}`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab('register')}
              className={`flex-1 py-2 text-sm font-medium ${activeTab === 'register' ? 'bg-gray-200' : ''}`}
            >
              Registration
            </button>
          </div>

          {/* Registration Form */}
          {activeTab === 'register' && (
            <form className="space-y-4">
              <h3 className="text-xl text-center font-semibold">Registration</h3>
              <p className="text-xs text-center text-gray-500 mb-3">Change your password here. After saving, you'll be logged out.</p>

              <div>
                <label className="block text-sm font-medium">Name *</label>
                <input type="text" placeholder="your name" className="w-full border px-3 py-2 rounded" />
              </div>

              <div>
                <label className="block text-sm font-medium">Email *</label>
                <input type="email" placeholder="your email" className="w-full border px-3 py-2 rounded" />
              </div>

              <div>
                <label className="block text-sm font-medium">Phone *</label>
                <input
                  type="text"
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="01XXXXXXXXX"
                  className={`w-full border px-3 py-2 rounded ${phoneError ? 'border-red-500' : ''}`}
                />
                {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium">Password *</label>
                <div className="relative">
                  <input
                    type={passwordVisible ? 'text' : 'password'}
                    value={password}
                    onChange={handlePasswordChange}
                    className={`w-full border px-3 py-2 rounded ${passwordError ? 'border-red-500' : ''}`}
                  />
                  <button
                    type="button"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
                  >
                    {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
              </div>

              <button className="w-full bg-[#0094C6] hover:bg-[#0077a4] text-white py-2 rounded">
                Register
              </button>
            </form>
          )}

          {/* Login Form */}
          {activeTab === 'login' && (
            <form className="space-y-4">
               <h3 className="text-xl text-center font-semibold">Login</h3>
              <p className="text-xs text-center text-gray-500 mb-3">Make changes to your account here. Click save when you're done.</p>

              <div>
                <label className="block text-sm font-medium">Email *</label>
                <input type="email" placeholder="your email" className="w-full border px-3 py-2 rounded" />
              </div>

              <div>
                <label className="block text-sm font-medium">Password *</label>
                <div className="relative">
                  <input
                    type={passwordVisible ? 'text' : 'password'}
                    value={password}
                    onChange={handlePasswordChange}
                    className={`w-full border px-3 py-2 rounded ${passwordError ? 'border-red-500' : ''}`}
                  />
                  <button
                    type="button"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
                  >
                    {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
              </div>

              <div className="text-right">
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Forgot Password?
                </a>
              </div>

              <button className="w-full bg-[#0094C6] hover:bg-[#0077a4] text-white py-2 rounded">
                Login
              </button>
            </form>
          )}
        </div>

        {/* Right Side SVG */}
        <div className="hidden md:flex items-center justify-center bg-blue-50">
          <img src="/assets/account.svg" alt="Login Illustration" className="w-80" />
        </div>
      </div>
    </div>
    </div>
  );
}
