const Stack = require('./Stack');

const myStack = new Stack();

console.log(myStack.size());

myStack.push(100);
myStack.push(2000);

console.log(myStack.peek());

console.log(myStack.size());

console.log(myStack.pop());

console.log(myStack.size());

console.log(myStack.pop());

console.log(myStack.isEmpty());

console.log(myStack.size());

console.log(myStack.isEmpty());
