        ////////////    MENU        ////////////////

// fonction qui ouvre la barre de navigation
function affichageMenu(nav, ouvert, mods) {
    let couleur_nav, affichage;
    if (!ouvert) {
        couleur_nav = couleur_principale;
        affichage = 'inline'
        ouvert = true;
    } else {
        couleur_nav = 'none';
        affichage = 'none'
        ouvert = false;
    }
    
    nav.style.background = couleur_nav;
    for (let i=0; i<mods.length; i++) {
        mods[i].style.display = affichage;
    }

    return ouvert;
}

//fonction qui affiche un aperçu du module dont on survole le nom dans le menu
function apercu(id) {
    let mod = document.getElementById(id);
    // si le module est ouvert, l'aperçu ne se déclenche pas
    if (mod.classList.item(1) == "module-on") {
        return;
    } else {
        mod.style.visibility = 'visible';
        mod.style.opacity = '0.5';
        return;
    }
}

//fonction qui cache le module quand on arrête le survol
function finApercu(id){
    let mod = document.getElementById(id);
    // si le module est ouvert, on ne rentre pas dans la fonction
    if (mod.classList.item(1) == "module-on"){
        return;
    }
    mod.style.visibility = 'hidden';
    mod.style.opacity = '1';
    return;
}


    ////////////    MODULES     //////////////////

// ouvre le module sélectionné dans la nav
function affichageModule(id){
    let module = document.getElementById(id);
    // au clic, si le module est déjà affiché, on le cache
    if (module.classList.item(1) == "module-on") {
        module.setAttribute('class', "container-module module-off"); // on met à jour son statut
        module.style.visibility = 'hidden'; // on le cache
        modules_on = false;
        return;
    } else {
        // sinon, on va dans un premier temps voir si un module est déjà affiché
        let tmp = document.getElementsByClassName("container-module module-on");
        if (modules_on){ // si oui, on le cache
            tmp = document.getElementById(tmp[0].id);
            tmp.setAttribute('class', "container-module module-off");
            tmp.style.visibility = 'hidden';
            modules_on = false;
        } // puis, on peut procéder à l'affichage du module entré en paramètre
            module.setAttribute('class', "container-module module-on");
            module.style.opacity = "1";
            module.style.visibility = "visible";
            modules_on = true;
            return;
    }
}

    //////////////////  FONCTIONS INTERNES AUX MODULES  ///////////////////////

        /*  MODULE  1*/
/*
 * fonction qui affiche une image (contenue dans tab)
 * dans un bloc spécifique (zone_img), 
 * selon une ID spécifique (id_img)
**/
function afficherImage(/* HTMLElement div */ zone_img, /* string */ id_img, /* array d'images */ tab) {
    let image;
    // on cherche dans la liste d'images l'image à l'ID correspondant
    for (let i=0; i<tab.length; i++){   
        if (tab[i]['id'] === id_img){
            image = tab[i];
            break;
        }
    }
    // et on l'affiche dans la balise image (contenue dans zone_img) prévue à cet effet
    zone_img.alt = image.alt;   // ajout du texte alternatif
    zone_img.src = image.src;   // ajout de la source de l'image
    zone_img.style.display = 'inline';  // affichage de l'image
    return;
}

function cacherImg(zone_img) {
    zone_img.style.display = 'none';
    return;
}


    /* MODULE 2 */
//fonction qui vérifie qu'une entrée utilisateur est correcte
function checkInput(ipt){
    return ipt !== '';
}

function ajouterRangee(tab, ipt1, ipt2) {
    let rangee = document.createElement('tr'), inputs = [ipt1, ipt2];
    
    for (let i=0; i<inputs.length; i++){
        // crétion d'une cellule
        let cellule = document.createElement('td');
        // remplissage de la cellule
        cellule.innerText = inputs[i];
        //ajout de la cellule à la rangée
        rangee.appendChild(cellule);
    }
    //ajout de la rangée au tableau
    tab.appendChild(rangee);   
    let separation = document.createElement('hr');
    separation.setAttribute('class', 'sep-mod2');
    tab.appendChild(separation);  
    //affichage du tableau
    tab.style.display = 'block';
    return;
}


    /* MODULE 3 */

// fonction qui applique un style spécifique à un objet
function appliquerStyle (obj, liste) {
    liste.forEach(css => {
        obj.style[`${css[0]}`] = css[1];
    });

    return obj;
}  


    /* MODULE 4 */
// fonction qui, pour un sens entré par l'utilisateur, va changer l'odre des items d'une liste
function changerSensListe(ipt_sens, liste) {
    function check_sens(sens, lst){   // fonction qui vérifie que l'ordre demandé par l'utilisateur n'est pas déjà appliqué
        if (sens === lst.classList[0]){
            return 0;
        }
        else {
            return 1;
        }
    }

    if (!check_sens(ipt_sens, liste)){   // si le sens demandé est déjà appliqué ; on ne fait rien et on quitte la fonction
        return;
    } else {    // sinon, on peut procéder au changement de sens
        // on commence par sélectionner les items de la liste
        let items = document.getElementsByClassName("li-mod4");

        // quel que soit le sens initial et demandé, on va procéder de la même manière : 
        // on va créer une liste temporaire où on va ajouter à chaque fois le contenu du dernier item disponible de la liste HTML entrée 
        // en paramètre
        let tmp_liste = [];
        for (let i=items.length-1; i>=0; i--) {
            tmp_liste.push(items[i].innerText);
        }
        // puis on va changer le contenu des items de la liste à partir de cette liste temporaire
        for (let i=0; i<items.length; i++){
            items[i].innerText = tmp_liste[i];
        }

        liste.classList = ipt_sens; // enfin, on met à jour le statut de la liste
    }

    return;
}


    /* MODULE 5 */

function divDropdownMod5(receveur, items, choix_uti){
    let tmp_obj = document.getElementsByClassName("tmp-obj-on"); // liste temporaire qui contient, maximum,
                                                                // un objet HTML demandé par l'utilisateur
    // on vérifie que l'utilisateur n'a pas déjà demandé un objet
    if (tmp_obj.length) { // si oui , on supprime l'objet d'jà affiché
        receveur.removeChild(tmp_obj[0]);
    }
    // si non/ensuite, on peut procéder à la suite de la fonction
    switch (choix_uti) {    // selon ce que l'utilisateur a choisi
        case 'dropdown':
            // création d'un menu dropdown
            let menu = document.createElement("select");
            // ajout des items cochés en tant qu'options du menu
            items.forEach(e => {
                let new_option = document.createElement("option");
                new_option.innerText = e;
                menu.appendChild(new_option);
            });
            menu.setAttribute("class", "tmp-obj-on");   // pour indiquer qu'un nouvel objet HTML
                                                        // est affiché
            receveur.appendChild(menu); // ajout du menu obtenu au module
            return;
        case 'div':
            // création d'une div et d'un paragraphe
            let new_div = document.createElement("div"); let para = document.createElement("p");
    
            // ajout des items cochés en tant que texte du paragraphe
            items.forEach(e => {
                let texte = document.createTextNode(e); // création d'un noeud-texte à partir de l'item
                para.appendChild(texte);    // ajout de ce noeud au paragraphe
                para.appendChild(document.createElement('br')); // retour à la ligne
            });
            new_div.appendChild(para); // ajout du paragraphe obtenu à la div
            new_div.setAttribute("class", "tmp-obj-on");
            receveur.appendChild(new_div);
            return;
    } // FIN SWITCH
}

    
