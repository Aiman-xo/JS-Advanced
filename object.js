const person = {
    name: 'kun',
    age: 20,
    greet: function () {
        console.log('hi good morning');
    }
}

console.log(person);
person.greet()

//2

const book = {
    title: 'rich dad poor dad',
    author: 'miyosaki',
    rating: {
        first: 6 / 10,
        second: 9.5 / 10
    }

}
console.log(book.author);

//3

const obj = {
    name: 'ayam',
    age: 9,
    job: 'school student',
    hobbies: {
        active: 'football',
        passive: 'reading'
    }
}

for (let i in obj) {
    if (i == 'hobbies') {
        for (let j in obj[i]) {
            console.log(j + ': ' + obj[i][j]);
        }
    }
    console.log(i + ': ' + obj[i]);

}

//4

const obj2 = {
    model: 2018,
    type: 'hatchback',
    price: 200000
}

const raw = Object.assign({}, obj2);
raw.price = 1000
console.log(raw);

const wer = { ...obj2 };
wer.type = 'sedan';
console.log(wer);

console.log(obj2);

//5

function obj1(obj1, key) {

    if (key in obj1) {
        return obj1[key]
    } else {
        return 'key not found!'
    }


}

console.log(obj1({ name: 'mazeratti', model: 2020 }, 'model1'));

const obj3 = {
    model: 2018,
    type: 'hatchback',
    price: 200000
}

const w = Object.assign({}, obj3);
w.model = 2000
console.log(obj3);

const obj13 = {
    name: 'manu',
    age: 20,
    place: 'malappuram'
}

Object.freeze(obj13);//  thhis freezes the object 
obj13.age = 17;//this cannot be modified
obj13.address = 'house of'//this cannot be added
delete obj13.place;//this cannot be deleted
console.log(obj13);

const state1 = Object.isFrozen(obj13);
console.log(state1);


//seal/control

const obj14 = {
    name: 'maaan',
    age: 25,
    place: 'malappuram'
}
Object.seal(obj14);
obj14.age = 30;//this can be modified 
obj14.house = 'malabar'//but this cannot be added

console.log(obj14);
const state2 = Object.isSealed(obj14);
console.log(state2);

//convertion

const arr = [['name', 'mayamali'], ['age', 40]];

const newObj = Object.fromEntries(arr);//creating object using from entries
console.log(newObj);

const arr2 = Object.entries(obj14);//converting object obj14 to an nested array.
console.log(arr2);

//object create


const anotherObj = {
    totalNumbers: 200,
    venue: 'malabar Auditorium',
    security: 80
}
const inherited = Object.create(anotherObj);
inherited.rate = 40000;
console.log(inherited.rate);//this is its original property
console.log(inherited.totalNumbers);// this is inherited from its prototype chain.ie anotherObj.