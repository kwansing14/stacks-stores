import { create } from "zustand";

interface Store {
  message: string;
}

export const useStore = create<Store>()((set) => ({
  message: "ehee",
  setMessage: (message: string) => set({ message }),
}));
