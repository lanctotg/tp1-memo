import Tache from './Tache';
import './Taches.scss';
import {ajouterTache} from "../code/tache-modele";




export default function Taches({utilisateur, taches, setTaches}) {

    /**
     * fonction qui envoie le form à Firestore
     * @param {String} idUtilisateur ID firebase de l'utilisateur connecté
     * @param {Object} tache tache à envoyer
     */

    function gestionForm(idUtilisateur, e) {
        e.preventDefault();
        const tache = {tache: e.target[0].value};
        e.target[0].value = '';
        tacheModele.ajouterTache(idUtilisateur, tache).then(
            (doc) => {setTaches([{id: doc.id, ...doc.data()}, ...taches]);}).catch(
            err => {
                console.error('La tâche n\'a pas pu être enregistrée');
            });
    }

    useEffect(() => tacheModele.lireTout(utilisateur.uid).then(tache => setTaches(tache)), [utilisateur, setTaches]);

    return (
        <section className="Taches">
            <form onSubmit={e => gestionForm(utilisateur.uid, e)}>
                <input
                    type="text"
                    placeholder="Ajoutez une tâche ..."
                    name="texteTache"
                    autoComplete="off"
                />
            </form>
            <div className="liste-taches">
                {
                    taches.map(tache => <Tache key={tache.id} {...tache}/>)
                }
            </div>
        </section>
    );
}