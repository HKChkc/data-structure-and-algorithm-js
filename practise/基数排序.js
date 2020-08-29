const getBucketsIndex = (value, minValue, significantDigit, radixBase) => {
  return Math.floor(((value - minValue) / significantDigit) % radixBase);
};

const countingSortForRadix = (array, minValue, significantDigit, radixBase) => {
  let bucketsIndex;
  const buckets = [];
  const aux = [];
  for (let i = 0; i < radixBase; i++) {
    buckets[i] = 0;
  }
  for (let i = 0; i < array.length; i++) {
    bucketsIndex = getBucketsIndex(
      array[i],
      minValue,
      significantDigit,
      radixBase
    );
    buckets[bucketsIndex]++;
  }
  for (let i = 1; i < radixBase; i++) {
    buckets[i] += buckets[i - 1];
  }
  for (let i = array.length - 1; i >= 0; i--) {
    bucketsIndex = getBucketsIndex(
      array[i],
      minValue,
      significantDigit,
      radixBase
    );
    aux[--buckets[bucketsIndex]] = array[i];
  }
  for (let i = 0; i < aux.length; i++) {
    array[i] = aux[i];
  }
  return array;
};

const radixSort = (array, radixBase = 10) => {
  if (array.length < 2) {
    return array;
  }
  const minValue = Math.min.apply(null, array);
  const maxValue = Math.max.apply(null, array);
  let significantDigit = 1;
  while ((maxValue - minValue) / significantDigit >= 1) {
    array = countingSortForRadix(array, minValue, significantDigit, radixBase);
    significantDigit *= radixBase;
  }
  return array;
};

const arr = [2, 4, 5, 7, 1, 9, 8, 10, 23, 26, 16, 12, 3];
// const arr = [9, 4, 2, 1, 5, 7, 6, 8, 3];
// const arr = [9, 4, 2, 1];
const res1 = radixSort(arr);
console.log(res1);
