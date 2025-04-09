import ModifyIcon from "../../../assets/modify-icon.svg";
import PrintIcon from "../../../assets/print-icon.svg";

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

const BookingCards = ({ booking, setSelectedBooking, setShowDetailModal }: {
     booking: {
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
     setSelectedBooking: (booking: any) => void;
     setShowDetailModal: (show: boolean) => void;
}) => {

     return (
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
     )
}

export default BookingCards;
