import { MessageType } from "@/lib/types";

/**
 * Configuration for the error page messages
 * Customize your messages here
 */
export const messagesConfig = {
  defaultMessage: MessageType.COMING_SOON,
  discordInviteUrl: "https://discord.gg/your-server",
  messages: {
    [MessageType.CONFIGURATION_ERROR]: {
      pageTitle: "404 Not Found - Server Error",
      title: "404 Not Found",
      heading: "nginx/1.18.0 (Ubuntu)",
      body: [
        "nginx was unable to process this request correctly.",
        "There might be a problem with the site configuration.",
        "Check server logs for more information."
      ]
    },
    [MessageType.COMING_SOON]: {
      pageTitle: "Coming Soon - Site Under Construction",
      title: "Coming Soon",
      heading: "nginx/1.18.0 (Ubuntu)",
      body: [
        "This site is under construction and will be available soon.",
        "We're working hard to bring you an amazing experience.",
        "Check back later or join our Discord for updates."
      ]
    },
    [MessageType.MAINTENANCE]: {
      pageTitle: "Maintenance Mode - Temporary Downtime",
      title: "Maintenance Mode",
      heading: "nginx/1.18.0 (Ubuntu)",
      body: [
        "This site is currently undergoing scheduled maintenance.",
        "We apologize for any inconvenience this may cause.",
        "Please check back shortly as service will resume soon."
      ]
    },
    [MessageType.NOT_FOUND]: {
      pageTitle: "404 Not Found - Page Not Found",
      title: "404 Not Found",
      heading: "nginx/1.18.0 (Ubuntu)",
      body: [
        "The requested resource could not be found on this server.",
        "The URL may be misspelled or the page you're looking for is no longer available.",
        "Please check the URL or return to the homepage."
      ]
    },
    [MessageType.CUSTOM]: {
      pageTitle: "Custom Message - Site Information",
      title: "Custom Message",
      heading: "nginx/1.18.0 (Ubuntu)",
      body: [
        "This is a custom message that can be configured as needed.",
        "Edit the content in the configuration file to display your own text.",
        "You can include multiple lines of text as shown here."
      ]
    }
  }
};