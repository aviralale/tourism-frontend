// src/components/Navbar.js
import React from "react";
import { House, MessageCircle, Telescope, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import useAuthCheck from "@/utils/hooks/withAuthCheck";

import "./Navbar.css";

export default function Navbar() {
  const isAuthenticated = useAuthCheck();
  return (
    <div className="flex justify-center">
      <ul className="nav-links px-5 py-2 transition-all shadow-sm hover:shadow-lg flex gap-8 absolute bottom-10">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <li className="nav-link">
                <Link to="/">
                  <House />
                </Link>
              </li>
            </TooltipTrigger>
            <TooltipContent>
              <p>Home</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <li className="nav-link">
                <Link to="/chats">
                  <MessageCircle />
                </Link>
              </li>
            </TooltipTrigger>
            <TooltipContent>
              <p>Chats</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <li className="nav-link">
                <Link to="/explore">
                  <Telescope />
                </Link>
              </li>
            </TooltipTrigger>
            <TooltipContent>
              <p>Explore</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <li className="nav-link">
                <Link to="/account">
                  {isAuthenticated ? (
                    <Avatar className='w-8 h-8'>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  ) : (
                    <UserRound />
                  )}
                </Link>
              </li>
            </TooltipTrigger>
            <TooltipContent>
              <p>Account</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </ul>
    </div>
  );
}
