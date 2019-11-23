import React from 'react'
import Error404Page from '../../components/Error404Page';
import { shallow } from 'enzyme';

test('should render error page correctly', () => {
    const wrapper = shallow( <Error404Page />);
    expect(wrapper).toMatchSnapshot();
});