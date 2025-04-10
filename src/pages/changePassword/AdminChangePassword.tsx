import LockIcon from '../../assets/lock-icon-pass.svg';
import EyeIcon from '../../assets/eye-icon.svg';

const AdminChangePassword = () => {
  return (
    <div className='flex'>
            <div className='md:ms-[275px] h-screen overflow-y-auto flex-1'>
                <div className="px-[10px] sm:px-[20px]">
                    <div className='bg-[#E5E7EB] max-w-[635px] mx-auto mt-[60px] my-[40px] p-[20px] lg:p-[30px] border border-[#E5E7EB] rounded-[24px]'>
                        <div className="mb-[20px] sm:mb-[30px] text-center">
                            <h3 className="text-[24px] sm:text-[34px] leading-[22px] sm:leading-[32px] font-semibold text-[#05073C]">Change Password</h3>
                            <p className="text-[12px] sm:text-[16px] sm:leading-[28px] text-[#05073C] mt-[5px]">
                              Enter your current and new password to make the change.
                            </p>
                        </div>
                        <div>
                            <form>
                                <div className="mb-[10px] sm:mb-[30px]">
                                    <label className="text-[12px] sm:text-[14px] leading-[22px] font-medium text-[#636C76] mb-[5px] block"> Current Password</label>
                                    <div className='relative'>
                                        <img src={LockIcon} alt="Lock" className='absolute top-1/2 left-3 -translate-y-1/2 w-[20px] h-[20px]' />
                                        <input type="password" className="bg-white w-full border border-[#D5D5D8] rounded-[8px] py-[13px] px-[20px] ps-[40px] text-[12px] sm:text-[14px] leading-[18px] text-[#05073C] focus:outline-none focus:border-[#05073C]" placeholder="Enter your current password" />
                                        <img src={EyeIcon} alt="Eye" className='absolute top-1/2 right-3 -translate-y-1/2 w-[20px] h-[20px] cursor-pointer' />
                                    </div>
                                </div>
                                
                                <div className="mb-[10px] sm:mb-[30px]">
                                    <label className="text-[12px] sm:text-[14px] leading-[22px] font-medium text-[#636C76] mb-[5px] block"> New Password</label>
                                    <div className='relative'>
                                        <img src={LockIcon} alt="Lock" className='absolute top-1/2 left-3 -translate-y-1/2 w-[20px] h-[20px]' />
                                        <input type="password" className="bg-white w-full border border-[#D5D5D8] rounded-[8px] py-[13px] px-[20px] ps-[40px] text-[12px] sm:text-[14px] leading-[18px] text-[#05073C] focus:outline-none focus:border-[#05073C]" placeholder="Enter your new password" />
                                        <img src={EyeIcon} alt="Eye" className='absolute top-1/2 right-3 -translate-y-1/2 w-[20px] h-[20px] cursor-pointer' />
                                    </div>
                                </div>
                                <div className="mb-[15px] sm:mb-[30px]">
                                    <label className="text-[12px] sm:text-[14px] leading-[22px] font-medium text-[#636C76] mb-[5px] block"> Confirm New Password</label>
                                    <div className='relative'>
                                        <img src={LockIcon} alt="Lock" className='absolute top-1/2 left-3 -translate-y-1/2 w-[20px] h-[20px]' />
                                        <input type="password" className="bg-white w-full border border-[#D5D5D8] rounded-[8px] py-[13px] px-[20px] ps-[40px] text-[12px] sm:text-[14px] leading-[18px] text-[#05073C] focus:outline-none focus:border-[#05073C]" placeholder="Confirm your new password" />
                                        <img src={EyeIcon} alt="Eye" className='absolute top-1/2 right-3 -translate-y-1/2 w-[20px] h-[20px] cursor-pointer' />
                                    </div>
                                </div>
                                <button className="bg-[#0D3FC6] text-white py-[13px] px-[25px] text-[12px] sm:text-[14px] leading-[18px] rounded-[8px] w-max cursor-pointer">Change Password</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default AdminChangePassword
