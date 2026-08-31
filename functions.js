function createMultiplier(number) {
  return function (value) {
    return value * number;
  };
}
const double = createMultiplier(2);

console.log(double(34));


const numbers = [1, 2, 3];

numbers.forEach(function (number) {
  console.log(number);
});