const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

const nums = num1.concat(num2, [7, 8, 9], 'Luiz');
const numsWithSpread = [...num1, ...num2, ...[7, 8, 9], 'Luiz'];

console.log(nums);
console.log(numsWithSpread);

