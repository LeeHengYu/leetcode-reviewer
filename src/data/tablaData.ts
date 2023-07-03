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
    },
    {
      question: "Maximum Level Sum of a Binary Tree",
      link: "https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/",
      difficulty: "Medium",
      category: "Tree",
      solution: "maximum-level-sum-of-a-binary-tree.py",
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
      link: "https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/",
      difficulty: "Hard",
      category: "Math",
      solution: "get-the-same-bst.py",
      dailyChallenge: new Date("2023-06-16"),
    },
    {
      question: "Shortest Path in Binary Matrix",
      link: "https://leetcode.com/problems/shortest-path-in-binary-matrix/",
      difficulty: "Medium",
      category: "Graph",
      solution: "shortest-path-in-binary-matrix.py",
      dailyChallenge: new Date("2023-06-01"),
    },//
    {
      question: "Detonate the Maximum Bombs",
      link: "https://leetcode.com/problems/detonate-the-maximum-bombs/",
      difficulty: "Medium",
      category: "Graph",
      solution: "detonate-the-maximum-bombs.py",
      dailyChallenge: new Date("2023-06-02"),
    },//
    {
      question: "Time Needed to Inform All Employees",
      link: "https://leetcode.com/problems/time-needed-to-inform-all-employees/",
      difficulty: "Medium",
      category: "Graph",
      solution: "time-needed-to-inform-all-employees.py",
      dailyChallenge: new Date("2023-06-03"),
    },//
    {
      question: "Number of Provinces",
      link: "https://leetcode.com/problems/number-of-provinces/",
      difficulty: "Medium",
      category: "Graph",
      solution: "number-of-provinces.py",
      dailyChallenge: new Date("2023-06-04"),
    },//
    {
      question: "Check If It Is a Straight Line",
      link: "https://leetcode.com/problems/check-if-it-is-a-straight-line/",
      difficulty: "Easy",
      category: "Math",
      solution: "check-if-it-is-a-straight-line.py",
      dailyChallenge: new Date("2023-06-05"),
    },
    {
      question: "Can Make Arithmetic Progression From Sequence",
      link: "https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/",
      difficulty: "Easy",
      category: "Arrays & Hashing",
      solution: "can-make-arithmetic-progression-from-sequence.py",
      dailyChallenge: new Date("2023-06-06"),
    },//
    {
      question: "Minimum Flips to Make a OR b Equal to c",
      link: "https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/",
      difficulty: "Medium",
      category: "Bit Manipulation",
      solution: "minimum-flips-to-make-a-or-b-equal-to-c.py",
      dailyChallenge: new Date("2023-06-07"),
    },
    {
      question: "Count Negative Numbers in a Sorted Matrix",
      link: "https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/",
      difficulty: "Easy",
      category: "Arrays & Hashing",
      solution: "count-negative-numbers-in-a-sorted-matrix.py",
      dailyChallenge: new Date("2023-06-08"),
    },
    {
      question: "Find Smallest Letter Greater Than Target",
      link: "https://leetcode.com/problems/find-smallest-letter-greater-than-target/",
      difficulty: "Easy",
      category: "Binary Search",
      solution: "find-smallest-letter-greater-than-target.py",
      dailyChallenge: new Date("2023-06-09"),
    },
    {
      question: "Maximum Value at a Given Index in a Bounded Array",
      link: "https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/",
      difficulty: "Medium",
      category: "Binary Search",
      solution: "maximum-value-at-a-given-index-in-a-bounded-array.py",
      dailyChallenge: new Date("2023-06-10"),
    },//
    {
      question: "Snapshot Array",
      link: "https://leetcode.com/problems/snapshot-array/",
      difficulty: "Hard",
      category: "Arrays & Hashing",
      solution: "snapshot-array.py",
      dailyChallenge: new Date("2023-06-11"),
    },
    {
      question: "Summary Ranges",
      link: "https://leetcode.com/problems/summary-ranges/",
      difficulty: "Easy",
      category: "Interval",
      solution: "summary-ranges.py",
      dailyChallenge: new Date("2023-06-12"),
    },
    {
      question: "Equal Row and Column Pairs",
      link: "https://leetcode.com/problems/equal-row-and-column-pairs/",
      difficulty: "Medium",
      category: "Arrays & Hashing",
      solution: "equal-row-and-column-pairs.py",
      dailyChallenge: new Date("2023-06-13"),
    },
    {
      question: "Minimum Absolute Difference in BST",
      link: "https://leetcode.com/problems/minimum-absolute-difference-in-bst/",
      difficulty: "Easy",
      category: "Tree",
      solution: "minimum-absolute-difference-in-bst.py",
      dailyChallenge: new Date("2023-06-14"),
    },
    {
      question: "Find the Highest Altitude",
      link: "https://leetcode.com/problems/find-the-highest-altitude/",
      difficulty: "Easy",
      category: "Arrays & Hashing",
      solution: "find-the-highest-altitude.py",
      dailyChallenge: new Date("2023-06-19"),
    },
    {
      question: "K Radius Subarray Averages",
      link: "https://leetcode.com/problems/k-radius-subarray-averages/",
      difficulty: "Medium",
      category: "Arrays & Hashing",
      solution: "k-radius-subarray-averages.py",
      dailyChallenge: new Date("2023-06-20"),
    },
    {
      question: "Minimum Cost to Make Array Equal",
      link: "https://leetcode.com/problems/minimum-cost-to-make-array-equal/",
      difficulty: "Hard",
      category: "Binary Search",
      solution: "minimum-cost-to-make-array-equal.py",
      dailyChallenge: new Date("2023-06-21"),
    },
    {
      question: "Painting the Walls",
      link: "https://leetcode.com/problems/painting-the-walls/",
      difficulty: "Hard",
      category: "Dynamic Programming",
      solution: "painting-the-walls.py",
    },
    {
      question: "Find the Value of the Partition",
      link: "https://leetcode.com/problems/find-the-value-of-the-partition/",
      difficulty: "Medium",
      category: "Arrays & Hashing",
      solution: "find-the-value-of-the-partition.py",
    },
    {
      question: "Total Distance Traveled",
      link: "https://leetcode.com/problems/total-distance-traveled/",
      difficulty: "Easy",
      category: "Arrays & Hashing",
      solution: "total-distance-traveled.py",
    },
    {
      question: "Best Time to Buy and Sell Stock with Transaction Fee",
      link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/",
      difficulty: "Medium",
      category: "Dynamic Programming",
      solution: "best-time-to-buy-and-sell-stock-with-transaction-fee.py",
      dailyChallenge: new Date("2023-06-22"),
    },
    {
      question: "X of a Kind in a Deck of Cards",
      link: "https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/",
      difficulty: "Easy",
      category: "Arrays & Hashing",
      solution: "x-of-a-kind-in-a-deck-of-cards.py",
    },
    {
      question: "Maximum Product of Three Numbers",
      link: "https://leetcode.com/problems/maximum-product-of-three-numbers/",
      difficulty: "Easy",
      category: "Heap / Priority Queue",
      solution: "maximum-product-of-three-numbers.py",
    },
    {
      question: "Longest Arithmetic Subsequence",
      link: "https://leetcode.com/problems/longest-arithmetic-subsequence/",
      difficulty: "Medium",
      category: "Dynamic Programming",
      solution: "longest-arithmetic-subsequence.py",
      dailyChallenge: new Date("2023-06-23"),
    },
    {
      question: "Tallest Billboard",
      link: "https://leetcode.com/problems/tallest-billboard/",
      difficulty: "Hard",
      category: "Dynamic Programming",
      solution: "tallest-billboard.py",
      dailyChallenge: new Date("2023-06-24"),
    },
    {
      question: "Count All Possible Routes",
      link: "https://leetcode.com/problems/count-all-possible-routes/",
      difficulty: "Hard",
      category: "Graph",
      solution: "count-all-possible-routes.py",
      dailyChallenge: new Date("2023-06-25"),
    },
    {
      question: "Number of Beautiful Pairs",
      difficulty: "Easy",
      link: "https://leetcode.com/problems/number-of-beautiful-pairs/",
      category: "Arrays & Hashing",
      solution: "number-of-beautiful-pairs.py",
    },
    {
      question: "Minimum Operations to Make the Integer Zero",
      link: "https://leetcode.com/problems/minimum-operations-to-make-the-integer-zero/",
      difficulty: "Medium",
      category: "Bit Manipulation",
      solution: "minimum-operations-to-make-the-integer-zero.py",
    },
    {
      question: "Total Cost to Hire K Workers",
      link: "https://leetcode.com/problems/total-cost-to-hire-k-workers/",
      difficulty: "Medium",
      category: "Priority Queue",
      solution: "total-cost-to-hire-k-workers.py",
      dailyChallenge: new Date("2023-06-26"),
    },
    {
      question: "Number of Ways to Split Array",
      link: "https://leetcode.com/problems/number-of-ways-to-split-array/",
      difficulty: "Medium",
      category: "Arrays & Hashing",
      solution: "number-of-ways-to-split-array.py",
    },
    {
      question: "All Divisions With the Highest Score of a Binary Array",
      link: "https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array/",
      difficulty: "Medium",
      category: "Arrays & Hashing",
      solution: "all-divisions-with-the-highest-score-of-a-binary-array.py",
    },
    {
      question: "Extra Characters in a String",
      link: "https://leetcode.com/problems/extra-characters-in-a-string/",
      difficulty: "Medium",
      category: "Dynamic Programming",
      solution: "extra-characters-in-a-string.py",
    },
    {
      question: "Find K Pairs with Smallest Sums",
      link: "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/",
      difficulty: "Medium",
      category: "Priority Queue",
      solution: "find-k-pairs-with-smallest-sums.py",
      dailyChallenge: new Date("2023-06-27"),
    },
    {
      question: "Guess Number Higher or Lower II",
      link: "https://leetcode.com/problems/guess-number-higher-or-lower-ii/",
      difficulty: "Medium",
      category: "Dyamic Programming",
      solution: "guess-number-higher-or-lower-ii.py",
    },
    {
      question: "Path with Maximum Probability",
      link: "https://leetcode.com/problems/path-with-maximum-probability/",
      difficulty: "Medium",
      category: "Graph",
      solution: "path-with-maximum-probability.py",
      dailyChallenge: new Date("2023-06-28"),
    },
    {
      question: "Shortest Path to Get All Keys",
      link: "https://leetcode.com/problems/shortest-path-to-get-all-keys/",
      difficulty: "Hard",
      category: "Graph",
      solution: "shortest-path-to-get-all-keys.py",
      dailyChallenge: new Date("2023-06-29"),
    },
    {
      question: "Last Day Where You Can Still Cross",
      link: "https://leetcode.com/problems/last-day-where-you-can-still-cross/",
      difficulty: "Hard",
      category: "Graph",
      solution: "last-day-where-you-can-still-cross.py",
      dailyChallenge: new Date("2023-06-30"),
    },
    {
      question: "Fair Distribution of Cookies",
      link: "https://leetcode.com/problems/fair-distribution-of-cookies/",
      difficulty: "Medium",
      category: "Backtracking",
      solution: "fair-distribution-of-cookies.py",
      dailyChallenge: new Date("2023-07-01"),
    },
    {
      question: "Maximum Number of Achievable Transfer Requests",
      link: "https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/",
      difficulty: "Hard",
      category: "Backtracking",
      solution: "maximum-number-of-achievable-transfer-requests.py",
      dailyChallenge: new Date("2023-07-02"),
    },
    {
      question: "Buddy Strings",
      link: "https://leetcode.com/problems/buddy-strings/",
      difficulty: "Easy",
      category: "Arrays & Hashing",
      solution: "buddy-strings.py",
      dailyChallenge: new Date("2023-07-03"),
    },
  ];

export default tableData;