import SendIcon from "../../../assets/inputSend-icon.svg";

const ChatInput = () => {
  return (
      <div className="max-w-4xl mx-auto px-[10px] sm:px-8 mb-[30px]">
        <div className="flex relative bg-white p-[12px] py-[10px] border border-[#E5E7EB] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.2)]
         rounded-[14px]">
          <input
            type="text"
            placeholder="Find me travel packages to Thailand for 7 days"
            className="w-full pr-[10px] py-0 pl-[8px] border-none text-[#05073C] placeholder:text-[#989EAE] focus:outline-none text-[16px] leading-[24px] font-semibold"
          />
          <button className=" h-[42px] w-[42px] text-white rounded-[10px] flex items-center justify-center cursor-pointer bg-[#E7ECF9]">
            <img src={SendIcon} alt="Send" className="" />
          </button>
        </div>
      </div>
  )
}

export default ChatInput
