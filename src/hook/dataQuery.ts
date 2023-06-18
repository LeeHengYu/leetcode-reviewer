import { Question } from "../data/tablaData"
import { Filters } from "../store";

const DataQuery = (data: Question[], query: Filters) => {
    let filteredData = data;
    if (query.category) {
        filteredData = filteredData.filter((question) => question.category === query.category);
    }
    if (query.difficulty) {
        filteredData = filteredData.filter((question) => question.difficulty === query.difficulty);
    }
    if (query.name) {
        filteredData = filteredData.filter((question) => question.question.includes(query.name!));
    }
    return filteredData;
}

export default DataQuery;