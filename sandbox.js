function makeOperation(operation, num1, num2) {
  return operation(num1, num2);
}

const result = makeOperation((num1, num2) => num1 + num2, 1, 2);

console.log(result);
