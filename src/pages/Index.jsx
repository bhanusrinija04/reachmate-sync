import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/SearchBar";
import EmailList from "@/components/EmailList";
import EmailDetail from "@/components/EmailDetail";

const Index = () => {
  const [selectedAccount, setSelectedAccount] = useState(1);
  const [selectedFolder, setSelectedFolder] = useState("inbox");
  const [selectedEmail, setSelectedEmail] = useState(null);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar
        selectedAccount={selectedAccount}
        onAccountChange={setSelectedAccount}
        selectedFolder={selectedFolder}
        onFolderChange={setSelectedFolder}
      />
      
      <div className="flex flex-col flex-1">
        <SearchBar />
        
        <div className="flex flex-1 overflow-hidden">
          <EmailList
            selectedEmail={selectedEmail}
            onEmailSelect={setSelectedEmail}
          />
          
          <EmailDetail email={selectedEmail} />
        </div>
      </div>
    </div>
  );
};

export default Index;
