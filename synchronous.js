// console.log("A");
// console.log("B");
// console.log("C");

// console.log("a")

const timer= setInterval(()=>{
    console.log("B")
},5000)


clearInterval(timer)

// const timer = setTimeout(()=>{
//     console.log("Hello")
// },2000)

// clearTimeout(timer)

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

console.log("3");