import {bdFirestore} from "../code/init";
import { getDocs, collection, Timestamp, addDoc, getDoc } from "firebase/firestore";

/**
 * Afficher les tâches d'un utilisateur
 * @param {string} idUtilisateur Identifiant firebase de l'utilisateur connecté
 * @returns {Promise<any[]>} Promise contenant les dossiers de l'utilisateur
 */

export async function lireTout(idUtilisateur) {
    return getDocs(collection(bdFirestore, 'memo', idUtilisateur, 'taches')).then(
        res => res.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    );
}

/**
 * Ajouter une tâche dans la BDD de l'utilisateur
 * @param {string} idUtilisateur Identifiant firebase de l'utilisateur connecté
 * @param {object} tache Tâche à ajouter
 */

export async function ajouterTache(idUtilisateur, tache) {
    const date = Timestamp.now();
    tache.date = date;
    const docRef = await addDoc(collection(bdFirestore, `memo/${idUtilisateur}/taches`),
        tache,
        { merge: true });
    return await getDoc(docRef);
}