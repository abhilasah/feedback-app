import { configureStore } from '@reduxjs/toolkit';
import { ref, onValue } from "firebase/database";
import db from '../database/config';

const dummyReducer = () => {
    const dbRef = ref(db, '/readme');
    let data = 'Data ';
    onValue(
        dbRef, 
        snapshot => {
            data += snapshot.val();
            console.log(data);
        },
        {onlyOnce: true}
    );
    return "dummyReducer";
}

export default configureStore ({
    reducer:dummyReducer
});
