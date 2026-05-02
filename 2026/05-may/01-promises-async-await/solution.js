// Promise.all vs Promise.allSettled

const p1 = Promise.resolve("P1 OK")
const p2 = Promise.resolve("P2 OK")
const p3 = Promise.reject("P3 Failed")

// Promise.all — ek fail = sab fail
Promise.all([p1, p2])
  .then(res => console.log("all:", res))
  .catch(err => console.log("all error:", err))

// Promise.allSettled — sab ka result milta hai
Promise.allSettled([p1, p2, p3])
  .then(results => results.forEach(r => console.log(r.status, r.value || r.reason)))
