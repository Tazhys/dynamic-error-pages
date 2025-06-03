# Error Page Generator

A simple Next.js app that displays customizable error and status pages with an nginx-style look. Perfect for showing maintenance messages, 404 pages, coming soon notices, or any custom message you need.

## What it does

This app displays different types of status pages that look like nginx server responses. You can easily switch between different message types like:

- **Coming Soon** - For sites under construction
- **Maintenance** - When you're doing server work  
- **404 Not Found** - For missing pages
- **Configuration Error** - Server error messages
- **Custom** - Whatever you want to say

## Quick Setup

1. **Clone and install**
   ```bash
   git clone https://github.com/Tazhys/dynamic-error-pages.git
   cd dynamic-error-pages
   npm install
   ```

2. **Run it locally**
   ```bash
   npm run dev
   ```
   Open http://localhost:3000 to see it in action.

3. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## Customizing Messages

All the messages are configured in `config/messages.ts`. Here's how to change things:

### Change the default message type

Find this line in `config/messages.ts`:
```typescript
defaultMessage: MessageType.COMING_SOON,
```

Change `COMING_SOON` to any of these:
- `CONFIGURATION_ERROR`
- `COMING_SOON` 
- `MAINTENANCE`
- `NOT_FOUND`
- `CUSTOM`

### Edit message content

Each message type has these parts:
- `pageTitle` - Shows in the browser tab
- `title` - Main heading on the page
- `heading` - The server version line (nginx/1.18.0 Ubuntu)
- `body` - Array of text lines to display

Example of editing the coming soon message:
```typescript
[MessageType.COMING_SOON]: {
  pageTitle: "Coming Soon - My Awesome Site",
  title: "Coming Soon",
  heading: "nginx/1.18.0 (Ubuntu)", // You can change this too
  body: [
    "We're building something cool here.",
    "Should be ready in a few weeks.",
    "Follow us on Twitter for updates: @mysite"
  ]
}
```

### Update the Discord link

Change this line to your Discord server:
```typescript
discordInviteUrl: "https://discord.gg/your-server",
```

## File Structure

```
├── app/
│   ├── page.tsx          # Main page component
│   ├── layout.tsx        # App layout and metadata
│   └── globals.css       # Global styles
├── components/
│   ├── ErrorPage.tsx     # Main error page component
│   ├── MessageDisplay.tsx # Message content display
│   ├── DiscordButton.tsx # Discord invite button
│   └── ui/              # UI components (shadcn/ui)
├── config/
│   └── messages.ts       # All your messages (edit this!)
└── lib/
    ├── types.ts          # TypeScript type definitions
    └── utils.ts          # Utility functions
```

## Styling

The app uses Tailwind CSS and has a monospace font that mimics terminal/server output. The dark theme and green text give it that authentic server vibe.

If you want to change colors or fonts, check out:
- `app/globals.css` for global styles
- `tailwind.config.ts` for Tailwind configuration

## Deployment

This works anywhere Next.js works:

- **Vercel**: Just connect your repo and deploy
- **Netlify**: Same deal, connect and go
- **Docker**: There's probably a Dockerfile you can use
- **Regular server**: Run `npm run build` then `npm start`

## Common Use Cases

**Maintenance page**: Set default to `MAINTENANCE` and customize the message

**Coming soon landing**: Use `COMING_SOON` with your launch timeline

**Custom 404**: Set to `NOT_FOUND` and add your own personality

**Server error page**: Use `CONFIGURATION_ERROR` for when things break

## Tips

- You can add as many lines as you want in the `body` array
- The Discord button only shows if you set a valid invite URL
- Page titles affect SEO and browser tabs
- The nginx version in `heading` is just for show - change it to whatever

## Need Help?

If something's not working, check that:
1. You ran `npm install`
2. You're using Node.js 18 or newer
3. Your message configuration syntax is correct
4. You restarted the dev server after making changes

That's pretty much it! This is intentionally simple - just edit the config file and you're good to go. 