import { Question } from "../data/tablaData"

const dataSorting = (data: Question[], reverse: boolean, by?: string) => {
    const mapping = ["Easy", "Medium", "Hard"];
    let sortedData = data;

    if (!by)
        by = "date";

    if (by === "category") {
        sortedData = data.sort((a, b) => {
            //sort by category in lexical order
            return a.category.localeCompare(b.category);
        })
    }

    else if (by === "difficulty") {
        sortedData = data.sort((a, b) => {
            return mapping.indexOf(a.difficulty) - mapping.indexOf(b.difficulty);
        })
    }

    else if (by === "date") {
        sortedData = data.sort((a, b) => {
            if (a.dailyChallenge && b.dailyChallenge) {
                return b.dailyChallenge.valueOf() - a.dailyChallenge.valueOf();
            }
            if (a.dailyChallenge) return -1;
            if (b.dailyChallenge) return 1;
            return 0;
        })
    }

    else {
        sortedData = data.sort((a, b) => {
            return a.question.localeCompare(b.question);
        })
    }

    if (reverse) return sortedData.reverse();
    return sortedData;
}

export default dataSorting;