
                            /*  ////    TOUS LES EVENT-LISTENERS  ////    */

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
        e.addEventListener('click', () => {
            let id_mod = e.classList.item(1);
            affichageModule(id_mod);
        });
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
    (checkInput(input1) && checkInput(input2)) ? ajouterRangee(tab_mod2, input1, input2) : alert ("Veuillez entrer des valeurs valides");
    
    return;
});

    /* Module 3 */
menustyles.addEventListener('change', () => {   // problème : si on veut choisir l'option déjà sélectionnée, ne réagit pas...
    let paragraphe = document.getElementById("pmodule3");
    // dans les 2 lignes suivantes, on va utiliser jQuery pour récupérer la valeur sélectionnée dans le menu déroulant
    let typo_style = styles[0][$("#menustyles option:selected").val()][0]["font-family"];
    let couleur_style = styles[0][$("#menustyles option:selected").val()][0]["color"];
    let bg = styles[0][$("#menustyles option:selected").val()][0]["background"];

    // on applique le style au paragraphe
    paragraphe.style.fontFamily = typo_style;
    paragraphe.style.color = couleur_style;
    paragraphe.style.background = bg;
});

    /* Module 4 */
document.querySelectorAll(".btnliste").forEach(item => { // sélectionne les boutons UP et DOWN
    item.addEventListener('click', () => {  // on applique aux deux le même event listener
        let input_sens = item.id; // on récupère le sens de la liste désiré par l'utilisateur
        let liste_html = document.getElementById("liste-interactive");

        changerSensListe(input_sens, liste_html);
        return;
    });
});