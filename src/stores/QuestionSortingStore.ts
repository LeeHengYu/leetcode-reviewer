import {create} from "zustand";
interface SortingCriteria {
    by?: string;
}

interface QuestionSortingStore {
    sortingCriteria: SortingCriteria;
    setBy: (by: string) => void;
}

const useQuestionSortingStore = create<QuestionSortingStore>((set) => ({
    sortingCriteria: {reverse: false},
    setBy: (by: string) => {
        set(store => ({ sortingCriteria: { ...store.sortingCriteria, by } }));
    }
}));

export default useQuestionSortingStore;