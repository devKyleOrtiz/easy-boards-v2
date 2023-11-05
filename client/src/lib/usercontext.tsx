import { create } from "zustand";

type WorkspaceType = {
  id: number;
  name: string;
  position: number | null;
  userId: number;
  createdAt: string;
  updatedAt: string;
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
