const bubbleSort = array => {
  for (let i = 0; i < array.length - 1; i++) {
    for (j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
};
const arr = [2, 9, 1, 4, 7, 3, 99, 22, 55];
const res = bubbleSort(arr);
console.log('res', res);
