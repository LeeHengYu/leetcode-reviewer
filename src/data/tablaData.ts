export interface Question {
  question: string
  link?: string
  difficulty: string
  category: string
  solution: string
  dailyChallenge?: string
}

const tableData: Question[] = [
    {
      question: "Coin Change",
      link: "https://leetcode.com/problems/coin-change/",
      difficulty: "Medium",
      category: "Dynamic Programming",
      solution: "coin-change.py",
      dailyChallenge: "2023-06-15",
    },
    {
      question: "Make Array Strictly Increasing",
      difficulty: "Hard",
      link: "https://leetcode.com/problems/make-array-strictly-increasing/",
      category: "Dynamic Programming",
      solution: "make-array-strictly-increasing.py",
      dailyChallenge: "2023-06-17",
    },
    {
      question: "Number of Increasing Paths in a Grid",
      link: "https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/",
      difficulty: "Hard",
      category: "Dynamic Programming",
      dailyChallenge: "2023-06-18",
      solution: "number-of-increasing-path-in-a-grid.py"
    },
    {
      question: "Question 3",
      difficulty: "Hard",
      category: "Category 3",
      solution: "Solution 3",
    },
    {
      question: "Question 3",
      difficulty: "Hard",
      category: "Category 3",
      solution: "Solution 3",
    },
    {
      question: "Question 5",
      difficulty: "Easy",
      category: "Category 3",
      solution: "Solution 3",
    },
    {
      question: "Question 7",
      difficulty: "Hard",
      category: "Category 7",
      solution: "Solution 7",
    },
   
  ];

export default tableData;