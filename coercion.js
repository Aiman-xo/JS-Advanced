console.log('true' == true);
console.log('0' == false);

function add(a, b) {
    return a + b;
}

console.log(add('ji', 2));
console.log(add(1, 3));
console.log('0' == false);
console.log(1 === true); //not coerced
console.log(1 == true);
console.log('1' == true);

//2
console.log('' == false);
console.log('5' - 1);
console.log('true' + false);

//3

console.log(1 == '1');
console.log(1 == 'true');
console.log('1' == true);
console.log([] == false);
console.log([] == true);
console.log('\n');
//4

function loosly(a, b) {
    console.log(a == b);
}
loosly('hi', true);
loosly('true', true);
loosly('true', 1);

console.log('\n');

function sum(a, b) {
    console.log(a + b);
}

sum(0, '1');
sum(true, 'true');
sum('+', 1);
sum(true, true);
sum(200, '');
sum(false, false);
sum(false, -(false));


console.log('' == false);
console.log(false == false);
console.log([] == []);