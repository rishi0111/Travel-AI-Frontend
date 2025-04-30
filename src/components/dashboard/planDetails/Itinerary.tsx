import { useAppSelector } from "../../../store/hooks";

const Itinerary = () => {
     const { tourDetails } = useAppSelector((state) => state.tours);
     const { itinerary } = tourDetails;
     console.log(itinerary, "::itinerary");
     return (
          <div className="py-[30px]">
               <h2 className="text-[18px] sm:text-[24px] md:text-[30px] md:leading-[40px] leading-[24px] sm:leading-[30px] font-bold mb-[6px]">
                    Itinerary
               </h2>
               <div className="relative mt-8 mb-10 border-l-2 border-dashed border-[#0D9BC6] ms-[15px]">
                    {itinerary?.map((iteration: { time: string, title: string, desc: string }, index: number) => {
                         const isFirst = index === 0;
                         const isLast = index === itinerary.length - 1;
                         const circleStyle = isFirst || isLast
                              ? "absolute left-[-18px] top-[0px] w-[38px] h-[38px] rounded-full bg-[#0D9BC6] border-4 border-white z-10"
                              : "absolute sm:left-[-12px] left-[-10px] top-[0px] w-[18px] sm:w-[23px] h-[18px] sm:h-[23px] rounded-full bg-white border-3 border-[#0D9BC6] z-10";

                         return (
                              <div key={index} className="relative pl-[40px] mb-[20px] sm:mb-[35px]">
                                   <div className={` ${circleStyle} `}></div>
                                   <h3 className="text-[12px] sm:text-[15px] sm:leading-[30px] leading-[20px] font-semibold text-[#05073C] mb-1">
                                        {iteration?.time}: {iteration?.title}
                                   </h3>
                                   <p className="text-[14px] text-[#05073C] leading-[24px] mb-2">{iteration?.desc}</p>
                              </div>
                         );
                    })}
               </div>
          </div>
     )
}

export default Itinerary;
