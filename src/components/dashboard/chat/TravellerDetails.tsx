import SelectIcon from "../../../assets/arrow-bottom.svg";
import AddTravellerIcon from "../../../assets/add-icon.svg";

const TravellerDetails = () => {
     return (
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
                                   <select defaultValue="" className="rounded-[30px] border border-[#D5D5D8] bg-[#FFFFFF] py-[11.8px] px-[18px] text-[14px] leading-[18px] text-[#05073C] w-full placeholder:text-[#989EAE] focus:outline-[#0D3FC6] appearance-none">
                                        <option value="" disabled>Select Gender</option>
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
                                   <select defaultValue="" className="rounded-[30px] border border-[#D5D5D8] bg-[#FFFFFF] py-[11.8px] px-[18px] text-[14px] leading-[18px] text-[#05073C] w-full placeholder:text-[#989EAE] focus:outline-[#0D3FC6] appearance-none">
                                        <option value="" disabled>Select Nationality</option>
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
     )
}

export default TravellerDetails;
