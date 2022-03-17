import {onAuthStateChanged, signInWithPopup, } from "firebase/auth";
import {authFirebase, authGoogle} from "./init";
import {doc, setDoc } from 'firebase/firestore';
import { bdFirestore } from "./init";

//Ouvre une connexion Firebase (avec Google)
export function connexion(){
    signInWithPopup(authFirebase, authGoogle);
}
export function deconnexion(){
    authFirebase.signOut();
}

export function observerEtatConnexion(mutateurEtatUtilisateur){
    onAuthStateChanged(authFirebase,
        (user) => {
            if(user){
                setDoc(doc(bdFirestore, 'signets', user.uid), {nom: user.displayName, courriel: user.email}, {merge:true}).then().catch();
            }
            mutateurEtatUtilisateur(user);
        }
    )
}