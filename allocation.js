let obj = {
    name: 'daniel',
    age: 40
}

const arr = [];
arr.push(obj);

obj = null;
console.log(arr);