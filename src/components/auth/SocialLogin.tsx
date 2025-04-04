import { signInWithGoogle, signInWithFacebook } from "../../utils/firebaseConfig";
import googleIcon from '../../assets/google-icon.svg';
import facebookIcon from '../../assets/facebook-icon.svg';

const SocialLogin = () => {
     const handleGoogleSignIn = async () => {
          try {
               const result = await signInWithGoogle();
               if (result) {
                    const user = result.user;
                    console.log("User: ", user)
               }
          } catch (error) {
               console.log("Error: ", error)
          }
     };

     const handleFacebookSignIn = async () => {
          try {
               const result = await signInWithFacebook();
               if (result) {
                    const user = result.user;
                    console.log("User: ", user)
               }
          } catch (error) {
               console.log("Error: ", error)
          }
     };

     return (
          <div className="flex gap-4 justify-center">
               <button onClick={handleGoogleSignIn} className="flex items-center justify-center gap-2 border border-[#E0E2E9] rounded-[8px] px-[12px] py-[14px] hover:bg-gray-50 cursor-pointer !rounded-button whitespace-nowrap w-[140px]">
                    <img src={googleIcon} alt="Google" className="w-[20px] h-[20px]" />
                    <span className='text-[14px] leading-[18px] text-[#171725] font-semibold'>Google</span>
               </button>
               <button onClick={handleFacebookSignIn} className="flex items-center justify-center gap-2 border border-[#E0E2E9] rounded-[8px] px-[12px] py-[14px] hover:bg-gray-50 cursor-pointer !rounded-button whitespace-nowrap w-[140px]">
                    <img src={facebookIcon} alt="Facebook" className="w-[20px] h-[20px]" />
                    <span className='text-[14px] leading-[18px] text-[#171725] font-semibold'>Facebook</span>
               </button>
          </div>

     )
}

export default SocialLogin;