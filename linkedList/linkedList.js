const defaultEquals = (a, b) => a === b;

class Node {
  constructor(element) {
    // element,链表中的元素
    this.element = element;
    // 指向下一个元素的指针，最后一个元素为undefined
    this.next = undefined;
  }
}

class LinkedList {
  constructor(equalsFn = defaultEquals) {
    // 储存链表中元素的数量
    this.count = 0;
    // head:保存第一个元素的引用
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  push(element) {
    const node = new Node(element);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      // 从第一个开始找，找到最后一个，将最后一个的next指向要添加的元素
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      // 将链表中最后一个执行node,将node添加到最后
      current.next = node;
    }
    this.count++;
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        // 如果是第一个元素
        this.head = current.next;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        // 将previous与 current的下一项链接起来，跳过current,从而移除current
        previous.next = current.next;
      }
      this.count--;
      // 返回移除的元素
      return this.current.element;
    }
    return undefined;
  }

  getElementAt(index) {
    // 为什么index <= this.count; 考虑到循环结束的时候index = count 的情况
    if (index >= 0 && index <= this.count) {
      let current = this.head;
      for (let i = 0; i < index && current != null; i++) {
        current = current.next;
      }
      return current;
    }
    return undefined;
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        const current = previous.next;
        node.next = current;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.size() === 0;
  }

  getHead() {
    return this.head;
  }

  toString() {
    if (this.head == null) {
      return '';
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 0; i < this.size() && current != null; i++) {
      objString = `${objString},${current.element}`;
      current = current.next;
    }
    return objString;
  }
}
