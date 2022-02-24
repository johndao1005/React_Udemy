import { useReducer, useEffect, useState } from "react"
import { transactionReducer } from "../reducer/transactionReducer"
import { collection, doc, getDocs, Timestamp } from "firebase/firestore"
import {db} from "../firebase/config"


// export const useFireStore = (collection) => {
//     const [state, dispatch] = useReducer(transactionReducer, {
//         transactions: null,
//         loading: false,
//         error: null
//     })
//     const readTransactions = async (uid) => {
//         dispatch({ type: 'LOADING' })
//         try {
            
//             } catch (error) {
//                 dispatch({ type: 'ERROR', payload: error.message })
//             }
//         }

//     const createTransaction = async (doc) => {
//             dispatch({ type: 'LOADING' })

//             try {
//                 const createdAt = Timestamp.fromDate(new Date())
//                 const addedDocument = await db.add({ ...doc, createdAt })
//                 dispatch({ type: 'CREATE_TRANSACTION', payload: addedDocument })
//             }
//             catch (error) {
//                 dispatch({ type: 'ERROR', payload: e.message })
//             }
//         }

//         // delete a document
//         const deleteTransaction = async (id) => {
//             dispatch({ type: 'LOADING' })

//             try {
//                 await doc(id).delete()
//                 dispatch({ type: 'DELETE_TRANSACTION' })
//             }
//             catch (error) {
//                 dispatch({ type: 'ERROR', payload: 'could not delete' })
//             }
//         }

//         // update a document
//         const updateTransaction = async (id, updates) => {
//             dispatch({ type: "LOADING" })

//             try {
//                 const updatedDocument = await doc(id).update(updates)
//                 dispatch({ type: "UPDATE_TRANSACTION", payload: updatedDocument })
//                 return updatedDocument
//             }
//             catch (error) {
//                 dispatch({ type: "ERROR", payload: error })
//                 return null
//             }
//         }
//         return { readTransactions, updateTransaction, createTransaction, deleteTransaction, state }
//     }

// export const useFireStore = (collection) => {
//     const [state, dispatch] = useReducer(transactionReducer, {
//         transactions: null,
//         loading: false,
//         error: null
//     })
//     const readTransactions = async (uid) => {
//         dispatch({ type: 'LOADING' })
//         try {
            
//             } catch (error) {
//                 dispatch({ type: 'ERROR', payload: error.message })
//             }
//         }

//     const createTransaction = async (doc) => {
//             dispatch({ type: 'LOADING' })

//             try {
//                 const createdAt = Timestamp.fromDate(new Date())
//                 const addedDocument = await db.add({ ...doc, createdAt })
//                 dispatch({ type: 'CREATE_TRANSACTION', payload: addedDocument })
//             }
//             catch (error) {
//                 dispatch({ type: 'ERROR', payload: e.message })
//             }
//         }

//         // delete a document
//         const deleteTransaction = async (id) => {
//             dispatch({ type: 'LOADING' })

//             try {
//                 await doc(id).delete()
//                 dispatch({ type: 'DELETE_TRANSACTION' })
//             }
//             catch (error) {
//                 dispatch({ type: 'ERROR', payload: 'could not delete' })
//             }
//         }

//         // update a document
//         const updateTransaction = async (id, updates) => {
//             dispatch({ type: "LOADING" })

//             try {
//                 const updatedDocument = await doc(id).update(updates)
//                 dispatch({ type: "UPDATE_TRANSACTION", payload: updatedDocument })
//                 return updatedDocument
//             }
//             catch (error) {
//                 dispatch({ type: "ERROR", payload: error })
//                 return null
//             }
//         }
//         return { readTransactions, updateTransaction, createTransaction, deleteTransaction, state }
//     }
