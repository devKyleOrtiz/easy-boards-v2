import axios from "axios";
import { User2 } from "lucide-react";
import React from "react";
import { useQuery } from "react-query";
import BoardCard from "./BoardCard";
import BoardModal from "./BoardModal";
import { useDisclosure } from "@nextui-org/react";

interface Board {
  id: number;
  position: number;
  title: string;
  workspace_id: number;
  background_url: string;
}

interface BoardsSectionProps {
  workspaceId?: number;
  userId?: number;
}
export default function BoardsSection({
  workspaceId,
  userId,
}: BoardsSectionProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { data } = useQuery({
    queryKey: ["boards"],
    queryFn: () =>
      axios.get(`/api/users/${userId}/workspaces/${workspaceId}/boards`),
  });

  return (
    <section className="flex flex-col ml-5">
      <div className="flex items-center justify-start gap-x-3">
        <User2 className="text-muted-foreground" />
        <p className="text-2xl text-muted-foreground">Your boards</p>
      </div>
      <div className="grid grid-cols-4 gap-10 mt-5">
        {data?.data.map((board: Board) => (
          <BoardCard
            key={board.id}
            userId={userId!}
            id={board.id}
            title={board.title}
            background_url={board.background_url}
            position={board.position}
            workspace_id={board.workspace_id}
          />
        ))}

        <BoardModal isOpen={isOpen} onOpenChange={onOpenChange} />
      </div>
    </section>
  );
}
