const defaultEquals = (a, b) => a === b;
class Node {
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
}

class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.equalsFn = equalsFn;
    this.head = null;
    this.count = 0;
  }

  push(element) {
    const node = new Node(element);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }
}
