export const ContextReducer = (state, action) => {
    // logic for adding transaction and deleting transaction
    let transactions;

    switch (action.type) {
        case 'ADD_TRANSACTION':
            transactions = [action.payload, ...state]
    // When a new transaction is created, store the result in the local storage
            localStorage.setItem('transactions', JSON.stringify(transactions))

            return transactions;

        case 'DELETE_TRANSACTION':
            transactions = state.filter(target => target.id !== action.payload)
    // When a transaction is deleted from the list, store the result in the local storage
            localStorage.setItem('transactions', JSON.stringify(transactions))

            return transactions;
            
        default:
            return state;
    }

}
