// 计数排序
// 时间复杂度： O(n + k)
function countingSort(array) {
  if (array.length < 2) {
    return array;
  }
  const maxValue = Math.max.apply(null, array);
  let sortedIndex = 0;
  const counts = new Array(maxValue + 1);
  array.forEach(element => {
    if (!counts[element]) {
      counts[element] = 0;
    }
    // console.log('element :>> ', element);
    counts[element]++;
  });
  console.log('counts :>> ', counts);
  console.log('counts.length :>> ', counts.length);
  // counts: [,1,1,2,1,1]
  counts.forEach((element, i) => {
    // [1, 2, 3, 3, 4, 5];
    while (element > 0) {
      array[sortedIndex++] = i;
      element--;
    }
  });
  return array;
}

// const arr = [2, 4, 5, 7, 1, 9, 8, 10, 23, 26, 16, 12, 3];
const arr = [10, 8, 3, 6, 3, 4, 2, 1];
const res1 = countingSort(arr);
console.log(res1);
