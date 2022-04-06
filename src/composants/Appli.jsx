import './Appli.scss';
import logo from '../images/memo-logo.png';
import Controle from './Controle';
import Taches from './Taches';
import Accueil from './Accueil';
import Utilisateur from './Utilisateur';
import { useState, useEffect } from 'react';
import {observerEtatConnexion} from "../code/utilisateur-modele";


export default function Appli() {

    // État utilisateur
    const [utilisateur, setUtilisateur] = useState(null);
    const [taches, setTaches] = useState([]);


    // Surveiller l'état de la connexion Firebase Auth
    useEffect (
        () => observerEtatConnexion(setUtilisateur), []
    );

  return (
          // 1)  Si un utilisateur est connecté :
          utilisateur ?
            <div className="Appli">
                <header className="appli-entete">
                    <img src={logo} className="appli-logo" alt="Memo" />

                    <div className="compte">
                        <Utilisateur className="utilisateur" alt={utilisateur.displayName} setUtilisateur={setUtilisateur} utilisateur={utilisateur} />
                    </div>
                </header>

                <Taches utilisateur={utilisateur} taches={taches} setTaches={setTaches} />
                <Controle taches={taches} setTaches={setTaches}/>
            </div>


          // 2)   Par contre si aucun utilisateur n'est connecté, on affiche plutôt le composant suivant :
          : <Accueil setUtilisateur={setUtilisateur} utilisateur={utilisateur} />
  );
}
