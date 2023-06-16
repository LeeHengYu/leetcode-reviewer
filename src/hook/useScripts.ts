import { useQuery } from "@tanstack/react-query";
import axios from "axios";


interface Content {
  type: string;
  encoding: string;
  size: number;
  name: string;
  path: string;
  content: string;
  sha: string;
  url: string;
  git_url: string;
  html_url: string;
  download_url: string;
    _links: {
        git: string;
        self: string;
        html: string;
    };
}

// const octokit = new Octokit({ 
//   request: request.defaults({
//     headers: {
//       authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
//     },
//   }),
// });

// export const fetchFile = async () => {
//     const { data } = await octokit.request(
//       'GET /repos/{owner}/{repo}/contents/{path}',
//       {
//         owner: 'LeeHengYu',
//         repo: 'LeetCodeRevision',
//         path: 'coin-change.py',
//       }
//     );
  
//     return data;
//   };


export const useScripts = () => {
    const fetchFile = () => 
        axios.get<Content[]>(`https://api.github.com/repos/LeeHengYu/LeetCodeRevision/contents/`)
             .then((res) => res.data);

  const { data, error } = useQuery<Content[], Error>({
    queryKey: ["scripts"],
    queryFn: fetchFile, 
    // staleTime: 30 * 60 * 1000,
  });

  return { data, error };
};
