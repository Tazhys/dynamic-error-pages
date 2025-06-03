import ErrorPage from "@/components/ErrorPage";
import { messagesConfig } from "@/config/messages";
import type { Metadata } from 'next';

export function generateMetadata(): Metadata {
  const defaultMessageContent = messagesConfig.messages[messagesConfig.defaultMessage];
  
  return {
    title: defaultMessageContent.pageTitle,
    description: defaultMessageContent.body[0], // Use first line of body as description
  };
}

export default function Home() {
  return <ErrorPage />;
}