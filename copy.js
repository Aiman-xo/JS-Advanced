const obj = {
    name: 'aiman',
    user: { status: true }
}

let m = Object.assign({}, obj);
console.log(m);

let z = Object.entries(obj);
let y = Object.fromEntries(z);

y.user.status = false;

console.log(obj);
// m.user.status = false;

// console.log(obj);

const obj1 = {
    name: 'aiman1',
    user: { status: true }
}

const d = structuredClone(obj1);//deep copy
d.user.status = false;
console.log(obj1);

const e = JSON.parse(JSON.stringify(obj1));//deep copy 2
e.user.status = false;
console.log(obj1);
