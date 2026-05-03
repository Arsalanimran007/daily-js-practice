const numbers= [1,2,3,4,5,6,7,8,9,10]

const doubled = numbers.map((num)=>num * 2)

console.log(doubled)
console.log(numbers)



const products = [
    { name: "Shirt",  price: 500,  inStock: true  },
    { name: "Pants",  price: 1200, inStock: false },
    { name: "Shoes",  price: 2000, inStock: true  },
    { name: "Cap",    price: 300,  inStock: true  },
]

const avail = products.filter((s)=>s.inStock)

console.log(avail)
