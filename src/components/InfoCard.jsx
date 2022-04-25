import React from 'react'

const InfoCard = () => {

    // Dynamic interaction on the InfoCard
    const isIncome = Math.round(Math.random())
  return (
    <div style={{textAlign: 'center', padding: '0 10%'}}>
        Try to say: <br />
        Add {isIncome ? 'Income ' : 'Expense '} 
        for {isIncome ? '$1000 ' : '$300 '} 
        in Catagory {isIncome ? 'Salary ' : 'Food '} 
        for {isIncome ? 'Monday ' : 'Friday '}
    </div>
  )
}

export default InfoCard