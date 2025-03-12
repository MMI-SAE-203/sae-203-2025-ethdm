import PocketBase from 'pocketbase' ;
const pb = new PocketBase('http://127.0.0.1:8090') ;

export async function getallfilmBydate() {
    const records = await pb.collection('film').getFullList({sort: 'date_heure_film',});
    return records;
}

export async function getallactiviteBydate() {
    const records = await pb.collection('activite').getFullList({
        sort: 'date_act',
    });
    return records;
}

export async function getAllguestByname() {
    const records = await pb.collection('invite').getFullList({sort: 'nom_inv'}, {filter: "role_inv = 'Animateur'||role_inv = 'Acteur'"});
    return records;
}

export async function getFilmById(id) {
    const record = await pb.collection('film').getOne(id);
    return record;
}

export async function getActiviteById(id) {
    const record = await pb.collection('activite').getOne(id);
    return record;
}

export async function getOneInviteById(id) {
    const record = await pb.collection('invite').getOne(id);
    return record;
}

export async function getallActiviteByOneAnimateurId(id) {
    const records = await pb.collection('activite').getFullList({filter: `invite_act.id ='${id}'`, expand: 'invite'});
    return records;
}

export async function getallActiviteByOneAnimateurName(nom) {
    const records = await pb.collection('activite').getFullList({
        filter: `invite.nom_inv ='${nom}'`, expand: 'invite'
    });
    return records;
}

//add
export async function addNewFilm(newFilm) {
    await pb.collection('film').create(newFilm);
}

export async function addNewActivite(newActivite) {
    await pb.collection('activite').create(newActivite);
}

export async function addNewInvite(newInvite) {
    await pb.collection('invite').create(newInvite);
}

//modif
export async function updateFilmById(id, newFilm) {
    const records = await pb.collection("film").update(id, newFilm) ;
    return records ;
}

export async function updateActiviteById(id, newActivite) {
    const records = await pb.collection("activite").update(id, newActivite) ;
    return records ;
}

export async function updateInviteById(id, newInvite) {
    const records = await pb.collection("invite").update(id, newInvite) ;
    return records ;
}