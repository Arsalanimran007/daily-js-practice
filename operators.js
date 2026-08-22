// ===== Comparison operators =====
console.log(10 != "10"); // false -> "!=" converts type before comparing
console.log(10 !== "10"); // true -> "!==" checks type too

// ===== Logical operators: && || ! =====

// && (AND) -> true only if both sides are true
console.log(10 == 10 && false); // false

// || (OR) -> true if at least one side is true
const user = false;
const userB = true;
console.log(user && userB); // false (AND)

// || returns first truthy value, useful for fallback values
const username = NaN;
const displayName = username || "Guest";
console.log(displayName); // "Guest" -> NaN is falsy

console.log(true && false); // false
console.log("ds" && "hello"); // "hello" -> && returns last value if all truthy

// ===== Nullish coalescing (??) =====
// only falls back when value is null or undefined (NOT for 0, "", false)
const count = null;
const result1 = count ?? 100;
console.log(result1); // 100

const emptyArray = [];
console.log(emptyArray ?? "hello"); // [] -> array is not null/undefined, so no fallback

// ===== Optional chaining (?.) =====
// safely access nested properties without throwing an error if missing
const userObj = {
  name: "Arsalan",
};
console.log(userObj?.name?.city); // undefined -> no error even though "city" doesn't exist

const emptyUser = {};
const city = emptyUser.address?.city ?? "Unknown";
console.log(city); // "Unknown" -> address is undefined, ?. stops safely, ?? provides fallback

// ===== Combining && and || =====
const result2 = true || (false && false);
console.log(result2); // true -> short-circuits at first true
