// // const numbers = [1, 2, 3, 4, 5]

// // const total= numbers.reduce((total,item)=>{
// //     return total === item
// // },0)

// // console.log(total)


// const users = [
//     { id: 1, name: "Ali" },
//     { id: 2, name: "Ahmed" },
//     { id: 3, name: "ahsan" },
// ]

// const usersById=users.reduce((obj,user)=>{
//     obj[0]=user
//     return obj
// },{})

// console.log(usersById)



const users = [
    { id: 1, name: "Ali"   },
    { id: 2, name: "Ahmed" },
    { id: 3, name: "Sara"  },
    { id: 2, name: "Sara"  },
]

const user = users.filter((u) => u.id === 2)
// { id: 2, name: "Ahmed" } ✅

const notFound = users.find((u) => u.id === 99)
// undefined ❌


 console.log(user)
