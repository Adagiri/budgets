import { sortByAmount, sortByDate, filterText, setStartDate, setEndDate } from '../../actions/Filters';

test('should set filterText action object for passed value', () => {
    const action = filterText('zain');
    expect(action).toEqual({
      type: "FILTER_TEXT",
      text: 'zain'
    });
});


test('should set filterText action object for default value', () => {
    const action = filterText('');
    expect(action).toEqual({
      type: "FILTER_TEXT",
      text: ''
    });
});


test('should set sortByAmount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
      type: "SORT_BY_AMOUNT"
    });
});

test('should set sortByDate action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
      type: "SORT_BY_DATE"
    });
});

test('should set setStartDate action object with parameters', () => {
    const action = setStartDate(2000);
    expect(action).toEqual({
      type: "SET_START_DATE",
      start: 2000
    });
});

test('should set setStartDate action object without parameters', () => {
    const action = setStartDate();
    expect(action).toEqual({
      type: "SET_START_DATE",
      start: 0
    });
});

test('should set setEndDate action object with parameters', () => {
    const action = setEndDate(2000);
    expect(action).toEqual({
      type: "SET_END_DATE",
      end: 2000
    });
});

test('should set setEndDate action object without parameters', () => {
    const action = setEndDate();
    expect(action).toEqual({
      type: "SET_END_DATE",
      end: 0
    });
});
