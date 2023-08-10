import React, { useState } from "react";
import { Slide } from "@mui/material";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { BiSolidWallet } from "react-icons/bi";
import { BsClockHistory } from "react-icons/bs";
import { AiTwotoneSetting } from "react-icons/ai";
import { BiSolidHelpCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
// import icon from '/png'
const MenuBar = () => {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <div className="flex flex-row absolute lg:relative z-[100]">
      <Slide in={showMenu} direction="right" mountOnEnter unmountOnExit>
        <div className="bg-white h-[100vh] w-[50%] min-w-[15rem] lg:w-[20%] lg:min-w-[20rem]">
          <div className="bg-slate-600 h-[10%] flex items-center px-[1rem] lg:px-[2rem]">
            <img
              src="/png/logo-no-background.png"
              alt="icon"
              className="object-contain h-[80%]"
            />
            {/* <h1 className="text-slate-500 font-mono font-bold text-4xl">SAVBOX</h1> */}
          </div>

          <div className="flex flex-col justify-between h-[85%]">
            <div className="mt-[3rem] px-[1rem] lg:px-[2rem] flex flex-col gap-[1rem]">
              <Link to="/">
                <div className="flex flex-row items-center gap-4 font-mono bg-slate-500 text-white py-3 lg:py-5 px-3 rounded-xl">
                  <FaHome className=" text-[16px] lg:text-[22px]" />
                  <h1 className="text-[16px] lg:text-[20px]">Home</h1>
                </div>
              </Link>

              <Link>
                <div className="flex flex-row items-center gap-4 font-mono hover:border border-neutral-500 rounded-xl cursor-pointer text-neutral-500 py-3 lg:py-5 px-3">
                  <BiSolidWallet className="text-[16px] lg:text-[22px]" />
                  <h1 className="text-[16px] lg:text-[20px]">Wallet</h1>
                </div>
              </Link>

              <Link>
                <div className="flex flex-row items-center gap-4 font-mono hover:border border-neutral-500 rounded-xl cursor-pointer text-neutral-500 py-3 lg:py-5 px-3">
                  <BsFillPersonFill className="text-[16px] lg:text-[22px]" />
                  <h1 className="text-[16px] lg:text-[20px]">Profile</h1>
                </div>
              </Link>
              <Link>
                <div className="flex flex-row items-center gap-4 font-mono hover:border border-neutral-500 rounded-xl cursor-pointer text-neutral-500 py-5 px-3">
                  <BsClockHistory className="text-[16px] lg:text-[22px]" />
                  <h1 className="text-[16px] lg:text-[20px]">Transactions</h1>
                </div>
              </Link>
            </div>

            <div className="mt-[3rem] px-[2rem] flex flex-col gap-[1rem]">
              <Link>
                <div className="flex flex-row items-center gap-4 font-mono hover:border border-neutral-500 rounded-xl cursor-pointer text-neutral-500 py-5 px-3">
                  <AiTwotoneSetting className="text-[16px] lg:text-[22px]" />
                  <h1 className="text-[16px] lg:text-[20px]">Settings</h1>
                </div>
              </Link>
              <Link>
                <div className="flex flex-row items-center gap-4 font-mono hover:border border-neutral-500 rounded-xl cursor-pointer text-neutral-500 py-5 px-3">
                  <BiSolidHelpCircle className="text-[16px] lg:text-[22px]" />
                  <h1 className="text-[16px] lg:text-[20px]">Help</h1>
                </div>
              </Link>
            </div>
          </div>
          {/* <div>
          
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div>
          
        </div> */}
        </div>
      </Slide>

      <div className="h-[100vh] flex justify-end items-end lg:items-end lg:justify-end py-[2rem]">
        <div
          className="bg-neutral-100 h-fit cursor-pointer left-[2rem] lg:bottom-[2rem] relative p-2 rounded-md"
          onClick={() => setShowMenu(!showMenu)}
        >
          <BiMenuAltLeft className="text-[44px]" />
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
