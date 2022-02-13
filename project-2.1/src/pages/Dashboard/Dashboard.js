import React from 'react'
import TransactionForm from '../../components/TransactionForm'
import TransactionDetails from '../../components/TransactionDetails'

function Dashboard() {
  return (
    <div className="container">
      <TransactionForm/>
      <TransactionDetails/>
      </div>
  )
}

export default Dashboard