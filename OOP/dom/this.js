// this.a=103;

// // console.log(this)


// const hello =()=>{
//     console.log(this.a)
// }

// hello()


// const user ={
//     name:"arsalan",
//     age:24,
//     childObject:{
//         newName:"Haider",
//         age:28,
//          getDetails(){
//              console.log(this.newName,"and",this.name)
//             }
//             }
//         }

// user.childObject.getDetails()

// const user1 = {
//   name: "Ali"
// };

// function greet(age) {
//   console.log(this.name,"and age is",age);
// }

// const user2={
//     name:"Khan",
// }

// const result = greet.bind(user2,43242,432423);

// console.log(result())


// function abc(){
//    let name="arsalan";

//     function xyz(){
//         console.log(name)
//     }
//         name="ali"

//     return xyz;
// }

// const fn= abc()

// fn()