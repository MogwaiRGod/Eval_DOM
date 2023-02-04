                /* ANIMATIONS   */
            
// fait grossir/rétrécir un item au survol/fin du survol
document.querySelectorAll(".survolable").forEach(item => {
    let duree = duree_anim;
    if (item.tagName == "BUTTON"){   // les animations sont plus rapides
                                            // pour les boutons
        duree = "0.10s";
    }

    item.addEventListener('mouseover', () => {
        if (item.id == 'hamburger') {
            item = document.getElementById("svg-hamburger");
        }
        anim(item, "survol", duree);
        return;
    });
    
    item.addEventListener('mouseleave', () => {
        anim(item, "survol2", duree);
        return;
    });
});


                /* MENU */

// Clic sur l'icône hamburger => ouverture du menu
hamburger.addEventListener('click', () => {
    menu_ouvert = affichageMenu(barre_nav, menu_ouvert, modules);
    return;
});

// Survol d'un item du menu => aperçu du module associé
// Bon, toute cette partie bogue à mort
document.querySelectorAll(".module").forEach(e => { // sélectionne les items du menu
    // ajout d'un évenement au survol
    e.addEventListener('mouseover', () => { 
        let id_mod = e.classList.item(1); // la 2e classe d'un objet .module est l'id du module correspondant
        apercu(id_mod); // aperçu du module
        // ajout d'un événement au clic
    });
    e.addEventListener('click', () => {
        let id_mod = e.classList.item(1);
        affichageModule(id_mod);
    });
    // ajout d'un événement à la fin du survol
    e.addEventListener('mouseleave', () => {
        let id_mod = e.classList.item(1);
        finApercu(id_mod);
    });
    
});


            /* MODULE 1 */
document.querySelectorAll('.emoji').forEach(e => {  // sélection des emojis e du tableau
    e.addEventListener('mouseover', () => { // ajout d'un événement au survol
        let image = e.classList.item(1); // cette classe donne le nom de d'image à aller chercher
        afficherImage(box_img, image, tab_imgs);

        e.addEventListener('mouseleave', () => {
            cacherImg(box_img); // on fait disparaître l'image quand la souris ne survole plus l'emoji
            return;
        });
    });
});
            

            /* MODULE 2 */
mod2btn.addEventListener('click', () => {
    let input1 = document.getElementById("nom").value;
    let input2 = document.getElementById("prenom").value;
    let tab_mod2 = document.getElementById("table-module2");
    // si les valeur entrées sont valides, on procède à l'application, sinon on envoie une alerte
    (checkInput(input1) && checkInput(input2)) ? ajouterRangee(tab_mod2, input1, input2) : alert ("Veuillez entrer des valeurs valides");
    
    return;
});


        /* MODULE 3 */
menustyles.addEventListener('click', () => {   // problème : si on veut choisir l'option déjà sélectionnée, ne réagit pas...
    let paragraphe = document.getElementById("pmodule3");
    // dans les 2 lignes suivantes, on va utiliser jQuery pour récupérer la valeur sélectionnée dans le menu déroulant
    let typo_style = styles[0][$("#menustyles option:selected").val()][0]["font-family"];
    let couleur_style = styles[0][$("#menustyles option:selected").val()][0]["color"];
    let bg = styles[0][$("#menustyles option:selected").val()][0]["background"];
    let liste_style = [
                        ['fontFamily', typo_style],
                        ['color', couleur_style],
                        ['background', bg]
                    ];
    // on applique le style au paragraphe
    appliquerStyle(paragraphe, liste_style);
});


    /* MODULE 4 */
document.querySelectorAll(".btnliste").forEach(item => { // sélectionne les boutons UP et DOWN
    item.addEventListener('click', () => {  // on applique aux deux le même event listener
        let input_sens = item.id; // on récupère le sens de la liste désiré par l'utilisateur
        let liste_html = document.getElementById("liste-interactive");

        changerSensListe(input_sens, liste_html);
        return;
    });
});


    /* MODULE 5 */
document.getElementsByName("radiomod5").forEach(radio => {  // sélection des boutons radios
    radio.addEventListener('click', () => {    // dès qu'il y a une interaction avec un bouton,
                                                    // on procède au traitement des données


        // récupération des items cochés par l'utilisateur
        let tmp = document.getElementsByClassName("pseudomod5");
        let items_coches = recupItemsCoches(tmp);
        
        // récupération de l'objet HTMl qui va recevoir la div ou le menu déroulant
        let parent = document.getElementById("module5");

        if (!items_coches.length){    // si aucun item n'a été coché, on quite la fonction
            return;
        } else { // sinon, on procède à la suite 
            let choix = radio.value;    // récupère la valeur du bouton radio coché par l'utilisateur
            divDropdownMod5(parent, items_coches, choix);
        } // FIN SI
    }); // FIN EVENT LISTENER
}); // FIN FOREACH 