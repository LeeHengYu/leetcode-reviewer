
interface FetchAction {
    type: "FECTH_SCRIPTS";
    data: string;
}

interface ResetAction {
    type: "RESET" | "FETCH_SCRIPTS_ERROR";
}

export type ScriptAction = FetchAction | ResetAction;

const scriptReducer = ( state: string, action: ScriptAction ): string => {
    if (action.type === "FECTH_SCRIPTS") {
        return action.data;
    }
    if (action.type === "RESET" || action.type === "FETCH_SCRIPTS_ERROR") {
        return "";
    }
    return state;
}

export default scriptReducer;