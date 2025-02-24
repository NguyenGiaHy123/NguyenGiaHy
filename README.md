Code Challenge - Frontend Submission

Author: Nguyễn Gia Hỷ

Repository: NguyenGiaHy

Table of Contents

Problem 1: Summation Function

Problem 2: Currency Swap Form

Problem 3: ReactJS Code Optimization

Setup & Installation

Technologies Used

Problem 1: Summation Function

This problem requires implementing sum_to_n(n), which calculates the sum of all integers from 1 to n.

Implementations:

Iterative Approach (Loop-based)

Uses a for loop to iterate from 1 to n and accumulate the sum.

Time Complexity: O(n)

Mathematical Formula (Gauss' Formula)

Uses the formula: sum_to_n(n) = (n * (n + 1)) / 2.

Time Complexity: O(1) (Constant time)

Recursive Approach

Calls itself recursively until n reaches 1.

Time Complexity: O(n) (Recursive depth)

Problem 2: Currency Swap Form

A user-friendly currency exchange form allowing users to swap assets between different currencies.

Features:

Real-time Exchange Rates - Fetches live token prices from Switcheo API.✅ Intuitive UI/UX - Modern, user-friendly design with validation and error handling.✅ Fast Performance - Built with Vite for optimized frontend experience.

 Problem 3: ReactJS Code Optimization

Identified Inefficiencies & Anti-patterns:

Unnecessary Re-renders - Using state where a simple variable is sufficient.❌ Inefficient use of useEffect - Fetching data without proper dependency handling.❌ Direct State Mutation - Modifying state directly instead of using React’s setter functions.

Refactored Code Improvements:

React.memo & useCallback - Prevents unnecessary re-renders.✅ Optimized useEffect - Uses correct dependencies to avoid infinite loops.✅ TypeScript Best Practices - Ensures better type safety and maintainability.

🛠️ Setup & Installation

1️Clone the Repository:

git clone https://github.com/NguyenGiaHy123/NguyenGiaHy.git
cd NguyenGiaHy

2 Install Dependencies:

npm install

3Run the Project:

npm run dev

 Technologies Used

ReactJS & TypeScript

Vite - For fast builds

Tailwind CSS - For modern styling

Axios - For fetching API data
![image](https://github.com/user-attachments/assets/ea02dcd9-62f5-4e2b-82ca-d402417b2a91)



