import ChatMessage from "@/components/ChatMessage";
import { Icon } from "@iconify/react";

const ChatHistory = ({ chatHistory, isLoading, handleClearHistory }) => (
  <div className="flex-col pb-64">
    {chatHistory.length === 0 ? (
      <div className="mt-5">
        <p className="text-xs text-center p-1 font-light leading-[120%] text-white/50">
          Jika ada pesan yang tidak sepantasnya,<br />silahkan lapor <u><a href="https://github.com/yogawan/jawiraiv1.6.3">disini</a></u> yaaaaaaa...
        </p>
      </div>
    ) : (
      chatHistory.map((message, index) => <ChatMessage key={index} message={message} index={index} />)
    )}

    {isLoading && (
      <div className="flex justify-start m-5">
        <Icon icon="line-md:loading-twotone-loop" width="16" height="16" className="mt-3 text-white"/>
        <div className="w-fit text-xs ml-2 mt-3 p-3 rounded-r-xl rounded-bl-xl bg-transparent text-white/50 border border-white/15">
          Typing...
        </div>
      </div>
    )}

    <div className="flex justify-center p-5">
      <button onClick={handleClearHistory} className="px-5 py-3 border border-white/10 text-xs text-white rounded-full">
        Clear History
      </button>
    </div>
  </div>
);

export default ChatHistory;