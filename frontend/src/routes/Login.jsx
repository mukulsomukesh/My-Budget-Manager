import React, { useEffect, useState } from 'react';
import CustomInput from '../components/commonComponents/CustomInput';
import CustomButton from '../components/commonComponents/CustomButton';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginFunction } from '../redux/authReducer/actions';


export default function Login() {

  // define state
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const { loginMessage, isLoginFail, isLoginProcess, isLoginSuccess } = useSelector(state => state.AuthReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate();


  // handel input onchange
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  // validate form
  const validateForm = () => {

    // error object
    const newErrors = {};

    setErrors({})

    // validate email
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    // validate password
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    // set error
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };


  // handle input submit
  const handleSubmit = () => {

    // if form values validated
    if (validateForm()) {
      const obj = {
        email: formData.email,
        password: formData.password
      }

      // dispatch login function
      dispatch(loginFunction(obj))
    }
  };

  // display toast message
  useEffect(() => {
    // display toast for result
    if (isLoginSuccess && !isLoginProcess) {

      // diaplay toast
      toast.success(loginMessage)

      // delay redirect to home page
      setTimeout(() => {

        // navigate to home page
        navigate("/")
      }, 1000)

    }
    else if (isLoginFail && !isLoginProcess) {

      // display toast
      toast.error(loginMessage)
    }

  }, [isLoginSuccess, isLoginFail])

  return (
    <div className="flex flex-col min-h-screen h-full lg:overflow-hidden md:flex-row overflow-y-scroll">

      {/* START:gif div */}
      <div className="w-full md:w-[50%] bg-primary-100 flex flex-col items-center justify-center h-100vh">

        <div className="text-2xl text-primary-600 mb-4 text-center p-8">
          <p className="text-3xl font-semibold text-primary-700">Welcome to Daily Spend Tracker</p>
          <p className='text-2xl text-center mt-4' >Begin your journey to financial control by tracking your daily expenses.You don't need to see the whole staircase; just take the first step, and we'll guide you from there.</p>
        </div>

        <img className='h-fit w-fit' src='http://res.cloudinary.com/dfrhy6m3m/image/upload/v1698660808/evyrz79bq0rklkwe11ij.gif' />
      </div>
      {/* END:gif div */}

      {/* START:login div */}
      <div className='w-full md:w-[50%] bg-primary-300 flex flex-col items-center justify-center h-fIT p-4'>
        <div className='text-3xl font-bold mb-4 flex gap-3 md:flex-row md:items-center'>
          <p>Login</p>
          <p>to</p>
          <p className="animate-bounce">continue</p>
        </div>

        {/* START:form container div */}
        <div className="w-full max-w-[600px] mx-4 md:mx-12 rounded-md p-4 bg-primary-100 shadow-inner">

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

          {/* login button  */}
          <CustomButton label="Login" isProcessing={isLoginProcess} onClick={handleSubmit} />

        </div>
        {/* END:form container div */}

      </div>
      {/* END:login div */}

      <ToastContainer />
    </div>
  );
}
