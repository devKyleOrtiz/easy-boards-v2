import React from "react";
import { Activity, Building2, Settings } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface WorkspaceCardProps {
  id: number | undefined;
  workspaceId: number;
}

export default function WorkspaceCard({ id, workspaceId }: WorkspaceCardProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const routes = [
    {
      title: "Boards",
      icon: Building2,
      href: "boards",
    },
    {
      title: "Activity",
      icon: Activity,
      href: "activity",
    },
    {
      title: "Settings",
      icon: Settings,
      href: "settings",
    },
  ];

  const handleNavigation = (relativePath: string) => {
    const basePath = `/users/${id}/workspaces/${workspaceId}`;
    // For the boards route, since it's directly under dashboard, it might not need the trailing '/'
    const path =
      relativePath === "boards"
        ? `${basePath}/boards`
        : `${basePath}/${relativePath}`;
    navigate(path);
  };

  const basePath = `/users/${id}/workspaces/${workspaceId}`;

  const isActive = (relativePath: string) => {
    const fullPath =
      relativePath === "boards"
        ? `${basePath}/boards`
        : `${basePath}/${relativePath}`;
    return location.pathname.includes(fullPath);
  };

  return (
    <div className="flex flex-col space-y-2">
      {routes.map((route) => {
        const Icon = route.icon;
        return (
          <div
            className={`flex items-center cursor-pointer ${
              isActive(route.href)
                ? "bg-muted rounded-lg px-5 py-2 transition"
                : ""
            }`}
            key={route.href}
            onClick={() => handleNavigation(route.href)}
          >
            <Icon
              size={24}
              className={`${
                isActive(route.href)
                  ? "text-primary transition"
                  : "text-gray-600"
              }`}
            />
            <span
              className={`ml-2 ${
                isActive(route.href)
                  ? "text-primary transition"
                  : "text-gray-600"
              }`}
            >
              {route.title}
            </span>
          </div>
        );
      })}
    </div>
  );
}
