import Tache from './Tache';
import './Taches.scss';
import {ajouterTache} from "../code/tache-modele";


export default function Taches({ajouterTache}) {

  return (
    <section className="Taches">
      <form onSubmit={e => ajouterTache(e)}>
        <input 
          type="text"   
          placeholder="Ajoutez une tâche ..." 
          name="texteTache"
          autoComplete="off" 
        />
      </form>
      <div className="liste-taches">
        <Tache />
        <Tache />
        <Tache />
      </div>
    </section>
  );
}