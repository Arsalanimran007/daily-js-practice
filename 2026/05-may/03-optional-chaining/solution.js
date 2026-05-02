// Optional Chaining ?. — crash rokta hai

const user = { name: "Arsalan", address: { city: "Karachi" } }
const user2 = { name: "Ali" }

console.log(user.address?.city)   // "Karachi"
console.log(user2.address?.city)  // undefined — crash nahi

// ?? ke saath
console.log(user2.address?.city ?? "No city") // "No city"

// Array aur function ke saath
const arr = [1, 2, 3]
console.log(arr?.[0])   // 1
console.log(null?.[0])  // undefined

const obj = { greet: () => "Hello" }
console.log(obj.greet?.())  // "Hello"
console.log(obj.bye?.())    // undefined
