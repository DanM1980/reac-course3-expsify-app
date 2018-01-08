import { createStore } from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count = 0 } = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

///////////////////////////////////////
// Reducers
// 1. pure functions
// 2. never change state or action
///////////////////////////////////////

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type){
        case 'SET':
            return {
                count: action.count
            }
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsbscribe = store.subscribe(() => {
    console.log(store.getState());
})


store.dispatch(incrementCount({incrementBy: 555}));
store.dispatch(incrementCount({incrementBy: 1}));
store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy: 222}));
store.dispatch(setCount({count: 7777}));
store.dispatch(resetCount());
