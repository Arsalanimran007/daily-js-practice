// ===== Without array: separate variables (messy, hard to scale) =====
const fruit1 = "Apple";
const fruit2 = "Banana";
const fruit3 = "Mango";
console.log(fruit1, fruit2, fruit3);

// ===== With array: one variable holds all values =====
const fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);

// ===== Accessing elements (index starts at 0) =====
console.log(fruits[0]); // "Apple"
console.log(fruits[fruits.length - 1]); // "Mango" -> last element

// ===== Adding / removing elements =====
fruits.push("Orange"); // add at the end
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]

fruits.pop(); // remove from the end
console.log(fruits); // ["Apple", "Banana", "Mango"]

// ===== Looping through an array =====
fruits.forEach((fruit) => console.log(fruit));

// ===== Transforming an array (without changing the original) =====
const upperFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(upperFruits); // ["APPLE", "BANANA", "MANGO"]

// ===== Filtering an array =====
const longNames = fruits.filter((fruit) => fruit.length > 5);
console.log(longNames); // ["Banana"] -> only names with more than 5 letters
