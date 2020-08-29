const selectionSort = array => {
  const arr = array.slice();
  let res = [];
  while (arr.length > 0) {
    const min = Math.min(...arr);
    res = res.concat(arr.splice(arr.indexOf(min), 1));
  }
  return res;
};
const arr = [2, 4, 5, 7, 1, 9, 8, 10, 23, 26, 16, 12, 3];
const res1 = selectionSort(arr);
console.log(res1);
