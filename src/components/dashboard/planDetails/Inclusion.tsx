import CheckIcon from "../../../assets/green-check-icon.svg";
import CrossIcon from "../../../assets/red-cross-icon.svg";
import { useAppSelector } from "../../../store/hooks";

const Inclusion = () => {
     const { tourDetails } = useAppSelector((state) => state.tours);
     const { inclusion_exclusions } = tourDetails;
     return (
          <div className="py-[30px]">
               <h2 className="text-[18px] sm:text-[24px] md:text-[30px] md:leading-[40px] leading-[24px] sm:leading-[30px] font-bold mb-[6px]">
                    What's included
               </h2>
               <div className="flex items-start gap-[10px] mt-[22px] flex-wrap sm:flex-nowrap">
                    <div className="w-full sm:w-2/3">
                         {inclusion_exclusions?.map((inclusions: { item_type: string, description: string }) => (
                              <>
                                   {inclusions?.item_type === "inclusion" && <div className="flex items-start gap-[20px] mb-[20px]">
                                        <div className="bg-[#EFF7F1] rounded-full h-[26px] w-full max-w-[26px] flex items-center justify-center">
                                             <img src={CheckIcon} alt="Check" className="" />
                                        </div>
                                        <span className="text-[14px] leading-[20px] font-normal text-[#05073C]">
                                            {inclusions?.description}
                                        </span>
                                   </div>}
                              </>
                         )
                         )
                         }
                    </div>

                    <div className="w-full sm:w-1/3">
                         {inclusion_exclusions?.map((inclusions: { item_type: string, description: string }) => (
                              <>
                                   {inclusions?.item_type === "exclusion" && <div className="flex items-start gap-[20px] mb-[20px]">
                                        <div className="bg-[#FFE5E5] rounded-full h-[26px] w-full max-w-[26px] flex items-center justify-center">
                                             <img src={CrossIcon} alt="Check" className="" />
                              </div>
                                        <span className="text-[14px] leading-[20px] font-normal text-[#05073C]">
                                             {inclusions?.description}
                                        </span>
                                   </div>}
                              </>
                         )
                         )
                         }
                    </div>
               </div>
          </div>
     )
}

export default Inclusion;     
