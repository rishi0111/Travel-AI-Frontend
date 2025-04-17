import { useGetCountriesQuery } from "../../../store/features/tours/toursApi";
import DestinationList from "./DestinationList";
import { useDispatch } from "react-redux";
import { setCountry, setCountries } from "../../../store/features/tours/toursSlice";
import { useState } from "react";

const PopularDestinations = () => {
     const { data: countries } = useGetCountriesQuery({});
     const dispatch = useDispatch();
     const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

     const handleDestinationClick = (destination: any) => {
          if (!selectedCountry) {
               setSelectedCountry(destination.name);
               dispatch(setCountry(destination.name));
               dispatch(setCountries(destination));
          }
     }

     return (
          <div className="py-4 mb-[20px]">
               <h2 className="text-[20px] leading-[24px] font-semibold mb-[20px] text-[#05073C]">Popular Destinations</h2>
               <div className="w-[100%] overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                    <div className="flex gap-[12px] ">
                         {countries?.length > 0 ? countries?.map((destination: any, index: number) => (
                              <div
                                   key={`destination-${destination.id}-${index}`}
                                   onClick={() => handleDestinationClick(destination)}
                                   className={`px-2 ${selectedCountry === destination.name ? 'pointer-events-none opacity-50' : ''}`}
                              >
                                   <DestinationList destination={destination} index={index} />
                              </div>
                         )) : <div className="w-full h-full flex items-center justify-center">
                              <p className="text-gray-500">No destinations found</p>
                         </div>}
                    </div>
               </div>
          </div>
     )
}

export default PopularDestinations;
