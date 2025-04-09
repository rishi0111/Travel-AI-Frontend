import AiAssistantIcon from "../../../assets/ai-assistant-icon.svg";

const ReviewDetails = () => {
     return (
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
     )
}

export default ReviewDetails;
