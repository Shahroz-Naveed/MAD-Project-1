import firebaseApp from './firebase'
import { getFirestore, addDoc, collection } from "firebase/firestore"
const db = getFirestore(firebaseApp)

export const SendMessage = async (msg) => {
    try {
        await addDoc(collection(db, "Chat"), msg)
        return {scuccess: true}
}
 catch (e) {
        console.log(e)
        return {success: false}
}
}