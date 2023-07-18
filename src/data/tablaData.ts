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
    {
      question: "Single-Threaded CPU",
      link: "https://leetcode.com/problems/single-threaded-cpu/",
      difficulty: "Medium",
      category: "Priority Queue",
      solution: "single-threaded-cpu.py",
    },
    {
      question: "Single Number II",
      link: "https://leetcode.com/problems/single-number-ii/",
      difficulty: "Medium",
      category: "Arrays & Hashing",
      solution: "single-number-ii.py",
      dailyChallenge: new Date("2023-07-04"),
    },
    {
      question: "Remove Zero Sum Consecutive Nodes from Linked List",
      link: "https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/",
      difficulty: "Medium",
      category: "Linked List",
      solution: "remove-zero-sum-consecutive-nodes-from-linked-list.py",
    },    
    {
      question: "Longest Subarray of 1's After Deleting One Element",
      link: "https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/",
      difficulty: "Medium",
      category: "Sliding Window",
      solution: "longest-subarray-of-1s-after-deleting-one-element.py",
      dailyChallenge: new Date("2023-07-05"),
    },
    {
      question: "Minimum Size Subarray Sum",
      link: "https://leetcode.com/problems/minimum-size-subarray-sum/",
      difficulty: "Medium",
      category: "Sliding Window",
      solution: "minimum-size-subarray-sum.py",
      dailyChallenge: new Date("2023-07-06"),
    },
    {
      question: "Combinations",
      link: "https://leetcode.com/problems/combinations/",
      difficulty: "Medium",
      category: "Backtracking",
      solution: "combinations.py",
    },
    {
      question: "Maximize the Confusion of an Exam",
      link: "https://leetcode.com/problems/maximize-the-confusion-of-an-exam/",
      difficulty: "Medium",
      category: "Sliding Window",
      solution: "maximize-the-confusion-of-an-exam.py",
      dailyChallenge: new Date("2023-07-07"),
    },
    {
      question: "Put Marbles in Bags",
      link: "https://leetcode.com/problems/put-marbles-in-bags/",
      difficulty: "Hard",
      category: "Math",
      solution: "put-marbles-in-bags.py",
      dailyChallenge: new Date("2023-07-08"),
    },
    {
      question: "Substring With Largest Variance",
      link: "https://leetcode.com/problems/substring-with-largest-variance/",
      category: "Arrays & Hashing",
      difficulty: "Hard",
      solution: "substring-with-largest-variance.py",
      dailyChallenge: new Date("2023-07-09"),
    },
    {
      question: "Subarray Sum Equals K",
      link: "https://leetcode.com/problems/subarray-sum-equals-k/",
      category: "Arrays & Hashing",
      difficulty: "Medium",
      solution: "subarray-sum-equals-k.py",
    },
    {
      question: "Minimum Depth of Binary Tree",
      link: "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
      category: "Tree",
      difficulty: "Easy",
      solution: "minimum-depth-of-binary-tree.py",
      dailyChallenge: new Date("2023-07-10"),
    },
    {
      question: "Maximum Depth of Binary Tree",
      link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
      category: "Tree",
      difficulty: "Easy",
      solution: "maximum-depth-of-binary-tree.py",
    },
    {
      question: "All Nodes Distance K in Binary Tree",
      link: "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/",
      category: "Tree",
      difficulty: "Medium",
      solution: "all-nodes-distance-k-in-binary-tree.py",
      dailyChallenge: new Date("2023-07-11"),
    },
    {
      question: "Find Eventual Safe States",
      link: "https://leetcode.com/problems/find-eventual-safe-states/",
      category: "Advanced Graph",
      difficulty: "Medium",
      solution: "find-eventual-safe-states.py",
      dailyChallenge: new Date("2023-07-12"),
    },
    {
      question: "Course Schedule",
      link: "https://leetcode.com/problems/course-schedule/",
      category: "Advanced Graph",
      difficulty: "Medium",
      solution: "course-schedule.py",
      dailyChallenge: new Date("2023-07-13"),
    },
    {
      question: "Course Schedule II",
      link: "https://leetcode.com/problems/course-schedule-ii/",
      category: "Advanced Graph",
      difficulty: "Medium",
      solution: "course-schedule-ii.py",
    },
    {
      question: "Maximum Subarray Sum with One Deletion",
      link: "https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/",
      category: "Arrays & Hashing",
      difficulty: "Medium",
      solution: "maximum-subarray-sum-with-one-deletion.py",
    },
    {
      question: "Verifying an Alien Dictionary",
      link: "https://leetcode.com/problems/verifying-an-alien-dictionary/",
      category: "Arrays & Hashing",
      difficulty: "Easy",
      solution: "verifying-an-alien-dictionary.py",
    },
    {
      question: "Decode String",
      link: "https://leetcode.com/problems/decode-string/",
      category: "Stack",
      difficulty: "Medium",
      solution: "decode-string.py",
    },
    {
      question: "Longest Arithmetic Subsequence of Given Difference",
      link: "https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/",
      category: "Dynamic Programming",
      difficulty: "Medium",
      solution: "longest-arithmetic-subsequence-of-given-difference.py",
      dailyChallenge: new Date("2023-07-14"),
    },
    {
      question: "Insert Interval",
      link: "https://leetcode.com/problems/insert-interval/",
      category: "Interval",
      difficulty: "Medium",
      solution: "insert-interval.py",
    },
    {
      question: "Longest Increasing Path in a Matrix",
      link: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/",
      category: "Dynamic Programming",
      difficulty: "Hard",
      solution: "longest-increasing-path-in-a-matrix.py",
    },
    {
      question: "Palindrome Partitioning",
      link: "https://leetcode.com/problems/palindrome-partitioning/",
      category: "Backtracking",
      difficulty: "Medium",
      solution: "palindrome-partitioning.py",
    },
    {
      question: "Valid Sudoku",
      link: "https://leetcode.com/problems/valid-sudoku/",
      category: "Arrays & Hashing",
      difficulty: "Medium",
      solution: "valid-sudoku.py",
    },
    {
      question: "Min Stack",
      link: "https://leetcode.com/problems/min-stack/",
      category: "Stack",
      difficulty: "Medium",
      solution: "min-stack.py",
    },
    {
      question: "Detect Squares",
      link: "https://leetcode.com/problems/detect-squares/",
      category: "Arrays & Hashing",
      difficulty: "Medium",
      solution: "detect-squares.py",
    },
    {
      question: "House Robber II",
      link: "https://leetcode.com/problems/house-robber-ii/",
      category: "Dynamic Programming",
      difficulty: "Medium",
      solution: "house-robber-ii.py",
    },
    {
      question: "Target Sum",
      link: "https://leetcode.com/problems/target-sum/",
      category: "Backtracking",
      difficulty: "Medium",
      solution: "target-sum.py",
    },
    {
      question: "Valid Parenthesis String",
      link: "https://leetcode.com/problems/valid-parenthesis-string/",
      category: "Greedy",
      difficulty: "Medium",
      solution: "valid-parenthesis-string.py",
    },
    {
      question: "Maximum Number of Events That Can Be Attended II",
      link: "https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/",
      category: "Dynamic Programming",
      difficulty: "Hard",
      solution: "maximum-number-of-events-that-can-be-attended-ii.py",
      dailyChallenge: new Date("2023-07-15"),
    },
    {
      question: "Maximum Number of Events That Can Be Attended",
      link: "https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/",
      category: "Heap / Priority Queue",
      difficulty: "Medium",
      solution: "maximum-number-of-events-that-can-be-attended.py",
    },
    {
      question: "Daily Temperatures",
      link: "https://leetcode.com/problems/daily-temperatures/",
      category: "Stack",
      difficulty: "Medium",
      solution: "daily-temperatures.py",
    },
    {
      question: "Reconstruct Itinerary",
      link: "https://leetcode.com/problems/reconstruct-itinerary/",
      category: "Advanced Graph",
      difficulty: "Hard",
      solution: "reconstruct-itinerary.py",
    },
    {
      question: "Construct Binary Tree from Preorder and Inorder Traversal",
      link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
      category: "Tree",
      difficulty: "Medium",
      solution: "construct-binary-tree-from-preorder-and-inorder-traversal.py",
    },
    {
      question: "Merge k Sorted Lists",
      link: "https://leetcode.com/problems/merge-k-sorted-lists/",
      category: "Heap / Priority Queue",
      difficulty: "Hard",
      solution: "merge-k-sorted-lists.py",
    },
    {
      question: "Non-overlapping Intervals",
      link: "https://leetcode.com/problems/non-overlapping-intervals/",
      category: "Interval",
      difficulty: "Medium",
      solution: "non-overlapping-intervals.py",
    },
    {
      question: "Number of Subsequences That Satisfy the Given Sum Condition",
      link: "https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/",
      category: "Pointers",
      difficulty: "Medium",
      solution: "number-of-subsequences-that-satisfy-the-given-sum-condition.py",
    },
    {
      question: "Smallest Sufficient Team",
      link: "https://leetcode.com/problems/smallest-sufficient-team/",
      category: "Backtracking",
      difficulty: "Hard",
      solution: "smallest-sufficient-team.py",
      dailyChallenge: new Date("2023-07-16"),
    },
    {
      question: "Valid Parentheses",
      link: "https://leetcode.com/problems/valid-parentheses/",
      category: "Stack",
      difficulty: "Easy",
      solution: "valid-parentheses.py",
    },
    {
      question: "Connecting Graph III",
      link: "https://www.lintcode.com/problem/591/",
      category: "Advanced Graph",
      difficulty: "Medium",
      solution: "union-find-algorithm.py",
    },
    {
      question: "Maximum Beauty of an Array After Applying Operation",
      link: "https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/",
      category: "Sliding Window",
      difficulty: "Medium",
      solution: "maximum-beauty-of-an-array-after-applying-operation.py",
    },
    {
      question: "Sum of Squares of Special Elements",
      link: "https://leetcode.com/problems/sum-of-squares-of-special-elements/",
      category: "Arrays & Hashing",
      difficulty: "Easy",
      solution: "sum-of-squares-of-special-elements.py",
    },
    {
      question: "Minimum Index of a Valid Split",
      link: "https://leetcode.com/problems/minimum-index-of-a-valid-split/",
      category: "Arrays & Hashing",
      difficulty: "Medium",
      solution: "minimum-index-of-a-valid-split.py",
    },
    {
      question: "Add Two Numbers II",
      link: "https://leetcode.com/problems/add-two-numbers-ii/",
      category: "Linked List",
      difficulty: "Medium",
      solution: "add-two-numbers-ii.py",
      dailyChallenge: new Date("2023-07-17"),
    },
    {
      question: "Length of the Longest Valid Substring",
      link: "https://leetcode.com/problems/length-of-the-longest-valid-substring/",
      category: "Sliding Window",
      difficulty: "Hard",
      solution: "length-of-the-longest-valid-substring.py",
    },
    {
      question: "Partition Labels",
      link: "https://leetcode.com/problems/partition-labels/",
      category: "Greedy",
      difficulty: "Medium",
      solution: "partition-labels.py",
    },
    {
      question: "Counting Bits",
      link: "https://leetcode.com/problems/counting-bits/",
      category: "Dynamic Programming",
      difficulty: "Easy",
      solution: "counting-bits.py",
    },
    {
      question: "Pow(x, n)",
      link: "https://leetcode.com/problems/powx-n/",
      category: "Math",
      difficulty: "Medium",
      solution: "powx-n.py",
    },
    {
      question: "Unique Length-3 Palindromic Subsequences",
      link: "https://leetcode.com/problems/unique-length-3-palindromic-subsequences/",
      category: "Arrays & Hashing",
      difficulty: "Medium",
      solution: "unique-length-3-palindromic-subsequences.py",
    },
    {
      question: "Valid Palindrome II",
      link: "https://leetcode.com/problems/valid-palindrome-ii/",
      category: "Pointers",
      difficulty: "Easy",
      solution: "valid-palindrome-ii.py",
    },
    {
      question: "Count Good Nodes in Binary Tree",
      link: "https://leetcode.com/problems/count-good-nodes-in-binary-tree/",
      category: "Tree",
      difficulty: "Medium",
      solution: "count-good-nodes-in-binary-tree.py",
    },
    {
      question: "LRU Cache",
      link: "https://leetcode.com/problems/lru-cache/",
      category: "Linked List",
      difficulty: "Medium",
      solution: "lru-cache.py",
      dailyChallenge: new Date("2023-07-18"),
    },
    {
      question: "Longest Palindromic Subsequence",
      link: "https://leetcode.com/problems/longest-palindromic-subsequence/",
      category: "Dynamic Programming",
      difficulty: "Medium",
      solution: "longest-palindromic-subsequence.py",
    },
  ];

export default tableData;