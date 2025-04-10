import AiAssistantIcon from "../../assets/ai-assistant-icon.svg";
import History from "../../components/dashboard/history/History";
import ChatInput from "../../components/dashboard/chat/ChatInput";
import PopularDestinations from "../../components/dashboard/chat/PopularDestinations";
import BookingConfirmation from "../../components/dashboard/chat/BookingConfirmation";
import BookingRequest from "../../components/dashboard/chat/BookingRequest";
import PersonalInformation from "../../components/dashboard/chat/PersonalInformation";
import SelectTravellers from "../../components/dashboard/chat/SelectTravellers";
import ChatHeading from "../../components/dashboard/chat/ChatHeading";
import Packages from "../../components/dashboard/chat/Packages";
import ReviewDetails from "../../components/dashboard/chat/ReviewDetails";
import PaymentDetails from "../../components/dashboard/chat/PaymentDetails";
import ContactInformation from "../../components/dashboard/chat/ContactInformation";
import TravellerDetails from "../../components/dashboard/chat/TravellerDetails";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Chat = () => {
    const isHistoryOpen = useSelector((state: RootState) => state.sidebar.activeSidebar === "/history");

    return (
        <div className="flex">

            {/* Main Content */}
            <div className="flex-1 md:ms-[275px] w-[calc(100vw-600px)]">
                <div className="h-[calc(100vh-95px)] overflow-y-auto py-[40px] pt-[60px] sm:pt-[30px] sm:py-[30px]">
                    {/* Hero Section */}
                    <ChatHeading />

                    <div className="max-w-[1075px] mx-auto px-[10px] ms:px-[20px]">
                        <div className="">
                            {/* AI Assistant Chat */}
                            <div className="max-w-[740px] mb-[30px]">
                                <div className="flex items-start gap-[8px]">
                                    <div className="w-[40px] h-[40px] rounded-full bg-[#E7ECF9] flex items-center justify-center flex-shrink-0">
                                        <img src={AiAssistantIcon} alt="AI Assistant" className="" />
                                    </div>
                                    <div className="">
                                        <p className="border border-[#E5E7EB] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] bg-[#F4F4F6] rounded-[20px] rounded-es-none px-[16px] py-[15px] text-[14px] leading-[20px] text-[#1F2937]">
                                            Hi there! I'm Zoe, your travel assistant. I'm here to help you
                                            find the best travel packages. To get started, where would you
                                            like to go? And how long are you planning to stay?
                                        </p>
                                        <p className="text-xs text-gray-500 mt-2">05:10 AM</p>
                                    </div>
                                </div>
                            </div>

                            {/*  User Chat */}
                            <div className="max-w-[740px] ms-auto mb-[30px]">
                                <div className="flex items-end flex-col justify-end">
                                    <p className="border border-[#E5E7EB] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] bg-[#0D3FC6] rounded-[20px] rounded-es-none px-[16px] py-[12px] text-[14px] leading-[20px] text-[#FFFFFF]">Find me a tour package to Bali for 7 days</p>
                                    <p className="text-xs text-gray-500 mt-2">05:10 AM</p>
                                </div>
                            </div>

                            {/* Number of Travellers */}
                            <div className="max-w-[740px] mb-[30px]">
                                <div className="flex items-start gap-[8px]">
                                    <div className="w-[40px] h-[40px] rounded-full bg-[#E7ECF9] flex items-center justify-center flex-shrink-0">
                                        <img src={AiAssistantIcon} alt="AI Assistant" className="" />
                                    </div>
                                    <div className="">
                                        <p className="border border-[#E5E7EB] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] bg-[#F4F4F6] rounded-[20px] rounded-es-none px-[16px] py-[15px] text-[14px] leading-[20px] text-[#1F2937]">
                                            Great! Please select the number of travellers
                                        </p>
                                        <p className="text-xs text-gray-500 mt-2">05:10 AM</p>
                                    </div>
                                </div>
                                <SelectTravellers />
                            </div>

                            {/* Personal Information */}
                            <PersonalInformation />

                            {/* Each Traveller Information */}
                            <div className="max-w-[740px] mb-[30px]">
                                <div className="flex items-start gap-[8px]">
                                    <div className="w-[40px] h-[40px] rounded-full bg-[#E7ECF9] flex items-center justify-center flex-shrink-0">
                                        <img src={AiAssistantIcon} alt="AI Assistant" className="" />
                                    </div>
                                    <div className="">
                                        <p className="border border-[#E5E7EB] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] bg-[#F4F4F6] rounded-[20px] rounded-es-none px-[16px] py-[15px] text-[14px] leading-[20px] text-[#1F2937]">
                                            Awesome! Now I just need the details for each traveler to complete your booking.
                                        </p>
                                        <p className="text-xs text-gray-500 mt-2">05:10 AM</p>
                                    </div>
                                </div>
                                <TravellerDetails />
                            </div>

                            <div className="mb-[30px]">
                                <div className="flex items-start gap-[8px]">
                                    <div className="w-[40px] h-[40px] rounded-full bg-[#E7ECF9] flex items-center justify-center flex-shrink-0">
                                        <img src={AiAssistantIcon} alt="AI Assistant" className="" />
                                    </div>
                                    <div className="max-w-[740px]">
                                        <p className="border border-[#E5E7EB] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] bg-[#F4F4F6] rounded-[20px] rounded-es-none px-[16px] py-[15px] text-[14px] leading-[20px] text-[#1F2937]">
                                            Thank you! Based on your preferences, here are some packages you might like.
                                        </p>
                                        <p className="text-xs text-gray-500 mt-2">05:10 AM</p>
                                    </div>
                                </div>

                                <Packages />
                            </div>

                            <ReviewDetails />

                            <PaymentDetails />

                            <BookingConfirmation />

                            <BookingRequest />

                            {/* contact Information */}
                            <div className="max-w-[740px] mb-[30px]">
                                <div className="flex items-start gap-[8px]">
                                    <div className="w-[40px] h-[40px] rounded-full bg-[#E7ECF9] flex items-center justify-center flex-shrink-0">
                                        <img src={AiAssistantIcon} alt="AI Assistant" className="" />
                                    </div>
                                    <div className="">
                                        <p className="border border-[#E5E7EB] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] bg-[#F4F4F6] rounded-[20px] rounded-es-none px-[16px] py-[15px] text-[14px] leading-[20px] text-[#1F2937]">
                                            Great! Please provide your contact details to proceed.
                                        </p>
                                        <p className="text-xs text-gray-500 mt-2">05:10 AM</p>
                                    </div>
                                </div>
                                <ContactInformation />
                            </div>

                        </div>
                        {/* Popular Destinations */}
                        <PopularDestinations />
                    </div>
                </div>
                <ChatInput />
            </div>
            <History />
        </div >
    );
};

export default Chat;