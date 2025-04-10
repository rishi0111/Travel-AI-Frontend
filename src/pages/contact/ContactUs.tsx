import { useForm } from 'react-hook-form';
import { useContactUsMutation } from '../../store/features/contact-us/contactUsApi';
import { toast } from 'react-hot-toast';

interface ContactUsFormInputs {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

const ContactUs = () => {
    const [contactUs] = useContactUsMutation();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data: ContactUsFormInputs) => {
        try {
            const response = await contactUs(data);
            if (response.error) {
                toast.error(response.error.data?.msg || "An unexpected error occurred");
                return
            }

            toast.success(response.data?.msg || "Message sent successfully");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='flex'>
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
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-[10px]">
                                    <div className="mb-[10px] sm:mb-[30px]">
                                        <label className="text-[12px] sm:text-[14px] leading-[22px] font-medium text-[#636C76] mb-[5px] block">First Name</label>
                                        <input type="text" {...register('first_name', { required: true })} className="bg-white w-full border border-[#D5D5D8] rounded-[8px] py-[13px] px-[20px] text-[12px] sm:text-[14px] leading-[18px] text-[#05073C] focus:outline-none focus:border-[#05073C]" placeholder="Enter your first name" />
                                        {errors.firstName && <span>This field is required</span>}
                                    </div>
                                    <div className="mb-[10px] sm:mb-[30px]">
                                        <label className="text-[12px] sm:text-[14px] leading-[22px] font-medium text-[#636C76] mb-[5px] block">Last Name</label>
                                        <input type="text" {...register('last_name', { required: true })} className="bg-white w-full border border-[#D5D5D8] rounded-[8px] py-[13px] px-[20px] text-[12px] sm:text-[14px] leading-[18px] text-[#05073C] focus:outline-none focus:border-[#05073C]" placeholder="Enter your last name" />
                                        {errors.lastName && <span>This field is required</span>}
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-[10px]">
                                    <div className="mb-[10px] sm:mb-[30px]">
                                        <label className="text-[12px] sm:text-[14px] leading-[22px] font-medium text-[#636C76] mb-[5px] block">Email</label>
                                        <input type="text" {...register('email', { required: true })} className="bg-white w-full border border-[#D5D5D8] rounded-[8px] py-[13px] px-[20px] text-[12px] sm:text-[14px] leading-[18px] text-[#05073C] focus:outline-none focus:border-[#05073C]" placeholder="Enter your email" />
                                        {errors.email && <span>This field is required</span>}
                                    </div>
                                    <div className="mb-[10px] sm:mb-[30px]">
                                        <label className="text-[12px] sm:text-[14px] leading-[22px] font-medium text-[#636C76] mb-[5px] block">Phone Number</label>
                                        <input type="text" {...register('phone', { required: true })} className="bg-white w-full border border-[#D5D5D8] rounded-[8px] py-[13px] px-[20px] text-[12px] sm:text-[14px] leading-[18px] text-[#05073C] focus:outline-none focus:border-[#05073C]" placeholder="Enter your phone number" />
                                        {errors.phoneNumber && <span>This field is required</span>}
                                    </div>
                                </div>
                                <div className="mb-[10px] sm:mb-[30px]">
                                    <label className="text-[12px] sm:text-[14px] leading-[22px] font-medium text-[#636C76] mb-[5px] block"> Subject</label>
                                    <input type="text" {...register('subject', { required: true })} className="bg-white w-full border border-[#D5D5D8] rounded-[8px] py-[13px] px-[20px] text-[12px] sm:text-[14px] leading-[18px] text-[#05073C] focus:outline-none focus:border-[#05073C]" placeholder="Type your subject" />
                                    {errors.subject && <span>This field is required</span>}
                                </div>
                                <div className="mb-[10px] sm:mb-[30px]">
                                    <label className="text-[12px] sm:text-[14px] leading-[22px] font-medium text-[#636C76] mb-[5px] block"> Write Message</label>
                                    <textarea {...register('message', { required: true })} className="bg-white w-full border border-[#D5D5D8] rounded-[8px] py-[13px] px-[20px] text-[12px] sm:text-[14px] leading-[18px] text-[#05073C] focus:outline-none focus:border-[#05073C] h-[130px]" placeholder="Enter your message" />
                                    {errors.message && <span>This field is required</span>}
                                </div>
                                <button type="submit" className="bg-[#0D3FC6] text-white py-[13px] px-[20px] text-[12px] sm:text-[14px] leading-[18px] rounded-[8px] w-max cursor-pointer">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
