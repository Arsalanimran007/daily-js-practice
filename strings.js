// ===== Basics: length & concatenation =====
const name = "arsalan";
console.log(name.length); // 7

const firstName = "Arsalan";
const city = "Karachi";
console.log(firstName + 25 + city); // "Arsalan25Karachi"

// template literals -> cleaner way to combine strings
const message = `my name is ${firstName}, I live in ${city}`;
console.log(message);

// ===== Case conversion =====
console.log(name.toUpperCase()); // "ARSALAN"
console.log(name.toLowerCase()); // "arsalan"

// ===== Trim: remove extra spaces from start/end =====
const username = "   Arsalan   ";
console.log(username.trim()); // "Arsalan"

// ===== Searching inside a string =====
const email = "Arsalan@";
console.log(email.includes("@")); // true
console.log(email.indexOf("s")); // 2 -> position of first "s"

// ===== slice: extract part of a string =====
console.log(name.slice(0, 5)); // "arsal" -> chars from index 0 to 4

const fullName = "Ali Khan";
console.log(fullName.slice(-5)); // " Khan" -> last 5 characters

// ===== substring: like slice, but negative index treated as 0 =====
console.log(firstName.substring(-1)); // "Arsalan" -> negative becomes 0

// ===== split: turn a string into an array =====
const person = "Arsalan Ali";
console.log(person.split(" ")); // ["Arsalan", "Ali"] -> split by space

// ===== replaceAll: replace every match =====
const repeated = "cat cat cat";
console.log(repeated.replaceAll("cat", "dog")); // "dog dog dog"
