function minCoinChange(coins, amount) {
  const cache = [];
  const makeChange = value => {
    if (!value) {
      return [];
    }
    if (cache[value]) {
      return cache[value];
    }
    let min = [];
    let newMin;
    let newAmount;
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      newAmount = value - coin;
      if (newAmount >= 0) {
        console.log('newAmount-inup :>> ', newAmount);
        newMin = makeChange(newAmount);
        // console.log('newMin :>> ', newMin);
      }
      // 条件：
      // newAmount 大于等于0
      // 新的min长度小于min的长度，或者，min为空
      // 新的min存在或者newAmount为0
      if (
        newAmount >= 0 &&
        (newMin.length < min.length - 1 || !min.length) &&
        (newMin.length || !newAmount)
      ) {
        console.log('newAmount :>> ', newAmount);
        console.log('newMin :>> ', newMin);
        console.log('min :>> ', min);
        min = [coin].concat(newMin);
        // console.log('value :>> ', value);
        // console.log('min :>> ', min);
      }
    }
    return (cache[value] = min);
  };
  return makeChange(amount);
}

const res = minCoinChange([1, 5, 10, 25], 36);
console.log('res :>> ', res);
