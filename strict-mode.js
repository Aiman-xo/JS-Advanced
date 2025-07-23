// "use strict"

// function sum(a, a) {
//     console.log(a + a);
// }

// sum(2, 4); //not allowed.

// "use strict"

// function pr() {
//     let message = "hi there";
//     console.log(message);

// }

// pr();

// "use strict"

// let let = 500
// console.log(let);

function x() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }
    console.log('object');
}
x();
