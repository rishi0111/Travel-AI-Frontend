import airplane from "../../assets/plane-icon.svg";
import Logo from "../../assets/site-logo.svg";
import video from "../../assets/videos/change-pass-video.mp4";
import LockIcon from "../../assets/lock-icon.svg";
// import PasswordModal from "../../components/auth/PasswordModal";
import AuthButton from "../../components/auth/AuthButton";
import { useForm } from 'react-hook-form';
import { useSetNewPasswordMutation } from "../../store/features/auth/authApi";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface ChangePasswordInputs {
  newPassword: string;
  confirmPassword: string;
}

const ConfirmPassword = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<ChangePasswordInputs>();
  const [setNewPassword, { isLoading }] = useSetNewPasswordMutation();
  const navigate = useNavigate();


  const onSubmit = async (data: ChangePasswordInputs) => {
    console.log('Password Change Data:', data);
    try {
      const response = await setNewPassword(data);
      console.log("Response: ", response)
      if (response.error) {
        // @ts-expect-error error
        toast.error(response.error.data?.msg || "An unexpected error occurred");
        return;
      } else {
        toast.success(response?.data?.msg || "Password changed successfully");
        navigate("/login");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const newPassword = watch("newPassword");

  return (
    <div className="flex md:h-screen h-auto w-full">
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
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute bg-[#00000021] w-full h-full top-0 left-0 z-[1]"></div>
        <div className="absolute z-[2] left-[50%] translate-x-[-50%] text-center w-full top-[45px] max-w-[500px] px-[10px]">
          <img src={Logo} alt="Logo" className="mx-auto" />
          <p className="text-[16px] leading-[24px] text-[#FFFFFF] font-normal mt-[10px]">
            Access everything you need for a perfect trip—easy bookings,
            exclusive deals, and seamless management, all in one place!
          </p>
        </div>
      </div>

      {/* Right side with login form */}
      <div className="h-screen overflow-y-auto w-full md:w-1/2 bg-white flex flex-col justify-center items-center px-[20px] pt-[80px] py-[30px] relative">
        <div className="w-full max-w-[490px] py-[30px] mx-auto">
          <div className="absolute right-0 sm:w-[224px] w-[150px] mt-[-50px] ms-auto">
            <img src={airplane} alt="Airplane" className="w-full h-full" />
          </div>
          <div className="text-center mb-[35px]">
            <h1 className="lg:text-[55px] sm:text-[40px] text-[30px] font-bold sm:leading-[48px] md:leading-[40px] leading-[30px] text-[#0D3FC6] mb-[12px]">
              Change Password
            </h1>
            <p className="text-[#00000080] text-[16px]">
              Create a new password to secure your account
            </p>
          </div>
          <div className="w-full max-w-[460px] mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>

              <div className="relative mb-[24px]">
                <label className="block text-[10px] font-bold text-[#0D9BC6] mb-1 absolute top-[-7px] left-[20px] bg-white px-[7px] pe-[15px] z-10">
                  New Password
                </label>
                <div className="relative">
                  <img
                    src={LockIcon}
                    alt="user"
                    className="w-[30px] h-[25px] absolute sm:left-[30px] left-[15px] top-1/2 transform -translate-y-1/2"
                  />
                  <input
                    {...register("newPassword", {
                      required: "New password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters"
                      }
                    })}
                    type="password"
                    className="w-full py-[17px] px-[18px] sm:ps-[70px] ps-[50px] text-[14px] font-semibold text-[#000000] leading-[18px] border border-[#0D9BC6] focus:outline-none placeholder:text-[#00000080] rounded-[8px]"
                    placeholder="Enter your new password"
                  />
                </div>
                {errors.newPassword && (
                  <span className="text-red-500 text-sm mt-1">{errors.newPassword.message}</span>
                )}
              </div>

              <div className="relative mb-[24px]">
                <label className="block text-[10px] font-bold text-[#0D9BC6] mb-1 absolute top-[-7px] left-[20px] bg-white px-[7px] pe-[15px] z-10">
                  Confirm New Password
                </label>
                <div className="relative">
                  <img
                    src={LockIcon}
                    alt="user"
                    className="w-[30px] h-[25px] absolute sm:left-[30px] left-[15px] top-1/2 transform -translate-y-1/2"
                  />
                  <input
                    {...register("confirmPassword", {
                      required: "Please confirm your new password",
                      validate: value =>
                        value === newPassword || "Passwords do not match"
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

              <AuthButton isLoading={isLoading}>CHANGE YOUR PASSWORD</AuthButton>
            </form>
          </div>
        </div>
      </div>

      {/* <PasswordModal /> */}
    </div>
  );
};

export default ConfirmPassword;
