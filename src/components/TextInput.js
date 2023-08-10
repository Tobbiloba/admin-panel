import React from 'react';

const TextInput = ({label, placeholder, custom, type}) => {
  return (
    <div className='flex flex-col'>
      <label>{label}</label>
      <input className={`border outline-none px-2 py-1 h-[2.5rem] rounded-md border-slate-500 ${custom}`} placeholder={placeholder} type={type}/>
    </div>
  );
}

export default TextInput;
