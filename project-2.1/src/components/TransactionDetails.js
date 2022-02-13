import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './TransactionDetails.css'

function TransactionDetails() {
  const [editedName, setEditedName] = useState('');
  const [editedPrice, setEditedPrice] = useState('')
  const transaction = {
    id: 1,
    name: "coffee",
    price: "100",
    // category: ["other"],
  }

  const [edit, setEdit] = useState(false)

  const handleSubmit = () =>{
    //TODO add edit transaction api
  }
  useEffect(() => {
    console.log(edit)
    return () => {
      
    };
  }, [edit])
  const handleDelete = () => {
    return transaction.id;
  }
  return (
    <div className="transaction">
      {edit?(<form className="transaction-form" onSubmit={handleSubmit}>
        <label>
        <span>Transaction</span>
        <input
        type="text"
        onChange={(e)=>{setEditedName(e.target.value)}}
        value={editedName}
        placeholder={transaction.name}
        />
      </label>
      <label>
        <span>Price</span>
        <input
        type="number"
        onChange={(e)=>{setEditedPrice(e.target.value)}}
        value={editedPrice}
        placeholder={transaction.price}
        />
      </label>
      <button className="button" type="submit">Save</button>
      </form>):(<div>
        <Link to={`/transactions/${transaction.id}`}>
          <p className="name">{transaction.name}</p>
        </Link>
        <p className="amount">${transaction.price}</p>
      </div>)}

      <div >
        <button className="sideButton" onClick={handleDelete}>x</button>
        <button className="sideButton"onClick={()=>setEdit(!edit)}>Edit</button>
      </div>
    </div>
  )
}

export default TransactionDetails