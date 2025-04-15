import { useState } from "react";
import AiChatIcon from "../../../assets/ai-chat-icon.svg";
import PaymentsIcon from "../../../assets/payment-icon.svg";
import BookingsIcon from "../../../assets/bookings-icon.svg";
import ContactUsIcon from "../../../assets/contact-us-icon.svg";
import TermsIcon from "../../../assets/terms-icon.svg";
import PrivacyPolicyIcon from "../../../assets/privacy-policy-icon.svg";
import ArrowDownIcon from "../../../assets/arrow-bottom.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SidebarDropdown from "./SidebarDropdown";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="w-[100%] max-w-[270px] sm:max-w-[350px] md:max-w-auto md:w-[275px] absolute">
      {/* Toggle Button for Mobile */}
      {isOpen ? (
        <button
          className="absolute md:hidden flex flex-col justify-center items-center gap-[4px] top-[50px] right-[-34px] sm:right-[-34px] z-[10000] bg-[#ffffff] h-[34px] w-[34px] rounded-[0px_10px_10px_0px]"
          onClick={toggleSidebar}
        >
          <span className="block w-[20px] h-[2px] bg-black rotate-45"></span>
          <span className="block w-[20px] h-[2px] bg-black -rotate-45 mt-[-5px] "></span>
        </button>
      ) : (
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[4px] fixed top-4 left-4 z-[98] bg-[#e7ecf9] h-[34px] w-[34px] rounded-[8px]"
          onClick={toggleSidebar}
        >
          <span className="block w-[18px] h-[2px] bg-[#0D3FC6]"></span>
          <span className="block w-[18px] h-[2px] bg-[#0D3FC6]"></span>
          <span className="block w-[18px] h-[2px] bg-[#0D3FC6]"></span>
        </button>
      )}

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-[1000]"></div>
      )}
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0  h-full w-[100%] max-w-[270px] sm:max-w-[350px] md:max-w-auto md:w-[275px] bg-white z-[1000] overflow-hidden transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 border-r border-gray-200`}
      >
        <div className="py-[15.5px] px-[16px] flex items-center justify-between border-b border-[#E5E7EB] gap-[10px]">
          <div className="flex items-center cursor-pointer" onClick={() => navigate("/chat")}>
            <img src="./chat-logo.svg" alt="Logo" className="w-[162px]" />
          </div>
        </div>
        <div className="h-[calc(100vh-135px)] overflow-y-auto px-[16px]">
          <nav className="mt-4">
            <Link
              to="/chat"
              className={`flex items-center px-[10px] py-[8px] rounded-[8px] text-[16px] leading-[24px] font-semibold mb-[8px] gap-[12px] ${
                isActive("/chat")
                  ? "bg-[#E7ECF9] text-[#2563EB]"
                  : "text-[#636C76] hover:bg-[#E7ECF9]"
              }`}
            >
              <img src={AiChatIcon} alt="AI Chat" className="" />
              <span>AI Chat</span>
            </Link>
            <Link
              to="/payments"
              className={`flex items-center px-[10px] py-[8px] rounded-[8px] text-[16px] leading-[24px] font-semibold mb-[8px] gap-[12px] ${
                isActive("/payments")
                  ? "bg-[#E7ECF9] text-[#2563EB]"
                  : "text-[#636C76] hover:bg-[#E7ECF9]"
              }`}
            >
              <img src={PaymentsIcon} alt="Payments" className="" />
              <span>Payments</span>
            </Link>
            <Link
              to="/bookings"
              className={`flex items-center px-[10px] py-[8px] rounded-[8px] text-[16px] leading-[24px] font-semibold mb-[8px] gap-[12px] ${
                isActive("/bookings")
                  ? "bg-[#E7ECF9] text-[#2563EB]"
                  : "text-[#636C76] hover:bg-[#E7ECF9]"
              }`}
            >
              <img src={BookingsIcon} alt="Bookings" className="" />
              <span>Bookings</span>
            </Link>
            <Link
              to="/contact"
              className={`flex items-center px-[10px] py-[8px] rounded-[8px] text-[16px] leading-[24px] font-semibold mb-[8px] gap-[12px] ${
                isActive("/contact")
                  ? "bg-[#E7ECF9] text-[#2563EB]"
                  : "text-[#636C76] hover:bg-[#E7ECF9]"
              }`}
            >
              <img src={ContactUsIcon} alt="Contact Us" className="" />
              <span>Contact Us</span>
            </Link>
          </nav>

          <div className="pt-[16px] border-t border-[#E5E7EB]">
            <h3 className="text-[18px] font-semibold text-[#05073C] mb-2 ps-[3px]">
              Legal
            </h3>
            <Link
              to="/terms"
              className={`flex items-center px-[10px] py-[8px] rounded-[8px] text-[16px] leading-[24px] font-semibold mb-[8px] gap-[12px] ${
                isActive("/terms")
                  ? "bg-[#E7ECF9] text-[#2563EB]"
                  : "text-[#636C76] hover:bg-[#E7ECF9]"
              }`}
            >
              <img src={TermsIcon} alt="Terms & Conditions" className="" />
              <span>Terms & Conditions</span>
            </Link>
            <Link
              to="/privacy-policy"
              className={`flex items-center px-[10px] py-[8px] rounded-[8px] text-[16px] leading-[24px] font-semibold mb-[8px] gap-[12px] ${
                isActive("/privacy-policy")
                  ? "bg-[#E7ECF9] text-[#2563EB]"
                  : "text-[#636C76] hover:bg-[#E7ECF9]"
              }`}
            >
              <img src={PrivacyPolicyIcon} alt="Privacy Policy" className="" />
              <span>Privacy Policy</span>
            </Link>
          </div>
        </div>
        <div
          className="flex items-center p-[16px] border-t border-[#E5E7EB] relative cursor-pointer"
          onClick={() => setShowProfile(!showProfile)}
        >
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mr-3">
            <span className="text-gray-600">EW</span>
          </div>
          <div>
            <p className="text-[16px] leading-[24px] text-[#05073C] font-semibold">
              Emily Watson
            </p>
            <p className="text-[14px] leading-[20px] text-[#6B7280]">
              emily@workspace.com
            </p>
          </div>
          <div>
            <img
              src={ArrowDownIcon}
              alt="Arrow Down"
              className="absolute right-[10px] top-[50%] translate-y-[-50%] rotate-180"
            />
          </div>
          {showProfile && <SidebarDropdown />}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
