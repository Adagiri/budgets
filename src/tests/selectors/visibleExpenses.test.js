import visibleExpenses from '../../selectors/getVisibleExpenses';
import expensesArray from '../fixtures/expenses';
import moment from 'moment';

test('should filter by text', () => {
    const action = visibleExpenses(expensesArray, {text: 'fees'});

    expect(action).toEqual([expensesArray[2]]);
});


test('should sortBy amount', () => {
    const action = visibleExpenses(expensesArray, {text: '', sortBy: 'amount', startDate: 0, endDate: 0});

    expect(action).toEqual([expensesArray[2], expensesArray[0], expensesArray[1]]);
});

test('should sortBy date', () => {
    const action = visibleExpenses(expensesArray, {text: '', sortBy: 'date', startDate: 0, endDate: 0});

    expect(action).toEqual([expensesArray[2], expensesArray[1], expensesArray[0]]);
});

test('should filter by startdate', () => {
    const action = visibleExpenses(expensesArray, {text: '', sortBy: 'date', startDate: moment().add(5, 'days'), endDate: 0});

    expect(action).toEqual([expensesArray[2]]);
});

test('should filter by enddate', () => {
    const action = visibleExpenses(expensesArray, {text: '', sortBy: 'date', startDate: 0, endDate:  moment().add(5, 'days')});

    expect(action).toEqual([expensesArray[1], expensesArray[0]]);
});

