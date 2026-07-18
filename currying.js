function add(a, b, c) {
  return a + b + c;
}

console.log(add(1, 2, 3)); // 6

const curriedAdd = (a) => (b) => (c) => {
  return a + b + c;
};

console.log(curriedAdd(1)(2)(3)); // 6
