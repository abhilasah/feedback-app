import { ref, onValue, DataSnapshot } from "firebase/database";
import { Action, Dispatch } from "@reduxjs/toolkit";
import db from "../database/config";

export const startLoadingResponses = (state=null, action: Action) => {
  const dbRef = ref(db, '/survey/responses'); // need townhall id
  let responses:any={};
  return (dispatch:Dispatch<any>)=> {
    return onValue(dbRef, (snapshot) => {
      snapshot.forEach((childSnapshot:DataSnapshot)=>{responses[childSnapshot.key || 'qid']=childSnapshot.val()});
      dispatch(loadResponses(responses));
    },
    {
      onlyOnce: true
    });
  }
}

export function loadResponses(responses:any, submittedAt:Date | null=null){
  return {
    type:'LOAD_RESPONSES',
    survey: {responses, submittedAt}
  }
}

