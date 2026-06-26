function banaoWallet(shuruRakam) {
  // tumhara code
  let cash = shuruRakam

  return function(khrach){
    if(khrach > cash){
      return "balance kam hai";
    }
    cash = cash - khrach;
    return cash
  }
}

const wallet = banaoWallet(100);
console.log(wallet(30)); // 70
console.log(wallet(50)); // 20
console.log(wallet(40)); // "balance kam hai"
console.log(wallet(20)); // 0