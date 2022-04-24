import { useContext } from "react";
import { ExpenseTrackerContext } from "./Context/Context";

import { incomeCategories, expenseCategories, resetCategories } from "./Constants/Category";

// Create a custom Hook - custom hook is an arrow function that start with use
// It accepts one parameter called (title); this title will let you know which of the category you are


// [
//     {id: '1', type: 'Income', amount: "500", category: "Salary"},
//     {id: '1', type: 'Expense', amount: "20", category: "Gift"},
//     {id: '2', type: 'Income', amount: "100", category: "Business"},
// ]

// [
//     { type: 'Business', amount: 0, color: incomeColors[0] },
//     { type: 'Investments', amount: 0, color: incomeColors[1] },
//     { type: 'Extra income', amount: 0, color: incomeColors[2] },
//     { type: 'Deposits', amount: 0, color: incomeColors[3] },
//     { type: 'Lottery', amount: 0, color: incomeColors[4] },
//     { type: 'Gifts', amount: 0, color: incomeColors[5] },
//     { type: 'Salary', amount: 0, color: incomeColors[6] },
//     { type: 'Savings', amount: 0, color: incomeColors[7] },
//     { type: 'Rental income', amount: 0, color: incomeColors[8] },
// ];

const useTransactions = (title) => {
    resetCategories();
    const { transactions } = useContext(ExpenseTrackerContext)
    // Filter the categories and keep only the ones with type === title
    const transactionActivityPerType = transactions.filter(t => t.type === title);
    console.log(transactionActivityPerType)
    // Sum up the value of reported income/expense
    const total = transactionActivityPerType.reduce((acc, currVal) => acc += currVal.amount, 0);
    // Identify the selected category
    const categories = title === "Income" ? incomeCategories : expenseCategories;
    console.log({ transactionActivityPerType, total, categories})

    // Loop through the selected categories and carry an action on each category
    transactionActivityPerType.forEach(tran => {
        // For each transaction activity, find the category it belongs to and validate it with the parent {} category (i.e transactionActivityPerType).
        const category = categories.find(c => c.type === tran.category)

        if (category) category.amount += tran.amount
    });

    console.log(transactionActivityPerType)

    const balance = total

    // Next: remove the category with amount less than 0..
    // This will be used when importing the chart
    const filteredCategories = categories.filter(c => c.amount > 0)

    const chartData = {
        datasets: [{
            data: filteredCategories.map(c=> c.amount),
            backgroundColor: filteredCategories.map(c=> c.color),
        }],
        labels: filteredCategories.map(c=> c.type),
    }

    return { total, chartData}
}

export default useTransactions