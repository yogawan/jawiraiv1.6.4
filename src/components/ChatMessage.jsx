import { Icon } from "@iconify/react";
import CodeBlock from "./CodeBlock";

const ChatMessage = ({ message, index }) => (
  <div className={`flex m-5 ${message.role === "user" ? "justify-end" : "justify-start"}`}>
    {message.role !== "user" && (
      <div className="text-center text-xs text-white mt-3">
        <Icon icon="line-md:chat-filled" width="16" height="16" />
      </div>
    )}
    <div className="flex-col">
      <div
        className={`w-fit text-xs ${
          message.role === "user"
            ? "ml-2 mt-3 p-3 rounded-l-xl rounded-br-xl bg-transparent text-white/50 border border-white/15"
            : "ml-2 mt-3 p-3 rounded-r-xl rounded-bl-xl bg-transparent text-white/50 border border-white/15"
        }`}
      >
        {message.role === "ai" ? (
          <CodeBlock content={message.content} />
        ) : (
          <p className="w-full text-xs">{message.content || "Error: No message content"}</p>
        )}
      </div>
    </div>
  </div>
);

export default ChatMessage;