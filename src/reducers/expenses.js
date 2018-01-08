const expnesesReducerDefaultState = [];

export default (state = expnesesReducerDefaultState, action) => {
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
