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

    if (by==="difficulty"){
        sortedData = data.sort((a,b) => {
            return mapping.indexOf(a.difficulty) - mapping.indexOf(b.difficulty);
        })
    }

    else if (!by) {
        sortedData = data.sort((a,b) => {
            if (a.dailyChallenge && b.dailyChallenge){
                return (a.dailyChallenge > b.dailyChallenge) ? 1 : -1;
            }
            else if (a.dailyChallenge){
                return 1;
            }
            else if (b.dailyChallenge){
                return -1;
            }
            else return 0
        }).reverse(); // default sort by date
    }

    if (reverse) return sortedData.reverse();
    return sortedData; 
}

export default dataSorting;