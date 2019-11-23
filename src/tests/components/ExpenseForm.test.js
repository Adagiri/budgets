import React from 'react';
import ExpenseForm from '../../components/ExpenseForm';
import { shallow } from 'enzyme';
import expenseArray from '../fixtures/expenses';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

test('should render ExpenseForm correctly', () => {
   const wrapper = shallow( <ExpenseForm />);
   expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm correctly with expense', () => {
    const wrapper = shallow( <ExpenseForm expense={expenseArray[0]} />);
    expect(wrapper).toMatchSnapshot();
 });

 test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
      preventDefault: () => { }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
  });  

  test('should set description on input change', () => {
      const value = 'New description'
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
      target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
    expect(wrapper).toMatchSnapshot();
  });  


  test('should set note on textarea change', () => {
    const value = 'New note'
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('textarea').simulate('change', {
    target: { value }
  });
  expect(wrapper.state('note')).toBe('New note');
  expect(wrapper).toMatchSnapshot();
});  

test('should set amount for valid amount passed ', () => {
    const value = '123456';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('amount')).toBe(value);
  expect(wrapper).toMatchSnapshot();
}); 

test('should not set amount for invalid amount passed ', () => {
    const value = '123456iop';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('amount')).toBe('');
  expect(wrapper).toMatchSnapshot();
}); 


test('onSubmit should have been called with the expexted props', () => {
     const onSubmitSpy = jest.fn();
     const wrapper = shallow(<ExpenseForm expense={expenseArray[1]} onSubmit={onSubmitSpy} />);
     wrapper.find('form').simulate('submit', {
         preventDefault: () => {}
     });

     expect(wrapper.state('error')).toBe('');

     expect(onSubmitSpy).toHaveBeenLastCalledWith({
       description: expenseArray[1].description,
       note: expenseArray[1].note,
       amount: expenseArray[1].amount,
       createdAt: 0
     });
     
});

test('date should change when onDateChange is triggered', () => {
  const now = moment()
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find(SingleDatePicker).prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('focused should change when onFocusChange is triggered', () => {
  const now = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')(now);
    expect(wrapper.state('focused')).toEqual(undefined);
});




 
