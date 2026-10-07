const h1= document.querySelector('h1')


h1.style.color="red"
console.log(h1)

const btn = document.querySelector('button')
const boxs = document.querySelector('.box')


btn.addEventListener('click',()=>{
    boxs.style.backgroundColor="green"
})
console.log(btn)

const a =document.querySelectorAll('div')
console.log(a.keys)
