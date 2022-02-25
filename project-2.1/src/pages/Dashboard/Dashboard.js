import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import TransactionForm from '../../components/TransactionForm'
import TransactionDetails from '../../components/TransactionDetails'
import { useAuthContext } from '../../hooks/userHooks'
import { onSnapshot, collection, query, orderBy } from 'firebase/firestore'
import {db} from "../../firebase/config"

function Dashboard() {
  const {user} = useAuthContext();
  const [transactions, setTransactions] = useState([]);
  
  useEffect(() => {
    //create query to choose which document to display
    const queryTransactions = query(collection(db,user.uid), orderBy('timeStamp', 'desc'))
    const unsub = onSnapshot(queryTransactions,(querySnapshot)=>{
      const documents = [];
      querySnapshot.forEach((snapshot)=>{
        documents.push({...snapshot.data(),id:snapshot.id});
      })
      setTransactions(documents)
    })
      return ()=>unsub();
    
  },[user.uid])
  return (
    <div className="container">
      <div className="content">
      {transactions && transactions.map((transaction)=><TransactionDetails key={transaction.id} transaction={transaction}/>)}
      </div>
      <div className="sidebar">
        <TransactionForm />
      </div>
    </div>
  )
}

export default Dashboard