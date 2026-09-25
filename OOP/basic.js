// let date = new Date();

// console.log(date)

// const obj={
//     name:"Arsalan",
//     age:21,
//     introduceMySelf: function(){
//         console.log(this)
//     }
// }

// obj.introduceMySelf()


// function Student(name,age,passion){
//     return {
//         name,
//     age,
//     passion,
//     introduceMySelf: function(){
//         console.log(this)
//     }
//     }
// }


// let result2 = Student("arsalan",25,"cricket")

// console.log(result2)
// result2.introduceMySelf()


// constructor function


// function Student(name,age){
// this.myname=name,
// this.age=age
// return this
// }

// let result =new  Student("ali",25)
// let result2 =new  Student("ali",21)

// console.log(result)
// console.log(result2)

class Student{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}

let result = new Student("ali",254324324)
console.log(result)
