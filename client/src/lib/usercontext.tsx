import { create } from "zustand";

type BoardType = {
  title: string;
  workspace_id: number;
  position: number;
  background_url: string;
};

type WorkspaceType = {
  id: number;
  name: string;
  position: number | null;
  userId: number;
  createdAt: string;
  updatedAt: string;
  boards: BoardType[];
};
type UserType = {
  id: number;
  username?: string;
  email: string;
  workspaces: WorkspaceType[];
};

type UserStore = {
  user: UserType | null;
  setUser: (user: UserType) => void;
};

const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

export default useUserStore;
