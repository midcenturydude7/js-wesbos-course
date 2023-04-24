function calculateBill(billAmount, taxRate = 0, tipRate = 0.2) {
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

console.log(`Your total is: $${calculateBill(100)}`);
