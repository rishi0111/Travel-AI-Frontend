import SendIcon from "../../../assets/inputSend-icon.svg";
import { useState, useEffect } from "react";
import { useSendMessageMutation } from "../../../store/features/chat/chatApi";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, setTourDetails, clearTourDetails, threadUid as setThreadUid, setLoading } from "../../../store/features/chat/chatSlice";
import { RootState } from "../../../store/store";

const ChatInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [sendMessage, { isLoading }] = useSendMessageMutation();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const threadUid = useSelector((state: RootState) => state.chat.threadUid);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const urlThreadUid = searchParams.get("threadUid");
    if (urlThreadUid) {
      dispatch(setThreadUid(urlThreadUid));
    }
  }, [location.search, dispatch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = async () => {
    if (inputValue.trim()) {
      const messagePayload: {
        message: string;
        thread_uid?: string;
      } = {
        message: inputValue
      };

      if (threadUid) {
        messagePayload.thread_uid = threadUid;
      }

      dispatch(addMessage({
        content: inputValue,
        sender: "user"
      }));
      setInputValue("");
      dispatch(clearTourDetails());

      // Set loading state to true before API call
      dispatch(setLoading(true));

      try {
        const response = await sendMessage(messagePayload).unwrap();
        const responseThreadUid = response?.data?.thread_uid;

        const searchParams = new URLSearchParams(location.search);
        searchParams.set("threadUid", responseThreadUid);
        navigate({
          pathname: location.pathname,
          search: searchParams.toString()
        });
        dispatch(setThreadUid(responseThreadUid));

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
          aiResponseMessage = response.data?.ai_response?.response?.message;
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
              populaDestinations: response?.data?.ai_response?.data
            }));
          } else {
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
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-[10px] sm:px-8 mb-[30px]">
      <div className="flex relative bg-white p-[12px] py-[10px] border border-[#E5E7EB] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.2)]
       rounded-[14px]">
        <input
          type="text"
          value={inputValue}
          disabled={isLoading}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Find me travel packages to Thailand for 7 days"
          className="w-full pr-[10px] py-0 pl-[8px] border-none text-[#05073C] placeholder:text-[#989EAE] focus:outline-none text-[16px] leading-[24px] font-semibold"
        />
        <button
          onClick={handleSendMessage}
          disabled={isLoading}
          className="h-[42px] w-[42px] text-white rounded-[10px] flex items-center justify-center cursor-pointer bg-[#E7ECF9]"
        >
          <img src={SendIcon} alt="Send" className="" />
        </button>
      </div>
    </div>
  )
}

export default ChatInput
