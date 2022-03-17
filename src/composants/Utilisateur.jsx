import './Utilisateur.scss';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { deconnexion } from "../code/utilisateur-modele";

export default function Utilisateur({utilisateur, setUtilisateur}) {
  return (
    <div className="utilisateur">
      <span className="nom">{utilisateur.displayName}</span>
      <Avatar className="avatar" title={utilisateur.email} src={utilisateur.photoURL}/>
      
      <Button 
        variant="outlined"
        size="small"
        className="btn-deconnexion"
        onClick={deconnexion}
      >
        Déconnexion
      </Button>
    </div>
  );
}