import { useState } from "react";
import Sidebar from "../../components/chat/Sidebar";
import BackIcon from "../../assets/back-arrow.svg";
import PlanImage1 from "../../assets/plan-img1.png";
import PlanImage2 from "../../assets/plan-img2.png";
import PlanImage3 from "../../assets/plan-img3.png";
import PlanImage4 from "../../assets/plan-img4.png";
import ShareIcon from "../../assets/share-icon.svg";
import HeartIcon from "../../assets/heart-icon.svg";
import StarIcon from "../../assets/star-icon.svg";
import BookedIcon from "../../assets/booked-icon.svg";
import DisclaimerIcon from "../../assets/disclaimer-icon.svg";
import CheckIcon from "../../assets/green-check-icon.svg";
import CrossIcon from "../../assets/red-cross-icon.svg";
import RatingIcon from "../../assets/rating-star.svg";
import ContactUsModal from "../../components/chat/ContactUsModal";
import SignUpModal from "../../components/chat/SignUpModal";
import SignInModal from "../../components/chat/SignInModal";

const PlanDetails = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  return (
    <div className="flex ">
      <Sidebar />
      <div className="md:ms-[275px] h-screen overflow-y-auto flex-1">
        <div className=" py-[15px] sm:py-[44px] max-w-[1075px] mx-auto sm:px-[20px] px-[10px]">
          <a
            href="#"
            className="inline-flex items-center bg-[#E7ECF9] rounded-[8px] text-[16px] leading-[24px] font-normal text-[#05073C] mb-[8px] gap-[5px] px-[18px] py-[10px]"
          >
            <img src={BackIcon} alt="Back" className="" /> Back
          </a>
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
          <div>
            {/* Location and Package Info */}
            <div className="lg:px-[18px] px-[10px] mt-6">
              <div className="flex items-center lg:mb-[24px] mb-[15px] justify-between">
                <span className="text-[14px] leading-[20px] font-normal text-[#4B5563]">
                  Bali, Indonesia
                </span>
                <div className="flex gap-[20px]">
                  <button className="flex items-center text-[14px] leading-[20px] font-normal text-[#05073C] cursor-pointer">
                    <img
                      src={ShareIcon}
                      alt="Share"
                      className="w-[14px] h-[14px] mr-2"
                    />
                    <span>Share</span>
                  </button>
                  <button className="flex items-center text-[14px] leading-[20px] font-normal text-[#05073C] cursor-pointer">
                    <img
                      src={HeartIcon}
                      alt="Heart"
                      className="w-[14px] h-[14px] mr-2"
                    />
                    <span>Save</span>
                  </button>
                </div>
              </div>

              <div className="flex items-start justify-between mb-[30px] flex-col lg:flex-row gap-3 lg:gap-0">
                <div className="">
                  <h1 className="text-[20px] sm:text-[24px] lg:text-[34px] md:leading-[46px] leading-[24px] sm:leading-[30px] font-bold text-[#05073C] mb-[15px]">
                    7-Day Bali Adventure: Explore Ubud, Kuta, Seminyak, and
                    Beyond!
                  </h1>
                  <div className="flex items-center gap-6 mt-2">
                    <div className="flex items-center text-[14px] leading-[20px] font-normal text-[#05073C]">
                      <img
                        src={StarIcon}
                        alt="Star"
                        className="w-[14px] h-[14px] mr-2"
                      />
                      <span>4.8 (269)</span>
                    </div>
                    <div className="flex items-center text-[14px] leading-[20px] font-normal text-[#05073C]">
                      <img
                        src={BookedIcon}
                        alt="Booked"
                        className="w-[14px] h-[14px] mr-2"
                      />
                      <span>30K+ booked</span>
                    </div>
                  </div>
                </div>
                <div className="w-full max-w-[350px]">
                  <div className="bg-[#E7ECF9] border border-[#C9D8FF] shadow-[0px_3px_8px_0px_rgba(86,121,215,0.25)] py-[26px] px-[15px] rounded-lg">
                    <div className="mb-[16px] flex items-center justify-between gap-1">
                      <div className="text-[14px] leading-[24px] font-normal text-[#05073C]">
                        Price starts from
                      </div>
                      <div className="flex items-baseline">
                        <span className="text-[22px] leading-[32px] font-bold text-[#0D3FC6]">
                          $599
                        </span>
                        <span className="text-[16px] leading-[24px] font-semibold text-[#05073C] ml-1">
                          / person
                        </span>
                      </div>
                    </div>

                    <div className="mb-[16px] flex items-center justify-between gap-1">
                      <div className="text-[14px] leading-[20px] font-normal text-[#05073C]">
                        Duration
                      </div>
                      <div className="text-[16px] leading-[24px] font-semibold text-[#05073C]">
                        7 Days
                      </div>
                    </div>
                    <div className="flex gap-4 items-center justify-between">
                      <button className="w-full py-[8px] text-[14px] cursor-pointer leading-[20px] font-normal text-white bg-[#FAB400] rounded-[4px]">
                        Book Now
                      </button>
                      <button className="w-full py-[8px] text-[14px] cursor-pointer leading-[20px] font-normal text-white bg-[#1A339B] rounded-[4px]">
                        Contact Us
                      </button>
                      <ContactUsModal />
                      {/* <SignUpModal /> */}
                      {/* <SignInModal /> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Price and Booking Info */}
              <div className="">
                <div className="">
                  {/* Tabs */}
                  <div className="border-b border-gray-200">
                    <div className="flex justify-between sm:justify-start sm:gap-[10px] lg:gap-[30px] items-center flex-wrap sm:flex-nowrap">
                      <button
                        className={`text-[12px] sm:text-[14px] lg:text-[18px] px-[10px] sm:px-[16px] py-[6px] sm:py-[10px] text-[#05073C] leading-[24px] font-normal cursor-pointer ${
                          activeTab === "overview"
                            ? "border-b-3 border-[#0D3FC6]"
                            : ""
                        }`}
                        onClick={() => setActiveTab("overview")}
                      >
                        Overview
                      </button>
                      <button
                        className={`text-[12px] sm:text-[14px] lg:text-[18px] px-[10px] sm:px-[16px] py-[6px] sm:py-[10px] text-[#05073C] leading-[24px] font-normal cursor-pointer ${
                          activeTab === "inclusion"
                            ? "border-b-3 border-[#0D3FC6]"
                            : ""
                        }`}
                        onClick={() => setActiveTab("inclusion")}
                      >
                        Inclusion
                      </button>
                      <button
                        className={`text-[12px] sm:text-[14px] lg:text-[18px] px-[10px] sm:px-[16px] py-[6px] sm:py-[10px] text-[#05073C] leading-[24px] font-normal cursor-pointer ${
                          activeTab === "itinerary"
                            ? "border-b-3 border-[#0D3FC6]"
                            : ""
                        }`}
                        onClick={() => setActiveTab("itinerary")}
                      >
                        Itinerary
                      </button>
                      <button
                        className={`text-[12px] sm:text-[14px] lg:text-[18px] px-[10px] sm:px-[16px] py-[6px] sm:py-[10px] text-[#05073C] leading-[24px] font-normal cursor-pointer ${
                          activeTab === "terms"
                            ? "border-b-3 border-[#0D3FC6]"
                            : ""
                        }`}
                        onClick={() => setActiveTab("terms")}
                      >
                        Terms
                      </button>
                      <button
                        className={`text-[12px] sm:text-[14px] lg:text-[18px] px-[10px] sm:px-[16px] py-[6px] sm:py-[10px] text-[#05073C] leading-[24px] font-normal cursor-pointer ${
                          activeTab === "reviews"
                            ? "border-b-3 border-[#0D3FC6]"
                            : ""
                        }`}
                        onClick={() => setActiveTab("reviews")}
                      >
                        Reviews
                      </button>
                    </div>
                  </div>

                  {/* Tour Overview Content */}
                  {activeTab === "overview" && (
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
                  )}

                  {/* Inclusion Content */}
                  {activeTab === "inclusion" && (
                    <div className="py-[30px]">
                      <h2 className="text-[18px] sm:text-[24px] md:text-[30px] md:leading-[40px] leading-[24px] sm:leading-[30px] font-bold mb-[6px]">
                        What's included
                      </h2>
                      <div className="flex items-start gap-[10px] mt-[22px] flex-wrap sm:flex-nowrap">
                        <div className="w-2/3">
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
                        <div className="w-1/3">
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
                  )}

                  {/* Itinerary Content */}
                  {activeTab === "itinerary" && (
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
                  )}

                  {/* Terms Content */}
                  {activeTab === "terms" && (
                    <div className="py-[30px]">
                      <h2 className="text-[18px] sm:text-[24px] md:text-[30px] md:leading-[40px] leading-[24px] sm:leading-[30px] font-bold mb-[6px]">
                        Terms & Conditions
                      </h2>
                      <div className="mt-[25px] ps-[30px]">
                        <ol className="list-decimal">
                          <li className="mb-[30px] text-[18px] sm:text-[24px] sm:leading-[35px] leading-[20px] font-medium text-[#05073C]">
                            {" "}
                            <h4 className="text-[18px] sm:text-[24px] sm:leading-[35px] leading-[20px] font-medium text-[#05073C] mb-[10px]">
                              Booking and Payment
                            </h4>
                            <ul className="list-disc ms-[10px] sm:ms-[20px]">
                              <li className="text-[12px] sm:text-[14px] sm:leading-[20px] leading-[16px] font-normal text-[#05073C] mb-[12px]">
                                To confirm your booking, a non-refundable
                                deposit of ___% of the total package cost must
                                be paid at the time of booking.
                              </li>
                              <li className="text-[12px] sm:text-[14px] sm:leading-[20px] leading-[16px] font-normal text-[#05073C] mb-[12px]">
                                The remaining balance must be paid ___ days
                                prior to the departure date.
                              </li>
                              <li className="text-[12px] sm:text-[14px] sm:leading-[20px] leading-[16px] font-normal text-[#05073C] mb-[12px]">
                                Failure to make the final payment within the
                                specified period may result in the cancellation
                                of the booking.
                              </li>
                            </ul>
                          </li>
                          <li className="mb-[30px] text-[18px] sm:text-[24px] sm:leading-[35px] leading-[20px] font-medium text-[#05073C]">
                            {" "}
                            <h4 className="text-[18px] sm:text-[24px] sm:leading-[35px] leading-[20px] font-medium text-[#05073C] mb-[10px]">
                              Cancellation and Refund Policy
                            </h4>
                            <ul className="list-disc ms-[10px] sm:ms-[20px]">
                              <li className="text-[12px] sm:text-[14px] sm:leading-[20px] leading-[16px] font-normal text-[#05073C] mb-[12px]">
                                Cancellations made ___ days before the departure
                                date will incur a cancellation fee of ___% of
                                the total package cost.
                              </li>
                              <li className="text-[12px] sm:text-[14px] sm:leading-[20px] leading-[16px] font-normal text-[#05073C] mb-[12px]">
                                Cancellations made less than ___ days before the
                                departure date will result in the loss of the
                                entire package cost.
                              </li>
                              <li className="text-[12px] sm:text-[14px] sm:leading-[20px] leading-[16px] font-normal text-[#05073C] mb-[12px]">
                                Refunds will be processed within ___ business
                                days after cancellation.
                              </li>
                              <li className="text-[12px] sm:text-[14px] sm:leading-[20px] leading-[16px] font-normal text-[#05073C] mb-[12px]">
                                The company reserves the right to cancel the
                                tour due to unforeseen circumstances. In such
                                cases, a full refund will be provided.
                              </li>
                            </ul>
                          </li>
                          <li className="mb-[30px] text-[18px] sm:text-[24px] sm:leading-[35px] leading-[20px] font-medium text-[#05073C]">
                            {" "}
                            <h4 className="text-[18px] sm:text-[24px] sm:leading-[35px] leading-[20px] font-medium text-[#05073C] mb-[10px]">
                              Amendments and Changes
                            </h4>
                            <ul className="list-disc ms-[10px] sm:ms-[20px]">
                              <li className="text-[12px] sm:text-[14px] sm:leading-[20px] leading-[16px] font-normal text-[#05073C] mb-[12px]">
                                Any changes to the booking must be requested in
                                writing and are subject to availability and
                                additional charges.
                              </li>
                              <li className="text-[12px] sm:text-[14px] sm:leading-[20px] leading-[16px] font-normal text-[#05073C] mb-[12px]">
                                The company reserves the right to make minor
                                changes to the itinerary due to local conditions
                                or other factors beyond its control.
                              </li>
                            </ul>
                          </li>
                          <li className="mb-[30px] text-[18px] sm:text-[24px] sm:leading-[35px] leading-[20px] font-medium text-[#05073C]">
                            {" "}
                            <h4 className="text-[18px] sm:text-[24px] sm:leading-[35px] leading-[20px] font-medium text-[#05073C] mb-[10px]">
                              Health and Safety
                            </h4>
                            <ul className="list-disc ms-[10px] sm:ms-[20px]">
                              <li className="text-[12px] sm:text-[14px] sm:leading-[20px] leading-[16px] font-normal text-[#05073C] mb-[12px]">
                                Participants are responsible for informing the
                                company of any medical conditions or dietary
                                restrictions prior to departure.
                              </li>
                              <li className="text-[12px] sm:text-[14px] sm:leading-[20px] leading-[16px] font-normal text-[#05073C] mb-[12px]">
                                The company reserves the right to refuse
                                participation to anyone deemed unfit for the
                                tour.
                              </li>
                            </ul>
                          </li>
                          <li className="mb-[30px] text-[18px] sm:text-[24px] sm:leading-[35px] leading-[20px] font-medium text-[#05073C]">
                            {" "}
                            <h4 className="text-[18px] sm:text-[24px] sm:leading-[35px] leading-[20px] font-medium text-[#05073C] mb-[10px]">
                              {" "}
                              Liability and Responsibility
                            </h4>
                            <ul className="list-disc ms-[10px] sm:ms-[20px]">
                              <li className="text-[12px] sm:text-[14px] sm:leading-[20px] leading-[16px] font-normal text-[#05073C] mb-[12px]">
                                The company acts as an agent for third-party
                                suppliers and is not liable for any injury,
                                loss, damage, or delay caused by these
                                suppliers.
                              </li>
                              <li className="text-[12px] sm:text-[14px] sm:leading-[20px] leading-[16px] font-normal text-[#05073C] mb-[12px]">
                                The company is not responsible for any loss or
                                damage to personal belongings during the tour.
                              </li>
                              <li className="text-[12px] sm:text-[14px] sm:leading-[20px] leading-[16px] font-normal text-[#05073C] mb-[12px]">
                                The customer assumes full responsibility for
                                ensuring that they meet all necessary travel
                                requirements, including passports and visas
                              </li>
                            </ul>
                          </li>
                        </ol>
                      </div>
                    </div>
                  )}

                  {/* Reviews Content */}
                  {activeTab === "reviews" && (
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
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanDetails;
