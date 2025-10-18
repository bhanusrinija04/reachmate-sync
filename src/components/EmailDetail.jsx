import { Star, Reply, Forward, Archive, Trash2, MoreVertical, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";

const EmailDetail = ({ email }) => {
  if (!email) {
    return (
      <div className="flex-1 flex items-center justify-center bg-background">
        <div className="text-center">
          <Mail className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">Select an email to view details</p>
        </div>
      </div>
    );
  }

  const getCategoryColor = (category) => {
    const colors = {
      interested: "bg-status-interested text-white",
      meeting: "bg-status-meeting text-white",
      notInterested: "bg-status-not-interested text-white",
      spam: "bg-status-spam text-white",
      outOfOffice: "bg-status-out-of-office text-white",
    };
    return colors[category] || "bg-muted text-muted-foreground";
  };

  const getCategoryLabel = (category) => {
    const labels = {
      interested: "Interested",
      meeting: "Meeting Booked",
      notInterested: "Not Interested",
      spam: "Spam",
      outOfOffice: "Out of Office",
    };
    return labels[category] || category;
  };

  const aiSuggestions = [
    "Thank you for your interest! I'd be happy to discuss this opportunity further. You can book a meeting with me here: https://cal.com/example",
    "I appreciate you reaching out! Let me know your availability and we can schedule a call to discuss the details.",
    "Great to hear from you! I'm available for a call this week. What time works best for you?",
  ];

  return (
    <div className="flex-1 flex flex-col bg-background h-screen">
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Badge className={getCategoryColor(email.category)}>
              {getCategoryLabel(email.category)}
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Star className={email.starred ? "fill-amber-400 text-amber-400" : ""} />
            </Button>
            <Button variant="ghost" size="icon">
              <Archive />
            </Button>
            <Button variant="ghost" size="icon">
              <Trash2 />
            </Button>
            <Button variant="ghost" size="icon">
              <MoreVertical />
            </Button>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-foreground mb-2">{email.subject}</h1>
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-semibold">
            {email.from.charAt(0)}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-medium text-foreground">{email.from}</span>
              <span className="text-sm text-muted-foreground">&lt;{email.email}&gt;</span>
            </div>
            <p className="text-sm text-muted-foreground">{email.time}</p>
          </div>
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-6">
          <div className="prose prose-sm max-w-none text-foreground">
            <p className="mb-4">{email.preview}</p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>Best regards,<br />{email.from}</p>
          </div>

          {email.category === "interested" && (
            <Card className="mt-6 p-4 bg-gradient-subtle border-primary/20">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">AI Suggested Replies</h3>
              </div>
              
              <div className="space-y-3">
                {aiSuggestions.map((suggestion, index) => (
                  <Card 
                    key={index}
                    className="p-3 hover:bg-secondary/50 cursor-pointer transition-all border-border"
                  >
                    <p className="text-sm text-foreground mb-2">{suggestion}</p>
                    <Button size="sm" variant="ghost" className="text-primary hover:text-primary">
                      Use this reply
                    </Button>
                  </Card>
                ))}
              </div>
            </Card>
          )}
        </div>
      </ScrollArea>

      <div className="p-4 border-t border-border">
        <div className="flex gap-2">
          <Button className="flex-1 bg-gradient-primary hover:opacity-90 text-white">
            <Reply className="w-4 h-4 mr-2" />
            Reply
          </Button>
          <Button variant="outline" className="flex-1">
            <Forward className="w-4 h-4 mr-2" />
            Forward
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmailDetail;
