import { Dispatch } from "react";
import { ScriptAction } from "../reducers/scriptReducer";
import React from "react";


interface ScriptContextType {
    script: string;
    dispatch: Dispatch<ScriptAction>;
}

const ScriptContext = React.createContext<ScriptContextType>({} as ScriptContextType);

export default ScriptContext;