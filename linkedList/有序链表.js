const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0,
};
const defaultCompare = (a, b) => {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
};

const defaultEquals = (a, b) => a === b;

class SortedLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn);
    this.equalsFn = equalsFn;
    this.compareFn = compareFn;
  }

  push(element) {
    if (this.isEmpty()) {
      super.push(element);
    } else {
      const index = this.getIndexNextSortedElement(element);
      super.insert(element, index);
    }
  }

  insert(element, index = 0) {
    if (this.isEmpty()) {
      return super.insert(element, index === 0 ? index : 0);
    }
    const pos = this.getIndexNextSortedElement(element);
    return super.insert(element, pos);
  }
  getIndexNextSortedElement(element) {
    let current = this.head;
    let i = 0;
    for (; i < this.size() && current; i++) {
      const comp = this.compareFn(element, current.element);
      // element < current.element
      if (comp === Compare.LESS_THAN) {
        return i;
      }
      current = current.next;
    }
    return i;
  }
}
