import RatingIcon from "../../../assets/rating-star.svg";
const Reviews = () => {
     return (
          <div className="py-[30px]">
               <h2 className="text-[18px] sm:text-[24px] md:text-[30px] md:leading-[40px] leading-[24px] sm:leading-[30px] font-bold mb-[6px]">
                    Customer Reviews
               </h2>
               <div className="bg-[#F9FBFF] border border-[#E7ECF9] rounded-[15px] py-[10px] sm:py-[20px] px-[12px] mt-[14px] max-w-[650px]">
                    <h4 className="text-[18px] sm:text-[24px] sm:leading-[45px] leading-[20px] font-bold text-[#05073C] mb-[10px]">
                         4.85 46 reviews{" "}
                    </h4>
                    <div className="flex items-start gap-[10px] justify-between flex-wrap">
                         <div>
                              <h6 className="text-[14px] sm:text-[16px] sm:leading-[24px] leading-[20px] font-semibold text-[#05073C] mb-[5px]">
                                   Overall Ratings
                              </h6>
                              <div className="flex items-center gap-[10px] mb-[10px]">
                                   <span className="text-[12px] sm:text-[14px] leading-[20px] font-semibod text-[#05073C]">
                                        5
                                   </span>
                                   <div className="w-[104px] h-[4px] bg-[#D3D3D3] rounded-full mr-2">
                                        <div
                                             className="h-[4px] bg-[#1F2637] rounded-full"
                                             style={{ width: "85%" }}
                                        ></div>
                                   </div>
                              </div>
                              <div className="flex items-center gap-[10px] mb-[10px]">
                                   <span className="text-[12px] sm:text-[14px] leading-[20px] font-semibod text-[#05073C]">
                                        4
                                   </span>
                                   <div className="w-[104px] h-[4px] bg-[#D3D3D3] rounded-full mr-2">
                                        <div
                                             className="h-[4px] bg-[#1F2637] rounded-full"
                                             style={{ width: "75%" }}
                                        ></div>
                                   </div>
                              </div>

                              <div className="flex items-center gap-[10px] mb-[10px]">
                                   <span className="text-[12px] sm:text-[14px] leading-[20px] font-semibod text-[#05073C]">
                                        3
                                   </span>
                                   <div className="w-[104px] h-[4px] bg-[#D3D3D3] rounded-full mr-2">
                                        <div
                                             className="h-[4px] bg-[#1F2637] rounded-full"
                                             style={{ width: "65%" }}
                                        ></div>
                                   </div>
                              </div>
                              <div className="flex items-center gap-[10px] mb-[10px]">
                                   <span className="text-[12px] sm:text-[14px] leading-[20px] font-semibod text-[#05073C]">
                                        2
                                   </span>
                                   <div className="w-[104px] h-[4px] bg-[#D3D3D3] rounded-full mr-2">
                                        <div
                                             className="h-[4px] bg-[#1F2637] rounded-full"
                                             style={{ width: "55%" }}
                                        ></div>
                                   </div>
                              </div>
                              <div className="flex items-center gap-[10px] mb-[10px]">
                                   <span className="text-[12px] sm:text-[14px] leading-[20px] font-semibod text-[#05073C]">
                                        1
                                   </span>
                                   <div className="w-[104px] h-[4px] bg-[#D3D3D3] rounded-full mr-2">
                                        <div
                                             className="h-[4px] bg-[#1F2637] rounded-full"
                                             style={{ width: "45%" }}
                                        ></div>
                                   </div>
                              </div>
                         </div>
                         <div>
                              <div className="flex items-center gap-[10px] mb-[8px]">
                                   <div className="w-[100px] text-[12px] sm:text-[14px] leading-[20px] font-normal text-[#05073C]">
                                        Cleanliness
                                   </div>
                                   <div className="flex items-center gap-[10px]">
                                        <div className="w-[104px] h-[4px] bg-[#D3D3D3] rounded-full mr-2">
                                             <div
                                                  className="h-[4px] bg-[#1F2637] rounded-full"
                                                  style={{ width: "95%" }}
                                             ></div>
                                        </div>
                                        <span>4.8</span>
                                   </div>
                              </div>

                              <div className="flex items-center gap-[10px] mb-[8px]">
                                   <div className="w-[100px] text-[12px] sm:text-[14px] leading-[20px] font-normal text-[#05073C]">
                                        Accuracy
                                   </div>
                                   <div className="flex items-center gap-[10px]">
                                        <div className="w-[104px] h-[4px] bg-[#D3D3D3] rounded-full mr-2">
                                             <div
                                                  className="h-[4px] bg-[#1F2637] rounded-full"
                                                  style={{ width: "95%" }}
                                             ></div>
                                        </div>
                                        <span>4.8</span>
                                   </div>
                              </div>

                              <div className="flex items-center gap-[10px] mb-[8px]">
                                   <div className="w-[100px] text-[12px] sm:text-[14px] leading-[20px] font-normal text-[#05073C]">
                                        Communication
                                   </div>
                                   <div className="flex items-center gap-[10px]">
                                        <div className="w-[104px] h-[4px] bg-[#D3D3D3] rounded-full mr-2">
                                             <div
                                                  className="h-[4px] bg-[#1F2637] rounded-full"
                                                  style={{ width: "95%" }}
                                             ></div>
                                        </div>
                                        <span>4.8</span>
                                   </div>
                              </div>

                              <div className="flex items-center gap-[10px] mb-[8px]">
                                   <div className="w-[100px] text-[12px] sm:text-[14px] leading-[20px] font-normal text-[#05073C]">
                                        Location
                                   </div>
                                   <div className="flex items-center gap-[10px]">
                                        <div className="w-[104px] h-[4px] bg-[#D3D3D3] rounded-full mr-2">
                                             <div
                                                  className="h-[4px] bg-[#1F2637] rounded-full"
                                                  style={{ width: "95%" }}
                                             ></div>
                                        </div>
                                        <span>4.8</span>
                                   </div>
                              </div>

                              <div className="flex items-center gap-[10px] mb-[8px]">
                                   <div className="w-[100px] text-[12px] sm:text-[14px] leading-[20px] font-normal text-[#05073C]">
                                        Check-in
                                   </div>
                                   <div className="flex items-center gap-[10px]">
                                        <div className="w-[104px] h-[4px] bg-[#D3D3D3] rounded-full mr-2">
                                             <div
                                                  className="h-[4px] bg-[#1F2637] rounded-full"
                                                  style={{ width: "95%" }}
                                             ></div>
                                        </div>
                                        <span>4.8</span>
                                   </div>
                              </div>

                              <div className="flex items-center gap-[10px] mb-[8px]">
                                   <div className="w-[100px] text-[12px] sm:text-[14px] leading-[20px] font-normal text-[#05073C]">
                                        Value
                                   </div>
                                   <div className="flex items-center gap-[10px]">
                                        <div className="w-[104px] h-[4px] bg-[#D3D3D3] rounded-full mr-2">
                                             <div
                                                  className="h-[4px] bg-[#1F2637] rounded-full"
                                                  style={{ width: "95%" }}
                                             ></div>
                                        </div>
                                        <span>4.8</span>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="mt-[38px]">
                    <div className="flex flex-col mb-[60px]">
                         <div className="flex items-center gap-4 mb-[10px]">
                              <div className="w-full max-w-[45px] h-[45px] bg-[#212947] rounded-full flex items-center justify-center text-white font-bold">
                                   AT
                              </div>
                              <div className="flex w-full justify-between">
                                   <span className="font-medium text-[15px] leading-[24px] text-[#05073C]">Ali Tufan</span>
                                   <div className="">
                                        <span className="text-[#717171] text-[14px] leading-[20px] font-normal">
                                             April 2023
                                        </span>
                                   </div>
                              </div>
                         </div>

                         <div className="">
                              <div className="flex items-center gap-[16px] mb-[8px]">
                                   <div className="flex items-center">
                                        <img src={RatingIcon} alt="Rating" />
                                        <img src={RatingIcon} alt="Rating" />
                                        <img src={RatingIcon} alt="Rating" />
                                        <img src={RatingIcon} alt="Rating" />
                                        <img src={RatingIcon} alt="Rating" />
                                   </div>
                                   <h4 className="font-bold mb-0 text-[14px] leading-[24px] text-[#05073C]">
                                        Take this tour! Its fantastic!
                                   </h4>
                              </div>
                              <p className="text-[14px] leading-[28px] font-normal text-[#05073C] mb-[30px]">
                                   Great for 4-5 hours to explore. Really a lot to
                                   see and tons of photo spots. Even have a passport
                                   for you to collect all the stamps as a souvenir.
                                   Must see for a Harry Potter fan.
                              </p>
                         </div>

                         <div className="flex flex-wrap gap-[10px] max-w-[590px]">
                              <img
                                   src="https://public.readdy.ai/ai/img_res/444c444871ab083aaa79b4bf40ad50b9.jpg"
                                   alt="Northern Lights Lake"
                                   className="w-[180px] h-[130px] object-cover rounded-xl"
                              />
                              <img
                                   src="https://public.readdy.ai/ai/img_res/298f51394d28b3deb229abb20b766bcf.jpg"
                                   alt="Desert Dunes"
                                   className="w-[180px] h-[130px] object-cover rounded-xl"
                              />
                              <img
                                   src="https://public.readdy.ai/ai/img_res/f5658d22cca7a4fca58008900a5568fe.jpg"
                                   alt="Railway Viaduct"
                                   className="w-[180px] h-[130px] object-cover rounded-xl"
                              />
                         </div>
                    </div>
               </div>
               <div className="flex flex-col mb-[60px]">
                    <div className="flex items-center gap-4 mb-[10px]">
                         <div className="w-full max-w-[45px] h-[45px] bg-[#212947] rounded-full flex items-center justify-center text-white font-bold">
                              AT
                         </div>
                         <div className="flex w-full justify-between">
                              <span className="font-medium text-[15px] leading-[24px] text-[#05073C]">Ali Tufan</span>
                              <div className="">
                                   <span className="text-[#717171] text-[14px] leading-[20px] font-normal">
                                        April 2023
                                   </span>
                              </div>
                         </div>
                    </div>

                    <div className="">
                         <div className="flex items-center gap-[16px] mb-[8px]">
                              <div className="flex items-center">
                                   <img src={RatingIcon} alt="Rating" />
                                   <img src={RatingIcon} alt="Rating" />
                                   <img src={RatingIcon} alt="Rating" />
                                   <img src={RatingIcon} alt="Rating" />
                                   <img src={RatingIcon} alt="Rating" />
                              </div>
                              <h4 className="font-bold mb-0 text-[14px] leading-[24px] text-[#05073C]">
                                   Take this tour! Its fantastic!
                              </h4>
                         </div>
                         <p className="text-[14px] leading-[28px] font-normal text-[#05073C] mb-[30px]">
                              Great for 4-5 hours to explore. Really a lot to
                              see and tons of photo spots. Even have a passport
                              for you to collect all the stamps as a souvenir.
                              Must see for a Harry Potter fan.
                         </p>
                    </div>

                    <div className="flex flex-wrap gap-[10px] max-w-[590px]">
                         <img
                              src="https://public.readdy.ai/ai/img_res/444c444871ab083aaa79b4bf40ad50b9.jpg"
                              alt="Northern Lights Lake"
                              className="w-[180px] h-[130px] object-cover rounded-xl"
                         />
                         <img
                              src="https://public.readdy.ai/ai/img_res/298f51394d28b3deb229abb20b766bcf.jpg"
                              alt="Desert Dunes"
                              className="w-[180px] h-[130px] object-cover rounded-xl"
                         />
                         <img
                              src="https://public.readdy.ai/ai/img_res/f5658d22cca7a4fca58008900a5568fe.jpg"
                              alt="Railway Viaduct"
                              className="w-[180px] h-[130px] object-cover rounded-xl"
                         />
                    </div>
               </div>
               <div>
                    <a href="#" className="text-[16px] leading-[20px] font-semibod text-[#0D3FC6] py-[10px] sm:py-[17px] w-full sm:max-w-[210px] max-w-[170px] border border-[#0D3FC6] inline-block text-center rounded-[12px] hover:bg-[#0D3FC6] hover:text-white transition-all duration-300">See more reviews</a>
               </div>
          </div>
     )
}

export default Reviews;
