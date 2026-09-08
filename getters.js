// ===== Getters & Setters =====
// get -> lets you read a property like a normal value, but it runs code behind the scenes
// set -> lets you assign a property like a normal value, but it runs code behind the scenes

class User {
  constructor(name) {
    this._name = name; // "_name" is the real storage, "name" is the public getter/setter
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value.toUpperCase();
  }
}

const user = new User("Arsalan");
console.log(user.name); // "Arsalan" -> get runs automatically

user.name = "ali"; // set runs automatically, converts to uppercase
console.log(user.name); // "ALI"

// ===== Getter for a computed value (no setter needed) =====
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height; // computed on the fly, not stored
  }
}

const box = new Rectangle(4, 5);
console.log(box.area); // 20 -> accessed like a property, not box.area()

// ===== Setter with validation =====
class Account {
  constructor(balance) {
    this._balance = balance;
  }

  get balance() {
    return this._balance;
  }

  set balance(value) {
    if (value < 0) {
      console.log("Balance can't be negative");
      return;
    }
    this._balance = value;
  }
}

const account = new Account(100);
account.balance = -50; // rejected
console.log(account.balance); // 100 -> unchanged

account.balance = 200; // accepted
console.log(account.balance); // 200
