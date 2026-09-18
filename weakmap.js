// WeakMap stores data against object keys without preventing garbage collection.
// It is useful when you want to attach private/extra data to an object.

const userMeta = new WeakMap();

const user = {
  id: 1,
  name: "Ali",
};

userMeta.set(user, {
  loginTime: "10:30",
  role: "admin",
  isActive: true,
});

console.log("User:", user.name);
console.log("Meta:", userMeta.get(user));
console.log("Has user meta?", userMeta.has(user));

// WeakMap keys must be objects. Primitive keys like string/number are not allowed.
try {
  userMeta.set("user-1", { role: "guest" });
} catch (error) {
  console.log("Primitive key error:", error.message);
}

// A common use case: private data for class instances.
const privateData = new WeakMap();

class Account {
  constructor(owner, balance) {
    this.owner = owner;
    privateData.set(this, { balance });
  }

  deposit(amount) {
    const data = privateData.get(this);
    data.balance += amount;
  }

  getBalance() {
    return privateData.get(this).balance;
  }
}

const account = new Account("Ali", 500);

account.deposit(250);

console.log(`${account.owner}'s balance:`, account.getBalance());
console.log("Direct balance access:", account.balance);

// WeakMap is not iterable, so you cannot use for...of, keys(), values(), or entries().
userMeta.delete(user);
console.log("Has user meta after delete?", userMeta.has(user));
