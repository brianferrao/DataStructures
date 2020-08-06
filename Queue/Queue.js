class Queue {
    #items;
    constructor() {
        this.#items = [];
    }

    size() {
        return this.#items.length;
    }

    add(item) {
        this.#items.unshift(item);
        return true;
    }

    remove() {
        return this.#items.pop();
    }

    first() {
        return this.#items[this.#items.length - 1];
    }

    last() {
        return this.#items[0];
    }
}

module.exports = Queue;