import React, { useReducer, createContext } from "react";
import { ContextReducer } from "./ContextReducer";

// Make adjustment to the initial state to either display item in the local storage or default 
const initialState = JSON.parse(localStorage.getItem("transactions")) || [];

export const ExpenseTrackerContext = createContext();

export const ProvideContext = ({children}) => {
    const [transactions, dispatch] = useReducer(ContextReducer, initialState);

    // Create Actions
    // Action will either delete a transaction or add a transaction
    // payload is additional data that you want to pass with action
    const deleteTransaction = (id) => dispatch({type: "DELETE_TRANSACTION", payload: id})
    const createTransaction = (transaction) => dispatch({type: "ADD_TRANSACTION", payload: transaction})

    return (
        <ExpenseTrackerContext.Provider value={
            // deleteTransaction and createTransaction will be sent over the entire state
            {deleteTransaction, createTransaction, transactions}
        }>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}