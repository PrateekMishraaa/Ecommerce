import React, { useState } from 'react';
import { CiUser, CiMail, CiLock, CiPhone } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import {FaEye,FaEyeSlash} from "react-icons/fa"
import Swal from "sweetalert2"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const navigate = useNavigate()
    const [viewPassword,setViewPassword] = useState(false)
    const [formData,setFormData] = useState({
        Fullname:"",
        Email:"",
        Phone:"",
        Password:"",
        Username:""
    })
    console.log('formdata',formData)

    const handleViewPassword=()=>{
        setViewPassword(!viewPassword)
    }


    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        if(!formData.Fullname || !formData.Email || !formData.Password || !formData.Phone || !formData.Username){
            return Swal.fire('All fields are required')
        }
        if(formData.Password.length<8){
            return Swal.fire('Password must be with in 8 character')
        }
          if(formData.Password.length>255){
            return Swal.fire('Password must be with in 255 character')
        }
        try{
            const response = await axios.post('https://ecommercebackend-nlx8.onrender.com/api/sign-up',formData,{
                headers:{
                    "Content-Type":"application/json"
                }
            })
            console.log('response from register',response)
            Swal.fire('Register complete')
            setTimeout(()=>{
                navigate('/login')
            },2000)
        }catch(error){
            console.log('error',error)
            return Swal.fire('Internal server error')
        }

    }
  return (
<>
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold uppercase tracking-tight">
            <span className="text-amber-400">s</span>
            <span className="text-amber-400">w</span>
            <span className="text-amber-400">i</span>
            <span className="text-amber-400">f</span>
            <span className="text-amber-400">t</span>
            <span className="text-green-600">cart</span>
          </h1>
          <p className="text-gray-500 text-sm mt-2">Create your account</p>
        </div>

  
        <form className="space-y-4" onSubmit={handleSubmit}>
    
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1">
              Full Name
            </label>
            <div className="relative">
              <CiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="text"
                name='Fullname'
                value={formData.Fullname}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1">
              Email Address
            </label>
            <div className="relative">
              <CiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="email"
                name='Email'
                value={formData.Email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>


           <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1">
            Username
            </label>
            <div className="relative">
              <CiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="text"
                name='Username'
                value={formData.Username}
                onChange={handleChange}
                placeholder="username"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1">
              Phone Number <span className="text-gray-400 text-xs">(optional)</span>
            </label>
            <div className="relative">
              <CiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="text"
                name='Phone'
                value={formData.Phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1">
              Password
            </label>
            <div className="relative flex justify-end">
              <CiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type={viewPassword?"text":"password"}
                name='Password'
                value={formData.Password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <span className='cursor-pointer' onClick={handleViewPassword}>
                {
                    viewPassword?<FaEye/>:<FaEyeSlash/>
                }
              </span>
            </div>
          </div>


          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
            />
            <label htmlFor="terms" className="ml-2 text-xs text-gray-600">
              I agree to the{" "}
              <a href="#" className="text-green-600 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-green-600 hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>

 
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Sign Up
          </button>
        </form>

     
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>

</>
  );
};

export default Register;