import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/SearchBar";
import EmailList from "@/components/EmailList";
import EmailDetail from "@/components/EmailDetail";
import ComposeDialog from "@/components/ComposeDialog";

const Index = () => {
  const [selectedAccount, setSelectedAccount] = useState(1);
  const [selectedFolder, setSelectedFolder] = useState("inbox");
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilters, setCategoryFilters] = useState({
    interested: true,
    meeting: true,
    notInterested: true,
    outOfOffice: true,
    spam: true,
  });
  const [composeOpen, setComposeOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar
        selectedAccount={selectedAccount}
        onAccountChange={setSelectedAccount}
        selectedFolder={selectedFolder}
        onFolderChange={setSelectedFolder}
        onCompose={() => setComposeOpen(true)}
      />
      
      <div className="flex flex-col flex-1">
        <SearchBar 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          categoryFilters={categoryFilters}
          onCategoryFilterChange={setCategoryFilters}
        />
        
        <div className="flex flex-1 overflow-hidden">
          <EmailList
            selectedEmail={selectedEmail}
            onEmailSelect={setSelectedEmail}
            selectedAccount={selectedAccount}
            selectedFolder={selectedFolder}
            searchQuery={searchQuery}
            categoryFilters={categoryFilters}
          />
          
          <EmailDetail email={selectedEmail} />
        </div>
      </div>
      
      <ComposeDialog open={composeOpen} onOpenChange={setComposeOpen} />
    </div>
  );
};

export default Index;
