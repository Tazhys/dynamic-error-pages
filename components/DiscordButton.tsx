import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface DiscordButtonProps {
  inviteUrl: string;
}

const DiscordButton: React.FC<DiscordButtonProps> = ({ inviteUrl }) => {
  return (
    <Button
      variant="outline"
      className="font-mono text-sm gap-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
      onClick={() => window.open(inviteUrl, "_blank")}
    >
      Join Discord <ExternalLink size={16} />
    </Button>
  );
};

export default DiscordButton;