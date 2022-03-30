import {bdFirestore} from "../code/init";


export function ajouterTache(e){
    e.preventDefault();
    console.log(e.target.elements[0].value);
    const [Taches, setTaches] = useState([]);

    // const obtenirTaches=async()=>{
    //     const reponse=bdd.collection('taches');
    //     const donnees=await reponse.get();
    //
    //     donnees.docs.forEach(item=>{
    //         setTaches([...Taches,item.data()])
    //     })
    // }
    //
    // useEffect(() => {
    //     obtenirTaches();
    // }, [])

    // Obtenir les taches de la base de donnes firebase firestore
    bdFirestore.collection("taches").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
            setTaches(doc.data());
        });
    });


}

