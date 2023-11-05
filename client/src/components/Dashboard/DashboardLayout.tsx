import { PlusIcon } from "lucide-react";
import Logo from "../../assets/logo.svg?react";
import { Button } from "../ui/button";
import { Accordion, AccordionItem, Divider } from "@nextui-org/react";
import UserCard from "../Home/_components/UserCard";
import useUserStore from "@/lib/usercontext";
import WorkspaceCard from "./_components/WorkspaceCard";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const { user } = useUserStore();
  const workspaces = user?.workspaces ?? [];

  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center justify-between px-24 py-4">
        <div className="flex items-center gap-x-4">
          <Logo />
          <Button className="text-white">Create</Button>
        </div>
        <UserCard />
      </div>
      <Divider className="mb-24" />
      <div className="flex flex-1 overflow-hidden">
        <aside className="flex flex-col h-full overflow-auto ml-28 w-96">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold">Workspaces</h2>
            <Button variant="ghost">
              <PlusIcon />
            </Button>
          </div>
          {workspaces.length === 0 ? (
            <p>Add a workspace to get started</p>
          ) : (
            <Accordion>
              {workspaces.map((workspace) => (
                <AccordionItem key={workspace.id} title={workspace.name}>
                  <WorkspaceCard id={user?.id} workspaceId={workspace.id} />
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </aside>
        <div className="flex-1 ml-20 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
