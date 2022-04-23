import { useContext } from "react";
import { ExpenseTrackerContext } from "./Context/Context";

import { incomeCategories, expenseCategories, resetCategories } from "./Constants/Category";

// Create custom Hook - custom hook is an arrow function that start with use
// It accepts one parameter called (title); this title will let us which of the category we are
const useTransactions = (title) => {
    resetCategories();
    const { transactions } = useContext(ExpenseTrackerContext)
    // Filter the categories and keep only the ones with type === title
    const selectedCategories = transactions.filter(t => t.type === title);
    const total = selectedCategories.reduce((acc, currVal) => acc += currVal.amount, 0);
    
}

export default useTransactions