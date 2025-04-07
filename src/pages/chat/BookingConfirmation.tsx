import BookingConfirmationIcon from "../../assets/green-check.svg";
import AiAssistantIcon from "../../assets/ai-assistant-icon.svg";

const BookingConfirmation = () => {
     return (
          <div className="max-w-[740px] mb-[30px]">
               <div className="flex items-start gap-[8px]">
                    <div className="w-[40px] h-[40px] rounded-full bg-[#E7ECF9] flex items-center justify-center flex-shrink-0">
                         <img src={AiAssistantIcon} alt="AI Assistant" className="" />
                    </div>
                    <div className="">
                         <p className="border border-[#E5E7EB] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] bg-[#F4F4F6] rounded-[20px] rounded-es-none px-[16px] py-[15px] text-[14px] leading-[20px] text-[#1F2937]">
                              Congratulations! Your booking is confirmed!
                         </p>
                         <p className="text-xs text-gray-500 mt-2">05:10 AM</p>
                    </div>
               </div>
               <div className="mt-[16px] ms-[45px] max-w-[510px] bg-[#ffffff] rounded-[24px] py-[20px] px-[10px] sm:px-[18px] border border-[#E5E7EB]">
                    <div className="text-center mb-[20px] sm:mb-[30px]">
                         <div className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] rounded-full bg-[#DCFCE7] mx-auto mb-[20px] flex items-center justify-center flex-shrink-0">
                              <img src={BookingConfirmationIcon} alt="Booking Confirmation" className="mx-auto sm:w-auto w-[30px]" />
                         </div>
                         <h3 className="mb-[8px] text-[20px] sm:text-[28px] leading-[20px] sm:leading-[24px] font-semibold text-[#05073C]">Booking Confirmed</h3>
                         <p className="text-[14px] :text-[16px] text-[#636A7E]">Your booking has been successfully completed</p>
                    </div>
                    <div className="bg-[#E7ECF9] rounded-[10px] p-[12px] sm:p-[20px] mb-[30px]">
                         <h4 className="text-[16px] sm:text-[20px] font-semibold text-[#05073C] mb-[13px]">Booking Details</h4>
                         <div className="flex justify-between items-center gap-[10px] mb-[14px]">
                              <p className="text-[14px] text-[#05073C]">Booking ID:</p>
                              <p className="text-[14px] text-[#05073C] text-right">1234567890</p>
                         </div>
                         <div className="flex justify-between items-center gap-[10px] mb-[14px]">
                              <p className="text-[14px] text-[#05073C]">Travel Date</p>
                              <p className="text-[14px] text-[#05073C] text-right">Apr 14-20, 2025</p>
                         </div>
                         <div className="flex justify-between items-center gap-[10px] mb-[14px]">
                              <p className="text-[14px] text-[#05073C]">Payment Status</p>
                              <p className="text-[14px] text-[#22C55E] font-semibold text-right">Paid</p>
                         </div>
                         <div className="flex justify-between items-center gap-[10px]">
                              <p className="text-[14px] text-[#05073C]">Total Amount</p>
                              <p className="text-[14px] text-[#05073C] text-right">$1,718</p>
                         </div>
                    </div>
                    <div className="mb-[30px]">
                         <h5 className="text-[16px] font-semibold text-[#05073C] mb-[11px]">What Happens Next?</h5>
                         <ul className="list-disc text-[14px] text-[#05073C] ps-[18px]">
                              <li className="text-[14px] leading-[20px] mb-[10px]"><span className="font-semibold">Check your email -</span> You’ll receive a confirmation email shortly with all your booking details.</li>
                              <li className="text-[14px] leading-[20px] mb-[10px]"><span className="font-semibold">Final Itinerary in 48 Hours -</span> We’re finalizing everything! Your full itinerary will be sent within <span className="font-semibold">48 hours.</span></li>
                              <li className="text-[14px] leading-[20px] mb-[10px]"><span className="font-semibold">Expect a Call from Our Team -</span> One of our team member will reach out soon to assist with any additional needs.</li>
                              <li className="text-[14px] leading-[20px] mb-[10px]"><span className="font-semibold">Get Ready for Your Trip! -</span> We’ll share travel tips, packing lists, and exclusive offers before your departure.</li>
                         </ul>
                    </div>
                    <div>
                         <h5 className="text-[16px] font-semibold text-[#05073C] mb-[11px]">Need Assistance?</h5>
                         <div className="flex justify-between items-center gap-[10px] mb-[10px]">
                              <p className="text-[14px] text-[#05073C]">Email</p>
                              <p className="text-[14px] font-semibold text-[#0D3FC6]">support@tripbooking.ai</p>
                         </div>
                         <div className="flex justify-between items-center gap-[10px] mb-[10px]">
                              <p className="text-[14px] text-[#05073C]">Phone</p>
                              <p className="text-[14px] text-[#05073C]">+8801717171717</p>
                         </div>
                    </div>
                    <div className="text-center mt-[32px]">
                         <button className="w-full bg-[#0D3FC6] text-white py-[16px] rounded-[8px] hover:bg-[#1A339B] transition-colors cursor-pointer text-[14px] leading-[18px] uppercase font-semibold">Return to Home</button>
                    </div>
               </div>
          </div>
     )
}

export default BookingConfirmation;
