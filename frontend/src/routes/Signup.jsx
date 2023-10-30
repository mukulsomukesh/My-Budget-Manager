import React, { useState } from 'react';
import CustomInput from '../components/commonComponents/CustomInput';
import CustomButton from '../components/commonComponents/CustomButton';

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {}; // Declare the newErrors variable
    setErrors({})
    if (!formData.fullName) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.mobileNumber) {
      newErrors.mobileNumber = 'Mobile Number is required';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formData.password)) {
      newErrors.password = 'Password must have at least 8 characters with at least one uppercase letter, one lowercase letter, one number, and one special character';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
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
      <div className="w-full md:w-[50%] bg-primary-100 h-fit">
        <img className='h-fit w-fit' src='https://res.cloudinary.com/dfrhy6m3m/image/upload/v1698649570/l8ojogkd9wf9q7ac1dxo.gif' />
      </div>

      {/* right side */}
      <div className='w-full md:w-[50%] bg-primary-300 flex flex-col items-center justify-center h-fIT p-4'>
        <div className='text-3xl font-bold mb-4 flex gap-3 md:flex-row md:items-center'>
          <p>Signup</p>
          <p>It's</p>
          <p className="animate-bounce">Free</p>
        </div>

        {/* form container */}
        <div className="w-full max-w-[600px] mx-4 md:mx-12 rounded-md p-4 bg-primary-100 shadow-inner">
          <CustomInput
            name="fullName"
            label="Full Name"
            type="text"
            onChange={handleInputChange}
            error={errors.fullName}
            value={formData.fullName}
            placeholder="Enter Your Full Name"
          />
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
            name="mobileNumber"
            label="Mobile Number"
            type="text"
            onChange={handleInputChange}
            error={errors.mobileNumber}
            value={formData.mobileNumber}
            placeholder="9876543210"
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
          <CustomInput
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            onChange={handleInputChange}
            error={errors.confirmPassword}
            value={formData.confirmPassword}
            placeholder="Confirm Your Password"
          />
          <CustomButton label="Signup" isProcessing={false} onClick={handleSubmit} />
        </div>
        {/* form container over */}
      </div>
      {/* right side over */}
    </div>
  );
}
