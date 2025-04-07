import Sidebar from "../../components/chat/Sidebar";
import History from "../../components/chat/History";
import ChatInput from "../../components/chat/ChatInput";
import AiAssistantIcon from "../../assets/ai-assistant-icon.svg";
import SelectIcon from "../../assets/arrow-bottom.svg";
import AddTravellerIcon from "../../assets/add-icon.svg";
import MinusIcon from "../../assets/minus-icon.svg";
import PlusIcon from "../../assets/plus-icon.svg";
import { useState } from "react";
import PopularDestinations from "./PopularDestinations";
import BookingConfirmation from "./BookingConfirmation";
import BookingRequest from "./BookingRequest";
import PersonalInformation from "./PersonalInformation";
import { destinations } from "../../utils/dummyData";

const Chat = () => {
    const [selectedPayment, setSelectedPayment] = useState<string>("credit");
    const [cardNumber, setCardNumber] = useState<string>("");
    const [cardName, setCardName] = useState<string>("");
    const [expiryDate, setExpiryDate] = useState<string>("");
    const [cvv, setCvv] = useState<string>("");
    const [showTravelerModal, setShowTravelerModal] = useState(false);
    const [adults, setAdults] = useState<number>(3);
    const [youth, setYouth] = useState<number>(2);
    const [children, setChildren] = useState<number>(4);
    const handleIncrement = (type: string) => {
        if (type === "adult") setAdults(adults + 1);
        if (type === "youth") setYouth(youth + 1);
        if (type === "children") setChildren(children + 1);
    };
    const handleDecrement = (type: string) => {
        if (type === "adult" && adults > 0) setAdults(adults - 1);
        if (type === "youth" && youth > 0) setYouth(youth - 1);
        if (type === "children" && children > 0) setChildren(children - 1);
    };
    const totalTravelers = adults + youth + children;

    const handlePaymentChange = (method: string) => {
        setSelectedPayment(method);
    };

    const [activeTab, setActiveTab] = useState("cheapest");
    const [isHistoryOpen, setIsHistoryOpen] = useState(true); // New state for history

    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar />
            {/* Main Content */}
            <div className={`flex-1 md:ms-[275px]  ${isHistoryOpen ? 'w-[calc(100vw-600px)]' : 'w-[-webkit-fill-available]'}`}>
                <div className="h-[calc(100vh-95px)] overflow-y-auto py-[40px] pt-[60px] sm:pt-[30px] sm:py-[30px]">
                    {/* Hero Section */}
                    <div className="relative h-[200px] lg:h-[400px] overflow-hidden">
                        <div className="relative z-10 h-full flex flex-col justify-center px-4 lg:px-16 text-center">
                            <h1 className="text-[32px] lg:text-[54px] leading-[32px] lg:leading-[47px] text-[#05073C] font-bold mb-[10px]">
                                Welcome to TripBooking <span className="text-[#204ECB]">AI</span>
                            </h1>
                            <p className="text-[14px] lg:text-[16px] leading-[24px] text-[#4B5563]">
                                Planning your next trip? We've got you covered with the best
                                travel packages, personalized just for you!
                            </p>
                        </div>
                    </div>
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
                                <div className="mt-[16px] ms-[45px] max-w-[340px] bg-[#F4F4F6] rounded-[10px] py-[10px] px-[8px] border border-[#E5E7EB]">
                                    <div className="relative">
                                        <div className="border border-[#D5D5D8] rounded-[30px] px-[13px] py-[7px] bg-white cursor-pointer flex justify-between items-center relative"
                                            onClick={() => setShowTravelerModal(!showTravelerModal)}
                                        >
                                            <span className="text-gray-800">{totalTravelers} Travelers</span>
                                            <img src={SelectIcon} alt="Select" className={`absolute right-[18px] top-1/2 transform -translate-y-1/2 ${showTravelerModal ? "rotate-180" : ""}`} />
                                        </div>
                                        {showTravelerModal && (
                                            <div className="mt-[4px] bg-white rounded-[10px] shadow-xl z-10 border border-[#D5D5D8]">
                                                <div className="px-[13px] py-[20px]">
                                                    {/* Adult Row */}
                                                    <div className="flex items-center justify-between pb-[15px]">
                                                        <div>
                                                            <p className="text-[14px] font-medium text-[#05073C]">Adult (18+ years)</p>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <button
                                                                onClick={() => handleDecrement("adult")}
                                                                className="w-[30px] h-[30px] rounded-full bg-white border border-[#E7E6E6] flex items-center justify-center cursor-pointer"
                                                            >
                                                                <img src={MinusIcon} alt="Minus" className="" />
                                                            </button>
                                                            <span className="mx-4 w-4 text-center">{adults}</span>
                                                            <button
                                                                onClick={() => handleIncrement("adult")}
                                                                className="w-[30px] h-[30px] rounded-full bg-white border border-[#E7E6E6] flex items-center justify-center cursor-pointer"
                                                            >
                                                                <img src={PlusIcon} alt="Plus" className="" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    {/* Youth Row */}
                                                    <div className="flex items-center justify-between pb-[15px]">
                                                        <div>
                                                            <p className="text-[14px] font-medium text-[#05073C]">
                                                                Youth (13-17 years)
                                                            </p>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <button
                                                                onClick={() => handleDecrement("youth")}
                                                                className="w-[30px] h-[30px] rounded-full bg-white border border-[#E7E6E6] flex items-center justify-center cursor-pointer"
                                                            >
                                                                <img src={MinusIcon} alt="Minus" className="" />
                                                            </button>
                                                            <span className="mx-4 w-4 text-center">{youth}</span>
                                                            <button
                                                                onClick={() => handleIncrement("youth")}
                                                                className="w-[30px] h-[30px] rounded-full bg-white border border-[#E7E6E6] flex items-center justify-center cursor-pointer"
                                                            >
                                                                <img src={PlusIcon} alt="Plus" className="" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    {/* Children Row */}
                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <p className="font-medium text-gray-800">
                                                                Children (0-12 years)
                                                            </p>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <button
                                                                onClick={() => handleDecrement("children")}
                                                                className="w-[30px] h-[30px] rounded-full bg-white border border-[#E7E6E6] flex items-center justify-center cursor-pointer"
                                                            >
                                                                <img src={MinusIcon} alt="Minus" className="" />
                                                            </button>
                                                            <span className="mx-4 w-4 text-center">{children}</span>
                                                            <button
                                                                onClick={() => handleIncrement("children")}
                                                                className="w-[30px] h-[30px] rounded-full bg-white border border-[#E7E6E6] flex items-center justify-center cursor-pointer"
                                                            >
                                                                <img src={PlusIcon} alt="Plus" className="" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="px-[13px] py-[11px] border-t border-[#D5D5D8] text-end">
                                                    <button
                                                        onClick={() => setShowTravelerModal(false)}
                                                        className="cursor-pointer ms-auto bg-[#0D3FC6] text-white font-medium py-[10px] px-[25px] rounded-[8px] text-[16px] leading-[16px]"
                                                    >
                                                        Save
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
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
                                <div className="mt-[16px] ms-[45px] max-w-[620px] bg-[#F4F4F6] rounded-[24px] py-[20px] px-[18px] border border-[#E5E7EB]">
                                    <h3 className="mb-[15px] sm:mb-[23px] text-[16px] sm:text-[20px] leading-[20px] sm:leading-[24px] font-semibold text-[#05073C]">Please Provide details for each travellers</h3>
                                    <form>
                                        <div className="flex flex-col lg:flex-row lg:gap-[8px] items-center">
                                            <div className="mb-[10px] lg:mb-[20px] w-full">
                                                <label className="block text-[14px] font-semibold text-[#636C76] mb-1">First Name</label>
                                                <input type="text" className="rounded-[30px] border border-[#D5D5D8] bg-[#FFFFFF] py-[13px] px-[18px] text-[14px] leading-[18px] text-[#05073C] w-full placeholder:text-[#989EAE] focus:outline-[#0D3FC6]" placeholder="Enter  your frist name" />
                                            </div>
                                            <div className="mb-[10px] lg:mb-[20px] w-full">
                                                <label className="block text-[14px] font-semibold text-[#636C76] mb-1">Last Name</label>
                                                <input type="text" className="rounded-[30px] border border-[#D5D5D8] bg-[#FFFFFF] py-[13px] px-[18px] text-[14px] leading-[18px] text-[#05073C] w-full placeholder:text-[#989EAE] focus:outline-[#0D3FC6]" placeholder="Enter  your last name" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:gap-[8px] items-center">
                                            <div className="mb-[10px] lg:mb-[20px] w-full">
                                                <label className="block text-[14px] font-semibold text-[#636C76] mb-1">Gender</label>
                                                <div className="relative">
                                                    <select className="rounded-[30px] border border-[#D5D5D8] bg-[#FFFFFF] py-[11.8px] px-[18px] text-[14px] leading-[18px] text-[#05073C] w-full placeholder:text-[#989EAE] focus:outline-[#0D3FC6] appearance-none">
                                                        <option value="" disabled selected>Select Gender</option>
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                    </select>
                                                    <img src={SelectIcon} alt="Select" className="absolute right-[18px] top-1/2 transform -translate-y-1/2" />
                                                </div>
                                            </div>
                                            <div className="mb-[10px] lg:mb-[20px] w-full">
                                                <label className="block text-[14px] font-semibold text-[#636C76] mb-1">Date of birth</label>
                                                <input type="date" onFocus={(e) => e.target.showPicker()} className="rounded-[30px] border border-[#D5D5D8] bg-[#FFFFFF] py-[13px] px-[18px] text-[14px] leading-[18px] text-[#05073C] w-full placeholder:text-[#989EAE] focus:outline-[#0D3FC6]" placeholder="DD/MM/YYYY" />
                                            </div>
                                        </div>

                                        <div className="flex flex-col lg:flex-row lg:gap-[8px] items-center">
                                            <div className="mb-[10px] lg:mb-[20px] w-full">
                                                <label className="block text-[14px] font-semibold text-[#636C76] mb-1">Nationality</label>
                                                <div className="relative">
                                                    <select className="rounded-[30px] border border-[#D5D5D8] bg-[#FFFFFF] py-[11.8px] px-[18px] text-[14px] leading-[18px] text-[#05073C] w-full placeholder:text-[#989EAE] focus:outline-[#0D3FC6] appearance-none">
                                                        <option value="" disabled selected>Select Nationality</option>
                                                        <option value="India">India</option>
                                                        <option value="USA">USA</option>
                                                        <option value="UK">UK</option>
                                                        <option value="Australia">Australia</option>
                                                    </select>
                                                    <img src={SelectIcon} alt="Select" className="absolute right-[18px] top-1/2 transform -translate-y-1/2" />
                                                </div>
                                            </div>
                                            <div className="mb-[10px] lg:mb-[20px] w-full">
                                                <label className="block text-[14px] font-semibold text-[#636C76] mb-1">Passport Number</label>
                                                <input type="text" className="rounded-[30px] border border-[#D5D5D8] bg-[#FFFFFF] py-[13px] px-[18px] text-[14px] leading-[18px] text-[#05073C] w-full placeholder:text-[#989EAE] focus:outline-[#0D3FC6]" placeholder="Enter your passport number" />
                                            </div>
                                        </div>
                                        <div className="mb-[10px] lg:mb-[20px] w-full">
                                            <label className="block text-[14px] font-semibold text-[#636C76] mb-1">Special Requirement <span className="font-normal">(Optional)</span></label>
                                            <textarea className="h-[65px] resize-none rounded-[20px] border border-[#D5D5D8] bg-[#FFFFFF] py-[13px] px-[18px] text-[14px] leading-[18px] text-[#05073C] w-full placeholder:text-[#989EAE] focus:outline-[#0D3FC6]" placeholder="Enter your special requirement" />
                                        </div>
                                        <div className="mb-[26px]">
                                            <button className="flex items-center gap-[8px] border border-[#D5D5D8] rounded-[30px] py-[9px] px-[18px] text-[14px] font-semibold text-[#05073C] bg-white"><span><img src={AddTravellerIcon} alt="Add Traveller" /></span> Add Traveller</button>
                                        </div>
                                        <div className="flex flex-wrap sm:flex-nowrap gap-[11px] items-center mb-[10px]">
                                            <button className="w-full sm:w-auto bg-[#E7ECF9] text-[#0D3FC6] py-[18px] px-[48px] rounded-[8px] cursor-pointer text-[18px] leading-[16px] font-semibold">Clear</button>
                                            <button className="w-full sm:w-auto bg-[#0D3FC6] text-white py-[18px] px-[48px] rounded-[8px] cursor-pointer text-[18px] leading-[16px] font-semibold">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            {/* Package tabs */}
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
                                {/* plan tabs */}
                                <div className="mt-[40px] ps-[45px]">
                                    <div className="bg-[#E7ECF9] rounded-[8px] p-[10px] max-w-[max-content] flex gap-[10px]">
                                        <button
                                            className={`text-[14px] sm:text-[16px] px-[10px] sm:px-[20px] py-[6px] sm:py-[10px] text-[#05073C] leading-[24px] font-normal cursor-pointer rounded-[8px] ${activeTab === "cheapest"
                                                ? "bg-[#FFFFFF]"
                                                : ""
                                                }`}
                                            onClick={() => setActiveTab("cheapest")}
                                        >
                                            Cheapest
                                        </button>
                                        <button
                                            className={`text-[14px] sm:text-[16px] px-[10px] sm:px-[20px] py-[6px] sm:py-[10px] text-[#05073C] leading-[24px] font-normal cursor-pointer rounded-[8px]  ${activeTab === "featured"
                                                ? "bg-[#FFFFFF]"
                                                : ""
                                                }`}
                                            onClick={() => setActiveTab("featured")}
                                        >
                                            Featured
                                        </button>
                                    </div>

                                    {/* tabs content */}
                                    {activeTab === "cheapest" && (
                                        <div className="py-4 mb-[20px]">
                                            <div className="w-[100%] overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                                                <div className="flex gap-[16px]">
                                                    {destinations.map((destination) => (
                                                        <div key={destination.id} className="w-full min-w-[298px] bg-white shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]  cursor-pointer rounded-[12px] overflow-hidden border border-[#E5E7EB]">
                                                            <div className="h-48 overflow-hidden">
                                                                <img
                                                                    src={destination.image}
                                                                    alt="Bali Beach"
                                                                    className="w-full h-full object-cover object-top"
                                                                />
                                                            </div>
                                                            <div className="p-4 flex flex-col gap-[8px]">
                                                                <h3 className="text-lg font-semibold">{destination.name}</h3>
                                                                <p className="text-[#4B5563] text-[14px] leading-[20px]">Experience the magic of Bali with our 7-day package—luxury stays, scenic tours, and vibrant culture await you!</p>
                                                                <div className="flex items-center gap-[8px]">
                                                                    {/* <img src={LocationIcon} className="" /> */}
                                                                    <span className="text-[14px] text-[#4B5563]">Bali, Indonesia</span>
                                                                </div>
                                                                <div className="flex items-center justify-between gap-[8px]">
                                                                    <div className="flex items-center gap-[8px]">
                                                                        {/* <img src={TimeIcon} className="" /> */}
                                                                        <span className="text-[14px] text-[#4B5563]">7 Days</span>
                                                                    </div>
                                                                    <div className="flex flex-col justify-end items-end">
                                                                        <span className="block text-[10px] text-[#4B5563]">Starts from:</span>
                                                                        <span className="block text-[16px] text-[#1249CC] font-bold">$ 590</span>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <button className="cursor-pointer bg-[#E7ECF9] text-[#0D3FC6] rounded-[4px] text[14px] font-semibold py-[8px] px-[10px] w-full">View Details</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}

                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === "featured" && (
                                        <></>
                                    )}
                                </div>
                            </div>

                            {/* Review Booking Details */}
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
                                <div className="mt-[16px] ms-[45px] max-w-[580px] bg-[#ffffff] rounded-[24px] py-[20px] px-[18px] border border-[#E5E7EB]">
                                    <h3 className="mb-[15px] sm:mb-[23px] text-[16px] sm:text-[20px] leading-[20px] sm:leading-[24px] font-semibold text-[#05073C]">Please review your booking details</h3>
                                    <p className="mb-[28px] bg-[#E7ECF9] p-[7px] rounded-[5px] text-[14px] text-[#05073C]">Here's a summary of your booking. Please check all details carefully before proceeding to payment.</p>
                                    <div>
                                        <h5 className="text-[16px] font-semibold text-[#05073C] mb-[8px]">7-Day Bali Beachfront Package</h5>
                                        <p className="text-[14px] text-[#05073C]">Travel Dates: June 13-19, 2025</p>
                                    </div>
                                    <hr className="my-[14px] border-[#E5E7EB]" />
                                    <div>
                                        <h5 className="text-[16px] font-semibold text-[#05073C] mb-[8px]">Tarvellers</h5>
                                        <p className="text-[14px] text-[#05073C] mb-[4px]">1. John Smith (Primary)</p>
                                        <p className="text-[14px] text-[#05073C]">2. Jain Smith</p>
                                    </div>
                                    <hr className="my-[14px] border-[#E5E7EB]" />
                                    <div>
                                        <h5 className="text-[16px] font-semibold text-[#05073C] mb-[8px]">Your Total</h5>
                                        <div className="flex justify-between items-center gap-[10px] mb-[10px]">
                                            <p className="text-[14px] text-[#05073C]">₹12,552.95 x 5 nights</p>
                                            <p className="text-[14px] text-[#05073C]">$1,798</p>
                                        </div>
                                        <div className="flex justify-between items-center gap-[10px]">
                                            <p className="text-[14px] text-[#05073C]">Taxes & Fees</p>
                                            <p className="text-[14px] text-[#05073C]">$120</p>
                                        </div>
                                    </div>
                                    <hr className="my-[14px] border-[#E5E7EB]" />
                                    <div className="flex justify-between items-center gap-[10px] mb-[30px]">
                                        <h5 className="text-[16px] font-semibold text-[#05073C] mb-[8px]">Total Amount</h5>
                                        <p className="text-[14px] text-[#0D3FC6] font-semibold">$1,918</p>
                                    </div>
                                    <div className="flex flex-wrap sm:flex-nowrap gap-[11px] items-center mb-[10px]">
                                        <button className="w-full sm:w-auto bg-[#E7ECF9] text-[#0D3FC6] py-[18px] px-[30px] rounded-[8px] cursor-pointer text-[18px] leading-[16px] font-semibold">Edit Details</button>
                                        <button className="w-full sm:w-auto bg-[#0D3FC6] text-white py-[18px] px-[28px] rounded-[8px] cursor-pointer text-[18px] leading-[16px] font-semibold">Proceed to Payment</button>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Details */}
                            <div className="max-w-[740px] mb-[30px]">
                                <div className="flex items-start gap-[8px]">
                                    <div className="w-[40px] h-[40px] rounded-full bg-[#E7ECF9] flex items-center justify-center flex-shrink-0">
                                        <img src={AiAssistantIcon} alt="AI Assistant" className="" />
                                    </div>
                                    <div className="">
                                        <p className="border border-[#E5E7EB] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] bg-[#F4F4F6] rounded-[20px] rounded-es-none px-[16px] py-[15px] text-[14px] leading-[20px] text-[#1F2937]">
                                            Perfect! Now let’s move on to the payment screen to complete your booking.
                                        </p>
                                        <p className="text-xs text-gray-500 mt-2">05:10 AM</p>
                                    </div>
                                </div>
                                <div className="mt-[16px] ms-[45px] max-w-[580px] bg-[#ffffff] rounded-[24px] py-[20px] px-[18px] border border-[#E5E7EB]">
                                    <div className="mb-[20px]">
                                        <h3 className="text-[20px] leading-[24px] font-semibold text-[#05073C]">Payment</h3>
                                        <span className="text-[14px] text-[#05073C]">Total Amount: $1,918</span>
                                    </div>
                                    <p className="mb-[28px] bg-[#E7ECF9] p-[7px] rounded-[5px] text-[14px] text-[#05073C]">Please select your preferred payment method to complete your booking.</p>
                                    <div className="">
                                        <h3 className="mb-[12px] text-[20px] leading-[24px] font-semibold text-[#05073C]">Payment Method</h3>
                                        {/* Credit/Debit Card */}
                                        <div
                                            className={`border rounded-lg px-[10px] sm:px-[28px] py-[10px] sm:py-[18px] mb-[15px] cursor-pointer ${selectedPayment === "credit" ? "border-[#0D3FC6] bg-[#E7ECF9]" : "border-[#D5D5D8] bg-[#FFFFFF]"}`}
                                            onClick={() => handlePaymentChange("credit")}
                                        >
                                            <div className="flex items-center gap-[8px] sm:gap-[18px]">
                                                <div
                                                    className={`w-[24px] h-[24px] rounded-full border flex items-center justify-center ${selectedPayment === "credit" ? "border-[#0D3FC6]" : "border-[#D5D5D8] bg-[#FFFFFF]"}`}
                                                >
                                                    {selectedPayment === "credit" && (
                                                        <div className="w-[18px] h-[18px] bg-[#0D3FC6] rounded-full"></div>
                                                    )}
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="text-[14px] sm:text-[16px] font-medium text-[#05073C]">Credit/Debit Card</p>
                                                    <p className="text-[12px] sm:text-[14px] text-[#636A7E]">
                                                        Visa, Mastercard, Amex
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Mobile Financial Services */}
                                        <div
                                            className={`border rounded-lg px-[10px] sm:px-[28px] py-[10px] sm:py-[18px] mb-[15px] cursor-pointer ${selectedPayment === "mobile" ? "border-[#0D3FC6] bg-[#E7ECF9]" : "border-[#D5D5D8] bg-[#FFFFFF]"}`}
                                            onClick={() => handlePaymentChange("mobile")}
                                        >
                                            <div className="flex items-center gap-[8px] sm:gap-[18px]">
                                                <div
                                                    className={`w-[24px] h-[24px] rounded-full border flex items-center justify-center ${selectedPayment === "mobile" ? "border-[#0D3FC6]" : "border-[#D5D5D8] bg-[#FFFFFF]"}`}
                                                >
                                                    {selectedPayment === "mobile" && (
                                                        <div className="w-[18px] h-[18px] bg-[#0D3FC6] rounded-full"></div>
                                                    )}
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="text-[14px] sm:text-[16px] font-medium text-[#05073C]">Mobile Financial Services</p>
                                                    <p className="text-[12px] sm:text-[14px] text-[#636A7E]">
                                                        UPay, Nagad, Rocket
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Other Payment Methods */}
                                        <div
                                            className={`border rounded-lg px-[10px] sm:px-[28px] py-[10px] sm:py-[18px] mb-[15px] cursor-pointer ${selectedPayment === "other" ? "border-[#0D3FC6] bg-[#E7ECF9]" : "border-[#D5D5D8] bg-[#FFFFFF]"}`}
                                            onClick={() => handlePaymentChange("other")}
                                        >
                                            <div className="flex items-center gap-[8px] sm:gap-[18px]">
                                                <div
                                                    className={`w-[24px] h-[24px] rounded-full border flex items-center justify-center ${selectedPayment === "other" ? "border-[#0D3FC6]" : "border-[#D5D5D8] bg-[#FFFFFF]"}`}
                                                >
                                                    {selectedPayment === "other" && (
                                                        <div className="w-[18px] h-[18px] bg-[#0D3FC6] rounded-full"></div>
                                                    )}
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="text-[14px] sm:text-[16px] font-medium text-[#05073C]">Other Payment Methods</p>
                                                    <p className="text-[12px] sm:text-[14px] text-[#636A7E]">
                                                        PayPal, Bank Transfer
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Payment Details */}
                                    {selectedPayment === "credit" && (
                                        <div className="space-y-4">
                                            <div>
                                                <input
                                                    type="text"
                                                    placeholder="Card Number"
                                                    className="font-semibold text-[14px] text-[#05073C] w-full py-[8px] px-[16px] border border-[#D5D5D8] rounded-[4px] focus:outline-none"
                                                    value={cardNumber}
                                                    onChange={(e) => setCardNumber(e.target.value)}
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="text"
                                                    placeholder="Cardholder Name"
                                                    className="font-semibold text-[14px] text-[#05073C] w-full py-[8px] px-[16px] border border-[#D5D5D8] rounded-[4px] focus:outline-none"
                                                    value={cardName}
                                                    onChange={(e) => setCardName(e.target.value)}
                                                />
                                            </div>
                                            <div className="flex space-x-4">
                                                <input
                                                    type="text"
                                                    placeholder="MM/YY"
                                                    className="font-semibold text-[14px] text-[#05073C] w-1/2 py-[8px] px-[16px] border border-[#D5D5D8] rounded-[4px] focus:outline-none"
                                                    value={expiryDate}
                                                    onChange={(e) => setExpiryDate(e.target.value)}
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="CVV"
                                                    className="font-semibold text-[14px] text-[#05073C] w-1/2 py-[8px] px-[16px] border border-[#D5D5D8] rounded-[4px] focus:outline-none"
                                                    value={cvv}
                                                    onChange={(e) => setCvv(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {selectedPayment === "mobile" && (
                                        <div className="space-y-4">
                                            <input
                                                type="text"
                                                placeholder="Mobile Number"
                                                className="font-semibold text-[14px] text-[#05073C] w-full py-[8px] px-[16px] border border-[#D5D5D8] rounded-[4px] focus:outline-none"
                                            />
                                            <select className="font-semibold text-[14px] text-[#05073C] w-full py-[8px] px-[16px] border border-[#D5D5D8] rounded-[4px] focus:outline-none">
                                                <option value="">Select Service Provider</option>
                                                <option value="upay">UPay</option>
                                                <option value="nagad">Nagad</option>
                                                <option value="rocket">Rocket</option>
                                            </select>
                                        </div>
                                    )}

                                    {selectedPayment === "other" && (
                                        <div className="space-y-4">
                                            <select className="font-semibold text-[14px] text-[#05073C] w-full py-[8px] px-[16px] border border-[#D5D5D8] rounded-[4px] focus:outline-none">
                                                <option value="">Select Payment Method</option>
                                                <option value="paypal">PayPal</option>
                                                <option value="bank">Bank Transfer</option>
                                            </select>
                                            {/* Additional fields would appear based on selection */}
                                        </div>
                                    )}
                                    <div className="text-center mt-[32px]">
                                        <button className="w-full bg-[#0D3FC6] text-white py-[16px] rounded-[8px] hover:bg-[#1A339B] transition-colors cursor-pointer text-[14px] leading-[18px] uppercase font-semibold">Pay $ 1,918</button>
                                    </div>
                                </div>
                            </div>

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
                                <div className="mt-[16px] ms-[45px] max-w-[620px] bg-[#F4F4F6] rounded-[24px] py-[20px] px-[18px] border border-[#E5E7EB]">
                                    <h3 className="mb-[15px] sm:mb-[23px] text-[16px] sm:text-[20px] leading-[20px] sm:leading-[24px] font-semibold text-[#05073C]">Please Provide your contact details</h3>
                                    <form>
                                        <div className="flex flex-col lg:flex-row lg:gap-[8px] items-center">
                                            <div className="mb-[10px] lg:mb-[20px] w-full">
                                                <label className="block text-[14px] font-semibold text-[#636C76] mb-1">First Name</label>
                                                <input type="text" className="rounded-[30px] border border-[#D5D5D8] bg-[#FFFFFF] py-[13px] px-[18px] text-[14px] leading-[18px] text-[#05073C] w-full placeholder:text-[#989EAE] focus:outline-[#0D3FC6]" placeholder="Enter  your frist name" />
                                            </div>
                                            <div className="mb-[10px] lg:mb-[20px] w-full">
                                                <label className="block text-[14px] font-semibold text-[#636C76] mb-1">Last Name</label>
                                                <input type="text" className="rounded-[30px] border border-[#D5D5D8] bg-[#FFFFFF] py-[13px] px-[18px] text-[14px] leading-[18px] text-[#05073C] w-full placeholder:text-[#989EAE] focus:outline-[#0D3FC6]" placeholder="Enter  your last name" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:gap-[8px] items-center">
                                            <div className="mb-[10px] lg:mb-[20px] w-full">
                                                <label className="block text-[14px] font-semibold text-[#636C76] mb-1">Email</label>
                                                <input type="text" className="rounded-[30px] border border-[#D5D5D8] bg-[#FFFFFF] py-[13px] px-[18px] text-[14px] leading-[18px] text-[#05073C] w-full placeholder:text-[#989EAE] focus:outline-[#0D3FC6]" placeholder="Enter  your email" />
                                            </div>
                                            <div className="mb-[10px] lg:mb-[20px] w-full">
                                                <label className="block text-[14px] font-semibold text-[#636C76] mb-1">Phone</label>
                                                <input type="text" className="rounded-[30px] border border-[#D5D5D8] bg-[#FFFFFF] py-[13px] px-[18px] text-[14px] leading-[18px] text-[#05073C] w-full placeholder:text-[#989EAE] focus:outline-[#0D3FC6]" placeholder="Enter  your phone number" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col lg:flex-row lg:gap-[8px] items-center">
                                            <div className="mb-[10px] lg:mb-[20px] w-full">
                                                <label className="block text-[14px] font-semibold text-[#636C76] mb-1">Country</label>
                                                <div className="relative">
                                                    <select className="rounded-[30px] border border-[#D5D5D8] bg-[#FFFFFF] py-[11.8px] px-[18px] text-[14px] leading-[18px] text-[#05073C] w-full placeholder:text-[#989EAE] focus:outline-[#0D3FC6] appearance-none">
                                                        <option value="" disabled selected>Select Country</option>
                                                        <option value="Bangladesh">Bangladesh</option>
                                                        <option value="India">India</option>
                                                        <option value="USA">USA</option>
                                                        <option value="UK">UK</option>
                                                        <option value="Australia">Australia</option>
                                                    </select>
                                                    <img src={SelectIcon} alt="Select" className="absolute right-[18px] top-1/2 transform -translate-y-1/2" />
                                                </div>
                                            </div>
                                            <div className="mb-[10px] lg:mb-[20px] w-full">
                                                <label className="block text-[14px] font-semibold text-[#636C76] mb-1">State/County</label>
                                                <div className="relative">
                                                    <select className="rounded-[30px] border border-[#D5D5D8] bg-[#FFFFFF] py-[11.8px] px-[18px] text-[14px] leading-[18px] text-[#05073C] w-full placeholder:text-[#989EAE] focus:outline-[#0D3FC6] appearance-none">
                                                        <option value="" disabled selected>Select State/County</option>
                                                        <option value="Bangladesh">Bangladesh</option>
                                                        <option value="India">India</option>
                                                        <option value="USA">USA</option>
                                                        <option value="UK">UK</option>
                                                        <option value="Australia">Australia</option>
                                                    </select>
                                                    <img src={SelectIcon} alt="Select" className="absolute right-[18px] top-1/2 transform -translate-y-1/2" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col lg:flex-row lg:gap-[8px] items-center">
                                            <div className="mb-[10px] lg:mb-[20px] w-full">
                                                <label className="block text-[14px] font-semibold text-[#636C76] mb-1">Town/City</label>
                                                <div className="relative">
                                                    <select className="rounded-[30px] border border-[#D5D5D8] bg-[#FFFFFF] py-[11.8px] px-[18px] text-[14px] leading-[18px] text-[#05073C] w-full placeholder:text-[#989EAE] focus:outline-[#0D3FC6] appearance-none">
                                                        <option value="" disabled selected>Select Town/City</option>
                                                        <option value="India">India</option>
                                                        <option value="USA">USA</option>
                                                        <option value="UK">UK</option>
                                                        <option value="Australia">Australia</option>
                                                    </select>
                                                    <img src={SelectIcon} alt="Select" className="absolute right-[18px] top-1/2 transform -translate-y-1/2" />
                                                </div>
                                            </div>
                                            <div className="mb-[10px] lg:mb-[20px] w-full">
                                                <label className="block text-[14px] font-semibold text-[#636C76] mb-1">Postcode/ZIP</label>
                                                <input type="text" className="rounded-[30px] border border-[#D5D5D8] bg-[#FFFFFF] py-[13px] px-[18px] text-[14px] leading-[18px] text-[#05073C] w-full placeholder:text-[#989EAE] focus:outline-[#0D3FC6]" placeholder="Enter your postcode/ZIP" />
                                            </div>
                                        </div>
                                        <div className="mb-[10px] lg:mb-[20px] w-full">
                                            <label className="block text-[14px] font-semibold text-[#636C76] mb-1">Street Address</label>
                                            <textarea className="h-[65px] resize-none rounded-[20px] border border-[#D5D5D8] bg-[#FFFFFF] py-[13px] px-[18px] text-[14px] leading-[18px] text-[#05073C] w-full placeholder:text-[#989EAE] focus:outline-[#0D3FC6]" placeholder="Enter your street address" />
                                        </div>
                                        <div className="flex flex-wrap sm:flex-nowrap gap-[11px] items-center mb-[10px]">
                                            <button className="w-full sm:w-auto bg-[#E7ECF9] text-[#0D3FC6] py-[18px] px-[48px] rounded-[8px] cursor-pointer text-[18px] leading-[16px] font-semibold">Clear</button>
                                            <button className="w-full sm:w-auto bg-[#0D3FC6] text-white py-[18px] px-[48px] rounded-[8px] cursor-pointer text-[18px] leading-[16px] font-semibold">Save</button>
                                        </div>
                                    </form>
                                </div>
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
