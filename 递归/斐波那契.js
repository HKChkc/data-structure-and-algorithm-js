// 1,1,2,3,5,8,
// 后一个数是前两个数之和
/**
 * @param {*} 第几个数
 * @return {*} 前两项之和
 */
function fibonacci(n) {
  if (n < 1) return 0;
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.time('dr');
console.log('fibonacci(5)', fibonacci(40));
console.timeEnd('dr');

// 记忆斐波那契
function fibonacciMemoization(n) {
  if (n < 1) return 0;
  const memo = [0, 1];
  const fibonacciMem = num => {
    if (memo[num] != null) return memo[num];
    return (memo[num] = fibonacciMem(num - 1) + fibonacciMem(num - 2));
  };
  return fibonacciMem(n);
}

console.time('hkc');
console.log('fibonacciMemoization(6)', fibonacciMemoization(100));
console.timeEnd('hkc');
