import React, { useState } from 'react';
import CustomInput from '../components/commonComponents/CustomInput';
import CustomButton from '../components/commonComponents/CustomButton';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {}; // Declare the newErrors variable
    setErrors({})
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }


    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log(formData);
    }
  };

  return (
    <div className="flex flex-col min-h-screen h-full lg:overflow-hidden md:flex-row overflow-y-scroll">
      {/* left side */}
      <div className="w-full md:w-[50%] bg-primary-100 flex flex-col items-center justify-center h-100vh">

      <div className="text-2xl text-primary-600 mb-4 text-center p-8">
          <p className="text-3xl font-semibold text-primary-700">Welcome to Daily Spend Tracker</p>
          <p className='text-2xl text-center mt-4' >Begin your journey to financial control by tracking your daily expenses.You don't need to see the whole staircase; just take the first step, and we'll guide you from there.</p>
        </div>

        <img className='h-fit w-fit' src='http://res.cloudinary.com/dfrhy6m3m/image/upload/v1698660808/evyrz79bq0rklkwe11ij.gif' />
      </div>

      {/* right side */}
      <div className='w-full md:w-[50%] bg-primary-300 flex flex-col items-center justify-center h-fIT p-4'>
        <div className='text-3xl font-bold mb-4 flex gap-3 md:flex-row md:items-center'>
          <p>Login</p>
          <p>to</p>
          <p className="animate-bounce">continue</p>
        </div>

        {/* form container */}
        <div className="w-full max-w-[600px] mx-4 md:mx-12 rounded-md p-4 bg-primary-100 shadow-inner">
          <CustomInput
            name="email"
            label="Email"
            type="text"
            onChange={handleInputChange}
            error={errors.email}
            value={formData.email}
            placeholder="example@gmail.com"
          />
          <CustomInput
            name="password"
            label="Password"
            type="password"
            onChange={handleInputChange}
            error={errors.password}
            value={formData.password}
            placeholder="Enter Your Password"
          />

          <CustomButton label="Login" isProcessing={false} onClick={handleSubmit} />
        </div>
        {/* form container over */}
      </div>
      {/* right side over */}
    </div>
  );
}
