const PriceCard = ({ price, duration, onContactClick }: { price: number, duration: number, onContactClick: () => void }) => {
     return (
          <div className="w-full max-w-[350px]">
               <div className="bg-[#E7ECF9] border border-[#C9D8FF] shadow-[0px_3px_8px_0px_rgba(86,121,215,0.25)] py-[26px] px-[15px] rounded-lg">
                    <div className="mb-[16px] flex items-center justify-between gap-1">
                         <div className="text-[14px] leading-[24px] font-normal text-[#05073C]">
                              Price starts from
                         </div>
                         <div className="flex items-baseline">
                              <span className="text-[18px]  sm:text-[22px] leading-[32px] font-bold text-[#0D3FC6]">
                                   ${price}
                              </span>
                              <span className="text-[14px] sm:text-[16px] leading-[24px] font-semibold text-[#05073C] ml-1">
                                   / person
                              </span>
                         </div>
                    </div>

                    <div className="mb-[16px] flex items-center justify-between gap-1">
                         <div className="text-[14px] leading-[20px] font-normal text-[#05073C]">
                              Duration
                         </div>
                         <div className="text-[14px] sm:text-[16px] leading-[24px] font-semibold text-[#05073C]">
                              {duration} Days
                         </div>
                    </div>
                    <div className="flex gap-4 items-center justify-between">
                         <button className="w-full py-[8px] text-[14px] cursor-pointer leading-[20px] font-normal text-white bg-[#FAB400] rounded-[4px]">
                              Book Now
                         </button>
                         <button 
                              className="w-full py-[8px] text-[14px] cursor-pointer leading-[20px] font-normal text-white bg-[#1A339B] rounded-[4px]"
                              onClick={onContactClick}
                         >
                              Contact Us
                         </button>
                    </div>
               </div>
          </div>
     );
};

export default PriceCard;


