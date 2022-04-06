
/**
 * @param {number} date Paramètre comptant la date depuis le linux epoch
 * @returns {string} Retourne la date en format jj/mm/aaaa
 */

/*
 * On transforme le timestamp en date javascript
 */
export function gestionTemps(ts) {
        const date = new Date(ts * 1000);
        const jj = date.getDate();
        const moisListe = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
        const mm = moisListe[date.getMonth()];
        const aa = date.getFullYear();
        const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        return `${jj} ${mm} ${aa} à ${date.getHours()}:${minutes}:${date.getSeconds()}`;

}