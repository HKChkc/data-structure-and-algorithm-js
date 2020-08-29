const countingSort = array => {
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
    counts[element]++;
  });
  counts.forEach((element, i) => {
    while (element > 0) {
      array[sortedIndex++] = i;
      element--;
    }
  });
  return array;
};

const arr = [2, 4, 5, 7, 1, 9, 8, 10, 23, 26, 16, 12, 3];
const res1 = countingSort(arr);
console.log(res1);
