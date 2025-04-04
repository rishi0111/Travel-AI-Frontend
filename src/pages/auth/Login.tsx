import { useForm } from 'react-hook-form';
import { signInWithGoogle, signInWithFacebook } from '../../utils/firebaseConfig';
import userIcon from '../../assets/user-icon.svg';
import googleIcon from '../../assets/google-icon.svg';
import facebookIcon from '../../assets/facebook-icon.svg';
import airplane from '../../assets/plane-icon.svg';
import Logo from '../../assets/site-logo.svg';
import LockIcon from '../../assets/lock-icon.svg';
import video from '../../assets/videos/login-video.mp4';
import { Link } from 'react-router-dom';
import { encryptData } from '../../utils/ecryptData';

interface LoginFormInputs {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const encryptedData = encryptData(data);
      console.log("Encrypted Data:", encryptedData);
      console.log("Result: ", data)
    } catch (error) {
      console.log("Error: ", error)
    }
  };

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
    <div className="flex flex-col md:flex-row md:h-screen w-full">
      {/* Left side with video background */}
      <div className="relative w-full md:w-1/2 min-h-[100vh] hidden md:flex flex-col items-center">
        <div className="w-full h-full">
          <video
            className="object-cover md:h-[100vh] w-full object-center"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src={video}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='absolute left-[50%] translate-x-[-50%] text-center w-full top-[45px] max-w-[500px] px-[10px]'>
          <img src={Logo} alt="Logo" className='mx-auto' />
          <p className='text-[16px] leading-[24px] text-[#FFFFFF] font-normal mt-[10px]'>Your next adventure is calling!<br />
            Log in and uncover the best travel deals in seconds. </p>
        </div>
      </div>

      {/* Right side with login form */}
      <div className="md:h-[100vh] overflow-y-auto w-full md:w-1/2 bg-white flex flex-col justify-center items-center px-[20px] pt-[80px] py-[30px] relative">
        <div className="w-full max-w-[460px] py-[30px]">
          <div className='absolute right-0 sm:w-[224px] w-[150px] mt-[-50px] ms-auto'>
            <img src={airplane} alt="Airplane" className='w-full h-full' />
          </div>
          <div className='text-center mb-[35px]'>
            <h1 className="lg:text-[55px] sm:text-[40px] text-[30px] font-bold sm:leading-[48px] md:leading-[40px] leading-[30px] text-[#0D3FC6] mb-[12px]">Welcome</h1>
            <p className="text-[#00000080] text-[16px]">Login into your account</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-[24px] relative">
              <label className="block text-[10px] font-bold text-[#0D9BC6] mb-1 absolute top-[-7px] left-[20px] bg-white px-[7px] pe-[15px] z-10">
                Email
              </label>
              <div className="relative">
                <img src={userIcon} alt="user" className='w-[30px] h-[18px] absolute sm:left-[30px] left-[15px] top-1/2 transform -translate-y-1/2' />
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  type="email"
                  className="w-full py-[17px] px-[18px] sm:ps-[70px] ps-[50px] text-[14px] font-semibold text-[#000000] leading-[18px] border border-[#0D9BC6] focus:outline-none placeholder:text-[#00000080] rounded-[8px]"
                  placeholder="Enter email"
                />
              </div>
              {errors.email && (
                <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>
              )}
            </div>

            <div className="relative">
              <label className="block text-[10px] font-bold text-[#0D9BC6] mb-1 absolute top-[-7px] left-[20px] bg-white px-[7px] pe-[15px] z-10">
                Password
              </label>
              <div className="relative">
                <img src={LockIcon} alt="lock" className='w-[30px] h-[25px] absolute sm:left-[30px] left-[15px] top-1/2 transform -translate-y-1/2' />
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters"
                    }
                  })}
                  type="password"
                  className="w-full py-[17px] px-[18px] sm:ps-[70px] ps-[50px] text-[14px] font-semibold text-[#000000] leading-[18px] border border-[#0D9BC6] focus:outline-none placeholder:text-[#00000080] rounded-[8px]"
                  placeholder="Enter your password"
                />
              </div>
              {errors.password && (
                <span className="text-red-500 text-sm mt-1">{errors.password.message}</span>
              )}
            </div>

            <div className="flex justify-end my-[23px]">
              <a href="/forgot-password" className="text-[14px] text-[#00000080] hover:text-[#0D3FC6]">
                Forgot your password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#0D3FC6] to-[#3793FF] text-white py-[16px] rounded-[8px] font-medium hover:bg-blue-700 transition-colors cursor-pointer !rounded-button whitespace-nowrap text-[14px] leading-[18px] uppercase"
            >
              LOGIN
            </button>
          </form>

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

          <div className="text-center text-[#05073C] font-normal mt-[30px] text-[14px] leading-[18px]">
            Don't have an account? {" "}
            <Link to="/register" className="text-[#0D3FC6] font-semibold">
              Register Now
            </Link>
          </div>
        </div >
      </div >
    </div >
  );
};

export default Login;