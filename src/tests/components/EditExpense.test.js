import React from 'react';
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpense';
import expenses from '../fixtures/expenses'

let editExpense, removeExpense, history, wrapper, expense

beforeEach(() => {
  expense = expenses[0]
  editExpense = jest.fn()
  removeExpense = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(
    <EditExpensePage 
      editExpense={editExpense} 
      removeExpense={removeExpense}
      history={history}
      expense={expense}
    />
  )
    
})

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle editExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')({amount: 200})
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(editExpense).toHaveBeenLastCalledWith(expense.id, {amount: 200})
})

test('should handle removeExpense', () => {
  wrapper.find('button').prop('onClick')()
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(removeExpense).toHaveBeenLastCalledWith({id: expense.id})
})


