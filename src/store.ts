import { create } from "zustand";

type AppState = {
    columns: number;
    setColumns: (count: number) => void;
}

export const useAppStore = create<AppState>()((set) => ({
    columns: 3,
    setColumns: (count: number) => { set({ columns: count }) }
}));