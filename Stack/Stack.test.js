const Stack = require('./Stack');
let myStack;

beforeEach(() => {
    myStack = new Stack();
});

test('newly created stack should be empty', () => {
    expect(myStack.size()).toBe(0);
    expect(myStack.isEmpty()).toBeTruthy();
});

test('stack should return entry index when new item is added to it', () => {
    let entryIndex = myStack.push('test');
    expect(entryIndex).toBe(0);
    entryIndex = myStack.push(1000);
    expect(entryIndex).toBe(1);
});

test('should return undefined while trying to pop from empty stack', () => {
    expect(myStack.size()).toBe(0);
    expect(myStack.pop()).toBeUndefined();
});

test('should return undefined while trying to peek from empty stack', () => {
    expect(myStack.size()).toBe(0);
    expect(myStack.peek()).toBeUndefined();
});

test('should return the topmost item from stack and remove it when pop is invoked', () => {
    myStack.push(100);
    myStack.push('test');
    myStack.push(2000);
    expect(myStack.pop()).toBe(2000);
    expect(myStack.pop()).toBe('test');
    expect(myStack.size()).toBe(1);
});

test('should return top of the stack value while peek is invoked', () => {
    myStack.push(100);
    myStack.push('test');
    myStack.push(2000);
    expect(myStack.peek()).toBe(2000);
    expect(myStack.peek()).toBe(2000);
    expect(myStack.size()).toBe(3);
});

test('should empty the stack when clear is invoked', () => {
    myStack.push(100);
    myStack.push('test');
    myStack.push(2000);
    expect(myStack.size()).toBe(3);
    myStack.clear();
    expect(myStack.size()).toBe(0);
});