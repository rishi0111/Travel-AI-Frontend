import Sidebar from "../../components/chat/Sidebar";
const ContactUs = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='md:ms-[275px] h-screen overflow-y-auto flex-1'>
        <div className="px-[10px] sm:px-[20px]">
            <div className='bg-[#E5E7EB] max-w-[830px] mx-auto mt-[60px] my-[40px] p-[20px] lg:p-[30px] border border-[#E5E7EB] rounded-[24px]'>
                <div className="mb-[20px] sm:mb-[30px] text-center">
                    <h3 className="text-[24px] sm:text-[34px] leading-[22px] sm:leading-[32px] font-semibold text-[#05073C]">Get in Touch</h3>
                    <p className="text-[12px] sm:text-[16px] sm:leading-[28px] text-[#05073C] mt-[5px]">
                    Fill out the form below and our team will get back to you shortly.
                    </p>
                </div>
                <div>
                    <form>
                        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-[10px]">
                            <div className="mb-[10px] sm:mb-[30px]">
                                <label className="text-[12px] sm:text-[14px] leading-[22px] font-medium text-[#636C76] mb-[5px] block">First Name</label>
                                <input type="text" className="bg-white w-full border border-[#D5D5D8] rounded-[8px] py-[13px] px-[20px] text-[12px] sm:text-[14px] leading-[18px] text-[#05073C] focus:outline-none focus:border-[#05073C]" placeholder="Enter your first name" />
                            </div>
                            <div className="mb-[10px] sm:mb-[30px]">
                                <label className="text-[12px] sm:text-[14px] leading-[22px] font-medium text-[#636C76] mb-[5px] block">Last Name</label>
                                <input type="text" className="bg-white w-full border border-[#D5D5D8] rounded-[8px] py-[13px] px-[20px] text-[12px] sm:text-[14px] leading-[18px] text-[#05073C] focus:outline-none focus:border-[#05073C]" placeholder="Enter your last name" />
                            </div>
                    </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-[10px]">
                            <div className="mb-[10px] sm:mb-[30px]">
                                <label className="text-[12px] sm:text-[14px] leading-[22px] font-medium text-[#636C76] mb-[5px] block">Email</label>
                                <input type="text" className="bg-white w-full border border-[#D5D5D8] rounded-[8px] py-[13px] px-[20px] text-[12px] sm:text-[14px] leading-[18px] text-[#05073C] focus:outline-none focus:border-[#05073C]" placeholder="Enter your email" />
                            </div>
                            <div className="mb-[10px] sm:mb-[30px]">
                                <label className="text-[12px] sm:text-[14px] leading-[22px] font-medium text-[#636C76] mb-[5px] block">Phone Number</label>
                                <input type="text" className="bg-white w-full border border-[#D5D5D8] rounded-[8px] py-[13px] px-[20px] text-[12px] sm:text-[14px] leading-[18px] text-[#05073C] focus:outline-none focus:border-[#05073C]" placeholder="Enter your phone number" />
                            </div>
                    </div>
                    <div className="mb-[10px] sm:mb-[30px]">
                            <label className="text-[12px] sm:text-[14px] leading-[22px] font-medium text-[#636C76] mb-[5px] block"> Subject</label>
                            <input type="text" className="bg-white w-full border border-[#D5D5D8] rounded-[8px] py-[13px] px-[20px] text-[12px] sm:text-[14px] leading-[18px] text-[#05073C] focus:outline-none focus:border-[#05073C]" placeholder="Type your subject" />
                        </div>
                    <div className="mb-[10px] sm:mb-[30px]">
                            <label className="text-[12px] sm:text-[14px] leading-[22px] font-medium text-[#636C76] mb-[5px] block"> Write Message</label>
                            <textarea className="bg-white w-full border border-[#D5D5D8] rounded-[8px] py-[13px] px-[20px] text-[12px] sm:text-[14px] leading-[18px] text-[#05073C] focus:outline-none focus:border-[#05073C] h-[130px]" placeholder="Enter your message" />
                        </div>
                        <button className="bg-[#0D3FC6] text-white py-[13px] px-[20px] text-[12px] sm:text-[14px] leading-[18px] rounded-[8px] w-max cursor-pointer">Send Message</button>
                    </form>
                </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default ContactUs
