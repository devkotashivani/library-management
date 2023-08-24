import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/FirebaseConfig";
import { setAdmin } from "./userSlice";
import { toast } from "react-toastify";



export const getUserAction = async (uid, dispatch) =>{
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    try{
        if (docSnap.exists()) {
            console.log("Document data:", );
            const userData = docSnap.data();
      
            dispatch(setAdmin({...userData, uid}))
          } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
            
          }
    }
    catch (e){
        toast.error(e.message);
    }
   
}