import React, { useEffect } from "react";
import Logo from "../../../assets/logo.svg?react";
import HoverComponents from "./HoverComponents";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "@/providers/theme-provider";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import useUserStore from "@/lib/usercontext";
import getUser from "@/actions/getUser";
import { useNavigate } from "react-router-dom";
import UserCard from "./UserCard";

export default function Navbar() {
  const { theme } = useTheme();
  const { user, setUser } = useUserStore();
  const { data, isLoading } = getUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);

  function handleAuth() {
    if (!user) {
      navigate("/login");
    }
  }

  return (
    <div
      className={cn("w-screen h-14 flex justify-around items-center", {
        "bg-primary": theme === "light",
        "bg-background": theme === "dark",
      })}
    >
      <Logo />
      <HoverComponents />
      <div className="flex items-center justify-center space-x-4">
        <ThemeToggle />
        {!user && (
          <Button
            className={cn("text-white flex justify-center items-center", {
              "bg-background hover:bg-secondary transition text-black":
                theme === "light",
            })}
            onClick={handleAuth}
            disabled={isLoading}
          >
            login
          </Button>
        )}
        {user && <UserCard />}
      </div>
    </div>
  );
}
