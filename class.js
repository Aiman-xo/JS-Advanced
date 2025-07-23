class Animals {
    constructor(name, type, sound) {
        this.name = name,
            this.type = type,
            this.sound = sound
    }

    doing() {
        console.log(`${this.name} makes ${this.sound} sound`);
    }
}

class Cat extends Animals {
    constructor(name, price, type, sound) {
        super(name, sound, type),
            this.price = price

    }
}

const created = new Cat('nig', 2000, 'meow', 'persian');
console.log(created);
created.doing();

class Event {
    constructor(type, people, maximum) {
        this.type = type,
            this.people = people,
            this.maximum = maximum
    }

    check() {
        console.log(`the ${this.type} will have maximum ${this.maximum} people`);
    }
}

//2


class today extends Event {
    constructor(type, people, maximum, dessert, food) {
        super(type, people, maximum),
            this.food = food,
            this.dessert = dessert
    }

    optimise() {
        console.log(`${this.type} will contain ${this.people} people`);
    }

}

const result = new today('marriage', 2000, 3000, 'ice-cream', 'biriyani');
result.optimise();
result.check();


//try

class Kunnani {
    static do() {
        console.log('walkon');
    }
}


