import PlanImage1 from "../../../assets/plan-img1.png";
import PlanImage2 from "../../../assets/plan-img2.png";
import PlanImage3 from "../../../assets/plan-img3.png";
import PlanImage4 from "../../../assets/plan-img4.png";

const ImageGrid = () => {
     return (
          <div className="grid lg:grid-cols-3 gap-[10px] my-[15px]">
               {/* Main Image */}
               <div className="lg:col-span-2 w-full rounded-lg rounded-s-none">
                    <img
                         src={PlanImage1}
                         alt="Thailand Beach with Boats"
                         className="w-full h-full object-cover"
                    />
               </div>

               {/* Side Images */}
               <div className="lg:col-span-1 h-full flex flex-col gap-[10px]">
                    <div className="h-1/2 overflow-hidden rounded-lg rounded-s-none">
                         <img
                              src={PlanImage2}
                              alt="Thailand Aerial View"
                              className="w-full h-full object-cover"
                         />
                    </div>
                    <div className="h-1/2 flex gap-[10px]">
                         <div className="w-1/2 overflow-hidden relative group">
                              <img
                                   src={PlanImage3}
                                   alt="Thailand Beach Relaxation"
                                   className="w-full h-full object-cover"
                              />
                         </div>
                         <div className="w-1/2 overflow-hidden rounded-ee-lg relative">
                              <img
                                   src={PlanImage4}
                                   alt="Thailand Sunset Boat"
                                   className="w-full h-full object-cover"
                              />
                              <div className="absolute bottom-[20px] right-[5px]">
                                   <button className="text-[14px] leading-[20px] font-normal cursor-pointer text-white bg-[#05073C] rounded-[30px] px-[20px] py-[9px]">
                                        See all photos
                                   </button>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ImageGrid;

