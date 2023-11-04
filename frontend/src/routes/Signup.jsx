import React, { useEffect, useState } from 'react';
import CustomInput from '../components/commonComponents/CustomInput';
import CustomButton from '../components/commonComponents/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { signupFunction } from '../redux/authReducer/actions';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const initialformState = {
  fullName: '',
  email: '',
  // mobileNumber: '',
  password: '',
  confirmPassword: '',
}

export default function Signup() {
  const [formData, setFormData] = useState(initialformState);
  const [errors, setErrors] = useState({});
  const { signupMessage, isSignupFail, isSignupProcess, isSignupSuccess } = useSelector(state => state.AuthReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    setErrors({})
    if (!formData.fullName) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    // if (!formData.mobileNumber) {
    //   newErrors.mobileNumber = 'Mobile Number is required';
    // }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must have at least 8 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {

    // if user input validated
    if (validateForm()) {

      const obj = {
        name: formData.fullName,
        email: formData.email,
        password: formData.password
      }

      dispatch(signupFunction(obj))
    }

  };


  // display toast message
  useEffect(() => {

    // display toast for result
    if (isSignupSuccess && !isSignupProcess) {
      toast.success(signupMessage + "  Please login to continue.")
    }
    else if (isSignupFail && !isSignupProcess) {
      toast.error(signupMessage)
    }

  }, [isSignupSuccess, isSignupFail])

  return (
    <div className="flex flex-col min-h-screen h-full lg:overflow-hidden md:flex-row overflow-y-scroll">

      {/* START:gif div */}
      <div className="w-full md:w-[50%] bg-primary-100 h-fit">
        <img className='h-fit w-fit' src='https://res.cloudinary.com/dfrhy6m3m/image/upload/v1698649570/l8ojogkd9wf9q7ac1dxo.gif' />
      </div>
      {/* END:gif div */}

      {/* START:signup form */}
      <div className='w-full md:w-[50%] bg-primary-300 flex flex-col items-center justify-center h-fIT p-4'>
        <div className='text-3xl font-bold mb-4 flex gap-3 md:flex-row md:items-center'>
          <p>Signup</p>
          <p>It's</p>
          <p className="animate-bounce">Free</p>
        </div>

        {/* START:form container */}
        <div className="w-full max-w-[600px] mx-4 md:mx-12 rounded-md p-4 bg-primary-100 shadow-inner">

          {/* full name input */}
          <CustomInput
            name="fullName"
            label="Full Name"
            type="text"
            onChange={handleInputChange}
            error={errors.fullName}
            value={formData.fullName}
            placeholder="Enter Your Full Name"
          />

          {/* email input */}
          <CustomInput
            name="email"
            label="Email"
            type="text"
            onChange={handleInputChange}
            error={errors.email}
            value={formData.email}
            placeholder="example@gmail.com"
          />

          {/* mobile number input currently not displying */}
          {/* <CustomInput
            name="mobileNumber"
            label="Mobile Number"
            type="text"
            onChange={handleInputChange}
            error={errors.mobileNumber}
            value={formData.mobileNumber}
            placeholder="9876543210"
          /> */}

          {/* password input */}
          <CustomInput
            name="password"
            label="Password"
            type="password"
            onChange={handleInputChange}
            error={errors.password}
            value={formData.password}
            placeholder="Enter Your Password"
          />

          {/* confirm passowrd input */}
          <CustomInput
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            onChange={handleInputChange}
            error={errors.confirmPassword}
            value={formData.confirmPassword}
            placeholder="Confirm Your Password"
          />

          {/* signup button */}
          <CustomButton label="Signup" isProcessing={isSignupProcess} onClick={handleSubmit} />

          <p className='mt-4 text-md font-semibold ' > Already have an account, <span onClick={() => { navigate("/login") }} className="text-blue-600 font-extrabold cursor-pointer " > Login </span>  </p>

        </div>
        {/* END:form container */}
      </div>
      {/* END:signup form */}

      <ToastContainer />
    </div>
  );
}
