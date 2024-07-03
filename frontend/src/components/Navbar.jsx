import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { CiCircleQuestion } from "react-icons/ci";
import { IoIosSettings } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import Avatar from "react-avatar";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-3 h-16">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="p-3 hover:bg-gray-200 rounded-full cursor-pointer">
            <GiHamburgerMenu />
          </div>
          <img
            className="w-8"
            src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_256px.png"
            alt="logo"
          />
          <h1 className="text-2xl text-gray-500 font-medium">Gmail</h1>
        </div>
      </div>
      <div className="w-[50%] mr-60">
        <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
        <IoIosSearch size={'20px'} className="text-gray-700" />
        <input
          type="text"
          placeholder="Search Mail"
          className="rounded-full w-full bg-transparent outline-none px-1"
        />
        </div>
        
      </div>
      <div className="flex items-center gap-2">
        <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
        <CiCircleQuestion size={'24px'} />
        </div>
        <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
        <IoIosSettings  size={'24px'} />
        </div>
        <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
        <TbGridDots  size={'24px'} />
        </div>
        <Avatar googleId="https://wallpapers.com/images/hd/cool-profile-picture-paper-bag-head-4co57dtwk64fb7lv.jpg" size="40" round={true} />
      </div>
    </div>
  );
};

export default Navbar;
