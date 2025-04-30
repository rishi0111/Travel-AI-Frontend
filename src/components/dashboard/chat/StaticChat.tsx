import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/store";
import AiAssistantIcon from "../../../assets/ai-assistant-icon.svg";
import PopularDestinations from "./PopularDestinations";
import { addMessage, setTourDetails, clearTourDetails, threadUid as setThreadUid, setLoading } from "../../../store/features/chat/chatSlice";
import { useEffect, useRef, useState } from "react";
import DestinationsState from "./DestinationsState";
import { useAppSelector } from "../../../store/hooks";
import Packages from "./Packages";
import { setStateName } from "../../../store/features/tours/toursSlice";
import PackagesPrompt from "./PackagesPrompt";
import DateRangePicker from "./DateRangePicker";
import { useSendMessageMutation } from "../../../store/features/chat/chatApi";
import { useNavigate, useLocation } from "react-router-dom";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface Cities {
     name: string;
     id: string;
}

interface Message {
     sender: string;
     content: string;
     responseType?: string;
     tourDetails?: any[];
}

const StaticChat = () => {
     // Get messages from Redux store
     const [state, setState] = useState<Cities[]>([]);
     const { countries } = useAppSelector((state) => state.tours);

     useEffect(() => {
          if (countries?.cities) {
               setState(countries.cities);
          }
     }, [countries]);

     const messages = useSelector((state: RootState) => state.chat.messages);
     const tourDetails = useSelector((state: RootState) => state.chat.tourDetails);
     const threadUid = useSelector((state: RootState) => state.chat.threadUid);
     const dispatch = useDispatch();
     const selectedCountry = useSelector((state: RootState) => state.tours.country);
     const initialMessageSent = useRef(false);

     // State to control the rendering of Packages component
     const [showPackages, setShowPackages] = useState(false);

     // Add this hook for sending messages to API
     const [sendMessage] = useSendMessageMutation();

     // Get loading state from Redux
     const isLoading = useSelector((state: RootState) => state.chat.isLoading);

     // Format timestamp to show time
     const formatTime = () => {
          const now = new Date();
          return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
     };

     // Add default welcome message when component mounts if no messages exist
     useEffect(() => {
          if (messages.length === 0 && !initialMessageSent.current) {
               dispatch(addMessage({
                    content: "Hi, here are some popular destinations.",
                    sender: "ai"
               }));
               initialMessageSent.current = true;
          }
     }, []);

     // Add user message when a country is selected
     useEffect(() => {
          if (selectedCountry) {
               dispatch(addMessage({
                    content: selectedCountry,
                    sender: "user"
               }));

               // Add AI response after user selects a country
               setTimeout(() => {
                    dispatch(addMessage({
                         content: `Great! I'll help you find the best travel packages for ${selectedCountry}. Here are the states in ${selectedCountry}, Please select the state you want to travel to.`,
                         sender: "ai"
                    }));
               }, 500);
          }
     }, [selectedCountry, dispatch]);

     // Function to check if a message is the states selection message
     const isStatesMessage = (message: Message) => {
          return message.sender === "ai" &&
               message.content.includes("Here are the states in") &&
               message.content.includes("Please select the state you want to travel to");
     };

     // Function to handle click on DestinationsState
     const handleDestinationClick = () => {
          setShowPackages(true);
     };

     // Function to handle click on a state
     const handleStateClick = (stateName: string) => {
          dispatch(setStateName(stateName));
     };

     // Add a new check function to detect calendar type messages
     const isCalendarMessage = (message: Message) => {
          return message.sender === "ai" && message.responseType === "calendar";
     };

     // Updated handler for date range selection
     const handleDateRangeSelect = async (startDate: Date | null, endDate: Date | null) => {
          if (startDate && endDate) {
               // Calculate the number of days
               const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
               const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // +1 to include both start and end dates
               
               // Format dates for display
               const formatDate = (date: Date) => {
                    return date.toLocaleDateString('en-US', {
                         day: 'numeric',
                         month: 'long'
                    });
               };
               
               // Create the message exactly as requested
               const message = `Show me packages for ${diffDays} days from ${formatDate(startDate)} to ${formatDate(endDate)}`;
               
               // Add the message to chat
               dispatch(addMessage({
                    content: message,
                    sender: "user"
               }));
               
               // Create API payload
               const messagePayload: {
                    message: string;
                    thread_uid?: string;
               } = {
                    message: message
               };
               
               // Add thread_uid if it exists
               if (threadUid) {
                    messagePayload.thread_uid = threadUid;
               }
               
               // Clear existing tour details
               dispatch(clearTourDetails());
               
               // Set loading state to true before API call
               dispatch(setLoading(true));
               
               // Send to API
               try {
                    const response = await sendMessage(messagePayload).unwrap();
                    const responseThreadUid = response?.data?.thread_uid;
                    
                    // Update URL with thread_uid
                    if (responseThreadUid) {
                         const searchParams = new URLSearchParams(location.search);
                         searchParams.set("threadUid", responseThreadUid);
                         navigate({
                              pathname: location.pathname,
                              search: searchParams.toString()
                         });
                         dispatch(setThreadUid(responseThreadUid));
                    }
                    
                    // Process AI response
                    let aiResponseMessage = "";
                    let responseType = "text";
                    
                    if (response.data?.ai_response?.type) {
                         responseType = response.data.ai_response.type;
                    }
                    
                    if (response.data?.ai_response?.data?.text_response?.message) {
                         aiResponseMessage = response.data.ai_response.data.text_response.message;
                    }
                    else if (response.data?.ai_response?.text_response?.message) {
                         aiResponseMessage = response.data.ai_response.text_response.message;
                    }
                    else if (response.data?.ai_response?.response?.message) {
                         aiResponseMessage = response.data.ai_response.response.message;
                    }
                    
                    // Special handling for JSON responses with tour data
                    if (responseType === "json") {
                         dispatch(addMessage({
                              content: aiResponseMessage,
                              sender: "ai",
                              responseType: responseType,
                              tourDetails: response.data?.ai_response?.data || []
                         }));
                    } else {
                         dispatch(addMessage({
                              content: aiResponseMessage,
                              sender: "ai",
                              responseType: responseType
                         }));
                         
                         // Process tour details for non-JSON responses
                         const tourDetails = response.data?.ai_response?.data?.tour_details;
                         if (tourDetails && Array.isArray(tourDetails) && tourDetails.length > 0) {
                              dispatch(setTourDetails(tourDetails));
                         }
                    }
                    
               } catch (error) {
                    console.error("Error sending message:", error);
                    
                    dispatch(addMessage({
                         content: "Sorry, I couldn't process your request at the moment. Please try again later.",
                         sender: "ai"
                    }));
               } finally {
                    // Set loading state to false after API call completes
                    dispatch(setLoading(false));
               }
          }
     };

     const navigate = useNavigate();
     const location = useLocation();

     return (
          <div className="w-full">
               {messages.length > 0 && messages.map((message, index) => (
                    <div key={index}>
                         {message.sender === "ai" ? (
                              // AI Assistant Chat
                              <div className="max-w-[740px] mb-[30px]">
                                   <div className="flex items-start gap-[8px]">
                                        <div className="w-[40px] h-[40px] rounded-full bg-[#E7ECF9] flex items-center justify-center flex-shrink-0">
                                             <img src={AiAssistantIcon} alt="AI Assistant" className="" />
                                        </div>
                                        <div className="">
                                             <p className="border border-[#E5E7EB] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] bg-[#F4F4F6] rounded-[20px] rounded-es-none px-[16px] py-[15px] text-[14px] leading-[20px] text-[#1F2937] markdown">
                                                 
                                                  <Markdown remarkPlugins={[remarkGfm]}>{message.content}</Markdown>
                                             </p>
                                             <p className="text-xs text-gray-500 mt-2">{formatTime()}</p>
                                        </div>
                                   </div>
                              </div>
                         ) : (
                              // User Chat
                              <div className="max-w-[740px] ms-auto mb-[30px]">
                                   <div className="flex items-end flex-col justify-end">
                                        <p className="border border-[#E5E7EB] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] bg-[#0D3FC6] rounded-[20px] rounded-es-none px-[16px] py-[12px] text-[14px] leading-[20px] text-[#FFFFFF]">
                                             {message.content}
                                        </p>
                                        <p className="text-xs text-gray-500 mt-2">{formatTime()}</p>
                                   </div>
                              </div>
                         )}

                         {/* Show popular destinations after the welcome message */}
                         {index === 0 &&
                              message.sender === "ai" &&
                              message.content === "Hi, here are some popular destinations." && (
                                   <PopularDestinations />
                              )}

                         {/* Show DestinationsState based on state availability */}
                         {isStatesMessage(message) && state?.length > 0 && (
                              <div onClick={handleDestinationClick}>
                                   <DestinationsState onStateClick={handleStateClick} />
                              </div>
                         )}

                         {/* Add calendar component when response type is calendar */}
                         {isCalendarMessage(message) && (
                              <div className="mb-4">
                                   <DateRangePicker onApply={handleDateRangeSelect} />
                              </div>
                         )}

                         {message.tourDetails && Array.isArray(message.tourDetails) && message.tourDetails.length > 0 && (
                              <div className="w-full">
                                   <PackagesPrompt packages={message.tourDetails} />
                              </div>
                         )}

                         {message.populaDestinations && Array.isArray(message.populaDestinations) && message.populaDestinations.length > 0 && (
                              <div className="w-full">
                                   <PopularDestinations packages={message.populaDestinations} />
                              </div>
                         )}
                    </div>
               ))}

               {/* Show loader when waiting for AI response */}
               {isLoading && (
                    <div className="max-w-[740px] mb-[30px]">
                         <div className="flex items-start gap-[8px]">
                              <div className="w-[40px] h-[40px] rounded-full bg-[#E7ECF9] flex items-center justify-center flex-shrink-0">
                                   <img src={AiAssistantIcon} alt="AI Assistant" className="" />
                              </div>
                              <div className="">
                                   <div className="border border-[#E5E7EB] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] bg-[#F4F4F6] rounded-[20px] rounded-es-none px-[16px] py-[15px] text-[14px] leading-[20px] text-[#1F2937]">
                                        <div className="flex items-center space-x-2">
                                             <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce"></div>
                                             <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                                             <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                                        </div>
                                   </div>
                                   <p className="text-xs text-gray-500 mt-2">{formatTime()}</p>
                              </div>
                         </div>
                    </div>
               )}

               {/* Render Packages component if showPackages is true */}
               {showPackages && <Packages />}
          </div>
     );
};

export default StaticChat;
