import { create } from "zustand";

const useUserStore = create((set) => ({
  user: undefined,
  userTechList: undefined,
  setUser: (username) => set((state) => ({ user: username })),
  setUserTechList: (list) => set((state) => ({ userTechList: list })),
}));

export default useUserStore;
