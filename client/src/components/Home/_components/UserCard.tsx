import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User,
} from "@nextui-org/react";
import useUserStore from "@/lib/usercontext";
import { useTheme } from "@/providers/theme-provider";
import { cn } from "@/lib/utils";
import { useMutation } from "react-query";
import axios from "axios";

export default function UserCard() {
  const { user } = useUserStore();
  const { theme } = useTheme();
  const handleLogout = useMutation(() => {
    return axios.delete(`/api/logout`);
  });

  return (
    <>
      <Dropdown placement="bottom-start">
        <DropdownTrigger className="cursor-pointer">
          <User
            className={cn({
              "text-white": theme === "light",
            })}
            name={user?.email}
            description={user?.username}
            isFocusable={true}
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem key="profile" className="gap-2 h-14">
            <p className="font-bold">Signed in as</p>
            <p className="font-bold">{user?.email}</p>
          </DropdownItem>
          <DropdownItem key="settings">My Settings</DropdownItem>
          <DropdownItem key="analytics">Analytics</DropdownItem>
          <DropdownItem key="system">System</DropdownItem>
          <DropdownItem key="configurations">Configurations</DropdownItem>
          <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
          <DropdownItem
            key="logout"
            color="danger"
            onClick={() => handleLogout.mutate}
          >
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}
