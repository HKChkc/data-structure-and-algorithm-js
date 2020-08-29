// 规避排序
// 复杂度 O(nlog(n))
function merge(left, right) {
  let i = 0;
  let j = 0;
  const result = [];
  // console.log('left.length :>> ', left.length);
  console.log('left :>> ', left);
  console.log('right :>> ', right);
  while (i < left.length && j < right.length) {
    result.push(left[i] < right[j] ? left[i++] : right[j++]);
  }
  return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, middle));
  const right = mergeSort(array.slice(middle));
  array = merge(left, right);
  // return merge(left, right);
  return array;
}

// const arr = [2, 4, 5, 7, 1, 9, 8, 10, 23, 26, 16, 12, 3];
const arr = [8, 7, 6, 5, 4, 3, 2, 1];
const res1 = mergeSort(arr);
console.log(res1);
