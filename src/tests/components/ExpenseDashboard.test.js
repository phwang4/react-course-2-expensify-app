import React from 'react';
import ExpenseDashboardPage from '../../components/ExpenseDashboard';
import { shallow } from 'enzyme'

test('should render ExpenseDashboard correctly', () => {
  const wrapper = shallow(<ExpenseDashboardPage />)
  expect(wrapper).toMatchSnapshot()
})
