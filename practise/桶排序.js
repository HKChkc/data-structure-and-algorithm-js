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

function createBuckets(array, bucketSize) {
  const minValue = Math.min.apply(null, array);
  const maxValue = Math.max.apply(null, array);
  const bucketCount = Math.floor((maxValue - minValue) / 2) + 1;
  const buckets = [];
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = [];
  }
  for (let i = 0; i < array.length; i++) {
    buckets[Math.floor((array[i] - minValue) / bucketSize)].push(array[i]);
  }
  return buckets;
}

function sortBuckets(buckets) {
  const sortedArray = [];
  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i] != null) {
      sortedArray.push(...insertionSort(buckets[i]));
    }
  }
  return sortedArray;
}

function bucketSort(array, bucketSize = 5) {
  if (array.length < 2) {
    return array;
  }
  const buckets = createBuckets(array, bucketSize);
  return sortBuckets(buckets);
}
