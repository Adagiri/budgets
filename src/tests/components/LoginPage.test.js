import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should render LoginPage correctly', () => {
   const action = shallow(<LoginPage />);
   expect(action).toMatchSnapshot();
});