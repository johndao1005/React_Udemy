import React, { useState } from 'react'
import './TransactionForm.css'
function TransactionForm() {
  const [transactionName, setTransactionName] = useState('');
  const [price, setPrice] = useState('');
  const handleSubmit = (e)=>{
    e.preventDefault();

  }

  return (
    <div className="box">
    <form className="details-form" onSubmit={handleSubmit}>
      <h2> Transaction input</h2>
      <label>
        <span>Transaction Name</span>
        <input
        type="text"
        onChange={(e)=>{setTransactionName(e.target.value)}}
        value={transactionName}
        />
      </label>
      <label>
        <span>Price</span>
        <input
        type="number"
        onChange={(e)=>{setPrice(e.target.value)}}
        value={price}
        />
      </label>
      <button type="submit">Create Transaction</button>
    </form>
    </div>
  )
}

export default TransactionForm