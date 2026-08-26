// const users = [
//     { name: "Ali", active: true },
//     { name: "Ahmed", active: false },
//     { name: "Arsalan", active: true }
//   ];

//   for (const user of users) {
//     if (user.active) {
//       console.log(user.name);
//     }
//   }
// const user = {
//     name: "Arsalan",
//     age: 25,
//     city: "Karachi"
//   };

//   for (const key in user) {
//     console.log(key, user[key]);    
//   }

//   for(let i= 0; i <= 10; i++) {
//     if(i === 5) {
//       continue;
//     }
//     if(i === 8) {
//       break;
//     }
//     console.log(i);
//   }

//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//   for(let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
//   }

const parent={
  country:"Paksitan"
}

const user = {
  name:"Arsalan",
  age:25,
}

// console.log(Object.keys(user))

for(const keys in user){
  console.log(keys,user)
}

