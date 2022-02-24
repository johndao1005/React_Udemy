import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { deleteDoc, doc ,serverTimestamp,updateDoc} from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../firebase/config';
import { useAuthContext } from '../hooks/userHooks';
import './TransactionDetails.css'

function TransactionDetails({transaction}) {
  const [editedName, setEditedName] = useState('');
  const [editedPrice, setEditedPrice] = useState('')
  const [edit, setEdit] = useState(false)
  const {user} =useAuthContext()
  const handleSubmit = () => {
    //TODO add edit transaction api
  }
  useEffect(() => {
    console.log(edit)
    return () => {

    };
  }, [edit])

  const handleDelete =  (e) => {
    e.preventDefault();
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
    e.preventDefault();
    confirmAlert({
      title: 'Update confirm',
      message: 'Update transaction details?',
      buttons: [
        {
          label: 'Yes',
          onClick: async() => {await updateDoc(doc(db, user.uid, transaction.id),{
            transactionName: editedName,
            price: editedPrice,
          })
          setEdit(false);
        }
        },
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
        (<form className="transaction-form" onSubmit={handleSubmit}>
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
          <button className="button" type="submit">Save</button>
        </form>)
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