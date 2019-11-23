export default expenses => {
  let total = 0;
  if (expenses.length === 0) {
    total = 0;
  } else if (expenses.length > 0) {
    total = expenses.map(expense => expense.amount).reduce((a, b) => a + b);
  }

  return total;
};
