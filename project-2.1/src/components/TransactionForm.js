import React, { useState } from 'react'
import './TransactionForm.css'
import { addDoc, collection,serverTimestamp } from "firebase/firestore"
import { db } from "../firebase/config"
import { useAuthContext } from "../hooks/userHooks"
function TransactionForm() {
  const { user } = useAuthContext()
  const [transactionName, setTransactionName] = useState('');
  const [price, setPrice] = useState(0);
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const regex =/^[1-9]+$/;
    setError(null)
    if (!price.match(regex)) {
      setError("Please enter a number for price");
      return;
    }
    await addDoc(collection(db, user.uid, ), {
        transactionName: transactionName,
        price: price,
        timeStamp: serverTimestamp()
    })
    setPrice("")
    setTransactionName("")
  }

  return (
    <div className="transaction">
      <div className="details-form" >
        <h2> Transaction input</h2>
        {error && <p>{error}</p>}
        <label>
          <span>Transaction Name</span>
          <input
            type="text"
            onChange={(e) => { setTransactionName(e.target.value) }}
            value={transactionName}
          />
        </label>
        <label>
          <span>Price</span>
          <input
            type="number"
            onChange={(e) => { setPrice(e.target.value) }}
            value={price}
          />
        </label>
        <button onClick={handleSubmit}>Create Transaction</button>
      </div>
    </div>
  )
}

export default TransactionForm