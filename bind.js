const user= {
    name:"Arsalan",
}
 function greet(){
        console.log(this.name)
    }
const fn = greet.bind(user)


fn()