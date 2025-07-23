function Car(brand, model) {
    this.brand = brand,
        this.model = model
    this.fun = function () {
        console.log(this.brand + 'is' + this.model);
    }
}

let new1 = new Car('toyota', 2009);
new1.fun();
console.log(new1 instanceof Car);

//using class

class Student {
    constructor(jam, num) {
        this.jam = jam,
            this.num = num
    }

}

let r = new Student('nunu', 1);
console.log(r instanceof Student);