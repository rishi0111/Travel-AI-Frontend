import { useState } from "react";
import Logo from "../../assets/chat-logo.svg";
import EditIcon from "../../assets/edit-icon.svg";
import AiChatIcon from "../../assets/ai-chat-icon.svg";
import PaymentsIcon from "../../assets/payment-icon.svg";
import BookingsIcon from "../../assets/bookings-icon.svg";
import ContactUsIcon from "../../assets/contact-us-icon.svg";
import HistoryIcon from "../../assets/history-icon.svg";
import TermsIcon from "../../assets/terms-icon.svg";
import PrivacyPolicyIcon from "../../assets/privacy-policy-icon.svg";
import ArrowDownIcon from "../../assets/arrow-bottom.svg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-[100%] max-w-[270px] sm:max-w-[350px] md:max-w-auto md:w-[275px] absolute">
      {/* Toggle Button for Mobile */}
      {isOpen ? (
      <button
        className="absolute md:hidden flex flex-col justify-center items-center gap-[4px] top-[50px] right-[-34px] sm:right-[-34px] z-[999] bg-[#ffffff] h-[34px] w-[34px] rounded-[0px_10px_10px_0px]"
        onClick={toggleSidebar}
      >
            <span className="block w-[20px] h-[2px] bg-black rotate-45"></span>
            <span className="block w-[20px] h-[2px] bg-black -rotate-45 mt-[-5px] "></span>
      </button>
      ) : (
        <button
        className="md:hidden flex flex-col justify-center items-center gap-[4px] fixed top-4 right-4 z-[99] bg-[#e7ecf9] h-[34px] w-[34px] rounded-[8px]"
        onClick={toggleSidebar}
        >
            <span className="block w-[18px] h-[2px] bg-[#0D3FC6]"></span>
            <span className="block w-[18px] h-[2px] bg-[#0D3FC6]"></span>
            <span className="block w-[18px] h-[2px] bg-[#0D3FC6]"></span>
        </button>
      )}

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-[98]"></div>
      )}
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0  h-full w-[100%] max-w-[270px] sm:max-w-[350px] md:max-w-auto md:w-[275px] bg-white z-[99] overflow-hidden transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 border-r border-gray-200`}
      >
        <div className="py-[13px] px-[16px] flex items-center justify-between border-b border-[#E5E7EB] gap-[10px]">
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="w-[162px]" />
          </div>
          <button className="text-gray-500 h-[34px] w-[34px] bg-[#E7ECF9] cursor-pointer rounded-[8px] flex items-center justify-center">
            <img src={EditIcon} alt="Edit" className="w-[18px] h-[18px]" />
          </button>
        </div>

        {/* <div className="p-[16px]">
          <div className="relative">
            <span className="absolute inset-y-0 left-[13px] flex items-center text-gray-400">
              <img src={SearchIcon} alt="Search" className="w-[18px] h-[18px]" />
            </span>
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-[40px] pr-[10px] py-[9px] rounded-[8px] text-[14px] font-semibold leading-[20px] placeholder:text-[#6B7280] border border-[#E5E7EB] focus:outline-none"
            />
          </div>
        </div> */}
        <div className="h-[calc(100vh-135px)] overflow-y-auto px-[16px]">
            <nav className="mt-4">
            <a
                href="#"
                className="flex items-center px-[10px] py-[8px] bg-[#E7ECF9] rounded-[8px] text-[16px] leading-[24px] font-semibold text-[#2563EB] mb-[8px] gap-[12px]"
            >
               <img src={AiChatIcon} alt="AI Chat" className="" />
                <span>AI Chat</span>
            </a>
            <a
                href="#"
                className="flex items-center px-[10px] py-[8px] text-[#636C76] hover:bg-[#E7ECF9] rounded-[8px] text-[16px] leading-[24px] font-semibold mb-[8px] gap-[12px]"
            >
                <img src={PaymentsIcon} alt="Payments" className="" />
                <span>Payments</span>
            </a>
            <a
                href="#"
                className="flex items-center px-[10px] py-[8px] text-[#636C76] hover:bg-[#E7ECF9] rounded-[8px] text-[16px] leading-[24px] font-semibold mb-[8px] gap-[12px]"
            >
                <img src={BookingsIcon} alt="Bookings" className="" />
                <span>Bookings</span>
            </a>
            <a
                href="#"
                className="flex items-center px-[10px] py-[8px] text-[#636C76] hover:bg-[#E7ECF9] rounded-[8px] text-[16px] leading-[24px] font-semibold mb-[8px] gap-[12px]"
            >
                <img src={ContactUsIcon} alt="Contact Us" className="" />
                <span>Contact Us</span>
            </a>
            <a
                href="#"
                className="flex items-center px-[10px] py-[8px] text-[#636C76] hover:bg-[#E7ECF9] rounded-[8px] text-[16px] leading-[24px] font-semibold mb-[8px] gap-[12px]"
            >
                <img src={HistoryIcon} alt="History" className="" />
                <span>History</span>
            </a>
            </nav>

            <div className="pt-[16px] border-t border-[#E5E7EB]">
            <h3 className="text-[18px] font-semibold text-[#05073C] mb-2 ps-[3px]">Legal</h3>
            <a
                href="#"
                className="flex items-center px-[10px] py-[8px] text-[#636C76] hover:bg-[#E7ECF9] rounded-[8px] text-[16px] leading-[24px] font-semibold mb-[8px] gap-[12px]"
            >
                <img src={TermsIcon} alt="Terms & Conditions" className="" />
                <span>Terms & Conditions</span>
            </a>
            <a
                href="#"
                className="flex items-center px-[10px] py-[8px] text-[#636C76] hover:bg-[#E7ECF9] rounded-[8px] text-[16px] leading-[24px] font-semibold mb-[8px] gap-[12px]"
            >
                <img src={PrivacyPolicyIcon} alt="Privacy Policy" className="" />
                <span>Privacy Policy</span>
            </a>
            </div>
        </div>
        <div className="flex items-center p-[16px] border-t border-[#E5E7EB] relative cursor-pointer"
         onClick={() => setShowProfile(!showProfile)}>
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mr-3">
            <span className="text-gray-600">EW</span>
          </div>
          <div>
            <p className="text-[16px] leading-[24px] text-[#05073C] font-semibold">Emily Watson</p>
            <p className="text-[14px] leading-[20px] text-[#6B7280]">emily@workspace.com</p>
          </div>
          <div>
            <img src={ArrowDownIcon} alt="Arrow Down" className="absolute right-[10px] top-[50%] translate-y-[-50%] rotate-180" />
          </div>
          {showProfile && (
            <div className="absolute bottom-[75px] left-[50%] translate-x-[-50%] bg-white rounded-[15px_0px_15px_0px] shadow-lg border border-[#E5E7EB] w-full py-[6px] px-[6px] max-w-[265px]">
              <a href="#" className="text-[14px] text-[#636C76] font-semibold px-[6px] py-[8px] block hover:bg-[#E7ECF9] border border-white rounded-[5px] hover:border hover:border-[#0D3FC6]">Logout</a>
              <a href="/change-password" className="text-[14px] text-[#636C76] font-semibold px-[6px] py-[8px] block hover:bg-[#E7ECF9] border border-white rounded-[5px] hover:border hover:border-[#0D3FC6]">Change Password</a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
