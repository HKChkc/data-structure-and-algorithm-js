// 桶排序

function insertionSort(array) {
  const arr = array.slice(0, 1);
  for (let i = 1; i < array.length; i++) {
    let cur = array[i];
    for (let j = arr.length - 1; j >= 0; ) {
      if (cur < arr[j]) {
        if (j <= 0) {
          arr.unshift(cur);
          break;
        } else {
          j--;
        }
      } else {
        arr.splice(j + 1, 0, cur);
        break;
      }
    }
  }
  return arr;
}

// 桶排序
// 分桶
function createBuckets(array, bucketSize) {
  let minValue = Math.min.apply(null, array);
  let maxValue = Math.max.apply(null, array);
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  const buckets = [];
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = [];
  }
  for (let i = 0; i < array.length; i++) {
    buckets[Math.floor((array[i] - minValue) / bucketSize)].push(array[i]);
  }
  return buckets;
}

// 排序
function sortBuckets(buckets) {
  let sortedArray = [];
  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i] != null) {
      sortedArray.push(...insertionSort(buckets[i]));
    }
  }
  return sortedArray;
}

function bucketSort(array, bucketSize = 3) {
  if (array.length < 2) {
    return array;
  }
  const buckets = createBuckets(array, bucketSize);
  return sortBuckets(buckets);
}

// const arr = [2, 4, 5, 7, 1, 9, 8, 10, 23, 26, 16, 12, 3];
const arr = [5, 4, 3, 2, 6, 1, 7, 10, 9, 8];
const res1 = bucketSort(arr);
console.log(res1);
