class Stack {
    #items;
    #count;
    constructor() {
        this.#items = [];
        this.#count = 0;
    }

    size() {
        return this.#count;
    }

    push(item) {
        this.#items[this.#count] = item;
        this.#count++;
        return this.#count -1;
    }

    pop() {
        if (this.#count) {
            this.#count--;
            return this.#items.splice(this.#count)[0];
        } else {
            return undefined;
        }
        
    }

    peek() {
        return this.#items[this.#count-1];
    }

    isEmpty() {
        return this.#count === 0;
    }

    clear() {
        this.#count = 0;
        this.#items = [];
    }


}

module.exports = Stack;

