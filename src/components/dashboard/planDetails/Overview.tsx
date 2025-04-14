import DisclaimerIcon from "../../../assets/disclaimer-icon.svg";

const Overview = () => {
     return (
          <div className="py-[20px] lg:py-[30px]">
               <h2 className="text-[18px] sm:text-[24px] md:text-[30px] md:leading-[40px] leading-[24px] sm:leading-[30px] font-bold mb-[6px]">
                    Tour Overview
               </h2>
               <p className="text-[#05073C] mb-[24px] text-[12px] sm:text-[14px] sm:leading-[25px] leading-[20px]">
                    Explore the best of Bali in 7 days, from the cultural
                    heart of Ubud to the lively beaches of Kuta and the
                    stylish vibes of Seminyak. Immerse yourself in
                    breathtaking landscapes, vibrant nightlife, and
                    unforgettable experiences!
                    <br />
                    Wrap up your journey in Seminyak, the hub of luxury and
                    style. Discover upscale boutiques, dine at world-class
                    restaurants, and relax at chic beach clubs. Whether
                    you're seeking relaxation or exploration, this tour has
                    something for every traveler. Join us for an
                    extraordinary escape to Bali's most iconic spots!
               </p>

               <h3 className="text-[14px] sm:text-[18px] leading-[24px] font-medium text-[#05073C] mb-[14px]">
                    Tour Highlights
               </h3>
               <ul className="sm:space-y-1 list-disc ps-[20px]">
                    <li className="text-[12px] sm:text-[14px] sm:leading-[28px] leading-[20px] text-[#05073C]">
                         Experience the thrill of a speedboat to the stunning
                         Phi Phi Islands
                    </li>
                    <li className="text-[12px] sm:text-[14px] sm:leading-[28px] leading-[20px] text-[#05073C]">
                         Be amazed by the variety of marine life in the
                         archipelago
                    </li>
                    <li className="text-[12px] sm:text-[14px] sm:leading-[28px] leading-[20px] text-[#05073C]">
                         Enjoy relaxing in paradise with white sand beaches and
                         azure turquoise water
                    </li>
                    <li className="text-[12px] sm:text-[14px] sm:leading-[28px] leading-[20px] text-[#05073C]">
                         Feel the comfort of a tour limited to 35 passengers
                    </li>
                    <li className="text-[12px] sm:text-[14px] sm:leading-[28px] leading-[20px] text-[#05073C]">
                         Catch a glimpse of the wild monkeys around Monkey
                         Beach
                    </li>
               </ul>

               <div className="mt-[15px] md:mt-[30px] p-[10px] md:p-[12px] bg-[#F4F4F6] rounded-[8px] flex items-start gap-[14px]">
                    <div className="bg-[#FAB4001A] rounded-[5px] h-[30px] w-full max-w-[30px] flex items-center justify-center">
                         <img
                              src={DisclaimerIcon}
                              alt="Disclaimer"
                              className=""
                         />
                    </div>
                    <p className="text-[#000000BD] text-[12px] sm:text-[14px] md:text-[16px] sm:leading-[25px] leading-[20px]">
                         Package Price and Itinerary may change based on
                         availability from our travel partner, but we will
                         always ensure you get the best travel deals!
                    </p>
               </div>
          </div>
     )
}

export default Overview;
