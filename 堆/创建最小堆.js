const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0,
};
function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}
function reverseCompare(compareFn) {
  return (a, b) => compareFn(b, a);
}

function swap(array, a, b) {
  /* const temp = array[a];
  array[a] = array[b];
  array[b] = temp; */
  [array[a], array[b]] = [array[b], array[a]];
}

class MinHeap {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.heap = [];
  }

  getLeftIndex(index) {
    return 2 * index + 1;
  }

  getRightIndex(index) {
    return 2 * index + 2;
  }

  getParentIndex(index) {
    if (index === 0) {
      return undefined;
    }
    return Math.floor((index - 1) / 2);
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.heap = [];
  }

  findMinimum() {
    return this.isEmpty() ? undefined : this.heap[0];
  }

  insert(value) {
    if (value != null) {
      const index = this.heap.length;
      this.heap.push(value);
      this.siftUp(index);
      return true;
    }
    return false;
  }

  siftDown(index) {
    let element = index;
    const left = this.getLeftIndex(index);
    const right = this.getRightIndex(index);
    const size = this.size();
    // console.log('element :>> ', element);
    // console.log('left :>> ', left);
    // console.log('right :>> ', right);
    // console.log('size :>> ', size);
    if (
      left < size &&
      this.compareFn(this.heap[element], this.heap[left]) ===
        Compare.BIGGER_THAN
    ) {
      element = left;
    }

    if (
      right < size &&
      this.compareFn(this.heap[element], this.heap[right]) ===
        Compare.BIGGER_THAN
    ) {
      element = right;
    }

    if (index !== element) {
      swap(this.heap, index, element);
      this.siftDown(element);
    }
  }

  siftUp(index) {
    let parent = this.getParentIndex(index);
    while (
      index > 0 &&
      this.compareFn(this.heap[parent], this.heap[index]) ===
        Compare.BIGGER_THAN
    ) {
      swap(this.heap, parent, index);
      index = parent;
      parent = this.getParentIndex(index);
    }
  }

  extract() {
    if (this.isEmpty()) {
      return undefined;
    }

    if (this.size() === 1) {
      return this.heap.shift();
    }

    const removedValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.siftDown(0);
    return removedValue;
  }

  heapify(array) {
    if (array) {
      this.heap = array;
    }
    const maxIndex = Math.floor(this.size() / 2) - 1;
    for (let i = 0; i < maxIndex; i++) {
      this.siftDown(i);
    }
    return this.heap;
  }

  getAsArray() {
    return this.heap;
  }
}

// const heap = new MinHeap();
// for (let i = 1; i < 10; i++) {
//   heap.insert(i);
// }
// console.log('heap.minimum :>> ', heap.extract());
// console.log('heap.heap :>> ', heap.heap);
// heap.insert(2);
// heap.insert(3);
// heap.insert(4);
// heap.insert(5);
// heap.insert(1);

// console.log('heap :>> ', heap.heap);

// 最大堆
class MaxHeap extends MinHeap {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = reverseCompare(compareFn);
  }
}
const maxHeap = new MaxHeap();

maxHeap.insert(2);
maxHeap.insert(3);
maxHeap.insert(4);
maxHeap.insert(5);
maxHeap.insert(1);
console.log('maxHeap.extract :>> ', maxHeap.extract());
// console.log('maxHeap.heap :>> ', maxHeap.heap);
