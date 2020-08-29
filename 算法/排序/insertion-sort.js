//  插入排序
// function insertionSort(array) {
//   const arr = array.slice(0, 1);
//   for (let i = 1; i < array.length; i++) {
//     let cur = array[i];
//     for (let j = arr.length - 1; j >= 0; ) {
//       if (cur < arr[j]) {
//         if (j <= 0) {
//           arr.unshift(cur);
//           break;
//         } else {
//           j--;
//         }
//       } else {
//         arr.splice(j + 1, 0, cur);
//         break;
//       }
//     }
//   }
//   return arr;
// }

function insertionSort(array) {
  const { length } = array;
  let temp;
  for (let i = 1; i < length; i++) {
    let j = i;
    temp = array[i];
    while (j > 0 && array[j - 1] > temp) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = temp;
  }
  return array;
}

const arr = [2, 4, 5, 7, 1, 9, 8, 10, 23, 26, 16, 12, 3];
const res1 = insertionSort(arr);
console.log(res1);
