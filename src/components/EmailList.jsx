import { Star, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { mockEmails } from "@/data/mockEmails";

const EmailList = ({ 
  selectedEmail, 
  onEmailSelect, 
  selectedAccount, 
  selectedFolder,
  searchQuery,
  categoryFilters 
}) => {
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

  // Filter emails based on all criteria
  const filteredEmails = mockEmails.filter(email => {
    // Filter by account
    if (email.accountId !== selectedAccount) return false;
    
    // Filter by folder
    if (email.folder !== selectedFolder) return false;
    
    // Filter by category
    if (!categoryFilters[email.category]) return false;
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        email.from.toLowerCase().includes(query) ||
        email.email.toLowerCase().includes(query) ||
        email.subject.toLowerCase().includes(query) ||
        email.preview.toLowerCase().includes(query)
      );
    }
    
    return true;
  });

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

  const getFolderName = (folder) => {
    const names = {
      inbox: "Inbox",
      sent: "Sent",
      starred: "Starred",
      archive: "Archive",
      trash: "Trash",
    };
    return names[folder] || folder;
  };

  return (
    <div className="w-96 border-r border-border bg-background flex flex-col h-screen">
      <div className="p-4 border-b border-border bg-gradient-subtle">
        <h2 className="text-lg font-semibold text-foreground mb-1">{getFolderName(selectedFolder)}</h2>
        <p className="text-sm text-muted-foreground">{filteredEmails.length} messages</p>
      </div>

      <ScrollArea className="flex-1">
        {filteredEmails.length === 0 ? (
          <div className="p-8 text-center">
            <p className="text-muted-foreground">No emails found</p>
          </div>
        ) : (
          <div className="divide-y divide-border">
            {filteredEmails.map((email) => (
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
        )}
      </ScrollArea>
    </div>
  );
};

export default EmailList;
