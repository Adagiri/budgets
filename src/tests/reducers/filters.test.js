import filtersReducer from '../../reducers/filters'
import moment from 'moment';
import filtersTemplate from '../fixtures/filters';

test('should set default with no params', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: '',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')

    });
});

test('should set text in state', () => {
    const action = {
        type: 'FILTER_TEXT',
        text: 'adagiri'
    };

    const state = filtersReducer(filtersTemplate, action);
    expect(state).toEqual({
        ...filtersTemplate, text: 'adagiri'
    });
});

test('should set sortBy to amount state', () => {
    const action = {
        type: 'SORT_BY_AMOUNT'
    }

    const state = filtersReducer(filtersTemplate, action);
    expect(state).toEqual({
        ...filtersTemplate, sortBy: 'amount'
    })
});;

test('should set sortBy to date in state', () => {
    const action = {
        type: 'SORT_BY_DATE'
    }

    const state = filtersReducer(filtersTemplate, action);
    expect(state).toEqual({
        ...filtersTemplate, sortBy: 'date'
    });
});


test('should set startDate in state', () => {
    const action = {
        type: 'SET_START_DATE',
        start: moment().startOf('month')
    }

    const state = filtersReducer(filtersTemplate, action);
    expect(state).toEqual({
        ...filtersTemplate, startDate: moment().startOf('month')
    });
});

test('should set endDate in state', () => {
    const action = {
        type: 'SET_END_DATE',
        end: moment().endOf('month')
    }

    const state = filtersReducer(filtersTemplate, action);
    expect(state).toEqual({
        ...filtersTemplate, endDate: moment().endOf('month')
    });
});