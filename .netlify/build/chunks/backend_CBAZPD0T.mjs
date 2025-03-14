import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090') ;

async function getallfilmBydate() {
    try {
        let record = await pb.collection('film').getFullList({
            sort: 'date_heure_film',
        });
        record = record.map((film) => {
            film.img = pb.files.getURL(film, film.affiche_film);
            return film;
        });
        return record;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la liste des films', error);
        return [];
    }
  }

async function getallactiviteBydate() {
    const records = await pb.collection('activite').getFullList({
        sort: 'date_act',
    });
    return records;
}

async function getAllguestByname() {
    let records = await pb.collection('invite').getFullList({sort: 'nom_inv'}, {filter: "role_inv = 'Animateur'||role_inv = 'Acteur'"});
    records = records.map((invite) => {
        invite.imgUrl = pb.files.getURL(invite, invite.photo_inv);
        return invite
    }
    );
    return records;
}


async function getFilmById(id) {
    const record = await pb.collection('film').getOne(id);
    return record;
}

async function getOneInviteById(id) {
    const record = await pb.collection('invite').getOne(id);
    record.imgUrl = pb.files.getURL(record, record.photo_inv);
    return record;
}

//fonction en +
// fontcion pour amener les inite dans activite par leur id
async function getActiviteWithInvite(id) {
    const activite = await pb.collection('activite').getOne(id);

    // Vérifier si l'activité contient des IDs d'invités
    if (activite.invite_act && Array.isArray(activite.invite_act)) {
        // Récupérer tous les invités liés à cette activité
        const invites = await Promise.all(
            activite.invite_act.map(inviteId => pb.collection('invite').getOne(inviteId))
        );
        
        activite.invites = invites.map(invite => ({
            nom: invite.nom_inv,
            prenom: invite.prenom_inv
        }));
    } else if (activite.invite_act) {
        // Si un seul invité est présent, le récupérer
        const invite = await pb.collection('invite').getOne(activite.invite_act);
        activite.invites = [{
            nom: invite.nom_inv,
            prenom: invite.prenom_inv
        }];
    } else {
        activite.invites = [];
    }

    return activite;
}

export { getAllguestByname as a, getFilmById as b, getallfilmBydate as c, getOneInviteById as d, getallactiviteBydate as e, getActiviteWithInvite as g, pb as p };
