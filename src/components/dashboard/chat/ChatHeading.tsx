const ChatHeading = () => {
     return (
          <div className="relative h-[200px] lg:h-[400px] overflow-hidden">
               <div className="relative z-10 h-full flex flex-col justify-center px-4 lg:px-16 text-center">
                    <h1 className="text-[32px] lg:text-[54px] leading-[32px] lg:leading-[47px] text-[#05073C] font-bold mb-[10px]">
                         Welcome to TripBooking <span className="text-[#204ECB]">AI</span>
                    </h1>
                    <p className="text-[14px] lg:text-[16px] leading-[24px] text-[#4B5563]">
                         Planning your next trip? We've got you covered with the best
                         travel packages, personalized just for you!
                    </p>
               </div>
          </div>
     )
}

export default ChatHeading;
