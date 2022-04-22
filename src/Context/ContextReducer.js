export const ContextReducer = (state, action) => {
    // logic for adding transaction and deleting transaction
    let transactions;

    switch (action.type) {
        case 'ADD_TRANSACTION':
            transactions = [action.payload, ...state]
            return transactions;

        case 'DELETE_TRANSACTION':
            transactions = state.filter(target => target.id !== action.payload)
            return transactions;
            
        default:
            return state;
    }

}