import React from 'react';
import ExpenseArray from '../fixtures/expenses';
import { ExpenseList }from '../../components/ExpenseList';
import { shallow } from 'enzyme';

test('should map out and view expense in expensesArray', () => {
    const wrapper = shallow( <ExpenseList expenses={ExpenseArray} />);
    expect(wrapper).toMatchSnapshot();
});