const Itinerary = () => {
     return (
          <div className="py-[30px]">
               <h2 className="text-[18px] sm:text-[24px] md:text-[30px] md:leading-[40px] leading-[24px] sm:leading-[30px] font-bold mb-[6px]">
                    Itinerary
               </h2>
               <div className="relative mt-8 mb-10 border-l-2 border-dashed border-[#0D9BC6] ms-[15px]">

                    {/* Day 1 */}
                    <div className="relative pl-[40px] mb-[20px] sm:mb-[35px]">
                         <div className="absolute left-[-18px] top-[50%] translate-y-[-50%] w-[38px] h-[38px] rounded-full bg-[#0D9BC6] border-4 border-white z-10"></div>
                         <h3 className="text-[12px] sm:text-[15px] sm:leading-[30px] leading-[20px] font-semibold text-[#05073C] mb-1">
                              Day 1: Airport Pick Up
                         </h3>
                    </div>

                    {/* Day 2 */}
                    <div className="relative pl-[40px] mb-[20px] sm:mb-[50px]">
                         <div className="absolute sm:left-[-12px] left-[-10px] top-[50%] translate-y-[-50%] w-[18px] sm:w-[23px] h-[18px] sm:h-[23px] rounded-full bg-white border-3 border-[#0D9BC6] z-10"></div>
                         <h3 className="text-[12px] sm:text-[15px] sm:leading-[30px] leading-[20px] font-semibold text-[#05073C] mb-1">
                              Day 2: Temples & River Cruise
                         </h3>
                    </div>

                    {/* Day 3 */}
                    <div className="relative pl-[40px] mb-[20px] sm:mb-[50px]">
                         <div className="absolute sm:left-[-12px] left-[-10px] top-[50%] translate-y-[-50%] w-[18px] sm:w-[23px] h-[18px] sm:h-[23px] rounded-full bg-white border-3 border-[#0D9BC6] z-10"></div>
                         <h3 className="text-[12px] sm:text-[15px] sm:leading-[30px] leading-[20px] font-semibold text-[#05073C] mb-1">
                              Day 3: Massage & Overnight Train
                         </h3>
                    </div>

                    {/* Day 4 */}
                    <div className="relative pl-[40px] mb-[20px] sm:mb-[50px]">
                         <div className="absolute sm:left-[-12px] left-[-10px] top-[50%] translate-y-[-50%] w-[18px] sm:w-[23px] h-[18px] sm:h-[23px] rounded-full bg-white border-3 border-[#0D9BC6] z-10"></div>
                         <h3 className="text-[12px] sm:text-[15px] sm:leading-[30px] leading-[20px] font-semibold text-[#05073C] mb-1">
                              Day 4: Khao Sok National Park
                         </h3>
                    </div>

                    {/* Day 5 */}
                    <div className="relative pl-[40px] mb-[20px] sm:mb-[50px]">
                         <div className="absolute sm:left-[-12px] left-[-10px] top-[50%] translate-y-[-50%] w-[18px] sm:w-[23px] h-[18px] sm:h-[23px] rounded-full bg-white border-3 border-[#0D9BC6] z-10"></div>
                         <h3 className="text-[12px] sm:text-[15px] sm:leading-[30px] leading-[20px] font-semibold text-[#05073C] mb-1">
                              Day 5: Travel to Koh Phangan
                         </h3>
                    </div>

                    {/* Day 6 */}
                    <div className="relative pl-[40px] mb-[20px] sm:mb-[50px]">
                         <div className="absolute sm:left-[-12px] left-[-10px] top-[50%] translate-y-[-50%] w-[18px] sm:w-[23px] h-[18px] sm:h-[23px] rounded-full bg-white border-3 border-[#0D9BC6] z-10"></div>
                         <h3 className="text-[12px] sm:text-[15px] sm:leading-[30px] leading-[20px] font-semibold text-[#05073C] mb-1">
                              Day 6: Morning Chill & Muay Thai Lesson
                         </h3>
                    </div>

                    {/* Day 7 */}
                    <div className="relative pl-[40px] mb-[50px]">
                         <div className="absolute left-[-16px] top-[50%] translate-y-[-50%] w-[30px] h-[30px] rounded-full bg-[#0D9BC6]  z-10"></div>
                         <h3 className="text-[15px] leading-[30px] font-semibold text-[#05073C] mb-1">
                              Day 7: Island Boat Trip
                         </h3>
                    </div>
               </div>
          </div>
     )
}

export default Itinerary;
