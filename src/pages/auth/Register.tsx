import userIcon from '../../assets/user-icon.svg';
import airplane from '../../assets/plane-icon.svg';
import Logo from '../../assets/site-logo.svg';
import LockIcon from '../../assets/lock-icon.svg';
import video from '../../assets/videos/signup-video.mp4';
import emailIcon from '../../assets/email-icon.svg';
import { useForm } from 'react-hook-form';
import SocialLogin from '../../components/auth/SocialLogin';
import AuthButton from './AuthButton';
import { useRegisterUserMutation } from '../../store/features/auth/authApi';
import { Link } from 'react-router-dom';

interface RegisterFormInputs {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const [registerUser] = useRegisterUserMutation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormInputs>();

  const password = watch("password");

  const onSubmit = async (data: RegisterFormInputs) => {
    try {
      const userData = {
        username: data.username,
        email: data.email,
        password: data.password,
      }
      const response = await registerUser(userData);
      console.log(response);
    } catch (error) {
      console.log("Error: ", error)
    }
  };

  return (
    <div className="flex h-auto md:h-screen w-full">
      {/* Left side with video background */}
      <div className="relative w-full md:w-1/2 min-h-[100vh] hidden md:flex flex-col items-center">
        <div className="w-full h-full">
          <video
            className="object-cover md:h-[100vh] w-full object-bottom"
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
        <div className='absolute bg-[#00000021] w-full h-full top-0 left-0 z-[1]'></div>
        <div className='absolute z-[2] left-[50%] translate-x-[-50%] text-center w-full top-[45px] max-w-[515px] px-[10px]'>
          <img src={Logo} alt="Logo" className='mx-auto' />
          <p className='text-[16px] leading-[24px] text-[#FFFFFF] font-normal mt-[10px]'>Your next adventure start here - Find , Compare & Book in seconds!
            Sign up now and let our Ai find the best travel deals with you. </p>
        </div>
      </div>

      {/* Right side with login form */}
      <div className="h-screen overflow-y-auto w-full md:w-1/2 bg-white flex flex-col justify-center items-center px-[20px] pt-[160px] py-[30px] relative">
        <div className="w-full max-w-[460px] py-[30px]">
          <div className='absolute right-0 sm:w-[224px] w-[150px] mt-[-50px] ms-auto'>
            <img src={airplane} alt="Airplane" className='w-full h-full' />
          </div>
          <div className='text-center mb-[35px]'>
            <h1 className="lg:text-[55px] sm:text-[40px] text-[30px] font-bold sm:leading-[48px] md:leading-[40px] leading-[30px] text-[#0D3FC6] mb-[12px]">Sign UP</h1>
            <p className="text-[#00000080] text-[16px]">Create your account</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-[24px] relative">
              <label className="block text-[10px] font-bold text-[#0D9BC6] mb-1 absolute top-[-7px] left-[20px] bg-white px-[7px] pe-[15px] z-10">
                Username
              </label>
              <div className="relative">
                <img src={userIcon} alt="user" className='w-[30px] h-[18px] absolute sm:left-[30px] left-[15px] top-1/2 transform -translate-y-1/2' />
                <input
                  {...register("username", {
                    required: "Username is required",
                    minLength: {
                      value: 3,
                      message: "Username must be at least 3 characters"
                    }
                  })}
                  type="text"
                  className="w-full py-[17px] px-[18px] sm:ps-[70px] ps-[50px] text-[14px] font-semibold text-[#000000] leading-[18px] border border-[#0D9BC6] focus:outline-none placeholder:text-[#00000080] rounded-[8px]"
                  placeholder="Enter your username"
                />
              </div>
              {errors.username && (
                <span className="text-red-500 text-sm mt-1">{errors.username.message}</span>
              )}
            </div>

            <div className="mb-[24px] relative">
              <label className="block text-[10px] font-bold text-[#0D9BC6] mb-1 absolute top-[-7px] left-[20px] bg-white px-[7px] pe-[15px] z-10">
                Email
              </label>
              <div className="relative">
                <img src={emailIcon} alt="email" className='w-[30px] h-[20px] absolute sm:left-[30px] left-[15px] top-1/2 transform -translate-y-1/2' />
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
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && (
                <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>
              )}
            </div>

            <div className="relative mb-[24px]">
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

            <div className="relative mb-[24px]">
              <label className="block text-[10px] font-bold text-[#0D9BC6] mb-1 absolute top-[-7px] left-[20px] bg-white px-[7px] pe-[15px] z-10">
                Confirm Password
              </label>
              <div className="relative">
                <img src={LockIcon} alt="lock" className='w-[30px] h-[25px] absolute sm:left-[30px] left-[15px] top-1/2 transform -translate-y-1/2' />
                <input
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: value =>
                      value === password || "Passwords do not match"
                  })}
                  type="password"
                  className="w-full py-[17px] px-[18px] sm:ps-[70px] ps-[50px] text-[14px] font-semibold text-[#000000] leading-[18px] border border-[#0D9BC6] focus:outline-none placeholder:text-[#00000080] rounded-[8px]"
                  placeholder="Confirm your password"
                />
              </div>
              {errors.confirmPassword && (
                <span className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</span>
              )}
            </div>

            <AuthButton>SIGN UP</AuthButton>
          </form>

          <SocialLogin />

          <div className="text-center text-[#05073C] font-normal mt-[30px] text-[14px] leading-[18px]">
            Already have an account? {" "}
            <Link to="/" className="text-[#0D3FC6] font-semibold">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
