import { create } from "zustand";

export interface Filters {
    text?: string;
    category?: string;
    difficulty?: string;
    onlyDC?: boolean;
}

interface QuestionFilterStore {
    filters: Filters;
    setCategory: (category: string) => void;
    setDifficulty: (difficulty: string) => void;
    setSearchText: (text: string) => void;
    setDC: (onlyDC: boolean) => void;
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
    setDC: (onlyDC: boolean) => {
        set(store => ({ filters: {...store.filters, onlyDC} }));
    }
}));

export default useQuestionFilterStore;