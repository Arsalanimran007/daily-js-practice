
// function Student(name,age){
    
//         this.name=name;
//         this.age=age;
//         // this.introduceMySelf= function(){
//         //     console.log(`my name is ${this.name} and my age is ${this.age}`)
//         // }
    
// }

// Student.prototype.introduceMySelf= function(){
//             console.log(`my name is ${this.name} and my age is ${this.age}`)
//         }

// console.log(Student.prototype)

// let result =new Student("ali",21)
// let result2 =new Student("ali",12)
// console.log(result)
// console.log(result2)


function BankAccount(accountName,accountBalance=0){
    this.accountName= accountName;
    this.accountBalance=accountBalance;
    // this.deposit= function(balance){
    //     this.accountBalance = this.accountBalance + balance;
    // }
    // this.withdraw= function(balance){
    //      this.accountBalance = this.accountBalance - balance;
    // }
}

BankAccount.prototype.deposit= function(balance){
        this.accountBalance = this.accountBalance + balance;
    }
    BankAccount.prototype.withdraw= function(balance){
         this.accountBalance = this.accountBalance - balance;
    }

let accountInfo= new BankAccount("arsalan",1500)
let accountInfo2= new BankAccount("arsalan",15020)

console.log(accountInfo)
console.log(accountInfo2)