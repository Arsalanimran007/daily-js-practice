const promise = new Promise((resolve, reject) => {
  reject("Failed!");
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  }).finally(()=>{
    console.log("donine")
  })


Promise.all()