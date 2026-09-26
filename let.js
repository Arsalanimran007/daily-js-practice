// let globalStatus = "active";

// if (globalStatus === "active") {
//   // Yeh ek naya block scope hai
//   let internalCode = "XYZ-123";
//   internalCode ="323"
//   var oldStyle = "visible everywhere in function";
  
//   console.log(internalCode); // Yeh chal jaye ga: "XYZ-123"
// }

// // console.log(internalCode); 
// // Yeh ReferenceError throw karega kyun ke yeh block ke bahar hai

// console.log(oldStyle); // Yeh chal jaye ga kyun ke var function scope hota hai

// for (let i = 0; i < 3; i++) {
//   // 'i' sirf is loop ke block ke andar hi valid hai
//   setTimeout(() => {
//     console.log(i); 
//   }, 100);

// //   console.log(i)
// }

// // console.log(i); 
// // Yeh ReferenceError throw karega kyun ke 'i' loop ke bahar exist nahi karta


// function testScope() {
//   if (true) {
//     let x = 10;
//   }
//   console.log(x);
// }

// testScope();

// let type = "A";

// switch (type) {
//   case "A":
//     let message = "Hello A";
//     console.log(message);
//     break;
//   case "B":
//     let message = "Hello B";
//     console.log(message);
//     break;
// }

// let a = 10;

// function foo() {
//   console.log(a);   
//   let a = 20;
// }

// foo();


// const user= { name:"Arsalan"}

// user ={name:"sameer"}


// console.log(user.name)

let i = 100;

for (let i = 0; i < 2; i++) {
  console.log(i);
}

console.log(i);

