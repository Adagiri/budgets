import expenseArray from '../fixtures/expenses';
import expensesReducer from '../../reducers/expenses';

test('should add expense to state with default value', ()=> {
   const state = expensesReducer( undefined, {type: '@@INIT'} )
   expect(state).toEqual([]);
});

test('should add expense to state with parameters', ()=> {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseArray[1]
        }
    };
    const state = expensesReducer( expenseArray, action )
    expect(state).toEqual([...expenseArray, expenseArray[1]]);
 });

 test('should remove expense from state with valid id', ()=> {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenseArray[1].id
    };
    const state = expensesReducer( expenseArray, action )
    expect(state).toEqual([ expenseArray[0], expenseArray[2]]);
 });

 test('should not remove expense from state with invalid id', ()=> {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 12
    };
    const state = expensesReducer( expenseArray, action )
    expect(state).toEqual(expenseArray);
 });

 test('should edit expense in state with specified id', ()=> {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenseArray[1].id,
        update: {
            description: 'lazy'
        }
    };
    const state = expensesReducer( expenseArray, action )
    expect(state[1].description).toBe('lazy')
 });

 test('should not edit any expense in state with unrecognized id', ()=> {
    const action = {
        type: 'EDIT_EXPENSE',
        id: 149,
        update: {
            description: 'lazy'
        }
    };
    const state = expensesReducer( expenseArray, action )
    expect(state[1].description).toBe(expenseArray[1].description)
 });