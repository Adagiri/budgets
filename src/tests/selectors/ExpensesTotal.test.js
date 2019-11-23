import ExpensesTotal from '../../selectors/ExpensesTotal';
import expenses from '../fixtures/expenses';
import { emptyExpense, oneExpense } from '../fixtures/expenses'

test('should add up total amount from multiple expenses array', () => {
   const total = ExpensesTotal(expenses);

   expect(total).toBe(93000)
});

test('should total to 0 on no expenses', () => {
   const total = ExpensesTotal(emptyExpense);
   expect(total).toBe(0)
});

test('should return appropriate total amount for single expense array', () => {
    const total = ExpensesTotal(oneExpense);
 
    expect(total).toBe(4500)
 });