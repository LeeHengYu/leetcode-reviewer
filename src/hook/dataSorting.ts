import { Question } from "../data/tablaData"

const dataSorting = (data: Question[], reverse: boolean, by?: string) => {
    const mapping = ["Easy", "Medium", "Hard"];
    let sortedData = data;

    if (by==="category"){
        sortedData = data.sort((a,b) => {
            //sort by category in lexical order
            return a.category.localeCompare(b.category);
        })
    }

    else if (by==="difficulty"){
        sortedData = data.sort((a,b) => {
            return mapping.indexOf(a.difficulty) - mapping.indexOf(b.difficulty);
        })
    }

    else if (by==="date"){
        sortedData = data.sort((a,b) => {
            if (a.dailyChallenge && !b.dailyChallenge) return -1;
            if (!a.dailyChallenge && b.dailyChallenge) return 1;
            if (a.dailyChallenge && b.dailyChallenge) {
                const date1 = new Date(a.dailyChallenge).getTime();
                const date2 = new Date(b.dailyChallenge).getTime();
                return date2 - date1;
            }
            return 0;
        })
    }

    else {
        sortedData = data.sort((a,b) => {
            return a.question.localeCompare(b.question);
        }); // default sort by question
    }

    if (reverse) return sortedData.reverse();
    return sortedData; 
}

export default dataSorting;