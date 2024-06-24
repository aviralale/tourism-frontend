import React from "react";
import { House, MessageCircle, Telescope, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import useAuthCheck from "@/utils/hooks/withAuthCheck";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import "./Navbar.css";

export default function Navbar() {
  const { isAuthenticated, userProfile } = useAuthCheck();

  const renderAvatar = () => {
    if (!isAuthenticated || !userProfile) {
      return <UserRound />;
    }

    const initials = `${userProfile.user.first_name.charAt(0)}${userProfile.user.last_name.charAt(0)}`.toUpperCase();

    return (
      <Avatar className="w-8 h-8">
        <AvatarImage src={`http://127.0.0.1:8000${userProfile.pfp}`} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
    );
  };

  return (
    <div className="flex justify-center">
      <ul className="nav-links px-5 py-2 transition-all shadow-sm hover:shadow-lg flex gap-8 absolute bottom-10">
        {/* Navigation links */}
        <li className="nav-link">
          <Link to="/">
            <House />
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/chats">
            <MessageCircle />
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/explore">
            <Telescope />
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/account">{renderAvatar()}</Link>
        </li>
      </ul>
    </div>
  );
}