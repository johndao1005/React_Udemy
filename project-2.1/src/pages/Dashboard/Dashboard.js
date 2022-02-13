import React from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'
import TransactionForm from '../../components/TransactionForm'
import TransactionDetails from '../../components/TransactionDetails'

function Dashboard() {
  return (
    <div className="container">
      <div className="content">
        <ul className="transactions">
            <TransactionDetails />
        </ul>
        {/* sudo code
      {transactions.length?<p>Sorry no transaction to show</p>:<ul>
        transactions.map(transaction=>(<Link to="/transaction/{transaction.id}">
        <TransactionDetails transaction={transaction}/>
        </Link>))
      </ul>} */}
      </div>
      <div className="sidebar">
        <TransactionForm />
      </div>
    </div>
  )
}

export default Dashboard