import { useState } from "react";
import SelectIcon from "../../../assets/arrow-bottom.svg";
import MinusIcon from "../../../assets/minus-icon.svg";
import PlusIcon from "../../../assets/plus-icon.svg"

const SelectTravellers = () => {
     const [showTravelerModal, setShowTravelerModal] = useState(false);
     const [totalTravelers, setTotalTravelers] = useState(0);
     const [adults, setAdults] = useState(0);
     const [youth, setYouth] = useState(0);
     const [children, setChildren] = useState(0);

     const handleIncrement = (type: string) => {
          if (type === "adult") {
               setAdults(adults + 1);
          } else if (type === "youth") {
               setYouth(youth + 1);
          } else if (type === "children") {
               setChildren(children + 1);
          }
     }
     
     const handleDecrement = (type: string) => {
          if (type === "adult") {
               setAdults(adults - 1);
          } else if (type === "youth") {
               setYouth(youth - 1);
          } else if (type === "children") {
               setChildren(children - 1);
          }
     }

     return (
          <div className="mt-[16px] ms-[45px] max-w-[340px] bg-[#F4F4F6] rounded-[10px] py-[10px] px-[8px] border border-[#E5E7EB]">
               <div className="relative">
                    <div className="border border-[#D5D5D8] rounded-[30px] px-[13px] py-[7px] bg-white cursor-pointer flex justify-between items-center relative"
                         onClick={() => setShowTravelerModal(!showTravelerModal)}
                    >
                         <span className="text-gray-800">{totalTravelers} Travelers</span>
                         <img src={SelectIcon} alt="Select" className={`absolute right-[18px] top-1/2 transform -translate-y-1/2 ${showTravelerModal ? "rotate-180" : ""}`} />
                    </div>
                    {showTravelerModal && (
                         <div className="mt-[4px] bg-white rounded-[10px] shadow-xl z-10 border border-[#D5D5D8]">
                              <div className="px-[13px] py-[20px]">
                                   {/* Adult Row */}
                                   <div className="flex items-center justify-between pb-[15px]">
                                        <div>
                                             <p className="text-[14px] font-medium text-[#05073C]">Adult (18+ years)</p>
                                        </div>
                                        <div className="flex items-center">
                                             <button
                                                  onClick={() => handleDecrement("adult")}
                                                  className="w-[30px] h-[30px] rounded-full bg-white border border-[#E7E6E6] flex items-center justify-center cursor-pointer"
                                             >
                                                  <img src={MinusIcon} alt="Minus" className="" />
                                             </button>
                                             <span className="mx-4 w-4 text-center">{adults}</span>
                                             <button
                                                  onClick={() => handleIncrement("adult")}
                                                  className="w-[30px] h-[30px] rounded-full bg-white border border-[#E7E6E6] flex items-center justify-center cursor-pointer"
                                             >
                                                  <img src={PlusIcon} alt="Plus" className="" />
                                             </button>
                                        </div>
                                   </div>
                                   {/* Youth Row */}
                                   <div className="flex items-center justify-between pb-[15px]">
                                        <div>
                                             <p className="text-[14px] font-medium text-[#05073C]">
                                                  Youth (13-17 years)
                                             </p>
                                        </div>
                                        <div className="flex items-center">
                                             <button
                                                  onClick={() => handleDecrement("youth")}
                                                  className="w-[30px] h-[30px] rounded-full bg-white border border-[#E7E6E6] flex items-center justify-center cursor-pointer"
                                             >
                                                  <img src={MinusIcon} alt="Minus" className="" />
                                             </button>
                                             <span className="mx-4 w-4 text-center">{youth}</span>
                                             <button
                                                  onClick={() => handleIncrement("youth")}
                                                  className="w-[30px] h-[30px] rounded-full bg-white border border-[#E7E6E6] flex items-center justify-center cursor-pointer"
                                             >
                                                  <img src={PlusIcon} alt="Plus" className="" />
                                             </button>
                                        </div>
                                   </div>
                                   {/* Children Row */}
                                   <div className="flex items-center justify-between">
                                        <div>
                                             <p className="font-medium text-gray-800">
                                                  Children (0-12 years)
                                             </p>
                                        </div>
                                        <div className="flex items-center">
                                             <button
                                                  onClick={() => handleDecrement("children")}
                                                  className="w-[30px] h-[30px] rounded-full bg-white border border-[#E7E6E6] flex items-center justify-center cursor-pointer"
                                             >
                                                  <img src={MinusIcon} alt="Minus" className="" />
                                             </button>
                                             <span className="mx-4 w-4 text-center">{children}</span>
                                             <button
                                                  onClick={() => handleIncrement("children")}
                                                  className="w-[30px] h-[30px] rounded-full bg-white border border-[#E7E6E6] flex items-center justify-center cursor-pointer"
                                             >
                                                  <img src={PlusIcon} alt="Plus" className="" />
                                             </button>
                                        </div>
                                   </div>
                              </div>
                              <div className="px-[13px] py-[11px] border-t border-[#D5D5D8] text-end">
                                   <button
                                        onClick={() => setShowTravelerModal(false)}
                                        className="cursor-pointer ms-auto bg-[#0D3FC6] text-white font-medium py-[10px] px-[25px] rounded-[8px] text-[16px] leading-[16px]"
                                   >
                                        Save
                                   </button>
                              </div>
                         </div>
                    )}
               </div>
          </div>
     )
}

export default SelectTravellers
