import { Question } from "../data/tablaData"

const sortData = (data: Question[], by?: string) => {
    if (!by)
        return data.sort( (a,b) => {
            const diffimap = ["Easy", "Medium", "Hard"];
            return diffimap.indexOf(a.difficulty)-diffimap.indexOf(b.difficulty);
        } )
    return data;
}

export default sortData;