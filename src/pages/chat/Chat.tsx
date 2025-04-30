import History from "../../components/dashboard/history/History";
import ChatInput from "../../components/dashboard/chat/ChatInput";
import ChatHeading from "../../components/dashboard/chat/ChatHeading";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import StaticChat from "../../components/dashboard/chat/StaticChat";
import { useEffect, useRef } from "react";

const Chat = () => {
    const isHistoryOpen = useSelector((state: RootState) => state.sidebar.activeSidebar === "/history");
    const messages = useSelector((state: RootState) => state.chat.messages);
    const messagesEndRef = useRef<null | HTMLDivElement>(null);

    // Auto-scroll to bottom when new messages are added
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Format timestamp to show time
    const formatTime = () => {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <div className="flex">
            {/* Main Content */}
            <div className="flex-1 md:ms-[275px] w-[calc(100vw-600px)]">
                <div className="h-[calc(100vh-95px)] overflow-y-auto py-[40px] pt-[60px] sm:pt-[30px] sm:py-[30px]">
                    {/* Hero Section */}
                    {messages.length === 0 && <ChatHeading />}

                    <div className="max-w-[1075px] mx-auto px-[10px] ms:px-[20px]">
                        <StaticChat />
                    </div>
                </div>
                <ChatInput />
            </div>
            <History />
        </div >
    );
};

export default Chat;