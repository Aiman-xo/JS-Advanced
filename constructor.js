//using apply in inheritence 

function con(name, age) {
    this.name = name,
        this.age = age
}

function cop(place, name, age) {
    con.apply(this, [name, age])
    this.place = place

    console.log(`the name is ${this.name} the age is ${this.age} and place is ${this.place}`);
}

let x = new cop('malabar', 'kunnani', 40);
console.log(x);

//using bind

function con1(name, age) {
    this.name = name,
        this.age = age
}

function cop1(place, name, age) {
    let app = con1.bind(this, name, age)
    this.place = place,
        app();

    console.log(`the name is ${this.name} the age is ${this.age} and place is ${this.place}`);
}

let x1 = new cop1('malabar', 'kunnani', 40);
console.log(x1);