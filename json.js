const jsontoString= '{"name":"John","age":30}'

const obj=JSON.parse(jsontoString)

console.log(obj.name)

const objConvert=JSON.stringify(obj)

console.log(objConvert)

const user1=localStorage.setItem("user",objConvert)

const user=JSON.parse(localStorage.getItem("user"))
console.log(user)
console.log(user1)