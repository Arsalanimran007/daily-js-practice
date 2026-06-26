function fuelTank(startFuel) {
  let fuel = startFuel;

  return function(use) {
    if (use > fuel) {
      return "fuel khatam hai";
    }
    fuel = fuel - use;
    return fuel;
  }
}

const tank = fuelTank(100);
console.log(tank(30)); // 70
console.log(tank(50)); // 20
console.log(tank(40)); // "fuel khatam hai"
console.log(tank(20)); // 0
