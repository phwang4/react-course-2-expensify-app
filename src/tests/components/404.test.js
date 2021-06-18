import React from 'react';
import NotFoundPage from '../../components/404';
import { shallow } from 'enzyme'

test('should render ExpenseDashboard correctly', () => {
  const wrapper = shallow(<NotFoundPage />)
  expect(wrapper).toMatchSnapshot()
})
