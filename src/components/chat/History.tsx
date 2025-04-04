import DeleteIcon from "../../assets/dlt-icon.svg";
const History = () => {
  return (
    <>
    <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-[98] lg:hidden"></div>
    <div className="absolute top-0 right-0 lg:static z-[99] bg-white w-[250px] border border-[#E5E7EB] h-screen">
      <div className="py-[20px] px-[16px] flex justify-between items-center border-b border-[#E5E7EB]">
        <h1 className="text-[18px] leading-[24px] font-semibold text-[#05073C]">History</h1>
        <button
        className="cursor-pointer flex flex-col justify-center items-center gap-[4px] top-[50px] right-[-30px] z-[999] bg-[#ffffff] h-[20px] w-[34px] rounded-[0px_10px_10px_0px]"
      >
            <span className="block w-[21px] h-[2px] bg-black rotate-45"></span>
            <span className="block w-[21px] h-[2px] bg-black -rotate-45 mt-[-6px] "></span>
      </button>
      </div>
      <div className="p-[16px] h-[calc(100vh-70px)] overflow-y-auto">
        <ul>
            <li className="mb-[8px] relative group transition-all duration-300"><a href="#" className="text-[14px] leading-[24px] bg-[#E7ECF9] text-[#05073C] p-[8px] pe-[25px] rounded-[8px] hover:bg-[#E7ECF9] transition-all duration-300 block active:bg-[#E7ECF9] truncate">Lorem ipsum dolor sit amet,</a> <span className="absolute top-[12px] right-[10px] cursor-pointer group-hover:block hidden"><img src={DeleteIcon} alt="Delete" className=""/></span></li>
            <li className="mb-[8px] relative group transition-all duration-300"><a href="#" className="text-[14px] leading-[24px] text-[#05073C] p-[8px] pe-[25px] rounded-[8px] hover:bg-[#E7ECF9] transition-all duration-300 block active:bg-[#E7ECF9] truncate">Lorem ipsum dolor sit amet,</a> <span className="absolute top-[12px] right-[10px] cursor-pointer group-hover:block hidden"><img src={DeleteIcon} alt="Delete" className=""/></span></li>
            <li className="mb-[8px] relative group transition-all duration-300"><a href="#" className="text-[14px] leading-[24px] text-[#05073C] p-[8px] pe-[25px] rounded-[8px] hover:bg-[#E7ECF9] transition-all duration-300 block active:bg-[#E7ECF9] truncate">Lorem ipsum dolor sit amet, consectetur adipiscing</a> <span className="absolute top-[12px] right-[10px] cursor-pointer group-hover:block hidden"><img src={DeleteIcon} alt="Delete" className=""/></span></li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default History
