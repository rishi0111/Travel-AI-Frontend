import CloseIcon from "../../assets/modalClose-icon.svg";
import userIcon from '../../assets/user-icon.svg';
import LockIcon from '../../assets/lock-icon.svg';
import googleIcon from '../../assets/google-icon.svg';
import facebookIcon from '../../assets/facebook-icon.svg';

const SignInModal = () => {
  return (
    <div>
      <div className="w-full h-full absolute bottom-0 left-0 z-[99]">
        <div className="bg-[#00000080] h-full w-full absolute top-0 left-0"></div>
        <div className="px-[10px] sm:px-[20px] absolute top-[50%] left-[50%] z-[100] translate-x-[-50%] translate-y-[-50%] max-w-[745px] w-full ">
            <div className="bg-white rounded-[20px] ">
            <div className="flex justify-between items-center px-[15px] py-[10px] sm:px-[25px] sm:py-[15px] border-b border-[#E7ECF9]">
                <h3 className="text-[20px] sm:text-[28px] font-semibold text-[#05073C]">Sign In</h3>
                <button className="cursor-pointer w-[30px] sm:w-[35px] h-[30px] sm:h-[35px] bg-[#E7ECF9] rounded-full flex items-center justify-center">
                <img src={CloseIcon} alt="Close" />
                </button>
            </div>
            <div className="px-[15px] py-[10px] sm:px-[25px] sm:py-[20px] pb-[60px] max-h-[calc(100vh-100px)] overflow-y-auto">
                <p className="text-[14px] sm:text-[16px] font-semibod text-[#6C6C6C] mb-[20px] sm:mb-[35px]">Join now for free or log in to unlock exclusive offers and rewards!</p>
                <div className="mb-[20px] sm:mb-[35px] relative w-full">
                    <label className="block text-[10px] font-bold text-[#0D9BC6] mb-1 absolute top-[-7px] left-[20px] bg-white px-[7px] pe-[15px] z-10">Username</label>
                    <div className="relative">
                    <img src={userIcon} alt="user" className='w-[30px] h-[18px] absolute sm:left-[20px] left-[10px] top-1/2 transform -translate-y-1/2' />
                    <input
                        type="text"
                        className="w-full py-[17px] px-[18px] sm:ps-[60px] ps-[40px] text-[14px] font-semibold text-[#000000] leading-[18px] border border-[#0D9BC6] focus:outline-none placeholder:text-[#00000080] rounded-[8px]"
                        placeholder="Enter username or email"
                    />
                    </div>
                </div>
                <div className="mb-[20px] sm:mb-[35px] relative w-full">
                    <label className="block text-[10px] font-bold text-[#0D9BC6] mb-1 absolute top-[-7px] left-[20px] bg-white px-[7px] pe-[15px] z-10">Password</label>
                    <div className="relative">
                        <img src={LockIcon} alt="user" className='w-[30px] h-[25px] absolute sm:left-[20px] left-[10px] top-1/2 transform -translate-y-1/2' />
                        <input
                        type="password"
                        className="w-full py-[17px] px-[18px] sm:ps-[60px] ps-[45px] text-[14px] font-semibold text-[#000000] leading-[18px] border border-[#0D9BC6] focus:outline-none placeholder:text-[#00000080] rounded-[8px]"
                        placeholder="Enter  your password"
                        />
                    </div>
                </div>
                <div className="flex justify-end my-[13px] sm:my-[23px]">
                    <a href="/forgot-password" className="text-[14px] text-[#00000080] hover:text-[#0D3FC6]">
                    Forgot your password?
                    </a>
                </div>
                <div className="text-center mb-[12px]">
                    <button
                        className="bg-gradient-to-r from-[#0D3FC6] to-[#3793FF] text-white py-[16px] px-[45px] rounded-[8px] font-medium hover:bg-blue-700 transition-colors cursor-pointer !rounded-button whitespace-nowrap text-[14px] leading-[18px] uppercase"
                    >
                        sign in
                    </button>
                </div>
                <div className="flex items-center my-[25px] w-full max-w-[290px] mx-auto">
                <div className="flex-1 border-t border-[#1C1C1C33]"></div>
                <span className="px-4 text-[#05073C] text-[14px] leading-[18px]">OR Sign up With</span>
                <div className="flex-1 border-t border-[#1C1C1C33]"></div>
                </div>

                <div className="flex gap-4 justify-center">
                <button className="flex items-center justify-center gap-2 border border-[#E0E2E9] rounded-[8px] px-[12px] py-[14px] hover:bg-gray-50 cursor-pointer !rounded-button whitespace-nowrap w-[140px]">
                    <img src={googleIcon} alt="Google" className="w-[20px] h-[20px]" />
                    <span className='text-[14px] leading-[18px] text-[#171725] font-semibold'>Google</span>
                </button>
                <button className="flex items-center justify-center gap-2 border border-[#E0E2E9] rounded-[8px] px-[12px] py-[14px] hover:bg-gray-50 cursor-pointer !rounded-button whitespace-nowrap w-[140px]">
                    <img src={facebookIcon} alt="Facebook" className="w-[20px] h-[20px]" />
                    <span className='text-[14px] leading-[18px] text-[#171725] font-semibold'>Facebook</span>
                </button>
                </div>

                <div className="text-center text-[#05073C] font-normal mt-[30px] text-[14px] leading-[18px]">
                Don’t have an account?  {" "}
                <a href="#" className="text-[#0D3FC6] font-semibold">
                    Sign Up
                </a>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SignInModal
