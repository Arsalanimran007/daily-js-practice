const person1 = {
  name: "Ali"
}

const person2 = {
  name: "Ahmed"
}

function introduce(city) {
  console.log(`My name is ${this.name} and I live in ${city}`)
}

introduce.call("person1", "Karachi")
// My name is Ali and I live in Karachi

introduce.apply(person2, ["Lahore"])
// My name is Ahmed and I live in Lahore

const introAli = introduce.bind(person1, "Islamabad")
console.log(introAli)
introAli()
// My name is Ali and I live in Islamabad