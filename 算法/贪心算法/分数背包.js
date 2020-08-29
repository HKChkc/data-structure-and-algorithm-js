function knapSack(capacity, weights, values) {
  // 物品的个数
  const n = values.length;
  let load = 0;
  // 价值
  let val = 0;
  for (let i = 0; i < n && load < capacity; i++) {
    // weights[i]: 该物品的重量
    if (weights[i] <= capacity - load) {
      val += values[i];
      load += weights[i];
    } else {
      const r = (capacity - load) / weights[i];
      val += r * values[i];
      load += weights[i];
    }
  }
  return val;
}
// capacity: 6
// goods1: weight: 2, value:3
// goods2: weight: 3, value:4
// goods3: weight: 4, value:5
// values: [3,4,5]
// weights: [2,3,4]
// capacity: 6
// const values = [3, 4, 5];
// const weights = [2, 3, 4];
const values = [5, 4, 3];
const weights = [4, 3, 2];
const capacity = 6;
const res = knapSack(capacity, weights, values);
console.log('res', res);
