const BookingFilter = ({ activeTab, setActiveTab }: {
     activeTab: string;
     setActiveTab: (tab: string) => void;
}) => {
     return (
          <div className="py-[30px]">
               <div className="flex justify-between sm:justify-start gap-[10px] lg:gap-[30px] items-center flex-wrap sm:flex-nowrap bg-[#E7ECF9] rounded-[8px] w-max p-[10px]">
                    <button
                         className={`text-[14px] lg:text-[18px] px-[10px] sm:px-[16px] py-[6px] sm:py-[9px] text-[#05073C] leading-[22px] font-normal cursor-pointer rounded-[8px] ${activeTab === "upcoming" ? "bg-white" : ""
                              }`}
                         onClick={() => setActiveTab("upcoming")}
                    >
                         Upcoming
                    </button>
                    <button
                         className={`text-[14px] lg:text-[18px] px-[10px] sm:px-[16px] py-[6px] sm:py-[9px] text-[#05073C] leading-[22px] font-normal cursor-pointer rounded-[8px] ${activeTab === "previous" ? "bg-white" : ""
                              }`}
                         onClick={() => setActiveTab("previous")}
                    >
                         Previous
                    </button>
                    <button
                         className={`text-[14px] lg:text-[18px] px-[10px] sm:px-[16px] py-[6px] sm:py-[9px] text-[#05073C] leading-[22px] font-normal cursor-pointer rounded-[8px] ${activeTab === "cancelled" ? "bg-white" : ""
                              }`}
                         onClick={() => setActiveTab("cancelled")}
                    >
                         Cancelled
                    </button>
               </div>
          </div>
     )
}

export default BookingFilter;
