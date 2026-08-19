const user = {
    name:"Arsalan",

  
}

  function greet(){
        console.log(this.name)
    }
greet.call(user);


