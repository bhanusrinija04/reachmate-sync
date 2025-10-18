import { Mail, Inbox, Send, Archive, Trash2, Star, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const Sidebar = ({ selectedAccount, onAccountChange, selectedFolder, onFolderChange }) => {
  const accounts = [
    { id: 1, email: "work@company.com", unread: 12 },
    { id: 2, email: "personal@gmail.com", unread: 5 },
  ];

  const folders = [
    { id: "inbox", name: "Inbox", icon: Inbox, count: 17 },
    { id: "sent", name: "Sent", icon: Send, count: 0 },
    { id: "starred", name: "Starred", icon: Star, count: 3 },
    { id: "archive", name: "Archive", icon: Archive, count: 0 },
    { id: "trash", name: "Trash", icon: Trash2, count: 2 },
  ];

  return (
    <div className="w-64 border-r border-border bg-card flex flex-col h-screen">
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-2 mb-4 animate-fade-in">
          <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center shadow-md">
            <Mail className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold text-lg text-foreground tracking-tight">ReachInbox</span>
        </div>
        
        <Button className="w-full bg-gradient-primary hover:opacity-90 text-white shadow-md hover:shadow-glow transition-all duration-300">
          Compose
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-4">
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase mb-2">
              Accounts
            </h3>
            <div className="space-y-1">
              {accounts.map((account) => (
                <button
                  key={account.id}
                  onClick={() => onAccountChange(account.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 ${
                    selectedAccount === account.id
                      ? "bg-secondary text-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-secondary/50 hover:translate-x-1"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm truncate font-medium">{account.email}</span>
                    {account.unread > 0 && (
                      <Badge variant="secondary" className="ml-2 bg-primary text-primary-foreground shadow-sm">
                        {account.unread}
                      </Badge>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase mb-2">
              Folders
            </h3>
            <div className="space-y-1">
              {folders.map((folder) => (
                <button
                  key={folder.id}
                  onClick={() => onFolderChange(folder.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center gap-3 ${
                    selectedFolder === folder.id
                      ? "bg-secondary text-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-secondary/50 hover:translate-x-1"
                  }`}
                >
                  <folder.icon className="w-4 h-4" />
                  <span className="text-sm flex-1 font-medium">{folder.name}</span>
                  {folder.count > 0 && (
                    <span className="text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded">{folder.count}</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>

      <div className="p-4 border-t border-border">
        <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground">
          <Settings className="w-4 h-4 mr-2" />
          Settings
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
