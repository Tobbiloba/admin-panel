import React from 'react';
import MenuBar from '../components/MenuBar';
import Topbar from '../components/Topbar';
const Dashboard = ({children}) => {
  // console.log(children)
  return (
    <div className='bg-slate-400 w-[100vw] flex flex-row'>
      <MenuBar />

      <div className='relative lg:ml-[0rem] lg:mr-[4rem] lg:mt-[2rem] w-[100%] flex flex-col gap-[2rem]'>
        <Topbar />
        {children}
      </div>
    </div>
  );
}

export default Dashboard;
