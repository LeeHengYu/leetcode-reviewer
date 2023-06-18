import { create } from "zustand";

export interface Filters {
    text?: string;
    category?: string;
    difficulty?: string;
}

interface QuestionFilterStore {
    filters: Filters;
    setCategory: (category: string) => void;
    setDifficulty: (difficulty: string) => void;
    setSearchText: (text: string) => void;
}

const useQuestionFilterStore = create<QuestionFilterStore>((set) => ({
    filters: {},
    setCategory: (category: string) => {
        set(store => ({ filters: { ...store.filters, category } }));
    },
    setDifficulty: (difficulty: string) => {
        set(store => ({ filters: {...store.filters, difficulty} }));
    },
    setSearchText: (text: string) => {
        set(store => ({ filters: {...store.filters, text} }));
    },
}));

export default useQuestionFilterStore;