import { useGetCountriesQuery } from "../../../store/features/tours/toursApi";
import DestinationList from "./DestinationList";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, setLoading, threadUid as setThreadUid } from "../../../store/features/chat/chatSlice";
import { useSendMessageMutation } from "../../../store/features/chat/chatApi";
import { useNavigate, useLocation } from "react-router-dom";
import { RootState } from "../../../store/store";

const PopularDestinations = () => {
     const { data: countries, isLoading: isCountriesLoading } = useGetCountriesQuery({});
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const location = useLocation();
     const [sendMessage] = useSendMessageMutation();
     const threadUid = useSelector((state: RootState) => state.chat.threadUid);

     const handleDestinationClick = async (destination: string) => {
          // Create the message
          const message = `Please show me packages for ${destination}`;

          // Add user message to chat
          dispatch(addMessage({
               content: message,
               sender: "user"
          }));

          // Set loading state
          dispatch(setLoading(true));

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

               if (aiResponseMessage) {
                    console.log("API Response:", response.data?.ai_response);

                    if (responseType === "json") {
                         dispatch(addMessage({
                              content: aiResponseMessage,
                              sender: "ai",
                              responseType: responseType,
                              tourDetails: response.data?.ai_response?.data || []
                         }));
                    } else if (responseType === "popular_destinations") {
                         dispatch(addMessage({
                              content: aiResponseMessage,
                              sender: "ai",
                              responseType: responseType,
                              popularDestinations: response?.data?.ai_response?.data
                         }));
                    } else if (responseType === "tour_packages") {
                         dispatch(addMessage({
                              content: aiResponseMessage,
                              sender: "ai",
                              responseType: responseType,
                              tourPackages: response?.data?.ai_response?.data
                         }));
                    }
                    else {
                         dispatch(addMessage({
                              content: aiResponseMessage,
                              sender: "ai",
                              responseType: responseType
                         }));
                    }
               } else {
                    dispatch(addMessage({
                         content: "I've received your message. How can I help you with your travel plans?",
                         sender: "ai"
                    }));
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

     return (
          <div className="py-4 mb-[20px]">
               <h2 className="text-[20px] leading-[24px] font-semibold text-[#05073C]">Popular Destinations</h2>
               <div className="w-[100%] overflow-x-auto scrollbar-hide" >
                    {isCountriesLoading ? <div className="w-full h-full flex items-center justify-center">
                         <p className="text-gray-500">Loading...</p>
                    </div> : <div className="flex gap-[16px] py-4">
                         {countries?.length > 0 ? countries?.map((destination: { id: string, name: string }, index: number) => (
                              <div
                                   key={`destination-${destination.id}-${index}`}
                                   onClick={() => handleDestinationClick(destination.name)}
                              >
                                   <DestinationList destination={destination} />
                              </div>
                         )) : <div className="w-full h-full flex items-center justify-center">
                              <p className="text-gray-500">No destinations found</p>
                         </div>}
                    </div>}
               </div>
          </div>
     )
}

export default PopularDestinations;
