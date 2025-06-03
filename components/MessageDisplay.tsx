import React from "react";
import { MessageType, MessageContent } from "@/lib/types";
import { cn } from "@/lib/utils";

interface MessageDisplayProps {
  type: MessageType;
  content: MessageContent;
  isVisible: boolean;
}

export const MessageDisplay: React.FC<MessageDisplayProps> = ({
  type,
  content,
  isVisible,
}) => {
  return (
    <div
      className={cn(
        "absolute inset-0 flex flex-col justify-center transition-opacity duration-500",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      aria-hidden={!isVisible}
    >
      <h1 className="text-2xl font-medium mb-3">{content.title}</h1>
      <h2 className="text-lg mb-6 text-muted-foreground">{content.heading}</h2>
      <div className="space-y-2">
        {content.body.map((line, index) => (
          <p key={index} className="text-base">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default MessageDisplay;