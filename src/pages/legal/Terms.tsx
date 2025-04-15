import Sidebar from "../../components/dashboard/sidebar/Sidebar"

const Terms = () => {
  return (
    <div className="flex">
        <Sidebar/>
        <div className="flex-1 md:ms-[275px]">
            <div className=" py-[15px] sm:py-[14px] mx-auto sm:px-[30px] px-[10px] border-b border-[#E5E7EB] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
                <h1 className="text-center lg:text-start text-[20px] sm:text-[24px] leading-[32px] font-bold text-[#05073C] max-w-[1240px] mx-auto">
                   Terms & Conditions
                </h1>
            </div>
            <div className=" max-w-[1240px] sm:px-[30px] px-[10px] mx-auto py-[20px] pb-[40px]">
                <span className="font-semibold text-sm">Last updated: April 14, 2025</span>
                <p className="text-sm text-[#6B7280] mt-2">Welcome to TripBooking.AI. Please read these Terms and Conditions ("Terms") carefully before using our website or mobile application (collectively referred to as the "Platform"). By accessing or using our Platform, you agree to be bound by these Terms.
                </p>
                <div className="mt-[24px]">
                    <h3 className="font-semibold text-[20px] mb-2">1. Platform Overview</h3>
                    <p className="ms-[20px] text-[16px] text-[#636C76] leading-[24px]">TripBooking.AI is an AI-powered travel assistant that helps users discover, compare, and book travel packages. We do not create, own, or operate any travel packages or services. All listings on the Platform are provided by independent third-party travel agencies ("Travel Partners").
                    </p>
                </div>
                <div className="mt-[24px]">
                    <h3 className="font-semibold text-[20px] mb-2">2. Disclaimer and Limitation of Liability</h3>
                    <ul className="list-disc ps-[24px]">
                        <li className="text-[16px] text-[#636C76] leading-[24px] mb-2">TripBooking.AI acts solely as a facilitator between users and Travel Partners. We do not assume responsibility for the quality, accuracy, pricing, availability, or delivery of the travel packages or services.
                        </li>
                        <li className="text-[16px] text-[#636C76] leading-[24px] mb-2">All travel services are provided solely by the Travel Partner. TripBooking.AI is not liable for any actions, errors, or omissions of Travel Partners.

                        </li>
                        <li className="text-[16px] text-[#636C76] leading-[24px] mb-2">We do not guarantee the accuracy or completeness of any listing, nor the availability of any travel deal at the time of booking.
                        </li>
                        <li className="text-[16px] text-[#636C76] leading-[24px] mb-2">Travel Partners may change, update, or cancel their travel packages and package details at any time without notice. TripBooking.AI bears no responsibility for such modifications.
                        </li>
                        <li className="text-[16px] text-[#636C76] leading-[24px] mb-2">TripBooking.AI shall not be held responsible for any undelivered services, changes in itinerary, or deviations from the listed details. All such matters are the sole responsibility of the Travel Partner.
                        </li>
                        <li className="text-[16px] text-[#636C76] leading-[24px] mb-2">Under no circumstances shall TripBooking.AI or its affiliates be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the Platform or reliance on information there in.
                        </li>
                    </ul>
                </div>
                <div className="mt-[24px]">
                    <h3 className="font-semibold text-[20px] mb-2">3. User Responsibilities
                    </h3>
                    <ul className="list-disc ps-[24px]">
                        <li className="text-[16px] text-[#636C76] leading-[24px] mb-2">Users are responsible for reviewing and verifying all travel package details directly with the Travel Partner before making any booking decisions.
                        </li>
                        <li className="text-[16px] text-[#636C76] leading-[24px] mb-2">Users agree not to hold TripBooking.AI liable for any disputes, delays, cancellations, or discrepancies related to services provided by Travel Partners.
                        </li>
                        <li className="text-[16px] text-[#636C76] leading-[24px] mb-2">Users should perform their own due diligence when selecting and booking a package.</li>
                        <li className="text-[16px] text-[#636C76] leading-[24px] mb-2">It is the user’s responsibility to confirm and understand all package inclusions, exclusions, and terms prior to travel. TripBooking.AI is not responsible for any miscommunication or non-fulfillment of services promised by Travel Partners.</li>
                    </ul>
                </div>
                <div className="mt-[24px]">
                    <h3 className="font-semibold text-[20px] mb-2">4. Third-Party Content
                    </h3>
                    <ul className="list-disc ps-[24px]">
                        <li className="text-[16px] text-[#636C76] leading-[24px] mb-2">The Platform may contain content, advertisements, or links to third-party websites and services. TripBooking.AI is not responsible for any third-party content, including package descriptions, reviews, or media.</li>
                        <li className="text-[16px] text-[#636C76] leading-[24px] mb-2">Your interactions with any third parties, including Travel Partners, are solely between you and the third party.</li>
                    </ul>
                </div>
                <div className="mt-[24px]">
                    <h3 className="font-semibold text-[20px] mb-2">5. Payment and Bookings
                    </h3>
                    <ul className="list-disc ps-[24px]">
                        <li className="text-[16px] text-[#636C76] leading-[24px] mb-2">TripBooking.AI may process payments on behalf of Travel Partners for the purpose of booking travel packages.</li>
                        <li className="text-[16px] text-[#636C76] leading-[24px] mb-2">While users may complete payment through our Platform, all travel services are solely fulfilled by the Travel Partner.</li>
                        <li className="text-[16px] text-[#636C76] leading-[24px] mb-2">TripBooking.AI does not assume any liability related to the provision, cancellation, modification, or execution of travel services by Travel Partners.</li>
                        <li className="text-[16px] text-[#636C76] leading-[24px] mb-2">Users agree to resolve any disputes regarding travel services directly with the respective Travel Partner.</li>
                    </ul>
                </div>
                <div className="mt-[24px]">
                    <h3 className="font-semibold text-[20px] mb-2">6. Refunds and Cancellations
                    </h3>
                    <ul className="list-disc ps-[24px]">
                        <li className="text-[16px] text-[#636C76] leading-[24px] mb-2">Refund and cancellation policies are determined solely by the Travel Partner. TripBooking.AI does not establish or control these policies.</li>
                        <li className="text-[16px] text-[#636C76] leading-[24px] mb-2">Any request for a refund or booking cancellation must be made directly with the Travel Partner.
                        </li>
                        <li className="text-[16px] text-[#636C76] leading-[24px] mb-2">TripBooking.AI shall not be liable for any refund disputes or delays.</li>
                    </ul>
                </div>
                <div className="mt-[24px]">
                    <h3 className="font-semibold text-[20px] mb-2">7. Partner Obligations</h3>
                    <ul className="list-disc ps-[24px]">
                        <li className="text-[16px] text-[#636C76] leading-[24px] mb-2">Travel Partners are responsible for ensuring the accuracy and legality of their listings, pricing, and service descriptions.
                        </li>
                        <li className="text-[16px] text-[#636C76] leading-[24px] mb-2">Travel Partners may update or alter packages and terms without prior notice.
                        </li>
                        <li className="text-[16px] text-[#636C76] leading-[24px] mb-2">Travel Partners must deliver services as described and handle customer service inquiries professionally.</li>
                        <li className="text-[16px] text-[#636C76] leading-[24px] mb-2">TripBooking.AI reserves the right to suspend or remove listings or accounts found in violation of these terms or that negatively impact user experience.</li>
                    </ul>
                </div>
                <div className="mt-[24px]">
                    <h3 className="font-semibold text-[20px] mb-2">8. Data and Privacy</h3>
                    <ul className="list-disc ps-[24px]">
                        <li className="text-[16px] text-[#636C76] leading-[24px] mb-2">Please refer to our [Privacy Policy] for information on how we collect, use, and protect your personal data.
                        </li>
                    </ul>
                </div>
                <div className="mt-[24px]">
                    <h3 className="font-semibold text-[20px] mb-2">9. Intellectual Property
                    </h3>
                    <ul className="list-disc ps-[24px]">
                        <li className="text-[16px] text-[#636C76] leading-[24px] mb-2">All content and technology on TripBooking.AI, including logos, AI features, and user interface designs, are the intellectual property of TripBooking.AI unless otherwise stated.
                        </li>
                    </ul>
                </div>
                <div className="mt-[24px]">
                    <h3 className="font-semibold text-[20px] mb-2">10. Modifications to Terms</h3>
                    <ul className="list-disc ps-[24px]">
                        <li className="text-[16px] text-[#636C76] leading-[24px] mb-2">TripBooking.AI reserves the right to update or modify these Terms at any time without prior notice. Continued use of the Platform following any changes constitutes acceptance of those changes.</li>
                    </ul>
                </div>
                <div className="mt-[24px]">
                    <h3 className="font-semibold text-[20px] mb-2">11. Governing Law
                    </h3>
                    <ul className="list-disc ps-[24px]">
                        <li className="text-[16px] text-[#636C76] leading-[24px] mb-2">These Terms shall be governed by and construed in accordance with the laws of [Your Country/Region], without regard to its conflict of law provisions.</li>
                    </ul>
                </div>
                <div className="mt-[24px]">
                    <h3 className="font-semibold text-[20px] mb-2">12. Contact Us</h3>
                    <p className="text-[16px] text-[#636C76] leading-[24px] mb-2">If you have any questions about these Terms, please contact us at:</p>
                    <p className="text-[16px] text-[#05073C] leading-[24px] mb-2"><strong>Email: </strong> support@tripbooking.ai</p>
                    <p className="text-[16px] text-[#05073C] leading-[24px] mb-2"><strong>Phone: </strong> +1 234 567 890</p>
                </div>
                <div className="mt-[30px]">
                    {/* <input type="checkbox" className="h-[20px] w-[20px] mt-[6px]"/> */}
                    <p className="text-[#636C76] text-[14px] md:text-[16px] sm:leading-[25px] leading-[20px] italic">
                    By using TripBooking.AI, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
                    </p>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Terms;
