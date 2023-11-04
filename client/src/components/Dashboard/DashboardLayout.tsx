import { PlusIcon } from "lucide-react";
import Logo from "../../assets/logo.svg?react";
import { Button } from "../ui/button";
import { Divider } from "@nextui-org/react";
import UserCard from "../Home/_components/UserCard";

export default function DashboardLayout() {
  return (
    <div className="flex flex-col h-screen px-2 py-3">
      <div className="flex items-center justify-between ml-10">
        <div className="flex items-center justify-center gap-x-4">
          <Logo />
          <Button className="text-white">Create</Button>
        </div>
        <UserCard />
      </div>
      <Divider className="my-4" />
      <div className="flex items-center justify-center">
        <aside className="flex items-center justify-between">
          <h2 className="font-bold">Workspaces</h2>
          <Button variant={"ghost"} className="text-white">
            {<PlusIcon />}
          </Button>
        </aside>
        <section></section>
      </div>
    </div>
  );
}
