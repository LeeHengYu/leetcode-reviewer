import { useContext, useEffect } from "react";
import ScriptContext from "../contexts/scriptContexts";
import useScripts from "../hook/useScripts";

interface Props {
  selectedSolution: string;
}

const ScriptLoader = ({ selectedSolution }: Props) => {
  const { data, error } = useScripts(selectedSolution);
  const { script, dispatch } = useContext(ScriptContext);

  useEffect(() => {
    if (error) throw Error("Error loading script");
    if (data) dispatch({ type: "FECTH_SCRIPTS", data: script });
  }, [error]);

  return <>{data || null}</>;
};

export default ScriptLoader;
