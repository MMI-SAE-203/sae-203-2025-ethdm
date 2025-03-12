import { getallfilmBydate } from './backend.mjs' ;
import { getallactiviteBydate } from './backend.mjs' ;
import { getAllguestByname } from './backend.mjs' ;
import { getFilmById } from './backend.mjs' ;
import { getActiviteById } from './backend.mjs' ;
import { getOneInviteById } from './backend.mjs' ;
import { getallActiviteByOneAnimateurId } from './backend.mjs' ;
import { getallActiviteByOneAnimateurName } from './backend.mjs' ;
import { modifFilmInformationById } from './backend.mjs' ;
import { modifActiviteInformationById } from './backend.mjs' ;
import { modifInviteInformationById } from './backend.mjs' ;

//try {
//    const movies = await getallfilmBydate() ;
//    console.log(film) ;
//} catch (e) {
//    console.error(e) ;
//}

//try {
//    const activites = await getallactiviteBydate() ;
//    console.log(activites) ;
//} catch (e) {
//    console.error(e) ;
//}

//try {  
//    const invite = await getAllguestByname() ;
//    console.log(invite) ;
//}
//catch (e) {
//    console.error(e) ;
//}

//try {
//    const film = await getFilmById('52242644d4j65se') ;
//    console.log(film) ;
//}
//catch (e) {
//    console.error(e) ;
//}

//try {
//    const activite = await getActiviteById('g5c3f2e4f2800h0') ;
//    console.log(activite) ;
//}
//catch (e) {
//    console.error(e) ;
//}

//try {
//    const invite = await getOneInviteById('lm26p21e084u49d') ;
//    console.log(invite) ;
//}
//catch (e) {
//    console.error(e) ;
//}
   

//try {
//    const activite = await getallActiviteByOneAnimateurId('6b43861ueuwc909') ;
//    console.log(activite) ;
//} catch (e) {
//    console.error(e) ;
//}

try {
    const activite = await getallActiviteByOneAnimateurName('Ewald') ;
    console.log(activite) ;
}
catch (e) {
    console.error(e) ;
}