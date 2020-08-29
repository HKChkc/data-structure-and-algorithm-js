// function decimalToBinary(num) {
//   const stack = [];
//   let number = num;
//   let rem;
//   let binaryString = '';
//   while (number > 0) {
//     rem = Math.floor(number % 2);
//     stack.push(rem);
//     number = Math.floor(number / 2);
//   }
//   while (stack.length > 0) {
//     binaryString += stack.pop().toString();
//   }
//   return binaryString;
// }
// console.log(decimalToBinary(233)); // 11101001
// console.log(decimalToBinary(10)); // 1010
// console.log(decimalToBinary(1000)); // 1111101000

// 任意进制
function baseConverter(decNumber, base) {
  const stack = [];
  let number = decNumber;
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let rem;
  let baseString = '';
  if (base < 2 || base > 36) {
    return '';
  }
  while (number > 0) {
    rem = Math.floor(number % base);
    stack.push(rem);
    number = Math.floor(number / base);
  }
  while (stack.length) {
    baseString += digits[stack.pop()];
  }
  return baseString;
}
console.log(baseConverter(100345, 2)); // 11000011111111001
console.log(baseConverter(100345, 8)); // 303771
console.log(baseConverter(100345, 16)); // 187F9
console.log(baseConverter(100345, 35)); // 2BW0
