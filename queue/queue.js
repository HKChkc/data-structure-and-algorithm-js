class Queue {
  constructor() {
    // count: 队列的大小
    this.count = 0;
    // 队列中的第一个元素
    this.lowestCount = 0;
    // 队列
    this.items = {};
  }

  // 暂定添加一个
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const first = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return first;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  isEmpty() {
    return this.count - this.lowestCount === 0;
  }

  size() {
    return this.count - this.lowestCount;
  }

  clear() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}
