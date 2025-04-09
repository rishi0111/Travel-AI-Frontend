import { useState } from "react";
import { destinations } from "../../../utils/dummyData";

const Packages = () => {
     const [activeTab, setActiveTab] = useState("cheapest");     
     
     return (
          <div className="mt-[40px] ps-[45px]">
               <div className="bg-[#E7ECF9] rounded-[8px] p-[10px] max-w-[max-content] flex gap-[10px]">
                    <button
                         className={`text-[14px] sm:text-[16px] px-[10px] sm:px-[20px] py-[6px] sm:py-[10px] text-[#05073C] leading-[24px] font-normal cursor-pointer rounded-[8px] ${activeTab === "cheapest"
                              ? "bg-[#FFFFFF]"
                              : ""
                              }`}
                         onClick={() => setActiveTab("cheapest")}
                    >
                         Cheapest
                    </button>
                    <button
                         className={`text-[14px] sm:text-[16px] px-[10px] sm:px-[20px] py-[6px] sm:py-[10px] text-[#05073C] leading-[24px] font-normal cursor-pointer rounded-[8px]  ${activeTab === "featured"
                              ? "bg-[#FFFFFF]"
                              : ""
                              }`}
                         onClick={() => setActiveTab("featured")}
                    >
                         Featured
                    </button>
               </div>

               {/* tabs content */}
               {activeTab === "cheapest" && (
                    <div className="py-4 mb-[20px]">
                         <div className="w-[100%] overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                              <div className="flex gap-[16px]">
                                   {destinations.map((destination) => (
                                        <div key={destination.id} className="w-full min-w-[298px] bg-white shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]  cursor-pointer rounded-[12px] overflow-hidden border border-[#E5E7EB]">
                                             <div className="h-48 overflow-hidden">
                                                  <img
                                                       src={destination.image}
                                                       alt="Bali Beach"
                                                       className="w-full h-full object-cover object-top"
                                                  />
                                             </div>
                                             <div className="p-4 flex flex-col gap-[8px]">
                                                  <h3 className="text-lg font-semibold">{destination.name}</h3>
                                                  <p className="text-[#4B5563] text-[14px] leading-[20px]">Experience the magic of Bali with our 7-day package—luxury stays, scenic tours, and vibrant culture await you!</p>
                                                  <div className="flex items-center gap-[8px]">
                                                       {/* <img src={LocationIcon} className="" /> */}
                                                       <span className="text-[14px] text-[#4B5563]">Bali, Indonesia</span>
                                                  </div>
                                                  <div className="flex items-center justify-between gap-[8px]">
                                                       <div className="flex items-center gap-[8px]">
                                                            {/* <img src={TimeIcon} className="" /> */}
                                                            <span className="text-[14px] text-[#4B5563]">7 Days</span>
                                                       </div>
                                                       <div className="flex flex-col justify-end items-end">
                                                            <span className="block text-[10px] text-[#4B5563]">Starts from:</span>
                                                            <span className="block text-[16px] text-[#1249CC] font-bold">$ 590</span>
                                                       </div>
                                                  </div>
                                                  <div>
                                                       <button className="cursor-pointer bg-[#E7ECF9] text-[#0D3FC6] rounded-[4px] text[14px] font-semibold py-[8px] px-[10px] w-full">View Details</button>
                                                  </div>
                                             </div>
                                        </div>
                                   ))}

                              </div>
                         </div>
                    </div>
               )}

               {activeTab === "featured" && (
                    <></>
               )}
          </div>
     )
}

export default Packages;
