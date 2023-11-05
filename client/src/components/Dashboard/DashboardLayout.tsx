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
    <div className="flex flex-col h-screen px-2 py-3">
      <div className="flex items-center justify-between px-20">
        <div className="flex items-center justify-center gap-x-4">
          <Logo />
          <Button className="text-white">Create</Button>
        </div>
        <UserCard />
      </div>
      <Divider className="my-4 mb-10" />
      <div className="flex items-center justify-center max-w-lg ml-32">
        <aside className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full">
            <h2 className="font-bold">Workspaces</h2>
            <Button variant={"ghost"} className="text-white">
              {<PlusIcon />}
            </Button>
          </div>
          {workspaces.length === 0 ? (
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Add a workspace to get started
            </p>
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
        <section className="flex-1">
          <Outlet />
        </section>
      </div>
    </div>
  );
}
