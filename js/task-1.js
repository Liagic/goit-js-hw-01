function makeTransaction(quantity, pricePerDroid) {
  return `You ordered ${quantity} droids worth ${
    Number.parseFloat(quantity) * Number.parseFloat(pricePerDroid)
  } credits!`;
}
console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));
