// // 选择排序
// // 复杂度： O(n^2)

// function selectionSort(array) {
//   const { length } = array;
//   let indexMin;
//   for (let i = 0; i < length - 1; i++) {
//     indexMin = i;
//     for (let j = i; j < length; j++) {
//       if (array[indexMin] > array[j]) {
//         indexMin = j;
//       }
//     }
//     if (indexMin !== i) {
//       [array[indexMin], array[i]] = [array[i], array[indexMin]];
//     }
//   }
//   return array;
// }

// const arr = [2, 4, 5, 7, 1, 9, 8, 10, 23, 26, 16, 12, 3];
// const res1 = selectionSort(arr);
// console.log(res1);

function selectionSort(array) {
  const arr = array.slice();
  let res = [];
  while (arr.length > 0) {
    let index = arr.indexOf(Math.min.apply(null, arr));
    res = res.concat(arr.splice(index, 1));
  }
  return res;
}

const arr = [2, 4, 5, 7, 1, 9, 8, 10, 23, 26, 16, 12, 3];
const res1 = selectionSort(arr);
console.log(res1);
