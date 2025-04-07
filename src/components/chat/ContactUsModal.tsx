import CloseIcon from "../../assets/modalClose-icon.svg";
import PhoneIcon from "../../assets/phone-icon.svg";
import WhatsappIcon from "../../assets/whatsapp-icon.svg";
import userIcon from '../../assets/user-icon.svg';
import emailIcon from '../../assets/email-icon.svg';
import numberIcon from '../../assets/number-icon.svg';


const ContactUsModal = () => {
  return (
    <div>
      <div className="w-full h-full absolute bottom-0 left-0 z-[99]">
        <div className="bg-[#00000080] h-full w-full absolute top-0 left-0"></div>
        <div className="px-[10px] sm:px-[20px] absolute top-[50%] left-[50%] z-[100] translate-x-[-50%] translate-y-[-50%] max-w-[745px] w-full ">
            <div className="bg-white rounded-[20px]">
            <div className="flex justify-between items-center p-[25px] py-[15px] border-b border-[#E7ECF9]">
                <h3 className="text-[20px] sm:text-[28px] font-semibold text-[#05073C]">Conatct Us</h3>
                <button className="cursor-pointer w-[30px] sm:w-[35px] h-[30px] sm:h-[35px] bg-[#E7ECF9] rounded-full flex items-center justify-center">
                <img src={CloseIcon} alt="Close" />
                </button>
            </div>
            <div className="px-[15px] py-[10px] sm:px-[25px] sm:py-[20px] max-h-[calc(100vh-100px)] overflow-y-auto">
                <div className="flex gap-[10px] flex-col sm:flex-row mb-[20px] sm:mb-[30px]">
                    <div className="w-full flex gap-[13px] items-center bg-[#F4F4F6] rounded-[15px] py-[10px] sm:py-[17px] px-[15px] sm:px-[24px]">
                        <div className="w-[47px] h-[47px] bg-[#0D3FC6] rounded-full flex items-center justify-center">
                            <img src={PhoneIcon} alt="Phone" />
                        </div>
                        <div>
                            <h6 className="text-[16px] sm:text-[20px] font-semibold text-[#05073C]">Call Us Directly</h6>
                            <p className="text-[14px] sm:text-[16px] font-normal text-[#6B7280] mb-0">+1234567890</p>
                        </div>
                    </div>
                    <div className="w-full flex gap-[13px] items-center bg-[#F4F4F6] rounded-[15px] py-[10px] sm:py-[17px] px-[15px] sm:px-[24px]">
                        <div className="w-[47px] h-[47px] bg-[#25D366] rounded-full flex items-center justify-center">
                            <img src={WhatsappIcon} alt="Whatsapp" />
                        </div>
                        <div>
                            <h6 className="text-[16px] sm:text-[20px] font-semibold text-[#05073C]">Whatsapp</h6>
                            <p className="text-[14px] sm:text-[16px] font-normal text-[#6B7280] mb-0">+1234567890</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-[10px]">
                    <div className="mb-[20px] sm:mb-[35px] relative w-full">
                        <label className="block text-[10px] font-bold text-[#0D9BC6] mb-1 absolute top-[-7px] left-[20px] bg-white px-[7px] pe-[15px] z-10">Name</label>
                        <div className="relative">
                        <img src={userIcon} alt="user" className='w-[30px] h-[18px] absolute sm:left-[20px] left-[10px] top-1/2 transform -translate-y-1/2' />
                        <input
                            type="text"
                            className="w-full py-[17px] px-[18px] sm:ps-[60px] ps-[45px] text-[14px] font-semibold text-[#000000] leading-[18px] border border-[#0D9BC6] focus:outline-none placeholder:text-[#00000080] rounded-[8px]"
                            placeholder="Enter your name"
                        />
                        </div>
                    </div>
                    <div className="mb-[20px] sm:mb-[35px] relative w-full">
                        <label className="block text-[10px] font-bold text-[#0D9BC6] mb-1 absolute top-[-7px] left-[20px] bg-white px-[7px] pe-[15px] z-10">Email</label>
                        <div className="relative">
                        <img src={emailIcon} alt="user" className='w-[30px] h-[20px] absolute sm:left-[20px] left-[10px] top-1/2 transform -translate-y-1/2' />
                        <input
                            type="email"
                            className="w-full py-[17px] px-[18px] sm:ps-[60px] ps-[45px] text-[14px] font-semibold text-[#000000] leading-[18px] border border-[#0D9BC6] focus:outline-none placeholder:text-[#00000080] rounded-[8px]"
                            placeholder="Enter your email"
                        />
                        </div>
                    </div>
                </div>
                <div className="mb-[20px] sm:mb-[35px] relative w-full">
                    <label className="block text-[10px] font-bold text-[#0D9BC6] mb-1 absolute top-[-7px] left-[20px] bg-white px-[7px] pe-[15px] z-10">Phone Number</label>
                    <div className="relative">
                    <img src={numberIcon} alt="user" className='w-[30px] h-[18px] absolute sm:left-[20px] left-[10px] top-1/2 transform -translate-y-1/2' />
                    <input
                        type="email"
                        className="w-full py-[17px] px-[18px] sm:ps-[60px] ps-[45px] text-[14px] font-semibold text-[#000000] leading-[18px] border border-[#0D9BC6] focus:outline-none placeholder:text-[#00000080] rounded-[8px]"
                        placeholder="Enter your number"
                    />
                    </div>
                </div>
                <div className="mb-[20px] sm:mb-[35px] relative w-full">
                    <label className="block text-[10px] font-bold text-[#0D9BC6] mb-1 absolute top-[-7px] left-[20px] bg-white px-[7px] pe-[15px] z-10">Message</label>
                    <div className="relative">
                    <textarea
                        className="w-full h-[160px] resize-none py-[17px] px-[18px] sm:ps-[60px] ps-[20px] text-[14px] font-semibold text-[#000000] leading-[18px] border border-[#0D9BC6] focus:outline-none placeholder:text-[#00000080] rounded-[8px]"
                        placeholder="Enter your message"
                    />
                    </div>
                </div>
                <div className="text-center mb-[12px] pt-[10px]">
                    <button
                        className="bg-gradient-to-r from-[#0D3FC6] to-[#3793FF] text-white py-[16px] px-[45px] rounded-[8px] font-medium hover:bg-blue-700 transition-colors cursor-pointer !rounded-button whitespace-nowrap text-[14px] leading-[18px] uppercase"
                    >
                        sign up
                    </button>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUsModal
