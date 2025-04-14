import CheckIcon from "../../../assets/green-check-icon.svg";
import CrossIcon from "../../../assets/red-cross-icon.svg";

const Inclusion = () => {
     return (
          <div className="py-[30px]">
               <h2 className="text-[18px] sm:text-[24px] md:text-[30px] md:leading-[40px] leading-[24px] sm:leading-[30px] font-bold mb-[6px]">
                    What's included
               </h2>
               <div className="flex items-start gap-[10px] mt-[22px] flex-wrap sm:flex-nowrap">
                    <div className="w-full sm:w-2/3">
                         <div className="flex items-start gap-[20px] mb-[20px]">
                              <div className="bg-[#EFF7F1] rounded-full h-[26px] w-full max-w-[26px] flex items-center justify-center">
                                   <img src={CheckIcon} alt="Check" className="" />
                              </div>
                              <span className="text-[14px] leading-[20px] font-normal text-[#05073C]">
                                   Beverages, drinking water, morning tea and buffet
                                   lunch
                              </span>
                         </div>
                         <div className="flex items-start gap-[20px] mb-[20px]">
                              <div className="bg-[#EFF7F1] rounded-full h-[26px] w-full max-w-[26px] flex items-center justify-center">
                                   <img src={CheckIcon} alt="Check" className="" />
                              </div>
                              <span className="text-[14px] leading-[20px] font-normal text-[#05073C]">
                                   Local taxes
                              </span>
                         </div>
                         <div className="flex items-start gap-[20px] mb-[20px]">
                              <div className="bg-[#EFF7F1] rounded-full h-[26px] w-full max-w-[26px] flex items-center justify-center">
                                   <img src={CheckIcon} alt="Check" className="" />
                              </div>
                              <span className="text-[14px] leading-[20px] font-normal text-[#05073C]">
                                   Hotel pickup and drop-off by air-conditioned
                                   minivan
                              </span>
                         </div>
                         <div className="flex items-start gap-[20px] mb-[20px]">
                              <div className="bg-[#EFF7F1] rounded-full h-[26px] w-full max-w-[26px] flex items-center justify-center">
                                   <img src={CheckIcon} alt="Check" className="" />
                              </div>
                              <span className="text-[14px] leading-[20px] font-normal text-[#05073C]">
                                   Insurance Transfer to a private pier
                              </span>
                         </div>
                         <div className="flex items-start gap-[20px] mb-[20px]">
                              <div className="bg-[#EFF7F1] rounded-full h-[26px] w-full max-w-[26px] flex items-center justify-center">
                                   <img src={CheckIcon} alt="Check" className="" />
                              </div>
                              <span className="text-[14px] leading-[20px] font-normal text-[#05073C]">
                                   Soft drinks
                              </span>
                         </div>
                         <div className="flex items-start gap-[20px] mb-[20px]">
                              <div className="bg-[#EFF7F1] rounded-full h-[26px] w-full max-w-[26px] flex items-center justify-center">
                                   <img src={CheckIcon} alt="Check" className="" />
                              </div>
                              <span className="text-[14px] leading-[20px] font-normal text-[#05073C]">
                                   Tour Guide
                              </span>
                         </div>
                    </div>
                    <div className="w-full sm:w-1/3">
                         <div className="flex items-start gap-[20px] mb-[20px]">
                              <div className="bg-[#FFE5E5] rounded-full h-[26px] w-full max-w-[26px] flex items-center justify-center">
                                   <img src={CrossIcon} alt="Check" className="" />
                              </div>
                              <span className="text-[14px] leading-[20px] font-normal text-[#05073C]">
                                   Towel
                              </span>
                         </div>
                         <div className="flex items-start gap-[20px] mb-[20px]">
                              <div className="bg-[#FFE5E5] rounded-full h-[26px] w-full max-w-[26px] flex items-center justify-center">
                                   <img src={CrossIcon} alt="Check" className="" />
                              </div>
                              <span className="text-[14px] leading-[20px] font-normal text-[#05073C]">
                                   Tips
                              </span>
                         </div>
                         <div className="flex items-start gap-[20px] mb-[20px]">
                              <div className="bg-[#FFE5E5] rounded-full h-[26px] w-full max-w-[26px] flex items-center justify-center">
                                   <img src={CrossIcon} alt="Check" className="" />
                              </div>
                              <span className="text-[14px] leading-[20px] font-normal text-[#05073C]">
                                   Alcoholic Beverages
                              </span>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Inclusion;     
