import { useState, useEffect } from "react";
import { useGetPackagesMutation } from "../../../store/features/tours/toursApi";
import { useAppSelector } from "../../../store/hooks";
import dummyImage from "../../../assets/plan-img1.png"
import { useNavigate } from "react-router-dom";
import React from "react";

interface PackagesPromptProps {
     featured?: any[];
     cheapest?: any[];
}

const PackagesPrompt: React.FC<PackagesPromptProps> = ({ packages: propPackages }) => {
     const [activeTab, setActiveTab] = useState("cheapest");
     const [getPackages, { isLoading }] = useGetPackagesMutation();
     const { state, country } = useAppSelector((state) => state.tours);
     const [packages, setPackages] = useState<any[]>([]);
     const navigate = useNavigate();
     const { featured, cheapest } = packages

     useEffect(() => {
          if (propPackages) {
               setPackages(propPackages);
               return;
          }
          const fetchPackages = async () => {
               try {
                    const response = await getPackages({ country, state });
                    if (response.error) {
                         console.log(response.error, "::error");
                         return;
                    } else {
                         setPackages(response.data);
                    }
               } catch (error) {
                    console.log(error, "::error");
               }
          };

          fetchPackages();
     }, [country, state, getPackages, propPackages]);

     const handleViewDetails = (tour_id: string) => {
          navigate(`/plan-details/${tour_id}`);
     }

     return (
          <div className="mt-[40px] ">
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
                    <div className="py-4 mb-[20px] px-[20px]">
                        {cheapest?.length > 0 ? <div className="w-[100%] overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                              <div className="flex gap-[16px]">
                                   {cheapest?.map((destination) => (
                                        <div key={destination.id} className="w-full max-w-[298px] bg-white shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]  cursor-pointer rounded-[12px] overflow-hidden border border-[#E5E7EB] min-w-[320px]">
                                             <div className="h-48 overflow-hidden">
                                                  <img
                                                       src={destination.image || dummyImage}
                                                       alt="Bali Beach"
                                                       className="w-full h-full object-cover object-top"
                                                  />
                                             </div>
                                             <div className="p-4 flex flex-col gap-[8px] justify-between max-h-[300px]">
                                                  <div>
                                                       <h3 className="text-lg font-semibold text-ellipsis line-clamp-1 mb-2">{destination.tour_title}</h3>
                                                       <p className="ellipsis line-clamp-4 text-[#4B5563] text-[14px] leading-[20px]" dangerouslySetInnerHTML={{ __html: destination.tour_description }}></p>
                                                       <div className="flex items-center gap-[8px]">
                                                            {/* <img src={LocationIcon} className="" /> */}
                                                            {/* <span className="text-[14px] text-[#4B5563]">{destination.location.address}</span> */}
                                                       </div>
                                                  </div>

                                                  <div>
                                                       <div className="flex items-center justify-between gap-[8px]">
                                                            <div className="flex items-center gap-[8px]">
                                                                 {/* <img src={TimeIcon} className="" /> */}
                                                                 <span className="text-[14px] text-[#4B5563]">{destination.duration} days</span>
                                                            </div>
                                                            <div className="flex flex-col justify-end items-end">
                                                                 <span className="block text-[10px] text-[#4B5563]">Starts from:</span>
                                                                 <span className="block text-[16px] text-[#1249CC] font-bold">${destination.adult_price}</span>
                                                            </div>
                                                       </div>
                                                       <div>
                                                            <button className="cursor-pointer bg-[#E7ECF9] text-[#0D3FC6] rounded-[4px] text[14px] font-semibold py-[8px] px-[10px] w-full" onClick={() => handleViewDetails(destination.tour_id)}>View Details</button>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   ))}
                              </div>
                         </div> : <div className="text-center text-[#4B5563] text-[14px] leading-[20px] mt-5">No cheapest packages found</div>}
                    </div>
               )}

               {activeTab === "featured" && (
                    <div className="py-4 mb-[20px] px-[20px]">
                         {featured?.length > 0 ? <div className="w-[100%] overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                              <div className="flex gap-[16px]">
                                   {featured?.map((destination) => (
                                        <div key={destination.id} className="w-full max-w-[298px] bg-white shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]  cursor-pointer rounded-[12px] overflow-hidden border border-[#E5E7EB] min-w-[320px]">
                                             <div className="h-48 overflow-hidden">
                                                  <img
                                                       src={destination.image || dummyImage}
                                                       alt="Bali Beach"
                                                       className="w-full h-full object-cover object-top"
                                                  />
                                             </div>
                                             <div className="p-4 flex flex-col gap-[8px] justify-between max-h-[300px]">
                                                  <div>
                                                       <h3 className="text-lg font-semibold text-ellipsis line-clamp-1 mb-2">{destination.tour_title}</h3>
                                                       <p className="ellipsis line-clamp-4 text-[#4B5563] text-[14px] leading-[20px]" dangerouslySetInnerHTML={{ __html: destination.tour_description }}></p>
                                                       <div className="flex items-center gap-[8px]">
                                                            {/* <img src={LocationIcon} className="" /> */}
                                                            {/* <span className="text-[14px] text-[#4B5563]">{destination.location.address}</span> */}
                                                       </div>
                                                  </div>

                                                  <div>
                                                       <div className="flex items-center justify-between gap-[8px]">
                                                            <div className="flex items-center gap-[8px]">
                                                                 {/* <img src={TimeIcon} className="" /> */}
                                                                 <span className="text-[14px] text-[#4B5563]">{destination.duration} days</span>
                                                            </div>
                                                            <div className="flex flex-col justify-end items-end">
                                                                 <span className="block text-[10px] text-[#4B5563]">Starts from:</span>
                                                                 <span className="block text-[16px] text-[#1249CC] font-bold">${destination.adult_price}</span>
                                                            </div>
                                                       </div>
                                                       <div>
                                                            <button className="cursor-pointer bg-[#E7ECF9] text-[#0D3FC6] rounded-[4px] text[14px] font-semibold py-[8px] px-[10px] w-full" onClick={() => handleViewDetails(destination.tour_id)}>View Details</button>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   ))}
                              </div>
                         </div> : <div className="text-center text-[#4B5563] text-[14px] leading-[20px] mt-5">No featured packages found</div>}
                    </div>
               )}
          </div>
     )
}

export default PackagesPrompt;
