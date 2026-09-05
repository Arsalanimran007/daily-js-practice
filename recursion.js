// ===== Recursion: a function that calls itself =====
// Every recursive function needs:
// 1. Base case -> stops the recursion
// 2. Recursive case -> calls itself with a smaller problem

function countDown(n) {
  console.log(n);

  if (n > 0) {
    countDown(n - 1); // recursive case: call with a smaller n
  }
  // base case: when n === 0, it just logs 0 and stops (no more call)
}

countDown(3); // 3, 2, 1, 0

// ===== Classic example: factorial =====
// factorial(4) = 4 * 3 * 2 * 1 = 24
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1; // base case
  }
  return n * factorial(n - 1); // recursive case
}

console.log(factorial(4)); // 24

// ===== Sum of numbers from 1 to n =====
function sumUpTo(n) {
  if (n === 0) {
    return 0; // base case
  }
  return n + sumUpTo(n - 1); // recursive case
}

console.log(sumUpTo(5)); // 15 -> 5+4+3+2+1
