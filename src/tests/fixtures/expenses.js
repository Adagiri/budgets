import moment from 'moment';

export default [
    {
        id: 1,
        description: 'Rent',
        amount: 4500,
        createdAt: moment().subtract(9, 'days'),
        note: 'My house rent'
    },

    {
        id: 2,
        description: 'Water',
        amount: 3500,
        createdAt: moment(),
        note: 'Water usage rate'
    },

    {
        id: 3,
        description: 'Fees',
        amount: 85000,
        createdAt: moment().add(9, 'days'),
        note: 'Outstanding fee'
    }
];

export const emptyExpense = [];

export const oneExpense = [
    {
        id: 1,
        description: 'Rent',
        amount: 4500,
        createdAt: moment().subtract(9, 'days'),
        note: 'My house rent'
    } ]
