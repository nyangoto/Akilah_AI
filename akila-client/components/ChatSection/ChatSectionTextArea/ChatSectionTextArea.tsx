import React, { useState } from 'react';
import { Icon } from '@iconify/react';

interface ChatSectionTextAreaProps {
  addMessage: (message: string, isUser: boolean) => void;
}

export const ChatSectionTextArea: React.FC<ChatSectionTextAreaProps> = ({
  addMessage,
}) => {
  const [question, setQuestion] = useState<string>('');
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleSendClick = () => {
    if (question.trim() !== '') {
      addMessage(question, true);
      setQuestion('');
    }
  };

  return (
    <div className="absolute bottom-0 w-[100%] bg-light-color p-5">
      <div className="relative">
        <textarea
          className="h-auto w-[95%] resize-none rounded  border-none bg-light-color p-2  text-[1rem] leading-5  outline-none"
          name="body"
          onChange={handleInputChange}
          placeholder="WHat do you want to know?"
          rows={2}
          value={question}
        />
        <Icon
          className={`absolute right-3 top-[20%] z-10 cursor-pointer rounded-full `}
          icon="mingcute:send-fill"
          onClick={handleSendClick}
          width="40"
        />
      </div>
    </div>
  );
};
