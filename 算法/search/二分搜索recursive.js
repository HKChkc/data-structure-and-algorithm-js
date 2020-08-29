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
const DOES_NOT_EXIST = -1;

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const { length } = array;
  const num = array[0];
  const left = [];
  const right = [];
  for (let i = 1; i < length; i++) {
    if (array[i] > num) {
      right.push(array[i]);
    } else {
      left.push(array[i]);
    }
  }
  return quickSort(left).concat(num, quickSort(right));
}

function binarySearchRecursive(array, value, low, high) {
  if (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const element = array[mid];
    if (element < value) {
      return binarySearchRecursive(array, value, mid + 1, high);
    }
    if (element > value) {
      return binarySearchRecursive(array, value, low, mid - 1);
    }
    return mid;
  }
  return -1;
}

function binarySearch(array, value) {
  const sortedArray = quickSort(array);
  const low = 0;
  const high = sortedArray.length;
  return binarySearchRecursive(sortedArray, value, low, high);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const res = binarySearch(arr, 6);
console.log('res', res);
