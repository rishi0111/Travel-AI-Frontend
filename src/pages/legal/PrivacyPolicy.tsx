import Sidebar from "../../components/dashboard/sidebar/Sidebar";

const PrivacyPolicy = () => {
    return (
        <div className="flex">
        <Sidebar/>
        <div className="flex-1 md:ms-[275px]">
            <div className=" py-[15px] sm:py-[14px] mx-auto sm:px-[30px] px-[10px] border-b border-[#E5E7EB] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
                <h1 className="text-center lg:text-start text-[20px] sm:text-[24px] leading-[32px] font-bold text-[#05073C] max-w-[1240px] mx-auto">
                   Privacy Policy
                </h1>
            </div>
            <div className=" max-w-[1240px] sm:px-[30px] px-[10px] mx-auto py-[20px] pb-[40px]">
                <span className="font-semibold text-sm">Last updated: April 14, 2025</span>
                <p className="text-sm text-[#6B7280] mt-2">At TripBooking.AI, your privacy is important to us. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our mobile application (collectively referred to as the "Platform").
                </p>
                <div className="mt-[24px]">
                    <h3 className="font-semibold text-[20px] mb-2">1. Information We Collect</h3>
                    <div className="mb-[10px] ps-[20px]">
                        <h5 className="font-semibold text-[16px] mb-2">a. Personal Information</h5>
                        <p className="ms-[20px] text-[16px] text-[#636C76] leading-[24px] mb-2">We may collect personal details you voluntarily provide, including but not limited to:</p>
                        <ul className="list-disc ps-[40px]">
                            <li className="text-[14px] text-[#05073C] leading-[24px] mb-1">Full Name</li>
                            <li className="text-[14px] text-[#05073C] leading-[24px] mb-1">Email Address</li>
                            <li className="text-[14px] text-[#05073C] leading-[24px] mb-1">Phone Number</li>
                            <li className="text-[14px] text-[#05073C] leading-[24px] mb-1">Date of Birth</li>
                            <li className="text-[14px] text-[#05073C] leading-[24px] mb-1">Passport Number</li>
                            <li className="text-[14px] text-[#05073C] leading-[24px] mb-1">NID Number</li>
                            <li className="text-[14px] text-[#05073C] leading-[24px] mb-1">Address</li>
                            <li className="text-[14px] text-[#05073C] leading-[24px] mb-1">Payment Information</li>
                            <li className="text-[14px] text-[#05073C] leading-[24px] mb-1">Travel Preferences</li>
                        </ul>
                    </div>
                    <div className="mb-[10px] ps-[20px]">
                        <h5 className="font-semibold text-[16px] mb-2">b. Usage Data</h5>
                        <p className="ms-[20px] text-[16px] text-[#636C76] leading-[24px] mb-2">We collect data about your interactions with the Platform, including:
                        </p>
                        <ul className="list-disc ps-[40px]">
                            <li className="text-[14px] text-[#05073C] leading-[24px] mb-1">Device information</li>
                            <li className="text-[14px] text-[#05073C] leading-[24px] mb-1">IP address</li>
                            <li className="text-[14px] text-[#05073C] leading-[24px] mb-1">Browser type</li>
                            <li className="text-[14px] text-[#05073C] leading-[24px] mb-1">Pages visited</li>
                            <li className="text-[14px] text-[#05073C] leading-[24px] mb-1">Date and time of visit</li>
                        </ul>
                    </div>
                    <div className="mb-[10px] ps-[20px]">
                        <h5 className="font-semibold text-[16px] mb-2">c. Cookies and Tracking Technologies</h5>
                        <p className="ms-[20px] text-[16px] text-[#636C76] leading-[24px] mb-2">We use cookies and similar technologies to enhance your browsing experience. Please refer to our Cookie Policy for more details.
                        </p>
                    </div>
                </div>
                <div className="mt-[24px]">
                    <h3 className="font-semibold text-[20px] mb-2">2. How We Use Your Information</h3>
                    <p className="text-[16px] text-[#636C76] leading-[24px] mb-2">We use the information collected to:</p>
                    <ul className="list-disc ps-[24px]">
                        <li className="text-[16px] text-[#636C76] leading-[24px] mb-2">Provide and manage our services
                        </li>
                        <li className="text-[16px] text-[#636C76] leading-[24px] mb-2">Facilitate bookings with Travel Partners</li>
                        <li className="text-[16px] text-[#636C76] leading-[24px] mb-2">Communicate with you regarding your account or bookings</li>
                        <li className="text-[16px] text-[#636C76] leading-[24px] mb-2">Improve and personalize user experience</li>
                        <li className="text-[16px] text-[#636C76] leading-[24px] mb-2">Comply with legal obligations</li>
                        <li className="text-[16px] text-[#636C76] leading-[24px] mb-2">Provide AI-powered travel suggestions tailored to your preferences</li>
                    </ul>
                </div>
                <div className="mt-[24px]">
                    <h3 className="font-semibold text-[20px] mb-2">3. Sharing Your Information</h3>
                    <ul className="list-disc ps-[24px]">
                        <li className="text-[16px] text-[#636C76] leading-[24px] mb-2">We may share your personal information with third-party Travel Partners for the purpose of fulfilling travel bookings.
                        </li>
                        <li className="text-[16px] text-[#636C76] leading-[24px] mb-2">We may also share data with service providers who support our business operations.
                        </li>
                        <li className="text-[16px] text-[#636C76] leading-[24px] mb-2">We do not sell or rent your personal data to third parties.</li>
                    </ul>
                </div>
                <div className="mt-[24px]">
                    <h3 className="font-semibold text-[20px] mb-2">4. Data Retention</h3>
                    <p className="text-[16px] text-[#636C76] leading-[24px] mb-2">We retain your information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.</p>
                </div>
                <div className="mt-[24px]">
                    <h3 className="font-semibold text-[20px] mb-2">5. Data Security</h3>
                    <p className="text-[16px] text-[#636C76] leading-[24px] mb-2">We implement industry-standard security measures to protect your personal information. However, no method of transmission or storage is 100% secure. While we strive to protect your data, we do not guarantee absolute security. In the event of a data breach, we will notify affected users via email or notice on the Platform within 72 hours, in accordance with applicable laws.</p>
                    <p className="text-[16px] text-[#636C76] leading-[24px] mb-2">By using our Platform, you agree that TripBooking.AI will not be held responsible or liable for any direct or indirect damages, losses, or claims arising from such breaches.</p>
                    <p className="text-[16px] text-[#636C76] leading-[24px] mb-2">No compensation or legal claim may be pursued against us due to any unauthorized access to or misuse of your personal data.
                    </p>
                </div>
                <div className="mt-[24px]">
                    <h3 className="font-semibold text-[20px] mb-2">6. Your Rights
                    </h3>
                    <p className="text-[16px] text-[#636C76] leading-[24px] mb-2">Depending on your jurisdiction, you may have the right to:</p>
                    <ul className="list-disc ps-[24px]">
                        <li className="text-[16px] text-[#636C76] leading-[24px] mb-2">Access the personal data we hold about you</li>
                        <li className="text-[16px] text-[#636C76] leading-[24px] mb-2">Request correction or deletion</li>
                        <li className="text-[16px] text-[#636C76] leading-[24px] mb-2">Object to or restrict processing
                        </li>
                        <li className="text-[16px] text-[#636C76] leading-[24px] mb-2">Withdraw consent</li>
                    </ul>
                    <p className="text-[16px] text-[#636C76] leading-[24px] mb-2">To exercise these rights, please contact us at <a href="mailto:support@tripbooking.ai" className="text-[#05073C] font-semibold">support@tripbooking.ai</a>.</p>
                    <p className="text-[16px] text-[#636C76] leading-[24px] mb-2">If you wish to have your data deleted, contact us with the subject line “Data Deletion Request.” We will respond within 30 days.</p>
                </div>
                <div className="mt-[24px]">
                    <h3 className="font-semibold text-[20px] mb-2">7. User Consent</h3>
                    <p className="text-[16px] text-[#636C76] leading-[24px] mb-2">By accessing or using our Platform, you consent to the collection, use, and sharing of your information as described in this Privacy Policy.
                    </p>
                </div>
                <div className="mt-[24px]">
                    <h3 className="font-semibold text-[20px] mb-2">8. Data Transfers</h3>
                    <p className="text-[16px] text-[#636C76] leading-[24px] mb-2">Your information may be transferred to — and maintained on — computers located outside of your country where data protection laws may differ. We take appropriate safeguards to ensure your data remains protected.</p>
                </div>
                <div className="mt-[24px]">
                    <h3 className="font-semibold text-[20px] mb-2">9. Children's Privacy</h3>
                    <p className="text-[16px] text-[#636C76] leading-[24px] mb-2">Our Platform is not intended for use by individuals under the age of 16. We do not knowingly collect personal information from children under this age. If you are under 16, please do not use the Platform or provide any personal information. If we become aware that we have inadvertently collected personal information from a user under the age of 16, we will take steps to delete such information as soon as possible. We do not knowingly collect personal information from children.</p>
                </div>
                <div className="mt-[24px]">
                    <h3 className="font-semibold text-[20px] mb-2">10. Third-Party Links</h3>
                    <p className="text-[16px] text-[#636C76] leading-[24px] mb-2">The Platform may contain links to third-party websites or services. We are not responsible for the privacy practices of such third parties.</p>
                </div>
                <div className="mt-[24px]">
                    <h3 className="font-semibold text-[20px] mb-2">11. Automated Decision Making and AI</h3>
                    <p className="text-[16px] text-[#636C76] leading-[24px] mb-2">We use AI technologies to personalize your experience and suggest travel packages. These suggestions are based on your preferences and past interactions. No decisions that significantly affect you are made solely by automated processes.
                    </p>
                </div>
                
                <div className="mt-[24px]">
                    <h3 className="font-semibold text-[20px] mb-2">12. Changes to This Privacy Policy</h3>
                    <p className="text-[16px] text-[#636C76] leading-[24px] mb-2">We may update this policy from time to time. Any changes will be reflected on this page with an updated revision date.</p>
                </div>
                <div className="mt-[24px]">
                    <h3 className="font-semibold text-[20px] mb-2">13. Contact Us</h3>
                    <p className="text-[16px] text-[#636C76] leading-[24px] mb-2">If you have any questions or concerns about this Privacy Policy, please contact us at: </p>
                    <p className="text-[16px] text-[#05073C] leading-[24px] mb-2"><strong>Email: </strong> support@tripbooking.ai</p>
                </div>
                <div className="mt-[30px]">
                    <p className="text-[#636C76] text-[14px] md:text-[16px] sm:leading-[25px] leading-[20px] italic">
                    By using TripBooking.AI, you agree to the terms outlined in this Privacy Policy.
                    </p>
               </div>
            </div>
        </div>
    </div>
    )
}

export default PrivacyPolicy;