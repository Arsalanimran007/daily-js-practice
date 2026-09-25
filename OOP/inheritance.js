class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} is eating and age is ${this.age}`);
    }
}

class Dog extends Animal {
    constructor(name, age, from) {
        super(name, age);
        this.from = from;
    }
    
    bark() {
        console.log(`${this.name} is barking`);
    }
}

const dog1 = new Dog("Tommy", 20, "Pakistan");

dog1.eat();
dog1.bark();
