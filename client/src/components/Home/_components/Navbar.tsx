import React from "react";
import Logo from "../../../assets/logo.svg?react";
import HoverComponents from "./HoverComponents";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "@/providers/theme-provider";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const { theme } = useTheme();

  return (
    <div
      className={cn("w-screen h-14 flex justify-around items-center", {
        "bg-primary": theme === "light",
        "bg-background": theme === "dark",
      })}
    >
      <Logo />
      <HoverComponents />
      <ThemeToggle />
    </div>
  );
}
