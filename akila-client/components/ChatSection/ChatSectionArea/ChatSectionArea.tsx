import React from 'react';

interface Message {
  text: string;
  isUser: boolean;
  confidence_score?: string;
}

interface ChatSectionAreaProps {
  messages: Message[];
}

export const ChatSectionArea: React.FC<ChatSectionAreaProps> = ({
  messages,
}) => {
  return (
    <div className="flex max-h-[80%] flex-col-reverse items-start space-y-2 overflow-y-auto p-4">
      {messages.map((message) => (
        <div
          key={message.text}
          className={`rounded-lg p-3 ${
            message.isUser
              ? 'mt-3 self-end bg-blue-500 text-white'
              : 'mt-5 w-[40%] self-start bg-gray-300 text-black'
          }`}
        >
          {/* Display both text and confidence score if available */}
          {message.text}
          {message.confidence_score && (
            <div className="border-l text-right text-sm text-gray-500">
              Confidence: {message.confidence_score}
            </div>
          )}
        </div>
      ))}
      <style jsx>{`
        ::-webkit-scrollbar {
          width: 8px; /* Width of the scrollbar */
        }

        ::-webkit-scrollbar-thumb {
          background-color: #ccc; /* Color of the thumb */
          border-radius: 4px; /* Rounded corners of the thumb */
        }

        ::-webkit-scrollbar-track {
          background-color: transparent; /* Color of the track */
        }
      `}</style>
    </div>
  );
};
