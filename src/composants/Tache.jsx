import './Tache.scss';
import {ajouterTache} from "../code/tache-modele";
import * as gestionDate from "../code/gestionDate";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export default function Tache({tache, date}) {
  return (
    <div className="Tache">
      {/*Bouton MUI de success*/}
          <CheckCircleIcon className="CheckCircleIcon"/>
        <span className="texte">{tache}</span>
      <span className="date">{gestionDate.gestionTemps(date.seconds)}</span>
      {/*Bouton MUI de supression*/}
        <RemoveCircleIcon className="RemoveCircleIcon" />
    </div>
  );
}