import React from "react";
import { IoMdArrowBack, IoMdMore } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { BiArchiveIn } from "react-icons/bi";
import {
  MdDeleteOutline,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineAddTask,
  MdOutlineDriveFileMove,
  MdOutlineMarkEmailUnread,
  MdOutlineReport,
  MdOutlineWatchLater,
} from "react-icons/md";

const Mail = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gary-700 py-2">
          <div
            onClick={() => navigate("/")}
            className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer"
          >
            <IoMdArrowBack size={"24px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <BiArchiveIn size={"24px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <MdOutlineReport size={"24px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <MdDeleteOutline size={"24px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <MdOutlineMarkEmailUnread size={"24px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <MdOutlineWatchLater size={"24px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <MdOutlineAddTask size={"24px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <MdOutlineDriveFileMove size={"24px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer">
            <IoMdMore size={"24px"} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span>1 to 50</span>
          <MdKeyboardArrowLeft size={"24px"} />
          <MdKeyboardArrowRight size={"24px"} />
        </div>
      </div>
      <div className="h-[90vh] overflow-y-auto p-4">
        <div className="flex justify-between bg-white items-center gap-1">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-medium">Subject</h1>
            <span className="text-sm bg-gray-200 rounded-md px-2">Inbox</span>
          </div>
          <div className="flex-none text-gray-400 my-5 text-sm">
            <p>12 days ago</p>
          </div>
        </div>
        <div className="text-gray-500 text-sm ">
            <h1>aryan@gmail.com</h1>
            <span>to me</span>
        </div>
        <div className="my-10">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit labore corporis maxime at perferendis eaque.</p>
        </div>
      </div>
    </div>
  );
};

export default Mail;
