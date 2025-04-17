import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/store";
import AiAssistantIcon from "../../../assets/ai-assistant-icon.svg";
import PopularDestinations from "./PopularDestinations";
import { addMessage } from "../../../store/features/chat/chatSlice";
import { useEffect, useRef, useState } from "react";
import DestinationsState from "./DestinationsState";
import { useAppSelector } from "../../../store/hooks";
import Packages from "./Packages";
import { setStateName } from "../../../store/features/tours/toursSlice";

interface Cities {
     name: string;
     id: string;
}

interface Message {
     sender: string;
     content: string;
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
     const dispatch = useDispatch();
     const selectedCountry = useSelector((state: RootState) => state.tours.country);
     const initialMessageSent = useRef(false);

     // State to control the rendering of Packages component
     const [showPackages, setShowPackages] = useState(false);

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
     }, [messages.length, dispatch]);

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
                                             <p className="border border-[#E5E7EB] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] bg-[#F4F4F6] rounded-[20px] rounded-es-none px-[16px] py-[15px] text-[14px] leading-[20px] text-[#1F2937]">
                                                  {message.content}
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
                    </div>
               ))}

               {/* Render Packages component if showPackages is true */}
               {showPackages && <Packages />}
          </div>
     );
};

export default StaticChat;
