// Spread — bahar phailata hai
const arr = [1, 2, 3]
console.log(Math.max(...arr)) // 3

const user = { name: "Arsalan", age: 20 }
const updated = { ...user, city: "Karachi" }
console.log(updated)

// Rest — andar samet ta hai
function sum(...nums) {
  return nums.reduce((t, n) => t + n, 0)
}
console.log(sum(1, 2, 3, 4)) // 10

const [first, ...rest] = [10, 20, 30, 40]
console.log(first) // 10
console.log(rest)  // [20, 30, 40]
