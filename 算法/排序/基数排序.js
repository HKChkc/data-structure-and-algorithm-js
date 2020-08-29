//  基数排序
//
const getBucketIndex = (value, minValue, significantDigit, radixBase) => {
  return Math.floor(((value - minValue) / significantDigit) % radixBase);
};

const countingSortForRadix = (array, radixBase, significantDigit, minValue) => {
  let bucketsIndex;
  const buckets = [];
  const aux = [];
  // 分十个桶
  for (let i = 0; i < radixBase; i++) {
    buckets[i] = 0;
  }
  for (let i = 0; i < array.length; i++) {
    bucketsIndex = getBucketIndex(
      array[i],
      minValue,
      significantDigit,
      radixBase
    );
    buckets[bucketsIndex]++;
  }
  console.log('buckets :up>> ', buckets);
  for (let i = 1; i < radixBase; i++) {
    buckets[i] += buckets[i - 1];
  }
  console.log('buckets :>> ', buckets);
  console.log('array :>> ', array);
  for (let i = array.length - 1; i >= 0; i--) {
    bucketsIndex = getBucketIndex(
      array[i],
      minValue,
      significantDigit,
      radixBase
    );
    aux[--buckets[bucketsIndex]] = array[i];
  }
  for (let i = 0; i < array.length; i++) {
    array[i] = aux[i];
  }
  return array;
};

function radixSort(array, radixBase = 10) {
  if (array.length < 2) {
    return array;
  }
  const minValue = Math.min.apply(null, array);
  const maxValue = Math.max.apply(null, array);
  let significantDigit = 1;
  while ((maxValue - minValue) / significantDigit >= 1) {
    array = countingSortForRadix(array, radixBase, significantDigit, minValue);
    significantDigit *= radixBase;
  }
  return array;
}

// const arr = [2, 4, 5, 7, 1, 9, 8, 10, 23, 26, 16, 12, 3];
// const arr = [9, 4, 2, 1, 5, 7, 6, 8, 3];
const arr = [9, 4, 2, 1];
const res1 = radixSort(arr);
console.log(res1);
