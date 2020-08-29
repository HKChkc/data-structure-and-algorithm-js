// 冒泡排序
// 复杂度 O(n^2)
const bubbleSort = array => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j + 1], array[j]] = [array[j], array[j + 1]];
      }
    }
  }
  return array;
};

const arr = [2, 4, 5, 7, 1, 9, 8, 10, 23, 26, 16, 12, 3];
const res1 = bubbleSort(arr);
console.log(res1);
