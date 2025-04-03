import CheckIcon from "../../assets/check-icon.svg";

const PasswordModal = () => {
  return (
    <div>
      <div className="w-full h-full absolute bottom-0 left-0 z-[99]">
        <div className="bg-[#00000080] h-full w-full absolute top-0 left-0"></div>
        <div className="max-w-[580px] px-[10px] w-full absolute top-[50%] left-[50%] z-[100] translate-x-[-50%] translate-y-[-50%]">
          <div className="text-center flex flex-col sm:gap-[25px] gap-[15px] bg-white rounded-[12px] sm:py-[60px] py-[30px] sm:px-[20px] px-[10px]">
            <img src={CheckIcon} alt="Check" className="sm:w-[120px] w-[80px] sm:h-[120px] h-[80px] mx-auto" />
            <p className="sm:text-[18px] text-[16px] font-semibold text-[#313131BF]">Your password has been changed!</p>
            <button className="bg-gradient-to-r w-[max-content] mx-auto from-[#0D3FC6] to-[#3793FF] text-white py-[16px] px-[57px] rounded-[8px] font-medium hover:bg-blue-700 transition-colors cursor-pointer !rounded-button whitespace-nowrap text-[14px] leading-[18px] uppercase">continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordModal;
