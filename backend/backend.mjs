import PocketBase from 'pocketbase' ;
export const pb = new PocketBase('http://127.0.0.1:8090') ;

export async function getallfilmBydate() {
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

export async function getallactiviteBydate() {
    const records = await pb.collection('activite').getFullList({
        sort: 'date_act',
    });
    return records;
}

export async function getAllguestByname() {
    let records = await pb.collection('invite').getFullList({sort: 'nom_inv'}, {filter: "role_inv = 'Animateur'||role_inv = 'Acteur'"});
    records = records.map((invite) => {
        invite.imgUrl = pb.files.getURL(invite, invite.photo_inv);
        return invite
    }
    );
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
    record.imgUrl = pb.files.getURL(record, record.photo_inv);
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

//fonction en +
// fontcion pour amener les inite dans activite par leur id
export async function getActiviteWithInvite(id) {
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

// fontcion pour amener les photo des invite dans activite par leur id
export async function getActiviteWithImage(id) {
    const activite = await pb.collection('activite').getOne(id);

    // Vérifier si l'activité contient une ou plusieurs images associées
    if (activite.photo_inv && Array.isArray(activite.photo_inv)) {
        // Récupérer toutes les images liées à cette activité
        const images = await Promise.all(
            activite.photo_inv.map(imageId => pb.collection('invite').getOne(imageId))
        );
        
        activite.images = images.map(image => ({
            url: image.url_image,
            description: image.description_image
        }));
    } else if (activite.photo_inv) {
        // Si une seule image est présente, la récupérer
        const image = await pb.collection('invite').getOne(activite.photo_inv);
        activite.images = [{
            url: image.url_image,
            description: image.description_image
        }];
    } else {
        activite.images = [];
    }

    return activite;
}

export async function getFilmBycategorie(cat) {
    const filmcat = await pb.collection('film').getFullList({
        filter: `categorie = '${cat}'`,
    });
    filmcat.forEach((cata) => {
        cata.img = pb.files.getURL(cata, cata.affiche_film);
        return cata;
    });
    console.log(filmcat);
    return filmcat;  
  }