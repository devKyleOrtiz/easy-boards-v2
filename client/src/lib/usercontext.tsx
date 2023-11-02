import { create } from "zustand";

type UserType = {
  id: number;
  username?: string;
  email: string;
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
