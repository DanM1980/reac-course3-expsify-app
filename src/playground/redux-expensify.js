import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => (
    {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    }
);

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const expnesesReducerDefaultState = [];
const expensesReducer = (state = expnesesReducerDefaultState, action) => {
    switch (action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return  state.map((expense) => {
                if (expense.id === action.id){
                    return{
                        ...expense,//load current expense
                        ...action.updates//overwrite updates
                    }
                } else return expense;
            });
        default:
            return state;
    }
};

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

const setStartDate = (startDate) =>({
    type: 'SET_START_DATE',
    startDate
});

const setEndDate = (endDate) => ({
   type: 'SET_END_DATE',
   endDate
});

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return{
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return{
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return{
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = (typeof startDate !== 'number') || (expense.createdAt >= startDate);
        const endDateMatch = (typeof endDate !== 'number') || (expense.createdAt <= endDate);
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy == 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    });
}

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    //console.log(state);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'drugs', amount: 45000, createdAt: -2000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'sex', amount: 75000, createdAt: -1000 }));

//store.dispatch(setTextFilter("ex"));

//
// store.dispatch(removeExpense({id: expenseOne.expense.id}));
//
// store.dispatch(editExpense(expenseTwo.expense.id, { amount:9999999 }));
//
// store.dispatch(setTextFilter('sex'));
//
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(0));

const demoState = {
    expenses: [{
        id: 'tttt',
        description: 'drugs',
        note: 'too expensive',
        amount: 6500,
        createdAt: 0
    }],
    filters: {
        text: 'too',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};
