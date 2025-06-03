"use client";

import React from "react";
import { MessageType } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MessageSelectorProps {
  currentMessage: MessageType;
  onSelectMessage: (type: MessageType) => void;
}

const MessageSelector: React.FC<MessageSelectorProps> = ({
  currentMessage,
  onSelectMessage,
}) => {
  const messageTypes = [
    { type: MessageType.CONFIGURATION_ERROR, label: "Configuration Error" },
    { type: MessageType.COMING_SOON, label: "Coming Soon" },
    { type: MessageType.MAINTENANCE, label: "Maintenance" },
    { type: MessageType.NOT_FOUND, label: "Not Found" },
    { type: MessageType.CUSTOM, label: "Custom" },
  ];

  return (
    <div className="flex flex-wrap gap-2 mt-10">
      {messageTypes.map((message) => (
        <Button
          key={message.type}
          variant="outline"
          size="sm"
          className={cn(
            "font-mono text-xs transition-colors duration-300",
            currentMessage === message.type
              ? "bg-primary text-primary-foreground"
              : "hover:bg-secondary"
          )}
          onClick={() => onSelectMessage(message.type)}
        >
          {message.label}
        </Button>
      ))}
    </div>
  );
};

export default MessageSelector;