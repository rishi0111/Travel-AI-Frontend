const BookingModal = ({ setShowDetailModal }: {
     setShowDetailModal: (show: boolean) => void;
}) => {
     return (
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
                              <img src="./modalClose-icon.svg" alt="Close" />
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
     )
}

export default BookingModal;
