import { create } from "zustand";

export interface Filters {
    name?: string;
    category?: string;
    difficulty?: "Easy" | "Medium" | "Hard";
}

interface QuestionFilterStore {
    filters: Filters;
    setCategory: (category: string) => void;
    setDifficulty: (difficulty: "Easy" | "Medium" | "Hard") => void;
    setDate: (date: Date) => void;
    setSearchText: (text: string) => void;
}

const useQuestionFilterStore = create<QuestionFilterStore>((set) => ({
    filters: {},
    setCategory: (category: string) => {
        set(store => ({ filters: { ...store.filters, category } }));
    },
    setDifficulty: (difficulty: "Easy" | "Medium" | "Hard") => {
        set(store => ({ filters: {...store.filters, difficulty} }));
    },
    setDate: (date: Date) => {
        set(store => ({ filters: {...store.filters, date} }));
    },
    setSearchText: (text: string) => {
        set(store => ({ filters: {...store.filters, text} }));
    },
}));

export default useQuestionFilterStore;