import React, { useEffect, useState } from 'react';
import { ChatSectionNavBar } from './ChatSectionNavBar/ChatSectionNavBar';
import { ChatSectionTextArea } from './ChatSectionTextArea/ChatSectionTextArea';
import { ChatSectionArea } from './ChatSectionArea/ChatSectionArea';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const ChatSection = () => {
  const { queryAnswer } = useActions();
  const { answer, loading } = useTypedSelector((state) => state.answer);
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Hello! How can I help you?', isUser: false },
  ]);

  useEffect(() => {
    // Handle the answer when it arrives
    if (answer.answer && loading === false) {
      // Delay adding the message until typing is complete
      setTimeout(() => {
        setMessages((prevMessages) => [
          {
            text: answer.answer,
            isUser: false,
            confidence_score: answer.confidence_score,
          },
          ...prevMessages,
        ]);
      }, 1000);
    }
  }, [answer, loading]);

  const addMessage = (text: string, isUser: boolean) => {
    queryAnswer(text);
    setMessages((prevMessages) => [{ text, isUser }, ...prevMessages]);
  };

  console.log(messages);

  return (
    <div className="relative w-[100%] bg-dark-color">
      <ChatSectionNavBar />
      <ChatSectionArea messages={messages} />
      <ChatSectionTextArea addMessage={addMessage} />
    </div>
  );
};
