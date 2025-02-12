import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, Home, User } from "lucide-react";

interface HeaderProps {
  user: {
    name: string;
    role: string;
  };
}

const Header = ({ user }: HeaderProps) => {
  return (
    <header className="h-16 border-b border-gray-200 px-4 flex bg-white fixed top-0 left-0 w-full shadow-md z-50">
      <Image
        className="dark:invert mx-8"
        src="/logo_salim.png"
        alt="Salim Tani logo"
        width={180}
        height={38}
        priority
      />
      <div className="flex items-center space-x-4 justify-between w-full">
        <nav className="hidden md:flex space-x-4">
          <Button variant="ghost" size="icon">
            <Home className="w-5 h-5" />
          </Button>
          <Button variant="ghost">Menu 1</Button>
          <Button variant="ghost">Menu 2</Button>
          <Button variant="ghost">Menu 3</Button>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Bell className="w-5 h-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>{user.name}</span>
                <span className="text-gray-500 text-sm">{user.role}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
