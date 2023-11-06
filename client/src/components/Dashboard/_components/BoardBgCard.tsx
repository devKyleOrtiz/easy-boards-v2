import React from "react";

interface BoardBgCardProps {
  imageUrl: string;
}
export default function BoardBgCard({ imageUrl }: BoardBgCardProps) {
  return (
    <div className="max-w-md transition cursor-pointer hover:opacity-60">
      <img
        className="object-cover w-full h-20 rounded-lg"
        alt="Picture of a scenic background"
        src={imageUrl}
      />
    </div>
  );
}
