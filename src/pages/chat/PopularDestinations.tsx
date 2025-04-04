import { destinations } from "../../utils/dummyData";

const PopularDestinations = () => {
     return (
          <div className="py-4 mb-[20px]">
               <h2 className="text-[20px] leading-[24px] font-semibold mb-[20px] text-[#05073C]">Popular Destinations</h2>
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
                                   <div className="p-4">
                                        <h3 className="text-lg font-semibold">{destination.name}</h3>
                                   </div>
                              </div>
                         ))}

                    </div>
               </div>
          </div>
     )
}

export default PopularDestinations;
