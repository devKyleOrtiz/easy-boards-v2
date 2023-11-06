import React from "react";
import { useNavigate } from "react-router-dom";

type BoardCardProps = {
  id: number;
  position: number;
  title: string;
  workspace_id: number;
  background_url: string;
  userId: number;
};

export default function BoardCard({
  id,
  position,
  userId,
  title,
  workspace_id,
  background_url,
}: BoardCardProps) {
  const navigate = useNavigate();

  const cardStyle = {
    backgroundImage: `url(${background_url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      style={{ ...cardStyle }}
      onClick={() =>
        navigate(`/users/${userId}/workspaces/${workspace_id}/boards/${id}`)
      }
      className={`relative w-72 h-40 rounded-lg shadow-md overflow-hidden hover:scale-110 transition cursor-pointer drop-shadow-lg `}
    >
      <div className="absolute inset-0 bg-black bg-opacity-25"></div>
      <p className="absolute text-lg font-semibold text-white top-2 left-5">
        {title}
      </p>
    </div>
  );
}
