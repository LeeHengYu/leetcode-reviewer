import { Question } from "../data/tablaData"

const sortData = (data: Question[], by?: string) => {
    return data.sort( (a,b) => {
        const diffimap = ["Easy", "Medium", "Hard"];
        return diffimap.indexOf(a.difficulty)-diffimap.indexOf(b.difficulty);
    } )
}

export default sortData;