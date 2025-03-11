import PocketBase from 'pocketbase' ;
const pb = new PocketBase('http://127.0.0.1:8090') ;

export async function getallfilmBydate() {
    const records = await pb.collection('film').getFullList({
        sort: 'date_heure_film',
    });
    return records;
}

export async function getallactiviteBydate() {
    const records = await pb.collection('activite').getFullList({
        sort: 'date_act',
    });
    return records;
}

export async function getAllguestByname() {
    const records = await pb.collection('invite').getFullList({sort: 'nom'}, {filter: "role = 'realisateur'||role = 'acteur'"});
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
    const records = await pb.collection('activite').getFullList({filter: `invite_act.nom_inv ='${id}'`, expand: 'invite'});
    return records;
}

export async function getallActiviteByOneAnimateurName(nom) {
    const records = await pb.collection('activite').getFullList({
        filter: `invite_act.nom_inv ='${nom}'`, expand: 'invite'
    });
    return records;
}

export async function modifFilmInformationById(id, data) {
    const record = await pb.collection('film').modifOne(id, data);
    return record;
}

export async function modifActiviteInformationById(id, data) {
    const record = await pb.collection('activite').modifOne(id, data);
    return record;
}

export async function modifInviteInformationById(id, data) {
    const record = await pb.collection('invite').modifOne(id, data);
    return record;
}
