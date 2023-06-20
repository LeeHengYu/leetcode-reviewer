import { useContext, useEffect } from "react";
import scriptContexts from "../contexts/scriptContexts";
import useScripts from "../hook/useScripts";

interface Props {
  selectedSolution: string;
}

const ScriptLoader = ({ selectedSolution }: Props) => {
  const { data, error } = useScripts(selectedSolution);
  const { dispatch } = useContext(scriptContexts);

  useEffect(() => {
    if (error) throw Error("Error loading script");
    if (data) dispatch({ type: "FECTH_SCRIPTS", data: data });
  }, [data, error]);

  return <>{data || null}</>;
};

export default ScriptLoader;
