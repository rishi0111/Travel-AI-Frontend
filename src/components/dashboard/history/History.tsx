import DeleteIcon from "../../../assets/dlt-icon.svg";
import CollapseIcon from "../../../assets/collapseIcon.svg";
import EditIcon from "../../../assets/edit-icon.svg";
import { useState, useEffect } from "react";
import { useGetThreadMessagesQuery, useGetChatHistoryQuery } from "../../../store/features/chat/chatApi";
import { useDispatch } from "react-redux";
import { threadUid as setThreadUid, setMessages, setTourDetails } from "../../../store/features/chat/chatSlice";
import { useNavigate } from "react-router-dom";

const History = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { data: threads } = useGetThreadMessagesQuery({});
  const [selectedThread, setSelectedThread] = useState<string | null>(null);
  const { data: chatHistory } = useGetChatHistoryQuery(selectedThread);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleHistoryClick = (thread: string | null) => {
    setSelectedThread(thread);
    dispatch(setThreadUid(thread));
    navigate(`/chat?threadUid=${thread}`);
  }

  const handleNewChat = () => {
    dispatch(setThreadUid(null));
    dispatch(setMessages([]));
    navigate("/chat");
  }

  useEffect(() => {
    const reverseMessages = chatHistory?.data?.messages
      ? [...chatHistory.data.messages].reverse()
      : undefined;

    if (chatHistory?.data?.messages) {
      let foundTourDetails = null;

      // Parse messages
      const parsedMessages = reverseMessages?.map((msg: any) => {
        if (msg.context !== "AI") {
          return { content: msg.message, sender: "user" };
        } else {
          let content = "";
          let tourDetails = null;
          let responseType = "text";
          
          try {
            const parsed = JSON.parse(msg.message);
            responseType = parsed?.type || "text";
            content = parsed?.text_response?.message || parsed?.data?.text_response?.message || "";
            
            // Handle different response types appropriately
            if (responseType === "json" && Array.isArray(parsed?.data)) {
              // For JSON type, the tourDetails are directly in the data array
              tourDetails = parsed.data;
            } else {
              // For other types, look in standard locations
              tourDetails =
                parsed?.data?.tour_details ||
                parsed?.tour_details ||
                (parsed?.data && parsed?.data[0]?.tour_details) ||
                null;
            }
          } catch {
            content = msg.message;
          }
          
          if (tourDetails && Array.isArray(tourDetails) && tourDetails.length > 0) {
            foundTourDetails = tourDetails;
          }
          
          return { 
            content, 
            sender: "ai", 
            responseType: responseType,
            tourDetails 
          };
        }
      });

      dispatch(setMessages(parsedMessages));
      
      // If we found tour details, set them globally
      if (foundTourDetails) {
        dispatch(setTourDetails(foundTourDetails));
      }
    }
  }, [chatHistory, dispatch]);

  console.log(threads, ":threads");
  console.log(chatHistory, ":chatHistory");

  return (
    <>
      <div className={`fixed top-0 left-0 w-full h-full bg-black opacity-50 z-[98] ${isCollapsed ? 'hidden' : ''} lg:hidden`}></div>
      <button
        onClick={handleToggleCollapse}
        className="absolute top-[14px] right-[15px] z-[100] bg-[#ffffff] h-[34px] hover:bg-[#E7ECF9] w-[34px] h rounded-[6px] flex flex-col justify-center items-center gap-[4px] cursor-pointer"
      >
        <img src={CollapseIcon} alt="Collapse" className="" />
      </button>
      <div className={`absolute top-0 right-0 lg:static z-[99] bg-white ${isCollapsed ? 'w-0' : 'w-[250px]'} border border-[#E5E7EB] h-screen transition-width duration-300 overflow-hidden`}>
        <div className="py-[20px] px-[16px] flex justify-between items-center border-b border-[#E5E7EB] relative">
          <h1 className="text-[18px] leading-[24px] font-semibold text-[#05073C]">History</h1>
          <button onClick={handleNewChat} className="text-gray-500 h-[34px] w-[34px] hover:bg-[#E7ECF9] cursor-pointer rounded-[8px] flex items-center justify-center absolute top-[14px] right-[55px]" title="New Chat">
            <img src={EditIcon} alt="Edit" className="w-[20px] h-[20px]" />
          </button>
        </div>

        <div className="p-[16px] h-[calc(100vh-70px)] overflow-y-auto">
          <ul>
            {threads?.data?.map((thread: { id: number, uid: string, thread_name: string }) => (
              <li key={thread.id} className="mb-[8px] relative group transition-all duration-300"><span onClick={() => handleHistoryClick(thread?.uid)} className="text-[14px] leading-[24px] bg-[#E7ECF9] cursor-pointer text-[#05073C] p-[8px] pe-[25px] rounded-[8px] hover:bg-[#E7ECF9] transition-all duration-300 block active:bg-[#E7ECF9] truncate">{thread?.thread_name || thread?.uid}</span> <span className="absolute top-[12px] right-[10px] cursor-pointer group-hover:block hidden"><img src={DeleteIcon} alt="Delete" className="" /></span></li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default History
