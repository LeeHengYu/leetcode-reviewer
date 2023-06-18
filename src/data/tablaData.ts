export interface Question {
  question: string
  link?: string
  difficulty: string
  category: string
  solution: string
  dailyChallenge?: Date
}

const tableData: Question[] = [
    {
      question: "Coin Change",
      link: "https://leetcode.com/problems/coin-change/",
      difficulty: "Medium",
      category: "Dynamic Programming",
      solution: "coin-change.py",
      dailyChallenge: new Date("2023-06-15"),
    },
    {
      question: "Make Array Strictly Increasing",
      difficulty: "Hard",
      link: "https://leetcode.com/problems/make-array-strictly-increasing/",
      category: "Dynamic Programming",
      solution: "make-array-strictly-increasing.py",
      dailyChallenge: new Date("2023-06-17"),
    },
    {
      question: "Number of Increasing Paths in a Grid",
      link: "https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/",
      difficulty: "Hard",
      category: "Dynamic Programming",
      dailyChallenge: new Date("2023-06-18"),
      solution: "number-of-increasing-path-in-a-grid.py"
    },
    {
      question: "Number of Ways to Reorder Array to Get Same BST",
      difficulty: "Hard",
      link: "https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/",
      category: "Math",
      solution: "get-the-same-bst.py",
      dailyChallenge: new Date("2023-06-16"),
    },
    {
      question: "Question dummy",
      difficulty: "Hard",
      category: "Category 1",
      solution: "Solution 1",
    },
    {
      question: "Question dummy",
      difficulty: "Hard",
      category: "Category 1",
      solution: "Solution 1",
    },
    {
      question: "Question dummy",
      difficulty: "Hard",
      category: "Category 1",
      solution: "Solution 1",
    },
    {
      question: "Question dummy",
      difficulty: "Hard",
      category: "Category 1",
      solution: "Solution 1",
    },
    {
      question: "Question dummy",
      difficulty: "Hard",
      category: "Category 1",
      solution: "Solution 1",
    },
    {
      question: "Question dummy",
      difficulty: "Hard",
      category: "Category 1",
      solution: "Solution 1",
    },
    {
      question: "Question dummy",
      difficulty: "Hard",
      category: "Category 1",
      solution: "Solution 1",
    },

   
  ];

export default tableData;