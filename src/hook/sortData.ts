import { Question } from "../data/tablaData"

const sortData = (data: Question[], by?: string) => {
    if (by=="difficulty")
        return data.sort( (a,b) => {
            const diffimap = ["Easy", "Medium", "Hard"];
            return diffimap.indexOf(a.difficulty)-diffimap.indexOf(b.difficulty);
        } )
    else {
        return data.sort( (a,b) => {
            // sort by daily challenge
            if (a.dailyChallenge && b.dailyChallenge) {
                return a.dailyChallenge.getTime() - b.dailyChallenge.getTime();
            }
            else if (a.dailyChallenge && !b.dailyChallenge) {
                return -1;
            }
            return 1;
    })
}}

export default sortData;