const swap = (array, a, b) => {
  [array[a], array[b]] = [array[b], array[a]];
};

const shuffle = array => {
  let currentIndex = array.length;
  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    console.log('randomIndex', randomIndex);
    currentIndex--;
    swap(array, currentIndex, randomIndex);
  }
  return array;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const res = shuffle(arr);
console.log('res', res);
