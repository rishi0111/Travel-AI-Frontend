import DeleteIcon from "../../../assets/dlt-icon.svg";
import CollapseIcon from "../../../assets/collapseIcon.svg";
import EditIcon from "../../../assets/edit-icon.svg";
import { useState } from "react";

const History = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <div className={`fixed top-0 left-0 w-full h-full bg-black opacity-50 z-[98] ${isCollapsed ? 'hidden' : ''} lg:hidden`}></div>
      <button
        onClick={handleToggleCollapse}
        className="absolute top-[14px] right-[15px] z-[100] bg-[#ffffff] h-[34px] hover:bg-[#E7ECF9] w-[34px] h rounded-[6px] flex flex-col justify-center items-center gap-[4px] cursor-pointer"
      >
        <img src={CollapseIcon} alt="Collapse" className="" />
      </button>
      <div className={`absolute top-0 right-0 lg:static z-[99] bg-white ${isCollapsed ? 'w-0' : 'w-[250px]'} border border-[#E5E7EB] h-screen transition-width duration-300 overflow-hidden`}>
        <div className="py-[20px] px-[16px] flex justify-between items-center border-b border-[#E5E7EB] relative">
          <h1 className="text-[18px] leading-[24px] font-semibold text-[#05073C]">History</h1>
          <button className="text-gray-500 h-[34px] w-[34px] hover:bg-[#E7ECF9] cursor-pointer rounded-[8px] flex items-center justify-center absolute top-[14px] right-[55px]" title="New Chat">
            <img src={EditIcon} alt="Edit" className="w-[20px] h-[20px]" />
          </button>
        </div>

        <div className="p-[16px] h-[calc(100vh-70px)] overflow-y-auto">
          <ul>
            <li className="mb-[8px] relative group transition-all duration-300"><a href="#" className="text-[14px] leading-[24px] bg-[#E7ECF9] text-[#05073C] p-[8px] pe-[25px] rounded-[8px] hover:bg-[#E7ECF9] transition-all duration-300 block active:bg-[#E7ECF9] truncate">Lorem ipsum dolor sit amet,</a> <span className="absolute top-[12px] right-[10px] cursor-pointer group-hover:block hidden"><img src={DeleteIcon} alt="Delete" className="" /></span></li>
            <li className="mb-[8px] relative group transition-all duration-300"><a href="#" className="text-[14px] leading-[24px] text-[#05073C] p-[8px] pe-[25px] rounded-[8px] hover:bg-[#E7ECF9] transition-all duration-300 block active:bg-[#E7ECF9] truncate">Lorem ipsum dolor sit amet,</a> <span className="absolute top-[12px] right-[10px] cursor-pointer group-hover:block hidden"><img src={DeleteIcon} alt="Delete" className="" /></span></li>
            <li className="mb-[8px] relative group transition-all duration-300"><a href="#" className="text-[14px] leading-[24px] text-[#05073C] p-[8px] pe-[25px] rounded-[8px] hover:bg-[#E7ECF9] transition-all duration-300 block active:bg-[#E7ECF9] truncate">Lorem ipsum dolor sit amet, consectetur adipiscing</a> <span className="absolute top-[12px] right-[10px] cursor-pointer group-hover:block hidden"><img src={DeleteIcon} alt="Delete" className="" /></span></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default History
