import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { deleteDoc, doc ,updateDoc} from 'firebase/firestore';
import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../firebase/config';
import { useAuthContext } from '../hooks/userHooks';
import './TransactionDetails.css'

function TransactionDetails({transaction}) {
  // setting input field data
  const [editedName, setEditedName] = useState('');
  const [editedPrice, setEditedPrice] = useState('')
  // change between view and edit card for transactions
  const [edit, setEdit] = useState(false)
  const {user} =useAuthContext()

  const handleDelete =  (e) => {
    e.preventDefault();
    //confirm message box
    confirmAlert({
      title: 'Delete confirm',
      message: 'Are you sure to do this?',
      buttons: [
        {
          label: 'Yes',
          onClick: async() => await deleteDoc(doc(db, user.uid, transaction.id))
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ]
    });
  }

  const handleUpdate = (e)=>{
    if(editedName==="" || editedPrice===""){

    }
    e.preventDefault();
    confirmAlert({
      title: 'Update confirm',
      message: 'Update transaction details?',
      buttons: [
        {
          label: 'Yes',
          onClick: async() => {await updateDoc(doc(db, user.uid, transaction.id),{
            transactionName: editedName===""?transaction.transactionName:editedName,
            price: editedPrice===""?transaction.price:editedPrice,
          })
          // change card stage to view
          setEdit(false);
        }},
        {
          label: 'No',
          onClick: () => {}
        }
      ]
    });
  }

  return (
    <div className="transaction">
      
      {!edit ? (<div>
        <Link to={`/transactions/${transaction.id}`}>
          <p className="name">{transaction.transactionName}</p>
        </Link>
        <p className="amount">${transaction.price}</p>
      </div>) :
        (<div className="transaction-form" >
          <label>
            <span>Transaction</span>
            <input
              type="text"
              onChange={(e) => { setEditedName(e.target.value) }}
              value={editedName}
              placeholder={transaction.transactionName}
            />
          </label>
          <label>
            <span>Price</span>
            <input
              type="number"
              onChange={(e) => { setEditedPrice(e.target.value) }}
              value={editedPrice}
              placeholder={transaction.price}
            />
          </label>
        </div>)
      }

      <div >
        {edit?<>
        <button className="sideButton" onClick={() => setEdit(!edit)}>Cancel</button>
        <button className="sideButton" onClick={handleUpdate}>Update</button>
        </>
      :<>
        <button className="sideButton" onClick={handleDelete}>Delete</button>
        <button className="sideButton" onClick={() => setEdit(!edit)}>Edit</button>
      </>
      }
      </div>
    </div>
  )
}

export default TransactionDetails