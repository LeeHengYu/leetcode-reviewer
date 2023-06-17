import { useEffect } from "react";
import useScripts from "../hook/useScripts";

interface Props {
  selectedSolution: string;
}

const ScriptLoader = ({ selectedSolution }: Props) => {
  const { data, error } = useScripts(selectedSolution);

  useEffect(() => {
    if (error) throw Error("Error loading script");
  }, [error]);

  return <>{data || null}</>;
};

export default ScriptLoader;
