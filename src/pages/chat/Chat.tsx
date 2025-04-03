import Sidebar from "../../components/chat/Sidebar";
import ChatInput from "../../components/chat/ChatInput";
import AiAssistantIcon from "../../assets/ai-assistant-icon.svg";
const Chat = () => {
  return (
    <div className="flex">
    {/* Sidebar */}
    <Sidebar />
    {/* Main Content */}
    <div className="flex-1 ms-[275px]">
        <div className="h-[calc(100vh-95px)] overflow-y-auto py-[30px]">
            {/* Hero Section */}
            <div className="relative h-[400px] overflow-hidden">
                <div className="relative z-10 h-full flex flex-col justify-center px-16 text-center">
                <h1 className="text-[54px] leading-[47px] text-[#05073C] font-bold mb-[10px]">
                    Welcome to TripBooking <span className="text-[#204ECB]">AI</span>
                </h1>
                <p className="text-[16px] leading-[24px] text-[#4B5563]">
                    Planning your next trip? We've got you covered with the best
                    travel packages, personalized just for you!
                </p>
                </div>
            </div>
            <div className="max-w-[1035px] mx-auto px-[20px]">
                <div className="">
                    {/* AI Assistant Chat */}
                    <div className="max-w-[740px] mb-[30px]">
                        <div className="flex items-start gap-[8px]">
                            <div className="w-[40px] h-[40px] rounded-full bg-[#E7ECF9] flex items-center justify-center flex-shrink-0">
                                <img src={AiAssistantIcon} alt="AI Assistant" className="" />
                            </div>
                            <div className="">
                                <p className="border border-[#E5E7EB] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] bg-[#F4F4F6] rounded-[20px] rounded-es-none px-[16px] py-[7px] text-[14px] leading-[20px] text-[#1F2937]">
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
                </div>
                {/* Popular Destinations */}
                <div className="px-8 py-4 mb-[20px]">
                    <h2 className="text-[20px] leading-[24px] font-semibold mb-[20px] text-[#05073C]">Popular Destinations</h2>
                    <div className="w-full overflow-x-auto">
                        <div className="flex gap-[16px]">
                            {/* Bali Package */}
                            <div className="w-full max-w-[290px] bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src="https://public.readdy.ai/ai/img_res/21ddc9d57a133e634320125b872e4ce5.jpg"
                                        alt="Bali Beach"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">7-Day Bali Package</h3>
                                </div>
                            </div>
                            {/* Paris */}
                            <div className="w-full max-w-[290px] bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src="https://public.readdy.ai/ai/img_res/674827b09101ef2f707ad73140066183.jpg"
                                        alt="Paris"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">5-Day Paris Escape</h3>
                                </div>
                            </div>
                            {/* Greek Islands */}
                            <div className="w-full max-w-[290px] bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src="https://public.readdy.ai/ai/img_res/4cf72f86bec4cc1e642115a042413a0a.jpg"
                                        alt="Greek Islands"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">
                                        8-Day Greek Islands Cruise
                                    </h3>
                                </div>
                            </div>
                            {/* Safari */}
                            <div className="w-full max-w-[290px] bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src="https://public.readdy.ai/ai/img_res/ffecd45ed83b051bfabff3069f3c40fa.jpg"
                                        alt="African Safari"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">
                                        5-Day Safari Adventure
                                    </h3>
                                </div>
                            </div>
                            {/* Safari */}
                            <div className="w-full max-w-[290px] bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src="https://public.readdy.ai/ai/img_res/ffecd45ed83b051bfabff3069f3c40fa.jpg"
                                        alt="African Safari"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">
                                        5-Day Safari Adventure
                                    </h3>
                                </div>
                            </div>
                            
                            {/* Safari */}
                            <div className="w-full max-w-[290px] bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src="https://public.readdy.ai/ai/img_res/ffecd45ed83b051bfabff3069f3c40fa.jpg"
                                        alt="African Safari"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">
                                        5-Day Safari Adventure
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <ChatInput />
    </div>
  </div>

  );
};

export default Chat;
