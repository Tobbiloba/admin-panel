import React from 'react';
import TextInput from '../components/TextInput';

const Signup = () => {
  return (
    <div className='flex flex-col lg:flex-row px-[1rem] lg:px-0 justify-center h-[100vh]'>
        <div className='flex flex-col gap-[1rem] lg:w-[50%] lg:px-[7.5%] lg:justify-center'>
            <h1 className='text-[22px] text-slate-700 font-semibold'>Sign up</h1>
            <div className=' flex flex-row gap-3 lg:justify-between'>
                <TextInput label="First name" placeholder="first name" type="text" custom="w-[100%]"/>
                <TextInput label="Last name" placeholder="last name" type="text" custom="w-[100%]"/>
            </div>
            <TextInput label="Email" placeholder="E-mail*" type="email"/>
            <TextInput label="Password" placeholder="password" type="password"/>

            <p className='text-slate-500 text-[15px]'>Password must be at least 8 characters long</p>
            <button className='bg-black text-white py-3 rounded-xl'>Sign up</button>
            <div>
                <h1 className='text-[15px] text-slate-600'>Already a member? <span className='underline text-black'>Sign in</span></h1>
            </div>
        </div>    
        <div className='lg:w-[50%] lg:h-[100%]'>
            <img src="https://cdn.dribbble.com/userupload/5152920/file/original-0414bfc14a12ba650f91b408bf4ef35b.png?resize=1600x1200" className='rounded-xl mt-[1rem] lg:mt-0 lg:rounded-none object-cover lg:h-[100%]'/>
        </div>    
    </div>
  );
}

export default Signup;
