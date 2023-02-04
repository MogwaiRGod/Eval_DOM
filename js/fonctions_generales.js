        //////////////  ANIMATIONS  ////////////

// fonction qui applique une animation
function anim(objet, anim, duree = duree_anim) {
    objet.style.animation = `${anim} ${duree} forwards`;
    return objet;
}


        /////////////////   FORMULAIRES   ///////////////////

// fonction qui récupère des items cochés d'une checkbox
// et qui retourne une liste de leurs valeurs
function recupItemsCoches (ipt) {   // ipt est l'ensemble des items disponibles de la checkbox
                                    // (HTML Collection)
    liste_coches = [];
        
    for (let i=0; i<ipt.length; i++) {
        if (ipt[i].checked) {   // si l'item est coché, on l'ajoute à la liste items_coches
            liste_coches.push(ipt[i].value);
        }
    }

    return liste_coches;
}
