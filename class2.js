class Vehicle {
    constructor(brand, speed) {
        this.brand = brand,
            this.speed = speed
    }
    move() {
        console.log(`${this.brand} is moving at ${this.speed} km/h`);
    }
}

class Car extends Vehicle {
    constructor(brand, speed, fuelType) {
        super(brand, speed),
            this.fuelType = fuelType
    }
    move() {
        console.log(`${this.brand} moves at ${this.speed} so that
it consumes ${this.fuelType} fuel Type`);
    }
}

let res = new Car('f1', 350, 'premium');
res.move();

//2

class Student {
    #grade = 0;
    constructor(name, grade) {
        this.name = name,
            this.#grade = grade
    }
    getGrade() {
        console.log(`${this.name} have ${this.#grade} marks`);
    }
}

let marks = new Student('ajay', 80);
marks.getGrade();
// console.log(marks.#grade);

//3
class Vehicle1 {
    constructor(brand, speed) {
        this.brand = brand,
            this.speed = speed
    }
    move() {
        console.log(`${this.brand} is moving at ${this.speed} km/h`);
    }
    static compareSpeed(v1, v2) {
        if (v1.speed > v2.speed) {
            console.log(`${v1.brand} is the faster car`);
        }
        else {
            console.log(`${v2.brand} is the faster car`);
        }
    }
}

class Car1 extends Vehicle1 {
    constructor(brand, speed, fuelType) {
        super(brand, speed),
            this.fuelType = fuelType
    }
    move() {
        console.log(`${this.brand} moves at ${this.speed} so that
it consumes ${this.fuelType} fuel Type`);
    }
}

let res2 = new Car1('f1', 350, 'premium');
let res3 = new Car1('bmw', 450, 'premium');

console.log(res2.speed);
res.move();
Vehicle1.compareSpeed(res2, res3);

//4

class circle {
    static area(radius) {
        console.log(`area of circle with radius ${radius}`);
    }

    describe(radius) {
        console.log(` is ${Math.PI * radius * radius}`);
    }


}

let h = new circle;
circle.area(6);
h.describe(6);


//rrecursion

let str = "bridgeon"
let length = str.length - 1;
let str1 = "";
function rev(str, len) {
    if (len < 0) return;
    str1 += str[len];
    rev(str, len - 1);
    return str1;
}
console.log(rev(str, length));