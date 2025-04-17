import { useState } from "react";
import SearchIcon from "../../assets/search-icon.svg";
import SortByIcon from "../../assets/sort-by-icon.svg";
import FilterIcon from "../../assets/filter-icon.svg";
import BookingCards from "../../components/dashboard/bookings/BookingCards";
import { bookings } from "../../utils/dummyData";
import BookingModal from "../../components/dashboard/bookings/BookingModal";
import BookingFilter from "../../components/dashboard/bookings/BookingFilter";
interface Booking {
  id: number;
  destination: string;
  hotel: string;
  dates: string;
  guests: string;
  price: string;
  status: string;
  image: string;
  type: string;
}


const Bookings = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);

  return (
    <div className="flex">
      <div className="md:ms-[275px] h-screen overflow-y-auto flex-1">
        <div className=" py-[15px] sm:py-[14px] mx-auto sm:px-[30px] px-[10px] border-b border-[#E5E7EB] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
          <h1 className="text-center lg:text-start text-[20px] sm:text-[24px] leading-[32px] font-bold text-[#05073C] max-w-[1240px] mx-auto">
            My Bookings
          </h1>
        </div>

        <div className=" max-w-[1240px] sm:px-[30px] px-[10px] mx-auto">
          {/* Tabs */}
          <BookingFilter activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* search and filter */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div className="relative max-w-[350px] flex-1">
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
            bookings.filter((booking) => booking.type === "upcoming").map((booking) => (
              <BookingCards key={booking.id} booking={booking} setSelectedBooking={setSelectedBooking} setShowDetailModal={setShowDetailModal} />
            ))}

          {/* Previous Content */}
          {activeTab === "previous" &&
            bookings.filter((booking) => booking.type === "previous").map((booking) => (
              <BookingCards key={booking.id} booking={booking} setSelectedBooking={setSelectedBooking} setShowDetailModal={setShowDetailModal} />
            ))}

          {/* Cancelled Content */}
          {activeTab === "cancelled" &&
            bookings.filter((booking) => booking.type === "cancelled").map((booking) => (
              <BookingCards key={booking.id} booking={booking} setSelectedBooking={setSelectedBooking} setShowDetailModal={setShowDetailModal} />
            ))}
        </div>
      </div>

      {showDetailModal && selectedBooking && (
        <BookingModal setShowDetailModal={setShowDetailModal} />
      )}
    </div>
  );
};

export default Bookings;