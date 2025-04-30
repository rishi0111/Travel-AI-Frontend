import Loader from "../common/Loader";

const AuthButton = ({ children, isLoading }: { children: React.ReactNode, isLoading: boolean }) => {
     return (
          <button type="submit" className={`w-full ${isLoading ? "opacity-50" : "opacity-100"} bg-gradient-to-r from-[#0D3FC6] to-[#3793FF] text-white py-[16px] rounded-[8px] font-medium hover:bg-blue-700 transition-colors cursor-pointer !rounded-button whitespace-nowrap text-[14px] leading-[18px] uppercase`} disabled={isLoading}>
               {isLoading ? <Loader /> : children}
          </button>
     )
};

export default AuthButton;

