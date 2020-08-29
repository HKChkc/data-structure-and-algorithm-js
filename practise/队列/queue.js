/**
 * enqueue
 * dequeue
 * isEmpty
 * size
 * toString
 * clear
 * head
 */
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(ele) {
    this.items.push(ele);
  }

  dequeue() {
    return this.items.unshift();
  }

  head() {
    return this.items[0];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  toString() {}
}
