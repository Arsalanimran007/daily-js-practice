const user = {
    name:"Ali"
}

console.log(user.toString())


const parent = {
    greet(){
        console.log("hello i am from parent")
    }
}


const child = Object.create(parent)

child.greet()