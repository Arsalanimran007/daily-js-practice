class Student{
    #marks = 100;

    subMarks(){
         this.marks-=10;
    }
    addMarks(){
        this.#marks+=10;
    }
     resultCard(){
        this.subMarks()
        console.log("Your Result is")
    }

    set secureBalance(marks){
        if(isNaN(marks)){
            console.error("not a numbre bc")
        }
        return;
        console.log("balance set successfully")
        this.addMarks()
    }
    
    get balance(){
        return this.marks
    }

}

let result = new Student();
result.resultCard()
result.secureBalance="lol"
result.balance
console.log(result.balance)



