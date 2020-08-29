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

const swap = (array, a, b) => {
  [array[a], array[b]] = [array[b], array[a]];
};

function heapify(array, index, heapSize, compareFn) {
  let largest = index;
  const left = 2 * index + 1;
  const right = 2 * index + 2;
  if (
    left < heapSize &&
    compareFn(array[left], array[index]) === Compare.BIGGER_THAN
  ) {
    largest = left;
  }
  if (
    right < heapSize &&
    compareFn(array[right], array[largest]) === Compare.BIGGER_THAN
  ) {
    largest = right;
  }
  if (index !== largest) {
    swap(array, index, largest);
    heapify(array, largest, heapSize, compareFn);
  }
}

function buildMaxHeap(array, compareFn) {
  for (let i = Math.floor(array.length / 2); i >= 0; i--) {
    heapify(array, i, array.length, compareFn);
  }
}

function heapSort(array, compareFn = defaultCompare) {
  let heapSize = array.length;
  buildMaxHeap(array, compareFn);
  while (heapSize > 1) {
    swap(array, 0, --heapSize);
    heapify(array, 0, heapSize, compareFn);
  }
  return array;
}

const array = [7, 6, 3, 5, 4, 1, 2];
console.log('heapSort :>> ', heapSort(array));
