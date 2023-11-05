import React from "react";

type BoardCardProps = {
  id: number;
  position: number;
  title: string;
  workspace_id: number;
  background_url: string;
};

export default function BoardCard({
  id,
  position,
  title,
  workspace_id,
  background_url,
}: BoardCardProps) {
  const cardStyle = {
    backgroundImage: `url(${background_url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      style={{ ...cardStyle }}
      className={`relative w-72 h-40 rounded-lg shadow-md overflow-hidden hover:scale-110 transition cursor-pointer drop-shadow-lg `}
    >
      <div className="absolute inset-0 bg-black bg-opacity-25"></div>
      <p className="absolute text-lg font-semibold text-white top-2 left-5">
        {title}
      </p>
    </div>
  );
}
