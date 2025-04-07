import { useForm } from 'react-hook-form';
import userIcon from '../../assets/user-icon.svg';
import airplane from '../../assets/plane-icon.svg';
import Logo from '../../assets/site-logo.svg';
import LockIcon from '../../assets/lock-icon.svg';
import video from '../../assets/videos/login-video.mp4';
import { Link } from 'react-router-dom';
import { encryptData } from '../../utils/ecryptData';
import SocialLogin from '../../components/auth/SocialLogin';
import AuthButton from './AuthButton';
import InputField from '../../components/common/InputField';
import { useLoginUserMutation } from '../../store/features/auth/authApi';

interface LoginFormInputs {
  email: string;
  password: string;
}

const Login = () => {
  const [loginUser] = useLoginUserMutation();
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
      const response = await loginUser(encryptedData);
      console.log("Response: ", response)
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
            <InputField<LoginFormInputs>
              label="Email"
              name="email"
              type="email"
              placeholder="Enter email"
              icon={userIcon}
              register={register}
              error={errors.email}
              validation={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              }}
            />

            <InputField<LoginFormInputs>
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              icon={LockIcon}
              register={register}
              error={errors.password}
              validation={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters"
                }
              }}
            />

            <div className="flex justify-end my-[23px]">
              <Link to="/forgot-password" className="text-[14px] text-[#00000080] hover:text-[#0D3FC6]">
                Forgot your password?
              </Link>
            </div>

            <AuthButton>LOGIN</AuthButton>
          </form>

          <SocialLogin />

          <div className="text-center text-[#05073C] font-normal mt-[30px] text-[14px] leading-[18px]">
            Don't have an account? {" "}
            <Link to="/register" className="text-[#0D3FC6] font-semibold">
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;