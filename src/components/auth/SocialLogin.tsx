import { signInWithGoogle, signInWithFacebook } from "../../utils/firebaseConfig";
import googleIcon from '../../assets/google-icon.svg';
import facebookIcon from '../../assets/facebook-icon.svg';
import { useSocialLoginMutation } from "../../store/features/auth/authApi";
import { encryptData, LoginFormInputs } from "../../utils/ecryptData";

const SocialLogin = () => {
     const [socialLogin] = useSocialLoginMutation();

     const handleGoogleSignIn = async () => {
          try {
               const result = await signInWithGoogle();
               if (result) {
                    const user = result.user;
                    const email = user.email ?? '';
                    const displayName = user.displayName?.replace(/\s+/g, '');
                    const uid = user.uid.substring(0, 4);
                    const username = `${displayName}${uid}`.toLowerCase();

                    const userData: LoginFormInputs = {
                         email: email,
                         username: username,
                    }

                    const encryptedUserData = encryptData(userData);

                    const response = await socialLogin(encryptedUserData);
                    console.log("Response: ", response);
                    console.log("User: ", user);
               }
          } catch (error) {
               console.log("Error: ", error);
          }
     };

     const handleFacebookSignIn = async () => {
          try {
               const result = await signInWithFacebook();
               if (result) {
                    const user = result.user;
                    const email = user.email ?? '';
                    const displayName = user.displayName?.replace(/\s+/g, '');
                    const uid = user.uid.substring(0, 4);
                    const username = `${displayName}${uid}`.toLowerCase();

                    const userData: LoginFormInputs = {
                         email: email,
                         username: username,
                    }

                    const encryptedUserData = encryptData(userData);

                    const response = await socialLogin(encryptedUserData);
                    console.log("Response: ", response);
                    console.log("User: ", user);
               }
          } catch (error) {
               console.log("Error: ", error)
          }
     };

     return (
          <>
               <div className="flex items-center my-[25px] w-full max-w-[290px] mx-auto">
                    <div className="flex-1 border-t border-[#1C1C1C33]"></div>
                    <span className="px-4 text-[#05073C] text-[14px] leading-[18px]">OR Login With</span>
                    <div className="flex-1 border-t border-[#1C1C1C33]"></div>
               </div>

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
          </>

     )
}

export default SocialLogin;