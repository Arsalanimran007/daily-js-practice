// 1. Har object ka ek prototype hota hai
const person = {
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};

const arsalan = {
  name: "Arsalan",
};

// arsalan ke prototype ko person set kar diya
Object.setPrototypeOf(arsalan, person);

arsalan.greet(); // "Hi, I am Arsalan"
// greet() arsalan pe nahi hai, but JS ne prototype chain mein person tak jaake dhoond liya


// 2. __proto__ se chain dekhna
console.log(arsalan.__proto__ === person); // true
console.log(person.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null -> chain yahan khatam


// 3. Functions ka apna .prototype property hota hai (constructor functions ke liye)
function Animal(name) {
  this.name = name;
}

// Animal se banne wale sab objects ko ye method milega
Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

const dog = new Animal("Dog");
dog.speak(); // "Dog makes a sound."
// dog khud pe speak() nahi rakhta, Animal.prototype se milta hai

console.log(dog.__proto__ === Animal.prototype); // true


// 4. Prototype chain ka fayda: memory saving
// Har naye object pe method copy nahi hota, sab ek hi prototype ko share karte hain
const cat = new Animal("Cat");
console.log(dog.speak === cat.speak); // true -> same function reference
