import History from "../../components/dashboard/history/History";
import ChatInput from "../../components/dashboard/chat/ChatInput";
import ChatHeading from "../../components/dashboard/chat/ChatHeading";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import StaticChat from "../../components/dashboard/chat/StaticChat";
import { useEffect, useRef, useState } from "react";

const Chat = () => {
    const messages = useSelector((state: RootState) => state.chat.messages);
    const historyLoading = useSelector((state: RootState) => state.chat.historyLoading);
    const threadUid = useSelector((state: RootState) => state.chat.threadUid);
    const messagesEndRef = useRef<null | HTMLDivElement>(null);

    // Add a state to track if we should show the heading
    const [showHeading, setShowHeading] = useState(false);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Use an effect to set the show heading state with a delay
    // This ensures we only show the heading when we're sure it should be displayed
    useEffect(() => {
        if (!threadUid && messages.length === 0 && !historyLoading) {
            // We're in a new chat state, but add a small delay to ensure all conditions are stable
            const timer = setTimeout(() => {
                setShowHeading(true);
            }, 300);
            return () => clearTimeout(timer);
        } else {
            setShowHeading(false);
        }
    }, [threadUid, messages.length, historyLoading]);

    return (
        <div className="flex">
            {/* Main Content */}
            <div className="flex-1 md:ms-[275px] w-[calc(100vw-600px)]">
                <div className="h-[calc(100vh-95px)] overflow-y-auto py-[40px] pt-[60px] sm:pt-[30px] sm:py-[30px]">
                    {/* Hero Section - Only show when the showHeading state is true */}
                    {showHeading && <ChatHeading />}

                    <div className="max-w-[1075px] mx-auto px-[10px] ms:px-[20px]">
                        {historyLoading && threadUid ? (
                            <>
                            </>
                        ) : (
                            <StaticChat />
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                </div>
                <ChatInput />
            </div>
            <History />
        </div>
    );
};

export default Chat;