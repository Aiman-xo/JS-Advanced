// function leak() {
//     myL = 'iam lekan';
// }

// console.log(myL);

// setInterval(() => {
//     console.log('Running...');
// }, 1000);


function count() {
    let count = 0;
    function incr() {
        count++;
        console.log(count);
    }
    return incr
}

let h = count();
h();
h();

//difference between map and weakmap in memory leak.
const revi = new Map();
let obj = { name: 'kunnayamu' }
revi.set(obj, "some kunnani things...");

obj = null;
console.log(revi);

const revii = new WeakMap();
let obji = { name: 'kunnayamu' }
revi.set(obji, "some kunnani things...");

obji = null;
console.log(revii);

//3

let memory = [];
function create() {
    let msg = 'aim to fire';

    memory.push(msg);
    msg = null;
}
create()
console.log(memory);

//4

const inter = setInterval(() => {
    console.log('waiting...');
}, 1000);



function clear() {

    return clearInterval(inter);

}
clear();