# Promises — Promise.all vs Promise.allSettled

- `Promise.all` → sab resolve hon tabhi result, ek fail = sab fail
- `Promise.allSettled` → sab ka wait karta hai, pass ho ya fail
- Use `.all` jab sab zaroori hon, `.allSettled` jab sab ka result chahiye
