import { Star, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const EmailList = ({ selectedEmail, onEmailSelect }) => {
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

  const emails = [
    {
      id: 1,
      from: "John Doe",
      email: "john@company.com",
      subject: "Excited about the job opportunity!",
      preview: "Hi, I reviewed your job posting and I'm very interested in joining your team...",
      time: "2 hours ago",
      category: "interested",
      starred: true,
      unread: true,
    },
    {
      id: 2,
      from: "Sarah Johnson",
      email: "sarah@startup.io",
      subject: "Re: Interview Schedule",
      preview: "Thanks for reaching out! I'd love to schedule a meeting. Here's my calendar...",
      time: "5 hours ago",
      category: "meeting",
      starred: false,
      unread: true,
    },
    {
      id: 3,
      from: "Mike Wilson",
      email: "mike@tech.com",
      subject: "Out of Office",
      preview: "I'm currently out of office until next Monday. I'll get back to you then...",
      time: "1 day ago",
      category: "outOfOffice",
      starred: false,
      unread: false,
    },
    {
      id: 4,
      from: "Emma Davis",
      email: "emma@design.co",
      subject: "Not interested at this time",
      preview: "Thank you for considering me, but I'm not looking for new opportunities right now...",
      time: "2 days ago",
      category: "notInterested",
      starred: false,
      unread: false,
    },
    {
      id: 5,
      from: "Alex Chen",
      email: "alex@business.com",
      subject: "Partnership Inquiry",
      preview: "I came across your company and would love to discuss potential collaboration...",
      time: "3 days ago",
      category: "interested",
      starred: true,
      unread: false,
    },
  ];

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

  return (
    <div className="w-96 border-r border-border bg-background flex flex-col h-screen">
      <div className="p-4 border-b border-border bg-gradient-subtle">
        <h2 className="text-lg font-semibold text-foreground mb-1">All Emails</h2>
        <p className="text-sm text-muted-foreground">{emails.length} messages</p>
      </div>

      <ScrollArea className="flex-1">
        <div className="divide-y divide-border">
          {emails.map((email) => (
            <button
              key={email.id}
              onClick={() => onEmailSelect(email)}
              className={`w-full text-left p-4 transition-all duration-200 hover:bg-secondary/50 hover:shadow-md ${
                selectedEmail?.id === email.id ? "bg-secondary shadow-md" : ""
              } ${email.unread ? "bg-card" : ""} border-l-4 ${
                selectedEmail?.id === email.id ? "border-primary" : "border-transparent"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-sm font-semibold truncate ${
                      email.unread ? "text-foreground" : "text-muted-foreground"
                    }`}>
                      {email.from}
                    </span>
                    {email.starred && (
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400 flex-shrink-0 drop-shadow-sm" />
                    )}
                  </div>
                  
                  <h3 className={`text-sm truncate mb-1 ${
                    email.unread ? "font-semibold text-foreground" : "text-muted-foreground"
                  }`}>
                    {email.subject}
                  </h3>
                  
                  <p className="text-xs text-muted-foreground truncate mb-2">
                    {email.preview}
                  </p>
                  
                  <div className="flex items-center gap-2">
                    <Badge className={`text-xs shadow-sm ${getCategoryColor(email.category)}`}>
                      {getCategoryLabel(email.category)}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground font-medium">
                      <Clock className="w-3 h-3" />
                      <span>{email.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default EmailList;
