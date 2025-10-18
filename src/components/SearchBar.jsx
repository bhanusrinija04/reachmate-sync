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

const SearchBar = ({ searchQuery, onSearchChange, categoryFilters, onCategoryFilterChange }) => {
  const handleCategoryToggle = (category) => {
    onCategoryFilterChange({
      ...categoryFilters,
      [category]: !categoryFilters[category],
    });
  };
  return (
    <div className="border-b border-border bg-gradient-subtle">
      <div className="p-4 flex items-center gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search emails (powered by Elasticsearch)..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 bg-background border-border focus:border-primary transition-all duration-200 shadow-sm"
          />
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="hover:bg-secondary transition-all">
              <Filter className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>Filter by Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem 
              checked={categoryFilters.interested}
              onCheckedChange={() => handleCategoryToggle('interested')}
            >
              Interested
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem 
              checked={categoryFilters.meeting}
              onCheckedChange={() => handleCategoryToggle('meeting')}
            >
              Meeting Booked
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem 
              checked={categoryFilters.notInterested}
              onCheckedChange={() => handleCategoryToggle('notInterested')}
            >
              Not Interested
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem 
              checked={categoryFilters.outOfOffice}
              onCheckedChange={() => handleCategoryToggle('outOfOffice')}
            >
              Out of Office
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem 
              checked={categoryFilters.spam}
              onCheckedChange={() => handleCategoryToggle('spam')}
            >
              Spam
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="outline" size="icon" className="hover:bg-secondary transition-all">
          <SlidersHorizontal className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
