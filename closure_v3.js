function counter() {
  let count = 0;

  return function() {
    count = count + 1;
    return count;
  }
}

const click = counter();
console.log(click()); // 1
console.log(click()); // 2
console.log(click()); // 3
