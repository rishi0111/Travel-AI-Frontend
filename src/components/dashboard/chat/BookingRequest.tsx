import BookingRequestIcon from "../../../assets/booking-request-icon.svg";
import AiAssistantIcon from "../../../assets/ai-assistant-icon.svg";

const BookingRequest = () => {
     return (
          <div className="max-w-[740px] mb-[30px]">
               <div className="flex items-start gap-[8px]">
                    <div className="w-[40px] h-[40px] rounded-full bg-[#E7ECF9] flex items-center justify-center flex-shrink-0">
                         <img src={AiAssistantIcon} alt="AI Assistant" className="" />
                    </div>
                    <div className="">
                         <p className="border border-[#E5E7EB] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] bg-[#F4F4F6] rounded-[20px] rounded-es-none px-[16px] py-[15px] text-[14px] leading-[20px] text-[#1F2937]">
                              We’re here to help! If you have any questions or need assistance, please don’t hesitate to reach out.
                         </p>
                         <p className="text-xs text-gray-500 mt-2">05:10 AM</p>
                    </div>
               </div>
               <div className="mt-[16px] ms-[45px] max-w-[510px] bg-[#ffffff] rounded-[24px] py-[20px] px-[18px] border border-[#E5E7EB]">
                    <div className="text-center mb-[30px]">
                         <div className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] rounded-full bg-[#FFE1B6] mx-auto mb-[20px] flex items-center justify-center flex-shrink-0">
                              <img src={BookingRequestIcon} alt="Booking Request" className="mx-auto sm:w-auto w-[30px]" />
                         </div>
                         <h3 className="mb-[8px] text-[20px] sm:text-[28px] leading-[20px] sm:leading-[24px] font-semibold text-[#05073C]">Booking Requested</h3>
                         <p className="text-[14  px] sm:text-[16px] text-[#636A7E]">Your booking request is submitted</p>
                    </div>
                    <div className="bg-[#E7ECF9] rounded-[10px] p-[12px] sm:p-[20px]  mb-[30px]">
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
                              <p className="text-[14px] text-[#F0AD4E] font-semibold text-right">Pending</p>
                         </div>
                         <div className="flex justify-between items-center gap-[10px]">
                              <p className="text-[14px] text-[#05073C]">Total Amount</p>
                              <p className="text-[14px] text-[#05073C] text-right">$1,718</p>
                         </div>
                    </div>
                    <div className="mb-[30px]">
                         <h5 className="text-[16px] font-semibold text-[#05073C] mb-[11px]">What Happens Next?</h5>
                         <ul className="list-disc text-[14px] text-[#05073C] ps-[18px]">
                              <li className="text-[14px] leading-[20px] mb-[10px]"><span className="font-semibold">We'll Call You -</span>  A customer care team member will reach out to confirm your booking details.</li>
                              <li className="text-[14px] leading-[20px] mb-[10px]"><span className="font-semibold">We Verify Everything -</span>  We’ll check with the travel partner to confirm availability and package details.</li>
                              <li className="text-[14px] leading-[20px] mb-[10px]"><span className="font-semibold">You Get Final Confirmation -</span> We’ll share the final details with you.</li>
                              <li className="text-[14px] leading-[20px] mb-[10px]"><span className="font-semibold">Payment for Your Booking -</span> You can complete the payment online or offline, as per your preference.</li>
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

export default BookingRequest;
