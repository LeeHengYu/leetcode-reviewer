import { createContext } from "react";

interface InputRefContextType {
    inputRef: React.RefObject<HTMLInputElement>;
}

const InputRefContexts = createContext<InputRefContextType>({} as InputRefContextType);

export default InputRefContexts;