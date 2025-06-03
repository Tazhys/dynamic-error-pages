"use client";

import React from "react";
import { messagesConfig } from "@/config/messages";
import MessageDisplay from "@/components/MessageDisplay";
import DiscordButton from "@/components/DiscordButton";

const ErrorPage: React.FC = () => {
  const defaultMessageContent = messagesConfig.messages[messagesConfig.defaultMessage];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 font-mono">
      <div className="w-full max-w-2xl relative">
        <div className="relative min-h-[240px]">
          <MessageDisplay
            type={messagesConfig.defaultMessage}
            content={defaultMessageContent}
            isVisible={true}
          />
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          <DiscordButton inviteUrl={messagesConfig.discordInviteUrl} />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;