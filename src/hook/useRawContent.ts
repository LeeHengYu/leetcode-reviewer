import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useRawContent = (path: string) => {
    const fetchContent = () => 
        axios.get<string>(path)
          .then((res) => res.data);

    const { data, error } = useQuery({
        queryKey: ["scripts", "python"],
        queryFn: fetchContent, 
        staleTime: 30 * 60 * 1000,
    });

  return { data, error };
}

export default useRawContent;
