import { Question } from "../data/tablaData"
import { Filters } from "../stores/QuestionFilterStore";

const DataQuery = (data: Question[], query: Filters) => {
    let filteredData = data;
    if (query.category) {
        filteredData = filteredData.filter((question) => question.category === query.category);
    }
    if (query.difficulty) {
        filteredData = filteredData.filter((question) => question.difficulty === query.difficulty);
    }
    if (query.text) {
        filteredData = filteredData.filter((question) => (question.question).toLowerCase().includes((query.text!).toLowerCase()));
    }
    return filteredData;
}

export default DataQuery;