import { useState } from "react";
import AiAssistantIcon from "../../../assets/ai-assistant-icon.svg";

const PaymentDetails = () => {
     const [selectedPayment, setSelectedPayment] = useState<string>("credit");
     const [cardNumber, setCardNumber] = useState<string>("");
     const [cardName, setCardName] = useState<string>("");
     const [expiryDate, setExpiryDate] = useState<string>("");
     const [cvv, setCvv] = useState<string>("");

     const handlePaymentChange = (method: string) => {
          setSelectedPayment(method);
     }

     return (
          <div className="max-w-[740px] mb-[30px]">
               <div className="flex items-start gap-[8px]">
                    <div className="w-[40px] h-[40px] rounded-full bg-[#E7ECF9] flex items-center justify-center flex-shrink-0">
                         <img src={AiAssistantIcon} alt="AI Assistant" className="" />
                    </div>
                    <div className="">
                         <p className="border border-[#E5E7EB] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] bg-[#F4F4F6] rounded-[20px] rounded-es-none px-[16px] py-[15px] text-[14px] leading-[20px] text-[#1F2937]">
                              Perfect! Now let’s move on to the payment screen to complete your booking.
                         </p>
                         <p className="text-xs text-gray-500 mt-2">05:10 AM</p>
                    </div>
               </div>
               <div className="mt-[16px] ms-[45px] max-w-[580px] bg-[#ffffff] rounded-[24px] py-[20px] px-[18px] border border-[#E5E7EB]">
                    <div className="mb-[20px]">
                         <h3 className="text-[20px] leading-[24px] font-semibold text-[#05073C]">Payment</h3>
                         <span className="text-[14px] text-[#05073C]">Total Amount: $1,918</span>
                    </div>
                    <p className="mb-[28px] bg-[#E7ECF9] p-[7px] rounded-[5px] text-[14px] text-[#05073C]">Please select your preferred payment method to complete your booking.</p>
                    <div className="">
                         <h3 className="mb-[12px] text-[20px] leading-[24px] font-semibold text-[#05073C]">Payment Method</h3>
                         {/* Credit/Debit Card */}
                         <div
                              className={`border rounded-lg px-[10px] sm:px-[28px] py-[10px] sm:py-[18px] mb-[15px] cursor-pointer ${selectedPayment === "credit" ? "border-[#0D3FC6] bg-[#E7ECF9]" : "border-[#D5D5D8] bg-[#FFFFFF]"}`}
                              onClick={() => handlePaymentChange("credit")}
                         >
                              <div className="flex items-center gap-[8px] sm:gap-[18px]">
                                   <div
                                        className={`w-[24px] h-[24px] rounded-full border flex items-center justify-center ${selectedPayment === "credit" ? "border-[#0D3FC6]" : "border-[#D5D5D8] bg-[#FFFFFF]"}`}
                                   >
                                        {selectedPayment === "credit" && (
                                             <div className="w-[18px] h-[18px] bg-[#0D3FC6] rounded-full"></div>
                                        )}
                                   </div>
                                   <div className="flex-grow">
                                        <p className="text-[14px] sm:text-[16px] font-medium text-[#05073C]">Credit/Debit Card</p>
                                        <p className="text-[12px] sm:text-[14px] text-[#636A7E]">
                                             Visa, Mastercard, Amex
                                        </p>
                                   </div>
                              </div>
                         </div>

                         {/* Mobile Financial Services */}
                         <div
                              className={`border rounded-lg px-[10px] sm:px-[28px] py-[10px] sm:py-[18px] mb-[15px] cursor-pointer ${selectedPayment === "mobile" ? "border-[#0D3FC6] bg-[#E7ECF9]" : "border-[#D5D5D8] bg-[#FFFFFF]"}`}
                              onClick={() => handlePaymentChange("mobile")}
                         >
                              <div className="flex items-center gap-[8px] sm:gap-[18px]">
                                   <div
                                        className={`w-[24px] h-[24px] rounded-full border flex items-center justify-center ${selectedPayment === "mobile" ? "border-[#0D3FC6]" : "border-[#D5D5D8] bg-[#FFFFFF]"}`}
                                   >
                                        {selectedPayment === "mobile" && (
                                             <div className="w-[18px] h-[18px] bg-[#0D3FC6] rounded-full"></div>
                                        )}
                                   </div>
                                   <div className="flex-grow">
                                        <p className="text-[14px] sm:text-[16px] font-medium text-[#05073C]">Mobile Financial Services</p>
                                        <p className="text-[12px] sm:text-[14px] text-[#636A7E]">
                                             UPay, Nagad, Rocket
                                        </p>
                                   </div>
                              </div>
                         </div>

                         {/* Other Payment Methods */}
                         <div
                              className={`border rounded-lg px-[10px] sm:px-[28px] py-[10px] sm:py-[18px] mb-[15px] cursor-pointer ${selectedPayment === "other" ? "border-[#0D3FC6] bg-[#E7ECF9]" : "border-[#D5D5D8] bg-[#FFFFFF]"}`}
                              onClick={() => handlePaymentChange("other")}
                         >
                              <div className="flex items-center gap-[8px] sm:gap-[18px]">
                                   <div
                                        className={`w-[24px] h-[24px] rounded-full border flex items-center justify-center ${selectedPayment === "other" ? "border-[#0D3FC6]" : "border-[#D5D5D8] bg-[#FFFFFF]"}`}
                                   >
                                        {selectedPayment === "other" && (
                                             <div className="w-[18px] h-[18px] bg-[#0D3FC6] rounded-full"></div>
                                        )}
                                   </div>
                                   <div className="flex-grow">
                                        <p className="text-[14px] sm:text-[16px] font-medium text-[#05073C]">Other Payment Methods</p>
                                        <p className="text-[12px] sm:text-[14px] text-[#636A7E]">
                                             PayPal, Bank Transfer
                                        </p>
                                   </div>
                              </div>
                         </div>
                    </div>

                    {/* Payment Details */}
                    {selectedPayment === "credit" && (
                         <div className="space-y-4">
                              <div>
                                   <input
                                        type="text"
                                        placeholder="Card Number"
                                        className="font-semibold text-[14px] text-[#05073C] w-full py-[8px] px-[16px] border border-[#D5D5D8] rounded-[4px] focus:outline-none"
                                        value={cardNumber}
                                        onChange={(e) => setCardNumber(e.target.value)}
                                   />
                              </div>
                              <div>
                                   <input
                                        type="text"
                                        placeholder="Cardholder Name"
                                        className="font-semibold text-[14px] text-[#05073C] w-full py-[8px] px-[16px] border border-[#D5D5D8] rounded-[4px] focus:outline-none"
                                        value={cardName}
                                        onChange={(e) => setCardName(e.target.value)}
                                   />
                              </div>
                              <div className="flex space-x-4">
                                   <input
                                        type="text"
                                        placeholder="MM/YY"
                                        className="font-semibold text-[14px] text-[#05073C] w-1/2 py-[8px] px-[16px] border border-[#D5D5D8] rounded-[4px] focus:outline-none"
                                        value={expiryDate}
                                        onChange={(e) => setExpiryDate(e.target.value)}
                                   />
                                   <input
                                        type="text"
                                        placeholder="CVV"
                                        className="font-semibold text-[14px] text-[#05073C] w-1/2 py-[8px] px-[16px] border border-[#D5D5D8] rounded-[4px] focus:outline-none"
                                        value={cvv}
                                        onChange={(e) => setCvv(e.target.value)}
                                   />
                              </div>
                         </div>
                    )}

                    {selectedPayment === "mobile" && (
                         <div className="space-y-4">
                              <input
                                   type="text"
                                   placeholder="Mobile Number"
                                   className="font-semibold text-[14px] text-[#05073C] w-full py-[8px] px-[16px] border border-[#D5D5D8] rounded-[4px] focus:outline-none"
                              />
                              <select className="font-semibold text-[14px] text-[#05073C] w-full py-[8px] px-[16px] border border-[#D5D5D8] rounded-[4px] focus:outline-none">
                                   <option value="">Select Service Provider</option>
                                   <option value="upay">UPay</option>
                                   <option value="nagad">Nagad</option>
                                   <option value="rocket">Rocket</option>
                              </select>
                         </div>
                    )}

                    {selectedPayment === "other" && (
                         <div className="space-y-4">
                              <select className="font-semibold text-[14px] text-[#05073C] w-full py-[8px] px-[16px] border border-[#D5D5D8] rounded-[4px] focus:outline-none">
                                   <option value="">Select Payment Method</option>
                                   <option value="paypal">PayPal</option>
                                   <option value="bank">Bank Transfer</option>
                              </select>
                              {/* Additional fields would appear based on selection */}
                         </div>
                    )}
                    <div className="text-center mt-[32px]">
                         <button className="w-full bg-[#0D3FC6] text-white py-[16px] rounded-[8px] hover:bg-[#1A339B] transition-colors cursor-pointer text-[14px] leading-[18px] uppercase font-semibold">Pay $ 1,918</button>
                    </div>
               </div>
          </div>
     )
}

export default PaymentDetails;
