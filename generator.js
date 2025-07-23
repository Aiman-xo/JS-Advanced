function* infinite() {
    let i = 0;
    while (true) {
        yield i++;

    }

}
const y = infinite();
console.log(y.next().value);
console.log(y.next().value);
console.log(y.next().value);
console.log(y.next().value);


//without generator function

// function infinite1() {
//     let i = 0;

//     while (true) {
//         i++;
//         console.log(i);//this becoes infinite.
//     }


// }
// let z = infinite1();
// console.log(z);
// console.log(z);

function* stri(name) {
    yield console.log(name);
    yield console.log('hi my name is' + name);
}

let d = stri('aiman');
d.next();
d.next();
d.next();


function* num() {
    for (let i = 0; i <= 5; i++) {

        console.log(i);
        yield i;

    }
}

let wy = num();
wy.next();
wy.next();
wy.next();
wy.next();
wy.next();
wy.next();
wy.next();//here{value:undefined, done:true}


//2

function* even() {
    for (let i = 0; i <= 5; i++) {

        if (i % 2 == 0) {
            console.log(i);
            yield i;
        }

    }
}

let a = even();
a.next();
a.next();


//3

function* get() {
    yield 'A';
    yield 'B';
}
let f = get();
console.log(f.next().value);
console.log(f.next());
console.log(f.next());

//4

function* gr() {
    let arr = [1, 2, 3];

    for (let i = 0; i <= arr.length; i++) {
        console.log(i);
        yield arr[i];
    }
}

let r = gr();

r.next()
r.next()
r.next()
r.next()