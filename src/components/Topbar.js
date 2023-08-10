import React, {useState, useEffect} from 'react';
import TextInput from './TextInput';
import {BsSearch} from 'react-icons/bs'
import {BsBell} from 'react-icons/bs'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {SlArrowDown} from 'react-icons/sl'
const Topbar = () => {

    const [date, setDate] = useState('');
    const [showMenu, setShowMenu] = useState(false);

    function getCurrentFormattedDate() {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      
        const currentDate = new Date();
      
        const dayOfWeek = daysOfWeek[currentDate.getDay()];
        const month = months[currentDate.getMonth()];
        const day = currentDate.getDate();
        const year = currentDate.getFullYear();

        setDate(`${dayOfWeek}, ${month} ${day} ${year}`)
      
        return `${dayOfWeek}, ${month} ${day} ${year}`;
      }

      useEffect(() => {
getCurrentFormattedDate()
      }, [])
  return (
    <div className='bg-white rounded-xl flex flex-row py-[1rem] px-[1rem] justify-between w-[100%]'>
        {/* <div className='hidden lg:flex'>
            <TextInput placeholder='Find your transaction'/>
            <BsSearch />
        </div> */}

        {/* <div className='flex flex-col justify-between w-[100%]'> */}
        {/* <div>
            <h1 className='font-mono text-[14px]'>{date}</h1>
        </div> */}

        {/* <div className='flex flex-row gap-2 items-center justify-between'>
            <BsSearch className='text-[20px]'/> */}

<div className='lg:flex flex-row items-center gap-[1.5rem] hidden w-[60%]'>
            <TextInput placeholder='Find your bank' type='text' custom="bg-slate-500 rounded-none h-[2.75rem] text-white w-[35rem]"/>
            <h1 className='font-mono text-[14px]'>{date}</h1>
</div>
            <div className='flex flex-row items-center gap-5 justify-end'>
                <SlArrowDown className='text-[20px] text-slate-700 lg:hidden' onClick={() => setShowMenu(!showMenu)}/>
                <BsBell className='text-[20px]'/>
            <div className='flex flex-row gap-2 items-center'>
                <h1 className='text-[17px] font-mono'>Tobbie</h1>
                <img src="https://64.media.tumblr.com/7344adf8e9f50da39749ee5a276036a3/tumblr_plhy9hyJKE1wzh093o1_1280.jpg" alt="avatar" className='w-[3.75rem] h-[3.75rem] rounded-full'/>
            </div>
            </div>

            {
                showMenu && <div>
                    menu
                </div>
            }
            
        {/* </div> */}
        {/* </div> */}

        
        
      
    </div>
  );
}

export default Topbar;
