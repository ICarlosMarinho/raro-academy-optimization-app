import { useRef } from "react";
import { ChatHeader } from "../../components/ChatHeader";
import { ChatMessageList } from "../../components/ChatMessageList";
import { ChatTextArea } from "../../components/ChatTextArea";
import { useChat } from "../../contexts/chat.context";

export default function Chat() {
  const { setBuscaMensagem, adicionaMensagem, participantes } = useChat();

  return (
    <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
      <ChatHeader setBuscaMensagem={setBuscaMensagem} participantes={participantes} />
      <ChatMessageList />
      <ChatTextArea adicionaMensagem={adicionaMensagem} participantes={participantes} />
    </div>
  );
}
