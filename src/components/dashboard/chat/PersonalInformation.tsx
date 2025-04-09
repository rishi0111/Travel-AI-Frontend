import AiAssistantIcon from "../../../assets/ai-assistant-icon.svg";
import SelectIcon from "../../../assets/arrow-bottom.svg";

const PersonalInformation = () => {
     return (
          <div className="max-w-[740px] mb-[30px]">
               <div className="flex items-start gap-[8px]">
                    <div className="w-[40px] h-[40px] rounded-full bg-[#E7ECF9] flex items-center justify-center flex-shrink-0">
                         <img src={AiAssistantIcon} alt="AI Assistant" className="" />
                    </div>
                    <div className="">
                         <p className="border border-[#E5E7EB] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] bg-[#F4F4F6] rounded-[20px] rounded-es-none px-[16px] py-[15px] text-[14px] leading-[20px] text-[#1F2937]">
                              Great! Now I need some basic information to proceed with your booking.
                         </p>
                         <p className="text-xs text-gray-500 mt-2">05:10 AM</p>
                    </div>
               </div>
               <div className="mt-[16px] ms-[45px] max-w-[475px] bg-[#F4F4F6] rounded-[24px] py-[20px] px-[18px] border border-[#E5E7EB]">
                    <h3 className="mb-[15px] sm:mb-[23px] text-[16px] sm:text-[20px] leading-[20px] sm:leading-[24px] font-semibold text-[#05073C]">Enter your personal information</h3>
                    <form>
                         <div className="mb-[10px] sm:mb-[20px]">
                              <label className="block text-[14px] font-semibold text-[#636C76] mb-1">Your Full Name</label>
                              <input type="text" className="rounded-[30px] border border-[#D5D5D8] bg-[#FFFFFF] py-[13px] px-[18px] text-[14px] leading-[18px] text-[#05073C] w-full placeholder:text-[#989EAE] focus:outline-[#0D3FC6]" placeholder="Enter your name" />
                         </div>
                         <div className="mb-[10px] sm:mb-[20px]">
                              <label className="block text-[14px] font-semibold text-[#636C76] mb-1">Email</label>
                              <input type="email" className="rounded-[30px] border border-[#D5D5D8] bg-[#FFFFFF] py-[13px] px-[18px] text-[14px] leading-[18px] text-[#05073C] w-full placeholder:text-[#989EAE] focus:outline-[#0D3FC6]" placeholder="Enter your email" />
                         </div>
                         <div className="mb-[10px] sm:mb-[20px]">
                              <label className="block text-[14px] font-semibold text-[#636C76] mb-1">Number of Travellers</label>
                              <div className="relative">
                                   <select className="rounded-[30px] border border-[#D5D5D8] bg-[#FFFFFF] py-[11.8px] px-[18px] text-[14px] leading-[18px] text-[#05073C] w-full placeholder:text-[#989EAE] focus:outline-[#0D3FC6] appearance-none">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                   </select>
                                   <img src={SelectIcon} alt="Select" className="absolute right-[18px] top-1/2 transform -translate-y-1/2" />
                              </div>
                         </div>
                         <div className="text-center">
                              <button className="w-full bg-[#0D3FC6] text-white py-[16px] rounded-[30px] font-normal hover:bg-[#1A339B] transition-colors cursor-pointer text-[14px] leading-[18px] uppercase">Continue</button>
                         </div>
                    </form>
               </div>
          </div>
     )
}

export default PersonalInformation;
