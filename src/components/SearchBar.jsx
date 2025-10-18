import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SearchBar = () => {
  return (
    <div className="border-b border-border bg-card">
      <div className="p-4 flex items-center gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search emails (powered by Elasticsearch)..."
            className="pl-10 bg-background border-border"
          />
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>Filter by Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked>
              Interested
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>
              Meeting Booked
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>
              Not Interested
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>
              Out of Office
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>
              Spam
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="outline" size="icon">
          <SlidersHorizontal className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
