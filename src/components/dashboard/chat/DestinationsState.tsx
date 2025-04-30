import { useAppSelector } from "../../../store/hooks";
import DestinationStateList from "./DestinationStateList";
import { useState, useEffect } from "react";

const DestinationsState = ({ onStateClick }: { onStateClick: (stateName: string) => void }) => {
     const [state, setState] = useState<{ id: string, name: string }[]>([]);
     const { countries } = useAppSelector((state) => state.tours);
     useEffect(() => {
          if (countries.cities) {
               setState(countries.cities);
          }
     }, [countries]);


     return (
          <div className="py-4 mb-[20px]">
               <h2 className="text-[20px] leading-[24px] font-semibold mb-[20px] text-[#05073C]">States in {countries.name}</h2>
               <div className="w-[100%] overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                    <div className="flex gap-[16px]">
                         {state?.length > 0 ? state?.map((destination: { id: string, name: string }) => (
                              <div key={destination.id} onClick={() => onStateClick(destination.name)}>
                                   <DestinationStateList key={destination.id} destination={destination} />
                              </div>
                         )) : <div className="w-full h-full flex items-center justify-center">
                              <p className="text-gray-500">No destinations found</p>
                         </div>}

                    </div>
               </div>
          </div>
     )
}

export default DestinationsState;
