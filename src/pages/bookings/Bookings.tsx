import { useState } from "react";
import Sidebar from "../../components/chat/Sidebar";
import SearchIcon from "../../assets/search-icon.svg";
import SortByIcon from "../../assets/sort-by-icon.svg";
import FilterIcon from "../../assets/filter-icon.svg";
import PrintIcon from "../../assets/print-icon.svg";
import ModifyIcon from "../../assets/modify-icon.svg";
import CloseIcon from "../../assets/modalClose-icon.svg";

const Bookings = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [selectedBooking, setSelectedBooking] = useState<any>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);

  const bookings = {
    upcoming: [
      {
        id: 1,
        destination: "Bali, Indonesia",
        hotel: "Bali Beach Resort & Spa",
        dates: "Apr 15, 2025 - Apr 22, 2025",
        guests: "2 Adults",
        price: "$1,450",
        status: "Confirmed",
        image:
          "https://public.readdy.ai/ai/img_res/ce36161846b8fb3581e2072ef10c9393.jpg",
      },
      {
        id: 2,
        destination: "Paris, France",
        hotel: "Le Grand Paris Hotel",
        dates: "May 10, 2025 - May 15, 2025",
        guests: "2 Adults",
        price: "$1,890",
        status: "Pending Payment",
        image:
          "https://public.readdy.ai/ai/img_res/22431b4089dfb5decd18ec31f370a1a6.jpg",
      },
      {
        id: 3,
        destination: "Tokyo, Japan",
        hotel: "Tokyo Skyline Hotel",
        dates: "Jun 5, 2025 - Jun 11, 2025",
        guests: "1 Adult",
        price: "$1,750",
        status: "Confirmed",
        image:
          "https://public.readdy.ai/ai/img_res/81ae9a6da1a826020843eb5a93d33661.jpg",
      },
    ],
    previous: [
      {
        id: 4,
        destination: "New York, USA",
        hotel: "Manhattan Grand Hotel",
        dates: "Jan 10, 2025 - Jan 14, 2025",
        guests: "2 Adults",
        price: "$1,250",
        status: "Completed",
        image:
          "https://public.readdy.ai/ai/img_res/9908cb81ed3af24b5c591f5a792d9c45.jpg",
      },
      {
        id: 5,
        destination: "Rome, Italy",
        hotel: "Roma Antica Hotel",
        dates: "Feb 15, 2025 - Feb 20, 2025",
        guests: "2 Adults, 1 Child",
        price: "$1,680",
        status: "Completed",
        image:
          "https://public.readdy.ai/ai/img_res/064d25430f20faf8117e9f25d498b542.jpg",
      },
    ],
    cancelled: [
      {
        id: 6,
        destination: "Maldives",
        hotel: "Maldives Ocean Villas",
        dates: "Mar 1, 2025 - Mar 10, 2025",
        guests: "2 Adults",
        price: "$2,950",
        status: "Cancelled",
        refund: "$2,655 (90%)",
        image:
          "https://public.readdy.ai/ai/img_res/c77f35d752cef147f044d6654792ed0e.jpg",
      },
    ],
  };
  const renderStatusBadge = (status: string) => {
    let colorClass = "";
    let icon = "";
    switch (status) {
      case "Confirmed":
        colorClass = "bg-green-100 text-green-800";
        icon = "fa-check-circle";
        break;
      case "Pending Payment":
        colorClass = "bg-yellow-100 text-yellow-800";
        icon = "fa-clock";
        break;
      case "Completed":
        colorClass = "bg-blue-100 text-blue-800";
        icon = "fa-check-double";
        break;
      case "Cancelled":
        colorClass = "bg-red-100 text-red-800";
        icon = "fa-times-circle";
        break;
      default:
        colorClass = "bg-gray-100 text-gray-800";
        icon = "fa-info-circle";
    }
    return (
      <span
        className={`inline-flex items-center px-2.5 py-[4px] rounded-full text-xs font-medium ${colorClass}`}
      >
        <i className={`fa ${icon} mr-1`}></i>
        {status}
      </span>
    );
  };
  return (
    <div className="flex">
      <Sidebar />
      <div className="md:ms-[275px] h-screen overflow-y-auto flex-1">
        <div className=" py-[15px] sm:py-[14px] mx-auto sm:px-[30px] px-[10px] border-b border-[#E5E7EB] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
          <h1 className="text-[20px] sm:text-[24px] leading-[32px] font-bold text-[#05073C] max-w-[1240px] mx-auto">
            My Bookings
          </h1>
        </div>
        <div className=" max-w-[1240px] sm:px-[30px] px-[10px] mx-auto">
          {/* Tabs */}
          <div className="py-[30px]">
            <div className="flex justify-between sm:justify-start gap-[10px] lg:gap-[30px] items-center flex-wrap sm:flex-nowrap bg-[#E7ECF9] rounded-[8px] w-max p-[10px]">
              <button
                className={`text-[14px] lg:text-[18px] px-[10px] sm:px-[16px] py-[6px] sm:py-[9px] text-[#05073C] leading-[22px] font-normal cursor-pointer rounded-[8px] ${
                  activeTab === "upcoming" ? "bg-white" : ""
                }`}
                onClick={() => setActiveTab("upcoming")}
              >
                Upcoming
              </button>
              <button
                className={`text-[14px] lg:text-[18px] px-[10px] sm:px-[16px] py-[6px] sm:py-[9px] text-[#05073C] leading-[22px] font-normal cursor-pointer rounded-[8px] ${
                  activeTab === "previous" ? "bg-white" : ""
                }`}
                onClick={() => setActiveTab("previous")}
              >
                Previous
              </button>
              <button
                className={`text-[14px] lg:text-[18px] px-[10px] sm:px-[16px] py-[6px] sm:py-[9px] text-[#05073C] leading-[22px] font-normal cursor-pointer rounded-[8px] ${
                  activeTab === "cancelled" ? "bg-white" : ""
                }`}
                onClick={() => setActiveTab("cancelled")}
              >
                Cancelled
              </button>
            </div>
          </div>

          {/* search and filter */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div className="relative">
              <span className="absolute inset-y-0 left-[13px] flex items-center text-gray-400">
                <img
                  src={SearchIcon}
                  alt="Search"
                  className="w-[18px] h-[18px]"
                />
              </span>
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-[40px] pr-[10px] py-[9px] rounded-[8px] text-[14px] font-semibold leading-[20px] placeholder:text-[#6B7280] border border-[#E5E7EB] focus:outline-none"
              />
            </div>
            <div className="flex w-full sm:w-auto flex-wrap gap-[10px]">
              <button className="px-4 py-2 flex gap-[6px] bg-white border border-[#E5E7EB] rounded-sm text-sm text-[#636A7E] items-center cursor-pointer">
                <img src={FilterIcon} alt="Filter" className="" />
                Filter
              </button>
              <button className="px-4 py-2 flex gap-[6px] bg-white border border-[#E5E7EB] rounded-sm text-sm text-[#636A7E] items-center cursor-pointer">
                <img src={SortByIcon} alt="Sort" className="" />
                Sort
              </button>
              <button className="px-4 py-2 bg-[#0D3FC6] text-white text-sm flex items-center rounded-[4px]">
                New Booking
              </button>
            </div>
          </div>

          {/* upcoming tab Content */}
          {activeTab === "upcoming" &&
            bookings.upcoming.map((booking) => (
              <div
                key={booking.id}
                className="bg-white rounded-lg overflow-hidden border border-[#E5E7EB] shadow-[0px_1px_2px_0px_#0000000D] mb-[24px]"
              >
                <div className="lg:flex">
                  <div className="lg:w-1/3 h-48 md:h-auto overflow-hidden">
                    <img
                      src={booking.image}
                      alt={booking.destination}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-[16px] sm:p-[24px] lg:w-2/3">
                    <div className="sm:flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-[#05073C]">
                          {booking.destination}
                        </h3>
                        <p className="text-[#4B5563] text-base">
                          {booking.hotel}
                        </p>
                      </div>
                      {renderStatusBadge(booking.status)}
                    </div>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-xs text-[#6B7280]">Booking Number</p>
                        <p className="text-sm font-medium">
                          BK-{booking.id.toString().padStart(6, "0")}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-[#6B7280]">Booking Date</p>
                        <p className="text-sm font-medium">Apr 7, 2025</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#6B7280]">Total Price</p>
                        <p className="text-sm font-medium">{booking.price}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#6B7280]">Dates</p>
                        <p className="text-sm font-medium">{booking.dates}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#6B7280]">Guests</p>
                        <p className="text-sm font-medium">{booking.guests}</p>
                      </div>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      <button
                        className="px-[25px] py-2 bg-[#0D3FC6] text-white rounded-[4px] text-sm cursor-pointer"
                        onClick={() => {
                          const bookingData = booking;
                          setSelectedBooking(bookingData);
                          setShowDetailModal(true);
                        }}
                      >
                        <i className="fa fa-eye mr-2"></i>
                        View Details
                      </button>
                      <button
                        className="px-4 py-2 bg-white border border-[#E5E7EB] text-[#636A7E] rounded-sm text-sm flex items-center gap-[6px] cursor-pointer"
                        type="button"
                      >
                        <img src={ModifyIcon} alt="Modify" className="" />
                        Modify
                      </button>
                      <button
                        className="px-4 py-2 bg-white border border-[#E5E7EB] text-[#636A7E] rounded-sm text-sm flex items-center gap-[6px] cursor-pointer"
                        type="button"
                      >
                        <img src={PrintIcon} alt="Print" className="" />
                        Print
                      </button>
                      {booking.status === "Pending Payment" && (
                        <button className="px-4 py-2 bg-[#00c50d] text-white rounded-[4px] text-sm cursor-pointer">
                          <i className="fa fa-credit-card mr-2"></i>
                          Pay Now
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {/* Previous Content */}
          {activeTab === "previous" &&
            bookings.previous.map((booking) => (
              <div
                key={booking.id}
                className="bg-white rounded-lg overflow-hidden border border-[#E5E7EB] shadow-[0px_1px_2px_0px_#0000000D] mb-[24px]"
              >
                <div className="lg:flex">
                  <div className="lg:w-1/3 h-48 md:h-auto overflow-hidden">
                    <img
                      src={booking.image}
                      alt={booking.destination}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-[16px] sm:p-[24px] lg:w-2/3">
                    <div className="sm:flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-[#05073C]">
                          {booking.destination}
                        </h3>
                        <p className="text-[#4B5563] text-base">
                          {booking.hotel}
                        </p>
                      </div>
                      {renderStatusBadge(booking.status)}
                    </div>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-xs text-[#6B7280]">Booking Number</p>
                        <p className="text-sm font-medium">
                          BK-{booking.id.toString().padStart(6, "0")}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-[#6B7280]">Booking Date</p>
                        <p className="text-sm font-medium">Apr 7, 2025</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#6B7280]">Total Price</p>
                        <p className="text-sm font-medium">{booking.price}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#6B7280]">Dates</p>
                        <p className="text-sm font-medium">{booking.dates}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#6B7280]">Guests</p>
                        <p className="text-sm font-medium">{booking.guests}</p>
                      </div>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      <button
                        className="px-[25px] py-2 bg-[#0D3FC6] text-white rounded-[4px] text-sm cursor-pointer"
                        onClick={() => {
                          const bookingData = booking;
                          setSelectedBooking(bookingData);
                          setShowDetailModal(true);
                        }}
                      >
                        <i className="fa fa-eye mr-2"></i>
                        View Details
                      </button>
                      <button
                        className="px-4 py-2 bg-white border border-[#E5E7EB] text-[#636A7E] rounded-sm text-sm flex items-center gap-[6px] cursor-pointer"
                        type="button"
                      >
                        <img src={ModifyIcon} alt="Modify" className="" />
                        Modify
                      </button>
                      <button
                        className="px-4 py-2 bg-white border border-[#E5E7EB] text-[#636A7E] rounded-sm text-sm flex items-center gap-[6px] cursor-pointer"
                        type="button"
                      >
                        <img src={PrintIcon} alt="Print" className="" />
                        Print
                      </button>
                      {booking.status === "Pending Payment" && (
                        <button className="px-4 py-2 bg-[#00c50d] text-white rounded-[4px] text-sm cursor-pointer">
                          <i className="fa fa-credit-card mr-2"></i>
                          Pay Now
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {/* Cancelled Content */}
          {activeTab === "cancelled" &&
            bookings.cancelled.map((booking) => (
              <div
                key={booking.id}
                className="bg-white rounded-lg overflow-hidden border border-[#E5E7EB] shadow-[0px_1px_2px_0px_#0000000D] mb-[24px]"
              >
                <div className="lg:flex">
                  <div className="lg:w-1/3 h-48 md:h-auto overflow-hidden">
                    <img
                      src={booking.image}
                      alt={booking.destination}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-[16px] sm:p-[24px] lg:w-2/3">
                    <div className="sm:flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-[#05073C]">
                          {booking.destination}
                        </h3>
                        <p className="text-[#4B5563] text-base">
                          {booking.hotel}
                        </p>
                      </div>
                      {renderStatusBadge(booking.status)}
                    </div>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-xs text-[#6B7280]">Booking Number</p>
                        <p className="text-sm font-medium">
                          BK-{booking.id.toString().padStart(6, "0")}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-[#6B7280]">Booking Date</p>
                        <p className="text-sm font-medium">Apr 7, 2025</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#6B7280]">Total Price</p>
                        <p className="text-sm font-medium">{booking.price}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#6B7280]">Dates</p>
                        <p className="text-sm font-medium">{booking.dates}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#6B7280]">Guests</p>
                        <p className="text-sm font-medium">{booking.guests}</p>
                      </div>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      <button
                        className="px-[25px] py-2 bg-[#0D3FC6] text-white rounded-[4px] text-sm cursor-pointer"
                        onClick={() => {
                          const bookingData = booking;
                          setSelectedBooking(bookingData);
                          setShowDetailModal(true);
                        }}
                      >
                        <i className="fa fa-eye mr-2"></i>
                        View Details
                      </button>
                      <button
                        className="px-4 py-2 bg-white border border-[#E5E7EB] text-[#636A7E] rounded-sm text-sm flex items-center gap-[6px] cursor-pointer"
                        type="button"
                      >
                        <img src={ModifyIcon} alt="Modify" className="" />
                        Modify
                      </button>
                      <button
                        className="px-4 py-2 bg-white border border-[#E5E7EB] text-[#636A7E] rounded-sm text-sm flex items-center gap-[6px] cursor-pointer"
                        type="button"
                      >
                        <img src={PrintIcon} alt="Print" className="" />
                        Print
                      </button>
                      {booking.status === "Pending Payment" && (
                        <button className="px-4 py-2 bg-[#00c50d] text-white rounded-[4px] text-sm cursor-pointer">
                          <i className="fa fa-credit-card mr-2"></i>
                          Pay Now
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      {showDetailModal && selectedBooking && (
        <div className="fixed inset-0 bg-[#0000004D] flex items-center justify-center z-[999] px-[10px]">
          <div className="bg-white rounded-[24px] shadow-xl w-full max-w-[915px]">
            <div className="flex justify-between items-center border-b border-gray-200 px-[15px] sm:px-6 py-[10px] sm:py-4">
              <h3 className="text-[20px] sm:text-[24px] font-bold text-gray-900">
                Booking Details
              </h3>
              <button
                className="cursor-pointer w-[30px] sm:w-[35px] h-[30px] sm:h-[35px] bg-[#E7ECF9] rounded-full flex items-center justify-center"
                onClick={() => setShowDetailModal(false)}
              >
                <img src={CloseIcon} alt="Close" />
              </button>
            </div>

            <div className="p-[15px] sm:p-[25px] max-h-[calc(100vh-100px)] overflow-y-auto">
              <div>
                <h3 className="text-xl sm:text-2xl text-[#05073C] font-semibold mb-[10px] sm:mb-[15px]">
                  Booking Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-xs text-[#6B7280]">Booking Number</p>
                    <p className="text-sm font-medium">BK-000001</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#6B7280]">Booking Date</p>
                    <p className="text-sm font-medium">Apr 7, 2025</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#6B7280]">Stay Dates</p>
                    <p className="text-sm font-medium">Apr 15, 2025 - Apr 22, 2025</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#6B7280]">Total Price</p>
                    <p className="text-sm font-medium">$1,450</p>
                  </div>
                </div>
              </div>
              <div className="mt-[20px] sm:mt-[50px]">
                <h3 className="text-xl sm:text-2xl text-[#05073C] font-semibold mb-[10px] sm:mb-[15px]">
                Traveller Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-xs text-[#6B7280]">Primary Guest</p>
                    <p className="text-sm font-medium">Emily Watson</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#6B7280]">Email</p>
                    <p className="text-sm font-medium">emily@workspace.com</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#6B7280]">Phone</p>
                    <p className="text-sm font-medium">+123 456 7890</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#6B7280]">Gender</p>
                    <p className="text-sm font-medium">Male</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#6B7280]">Date of Birth</p>
                    <p className="text-sm font-medium">04/07/1995</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#6B7280]">Passport Number</p>
                    <p className="text-sm font-medium">P1234567</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#6B7280]">Guests</p>
                    <p className="text-sm font-medium">2 Adults</p>
                  </div>
                </div>
              </div>
              <div className="mt-[20px] sm:mt-[50px] mb-[20px]">
                <h3 className="text-xl sm:text-2xl text-[#05073C] font-semibold mb-[10px] sm:mb-[15px]">
                    Payment Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs text-[#6B7280]">Payment Information</p>
                    <p className="text-sm font-medium bg-[#DCFCE7] text-[#166534] rounded-[5px] px-[18px] py-[4px] inline-block mt-[4px]">Paid</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#6B7280]">Payment Method</p>
                    <p className="text-sm font-medium">Visa ending in 4567</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#6B7280]">Billing Address</p>
                    <p className="text-sm font-medium">123 Main St, San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookings;
