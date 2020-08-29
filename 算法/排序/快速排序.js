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

const arr = [2, 4, 5, 7, 1, 9, 8, 10, 23, 26, 16, 12, 3];
const res1 = quickSort(arr);
console.log(res1);
