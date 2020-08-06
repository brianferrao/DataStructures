const Queue = require('./Queue');
let myQueue;

beforeEach(() => {
    myQueue = new Queue();
});

test('Newly created queue should be of size 0', () => {
    expect(myQueue.size()).toBe(0);
});

test('add method should insert item to the end of the queue', ()=> {
    myQueue.add(100);
    expect(myQueue.size()).toBe(1);
    expect(myQueue.first()).toBe(100);
    expect(myQueue.last()).toBe(100);
    myQueue.add(200);
    expect(myQueue.size()).toBe(2);
    expect(myQueue.first()).toBe(100);
    expect(myQueue.last()).toBe(200);
});

test('remove method should return undefined if queue is empty', () => {
    expect(myQueue.remove()).toBeUndefined();
});

test('remove method removes the first item from the queue', () => {
    myQueue.add(100);
    myQueue.add(200);
    let first = myQueue.first();
    expect(myQueue.remove()).toBe(first);
    first = myQueue.first();
    expect(myQueue.remove()).toBe(first);
});