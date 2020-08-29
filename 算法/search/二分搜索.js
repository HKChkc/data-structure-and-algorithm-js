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

// function binarySearch(array, value, compareFn = defaultCompare) {
//   const sortedArray = quickSort(array);
//   let low = 0;
//   let high = sortedArray.length - 1;
//   while (low <= high) {
//     const mid = Math.floor((low + high) / 2);
//     const element = sortedArray[mid];
//     if (compareFn(element, value) === Compare.LESS_THAN) {
//       low = mid + 1;
//     } else if (compareFn(element, value) === Compare.BIGGER_THAN) {
//       high = mid - 1;
//     } else {
//       return mid;
//     }
//   }
//   return DOES_NOT_EXIST;
// }
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const res = binarySearch(arr, 6);
// console.log('res', res);

function binarySearch(array, value, compareFn = defaultCompare) {
  const sortedArray = quickSort(array);
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const element = sortedArray[mid];
    if (compareFn(element, value) === Compare.LESS_THAN) {
      low = mid + 1;
    } else if (compareFn(element, value) === Compare.BIGGER_THAN) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return DOES_NOT_EXIST;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const res = binarySearch(arr, 9);
console.log('res', res);
