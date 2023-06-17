import { useQuery } from "@tanstack/react-query";
import APIClient from "../service/api-client";


const useScripts = (endpoint: string) => {
    const apiClient = new APIClient(endpoint);

    return useQuery<string, Error>({
        queryKey: ["scripts", endpoint],
        queryFn: apiClient.getAll,
        staleTime: 60*60*1000,
    })
};

export default useScripts;