import { Question } from "../data/tablaData"

const dataSorting = (data: Question[], reverse: boolean, by?: string) => {
    let sortedData = data;
    if (by==="Category"){
        sortedData = data.sort((a,b) => {
            if (a.category && b.category){
                return (a.category > b.category) ? 1 : -1;
            }
            else return 0;
        })
    }

    if (by==="Difficulty"){
        const mapping = ["Easy", "Medium", "Hard"];
        sortedData = data.sort((a,b) => {
            return mapping.indexOf(a.difficulty) - mapping.indexOf(b.difficulty);
        })
    }

    else {
        sortedData = data.sort((a,b) => {
            if (a.dailyChallenge && b.dailyChallenge){
                return (a.dailyChallenge > b.dailyChallenge) ? 1 : -1;
            }
            else if (a.dailyChallenge){
                return -1;
            }
            else if (b.dailyChallenge){
                return 1;
            }
            else return 0
        }).reverse(); // default sort by date
    }

    if (reverse) return sortedData.reverse();
    return sortedData; 
}

export default dataSorting;