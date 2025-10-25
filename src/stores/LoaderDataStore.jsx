import { create } from "zustand";

const useLoaderDataStore = create((set) => ({
  message: undefined,
  setMessage: (message) => set((state) => ({ message: message })),
}));

export default useLoaderDataStore;
