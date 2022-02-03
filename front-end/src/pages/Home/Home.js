import styles from './Home.module.css'
import {useAuthContext} from '../../hooks/useAuthContext'
import {useCollections} from '../../hooks/useCollection'
import React from 'react';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';


export default function Home() {
  const {user} = useAuthContext(); 
  const {documents,error} = useCollections('transactions',["uid","==",user.uid],["createAt","desc"]);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
      {error && <p>{error}</p>}
      {documents && <TransactionList transactions={documents} />}
      </div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid}/>
      </div>
      
    </div>);
}
