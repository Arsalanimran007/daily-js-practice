var lol="ali"

function run() {
  
  if (true) {
    var leakedVariable = "main block se bahar bhi mil sakta hoon";
    
  }
console.log(lol)

  console.log(leakedVariable); // "main block se bahar bhi mil sakta hoon"
}

run();


console.log(notYetDefined); // undefined (koi error nahi aata!)
var notYetDefined = "ab meri value assign ho gayi hai";
console.log(notYetDefined); // "ab meri value assign ho gayi hai"

var globalVariable = "main window object par hoon";
console.log(window.globalVariable); // "main window object par hoon"

