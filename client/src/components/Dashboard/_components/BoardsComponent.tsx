import useUserStore from "@/lib/usercontext";
import { Divider } from "@nextui-org/react";
import { Building, CreditCard } from "lucide-react";
import React from "react";
import { useParams } from "react-router-dom";
import BoardsSection from "./BoardsSection";

export default function BoardsComponent() {
  const { user } = useUserStore();
  const { workspaceId } = useParams();
  const { id } = useParams();

  if (workspaceId === undefined) {
    // Handle the case where workspaceId is not available
    return <div>Error: No workspace selected.</div>;
  }

  const userId = parseInt(id!);
  const workspaceIndex = parseInt(workspaceId, 10);
  const workspace = user?.workspaces[workspaceIndex - 1];
  return (
    <section className="flex flex-col items-start justify-center mr-52 space-y-7">
      <div className="flex items-center justify-start w-full space-x-5">
        <div className="p-2 rounded-lg bg-gradient-to-br from-red-500 to-blue-600">
          <Building size={64} />
        </div>
        <div className="flex flex-col items-start justify-center ml-2 space-y-3">
          <h3 className="text-2xl font-semibold tracking-tight scroll-m-20">
            {workspace?.name}
          </h3>
          <div className="flex items-center justify-center">
            <CreditCard size={20} className="text-muted-foreground" />
            <p className="flex items-center ml-2 text-sm text-muted-foreground">
              Free
            </p>
          </div>
        </div>
      </div>

      <Divider />

      <BoardsSection workspaceId={workspaceIndex} userId={userId} />
    </section>
  );
}
