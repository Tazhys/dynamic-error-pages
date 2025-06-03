/**
 * Types for the NGINX error page clone
 */

// Message types
export enum MessageType {
  CONFIGURATION_ERROR = "configuration_error",
  COMING_SOON = "coming_soon",
  MAINTENANCE = "maintenance",
  NOT_FOUND = "not_found",
  CUSTOM = "custom"
}

// Message content structure
export interface MessageContent {
  pageTitle: string;
  title: string;
  heading: string;
  body: string[];
}

// Message configuration
export interface MessagesConfig {
  defaultMessage: MessageType;
  enableRotation: boolean;
  rotationInterval: number;
  discordInviteUrl: string;
  messages: {
    [key in MessageType]: MessageContent;
  };
}