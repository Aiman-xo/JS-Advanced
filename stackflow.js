let stack = [1, 2];

// stack.pop();
// stack.pop();
// stack.push('hello');
// console.log(stack);
// stack.push(2);
// obj.peek();
// console.log(stack);
// console.log(stack.peek())
// console.log(isEmpty(stack));

obj = {
    peek: function () {
        return stack[stack.length - 1];
    },

    isEmpty: function () {
        return stack.length === 0;
    }
}

stack.__proto__.obj;
console.log(stack.__proto__);

//2

// try {
//     function rec() {
//         console.log('object');
//         return rec()
//     }
//     rec()
// } catch (err) {
//     console.log(err);
// } finally {
//     console.log('done ..');
// }

//3

let dstack = [];
dstack.pop();
console.log(dstack);

// creating a stack

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element)
    }

    pop() {
        if (this.isEmpty()) {
            console.log('stack is empty error underflow');
            return null
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return null
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0
    }
}

const tr = new Stack();
tr.push(1);
tr.pop()
tr.peek()
// tr.pop()
tr.isEmpty()
console.log(tr);