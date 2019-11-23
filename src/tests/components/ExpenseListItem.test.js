import React from 'react';
import ExpenseListItem from '../../components/ExpenseListItem';
import ExpenseArray from '../fixtures/expenses';
import { shallow } from 'enzyme';


test('should render ExpenseListItem correctly', () => {
   const wrapper = shallow( <ExpenseListItem  { ...ExpenseArray } />);
   expect(wrapper).toMatchSnapshot();
})