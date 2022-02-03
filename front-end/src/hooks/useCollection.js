import { useRef, useEffect, useState } from "react"
import { projectFirestore } from "../firebase/congif"


export const useCollections = (collection, _query, _orderBy) => {
    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);
    
    //useRef stop the infinite loop due to checking the query over and over again
    const query = useRef(_query).current;
    const orderBy = useRef(_orderBy).current;


    useEffect(()=>{ //the function start right when the component is attached
        let ref = projectFirestore.collection(collection);

        if (query){
            ref = ref.where(...query);
        }
        // if (orderBy){
        //     ref = ref.orderBy(...orderBy);
        // }

        const unsub = ref.onSnapshot((snapshot)=>{
            let result = [];
            snapshot.docs.forEach(doc => result.push({...doc.data(),id: doc.id}));
            setDocuments(result);
            setError(null);
        },(error)=>{
            console.error(error);
        })

        return ()=> unsub();
    },[collection,query,orderBy])
    return{documents,error};
}