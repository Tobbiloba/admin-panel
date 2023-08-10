import React from 'react';
import TextInput from '../components/TextInput';
import {FcGoogle} from 'react-icons/fc'
const Login = () => {
    
  return (
    <div className='flex flex-col  lg:flex-row px-[1rem] lg:px-[10%] overflow-hidden lg:gap-[4rem] items-center justify-center w-[100vw] h-[100vh]'>
      <div className='bg-slate-100 rounded-xl lg:w-[35rem] lg:h-[80%] lg:flex flex-col items-center justify-center'>
        <div className='px-2 py-4 lg:px-8'>
            <h1 className='text-[26px] lg:text-[40px] font-bold text-sky-800'>New user?</h1>
            <p className='text-[14px] font-mono font-normal text-slate-600 mt-2'>Sign up for Savbox and take control of your investments in less than 1 minutes</p>
            {/* <button>Get started ></button> */}
            <button className='text-white bg-yellow-500 px-3 py-2 mt-1 rounded-md font-bold'>Get started &gt;</button>

        </div>
        <img src="https://elements-video-cover-images-0.imgix.net/files/5181fdf5-a8db-474a-942f-eb896b879ffe/inline_image_preview.jpg?auto=compress&crop=edges&fit=crop&fm=jpeg&h=800&w=1200&s=98f4a6e9a82e5b38609bab2e60ed9aea" 
            className='w-[100%] mt-[1.5rem] rounded-md lg:rounded-none'/>
        <div></div>
      </div>
      <div className=' w-[100%] mt-[3rem] lg:w-[30rem]'>
        <div className='flex flex-row justify-between items-center'>
            <h1 className='text-[22px] text-slate-700 font-semibold'>Log in</h1>
            <p className='text-[15px] text-slate-500 hover:text-black'>Forgot Password?</p>
        </div>
        <div className='mt-[.5rem]'>
            <div className='flex flex-col gap-[1rem]'>
                <TextInput  placeholder='Email' label='Email' type='email'/>
            <TextInput  placeholder='Password' label='Password' type='password'/>
            </div>
            
            {/* <TextInput /> */}
            <button className='w-[100%] mt-[1rem] bg-blue-900 py-2 rounded-md text-white hover:text-blue-900 hover:border hover:bg-white border-blue-900'>
                Submit
            </button>
            {/* <div className='border'>Or login with</div> */}
            {/* <hr>Sign in with google</hr> */}
            <h1 className='text-center mt-[1rem] text-[15px]'>Or login with</h1>
            <button className='w-[100%] mt-[1rem] bg-black py-2 rounded-md text-white hover:text-black hover:border hover:bg-white border-black flex flex-row justify-center items-center gap-3'>
                <FcGoogle className='text-[22px]'/>
                Google account
            </button>
        </div>

      </div>
    </div>
  );
}

export default Login;
