function multiply(a) {
    return function (b) {
        return function (c) {
            return a * b * c
        }
    }
}

let m = multiply(2);
let y = m(3);
let z = y(5);

console.log(z);


//2


function greet(name) {
    return function (time) {
        return 'hello' + name + ' ' + time;
    }
}

let d = greet('aiman');

console.log(d('good morning'));
