// 内插搜索
function interpolationSearch(array, value) {
  const { length } = array;
  let low = 0;
  let high = length - 1;
  let position = -1;
  let delta = -1;
  while (low <= high && value >= array[low] && value <= array[high]) {
    delta = (value - array[low]) / (array[high] - array[low]);
    console.log('delta', delta);
    position = low + Math.floor((high - low) * delta);
    console.log('position', position);
    if (array[position] === value) {
      return position;
    }
    if (array[position] < value) {
      low = position + 1;
    } else {
      high = position - 1;
    }
  }
  return DOES_NOT_EXIST;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const res = interpolationSearch(arr, 6);
console.log('res', res);
