import React from "react";
import Logo from "../../../assets/logo.svg?react";
import HoverComponents from "./HoverComponents";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  return (
    <div className="w-screen h-14 flex justify-around items-center bg-background">
      <Logo />
      <HoverComponents />
      <ThemeToggle />
    </div>
  );
}
