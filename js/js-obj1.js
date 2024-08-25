"use strict";
function Player(name, age) {
    this.name = name;
    this.age = age;
    this.info = () => {
        return `${this.name} of age ${this.age}`
    };
}

class NewPlayer {
    #name;
    #age;
    title = "none";
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
    set Age(age) {
        this.#age = age;
    }
    get Age() {
        return this.#age;
    }
    set Name(name) {
        this.#name = name;
    }
    get Name() {
        return this.#name;
    }
    info() {
        return `${this.#name} of age ${this.#age}`;
    }
}


let p1 = new Player("abc", 18);
let p2 = new Player("cde", 17);

let p3 = new NewPlayer("new", 18);

p3.Name = "harsha";
console.log(p3.Name);

// console.log(p1.info(), p2.info());

// console.log(p1.__proto__);
// console.error(p2.valueOf());
console.log(p2);
console.log(p3);
// alert(p1);