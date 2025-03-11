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

try {
    const movies = await getallfilmBydate() ;
    console.log(movies) ;
} catch (e) {
    console.error(e) ;
}

try {
    const activites = await getallactiviteBydate() ;
    console.log(activites) ;
} catch (e) {
    console.error(e) ;
}

try {
    const invites = await getAllguestByname() ;
    console.log(invites) ;
}
catch (e) {
    console.error(e) ;
}

try {
    const film = await getFilmById('id dun film') ;
    console.log(film) ;
}
catch (e) {
    console.error(e) ;
}

try {
    const activite = await getActiviteById('id dune activite') ;
    console.log(activite) ;
}
catch (e) {
    console.error(e) ;
}

try {
    const invite = await getOneInviteById('id dun invite') ;
    console.log(invite) ;
}
catch (e) {
    console.error(e) ;
}
   

try {
    const activite = await getallActiviteByOneAnimateurId('id dun animateur') ;
    console.log(activite) ;
} catch (e) {
    console.error(e) ;
}

try {
    const activite = await getallActiviteByOneAnimateurName('nom dun animateur') ;
    console.log(activite) ;
}
catch (e) {
    console.error(e) ;
}