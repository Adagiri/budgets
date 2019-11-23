import { addExpense, removeExpense, editExpense } from "../../actions/Expenses";
import expenses from '../fixtures/expenses';

// test('should set addExpense action object with provided values', () => {
//    const action = addExpense(expenses[0]);
//    expect(action).toEqual({
//        type: 'ADD_EXPENSE',
//        expense: {
//        ...expenses[0],
//        id: expect.any(String)
//        }
//    })
// });

// test('should set addExpense action object with default values', () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//         id: expect.any(String),
//          description: '',
//          amount: 0,
//          createdAt: 0,
//          note: ''
//         }
//     })
//  });

test('should set removeExpense action object', () => {
    const action = removeExpense(expenses[0].id);
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 1
        
    })
 });

 test('should set editExpense action object', () => {
    const action = editExpense(expenses[0].id, {description: 'note', amount: 600});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 1,
        update: {description: 'note', amount: 600}
        
    })
 });