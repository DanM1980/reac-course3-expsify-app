import { addExpense, editExpense, removeExpense } from '../../actions/expenses';
import { Stream } from 'stream';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should edit update expense', () => {
    const action = editExpense('123abc', { note: 'this is a test note!' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'this is a test note!'
        }
    });
});

test('shuld setup add expens action object with provided values', () => {
    const expanseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 100,
        note: 'Last month rent'
    }
    const action = addExpense(expanseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expanseData,
            id: expect.any(String)
        }
    });
});

test('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            amount: 0,
            createdAt: 0,
            description: '',
            note: ''
        }
    });
});