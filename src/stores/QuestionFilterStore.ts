import { create } from "zustand";

export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface Filters {
    text: string;
    category: string;
    difficulty: Difficulty;
    onlyDC: boolean;
}

interface QuestionFilterStore {
    filters: Filters;
    setCategory: (category: string) => void;
    setDifficulty: (difficulty: Difficulty) => void;
    setSearchText: (text: string) => void;
    setDC: (onlyDC: boolean) => void;
}

const useQuestionFilterStore = create<QuestionFilterStore>((set) => ({
    filters: {
        text: "",
        category: "Arrays & Hashing",
        difficulty: "Easy",
        onlyDC: false
    }, // default values

    setCategory: (category: string) => {
        set(store => ({ filters: { ...store.filters, category } }));
    },
    setDifficulty: (difficulty: Difficulty) => {
        set(store => ({ filters: { ...store.filters, difficulty } }));
    },
    setSearchText: (text: string) => {
        set(store => ({ filters: { ...store.filters, text } }));
    },
    setDC: (onlyDC: boolean) => {
        set(store => ({ filters: { ...store.filters, onlyDC } }));
    }
}));

export default useQuestionFilterStore;