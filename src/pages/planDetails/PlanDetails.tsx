import { useState } from "react";
import BackIcon from "../../assets/back-arrow.svg";
import StarIcon from "../../assets/star-icon.svg";
import BookedIcon from "../../assets/booked-icon.svg";
import Inclusion from "../../components/dashboard/planDetails/Inclusion";
import Overview from "../../components/dashboard/planDetails/Overview";
import Itinerary from "../../components/dashboard/planDetails/Itinerary";
import TermContact from "../../components/dashboard/planDetails/TermContact";
import Reviews from "../../components/dashboard/planDetails/Reviews";
// import ContactUsModal from "../../components/dashboard/payments/ContactUsModal";
// import SignUpModal from "../../components/chat/SignUpModal";
// import SignInModal from "../../components/chat/SignInModal";
import { planOptions } from "../../utils/dummyData";
import ImageGrid from "../../components/dashboard/planDetails/ImageGrid";
import PriceCard from "../../components/dashboard/planDetails/PriceCard";

const PlanDetails = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex ">

      <div className="md:ms-[275px] h-screen overflow-y-auto flex-1">
        <div className=" py-[15px] sm:py-[44px] max-w-[1075px] mx-auto sm:px-[20px] px-[10px]">
          <a
            href="#"
            className="inline-flex items-center bg-[#E7ECF9] rounded-[8px] text-[16px] leading-[24px] font-normal text-[#05073C] mb-[8px] gap-[5px] px-[18px] py-[10px]"
          >
            <img src={BackIcon} alt="Back" className="" /> Back
          </a>
          <ImageGrid />
          <div>
            {/* Location and Package Info */}
            <div className="lg:px-[18px] px-[10px] mt-6">
              <div className="flex items-center lg:mb-[24px] mb-[15px] justify-between">
                <span className="text-[14px] leading-[20px] font-normal text-[#4B5563]">
                  Bali, Indonesia
                </span>
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
                <PriceCard />
              </div>

              {/* Price and Booking Info */}
              <div className="">
                <div className="">
                  {/* Tabs */}
                  <div className="border-b border-gray-200">
                    <div className="flex justify-between sm:justify-start sm:gap-[10px] lg:gap-[30px] items-center flex-wrap sm:flex-nowrap">
                      {planOptions.map((option) => (
                        <button
                          key={option.id}
                          className={`text-[12px] sm:text-[14px] lg:text-[18px] px-[10px] sm:px-[16px] py-[6px] sm:py-[10px] text-[#05073C] leading-[24px] font-normal cursor-pointer ${activeTab === option.name.toLowerCase()
                            ? "border-b-3 border-[#0D3FC6]"
                            : ""
                            }`}
                          onClick={() => setActiveTab(option.name.toLowerCase())}
                        >
                          {option.name}
                        </button>
                      ))}

                    </div>
                  </div>

                  {/* Tour Overview Content */}
                  {activeTab === "overview" && (
                    <Overview />
                  )}

                  {/* Inclusion Content */}
                  {activeTab === "inclusion" && (
                    <Inclusion />
                  )}

                  {/* Itinerary Content */}
                  {activeTab === "itinerary" && (
                    <Itinerary />
                  )}

                  {/* Terms Content */}
                  {activeTab === "terms" && (
                    <TermContact />
                  )}

                  {/* Reviews Content */}
                  {activeTab === "reviews" && (
                    <Reviews />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ContactUsModal /> */}
      {/* <SignUpModal /> */}
      {/* <SignInModal /> */}
    </div>
  );
};

export default PlanDetails;