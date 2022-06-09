function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const [add1, subtract1, multiply1, divide1] = calculate(4, 7);
console.log(add1);
console.log(subtract1);
console.log(multiply1);
console.log(divide1);
