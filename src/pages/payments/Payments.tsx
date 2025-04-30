import SelectIcon from "../../assets/arrow-bottom.svg";
import SearchIcon from "../../assets/search-icon.svg";
import { tableHeading, tableData, payments } from "../../utils/dummyData";
import { Link } from 'react-router-dom';

const Payments = () => {
    return (
        <div className="flex">
            <div className="md:ms-[275px] h-screen overflow-y-auto flex-1">
                <div className=" py-[15px] sm:py-[14px] mx-auto sm:px-[30px] px-[10px] border-b border-[#E5E7EB] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
                    <h1 className="text-center lg:text-start text-[20px] sm:text-[24px] leading-[32px] font-bold text-[#05073C] max-w-[1240px] mx-auto">
                        Payments & Billing
                    </h1>
                </div>
                <div className="max-w-[1240px] lg:px-[30px] sm:px-[15px] px-[10px] mx-auto py-[30px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center max-w-[880px] gap-[14px]">
                        {payments.map((payment, index) => (
                            <div key={index} className={`${payment.payment === "Total Spent" ? "bg-[#DCFAED]" : payment.payment === "Pending Payments" ? "bg-[#F3F4F6]" : "bg-[#CFD9F4CC]"} rounded-[10px] p-[14px]`}>
                                <p className='text-sm text-[#05073CE5]'>{payment.payment}</p>
                                <h6 className={`${payment.payment === "Total Spent" ? "text-[#0EAD69]" : payment.payment === "Pending Payments" ? "text-[#0D3FC6]" : "text-[#0D3FC6]"} text-[20px] font-semibold`}>{payment.heading}</h6>
                                <span className='text-sm text-[#49454FCC]'>{payment.status}</span>
                            </div>
                        ))}
                    </div>

                    <div className='flex justify-end items-center gap-[9px] py-[16px]'>
                        <div className="relative max-w-[145px] w-full">
                            <select className='w-full py-[9px] px-[20px] text-[14px] cursor-pointer leading-[20px] font-normal text-[#989EAE] rounded-[8px] border border-[#E5E7EB] appearance-none'>
                                <option value="all" selected>All</option>
                                <option value="pending">Pending</option>
                                <option value="completed">Completed</option>
                                <option value="failed">Failed</option>
                            </select>
                            <img src={SelectIcon} alt="Select" className="absolute right-[18px] top-1/2 transform -translate-y-1/2" />
                        </div>
                        <div className="relative max-w-[250px]">
                            <span className="absolute inset-y-0 left-[13px] flex items-center text-[#9CA3AF]">
                                <img
                                    src={SearchIcon}
                                    alt="Search"
                                    className="w-[18px] h-[18px]"
                                />
                            </span>
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full pl-[40px] pr-[10px] py-[9px] rounded-[8px] text-[14px] font-semibold leading-[20px] placeholder:text-[#6B7280] border border-[#E5E7EB] focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className='border border-[#EBEBEE] rounded-[10px] overflow-hidden'>
                        <div className='overflow-auto w-[calc(100vw-24px)] md:w-[calc(100vw-310px)] lg:w-[calc(100vw-338px)]'>
                            <table className='w-full whitespace-nowrap'>
                                <thead>
                                    <tr className='bg-[#F9FAFB] border-b border-[#E5E7EB]'>
                                        {
                                            tableHeading.map((heading, index) => (
                                                <th key={index} className='text-[#6B7280] text-xs font-semibold px-[20px] py-[12px] text-start'>{heading}</th>
                                            ))
                                        }
                                    </tr>
                                </thead>

                                <tbody>
                                    {tableData.map((data, index) => (
                                        <tr key={index} className='border-b border-[#E5E7EB]'>
                                            <td className='text-[#05073C] text-sm px-[20px] py-[14px]'>{data.date}</td>
                                            <td className='px-[20px] py-[14px]'>
                                                <div>
                                                    <h6 className='text-[#05073C] text-sm font-semibold'>{data.description}</h6>
                                                    <p className='text-[#6B7280] text-xs'>{data.status}</p>
                                                </div>
                                            </td>
                                            <td className='text-[#05073C] text-sm font-semibold px-[20px] py-[14px]'>{data.amount}</td>
                                            <td className='px-[20px] py-[14px]'>
                                                <div className={`${data.status === "Success" ? "bg-[#DCFAED] text-[#0EAD69]" : data.status === "Failed" ? "bg-[#FEE2E2] text-[#991B1B]" : "bg-[#FEF9C3] text-[#854D0E]"} text-sm font-semibold px-[12px] py-[2px] rounded-[70px] inline-block text-center`}>{data.status}</div>
                                            </td>
                                            <td className='px-[20px] py-[14px] text-[#6B7280] text-sm font-semibold'>{data.paymentMethod}</td>
                                            <td>
                                                <Link to='#' className='text-[#0D3FC6] text-sm font-semibold'>{data.action}</Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className='flex justify-between items-center py-[16px] lg:px-[20px] px-[10px] sm:flex-row flex-col gap-[10px]'>
                            <div className='flex items-center gap-[9px] w-full'>
                                <span className='text-[#05073C] text-sm font-semibold'>Page</span>
                                <div className="relative max-w-[70px] w-full">
                                    <select className='w-full py-[9px] px-[15px] text-[14px] cursor-pointer leading-[20px] font-normal text-[#05073C] rounded-[8px] border border-[#E5E7EB] appearance-none'>
                                        <option value="10" selected>10</option>
                                        <option value="20">20</option>
                                        <option value="30">30</option>
                                        <option value="40">50</option>
                                    </select>
                                    <img src={SelectIcon} alt="Select" className="absolute right-[10px] top-1/2 transform -translate-y-1/2" />
                                </div>
                                <span className='text-[#05073C] text-sm font-semibold'>of 10</span>
                            </div>
                            <div className='flex justify-end items-center gap-[5px] w-full'>
                                <button className='text-[#05073C] text-sm font-semibold disabled:opacity-50 px-[4px] cursor-pointer disabled:cursor-not-allowed' disabled>Prev</button>
                                <button className='text-sm font-semibold bg-[#2F80ED] rounded-[8px] px-[12px] py-[7px] text-white w-[32px] h-[32px] flex justify-center items-center cursor-pointer'>1</button>
                                <button className='text-sm font-semibold text-[text-[#05073C]] rounded-[8px] border border-[#F1F1F1] cursor-pointer h-[32px] w-[32px] flex justify-center items-center'>2</button>
                                <button className='text-sm font-semibold text-[text-[#05073C]] rounded-[8px] border border-[#F1F1F1] cursor-pointer h-[32px] w-[32px] flex justify-center items-center'>3</button>
                                <button className='text-sm font-semibold text-[text-[#05073C]] rounded-[8px] cursor-pointer h-[32px] w-[32px] flex justify-center items-center'>...</button>
                                <button className='text-sm font-semibold text-[text-[#05073C]] rounded-[8px] border border-[#F1F1F1] cursor-pointer h-[32px] w-[32px] flex justify-center items-center'>10</button>
                                <button className='text-[#05073C] text-sm font-semibold px-[4px] cursor-pointer'>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payments
