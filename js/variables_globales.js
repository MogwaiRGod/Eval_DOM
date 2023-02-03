            /*  CSS */
// récupère la couleur principale du site via le CSS :root
let couleur_principale = window.getComputedStyle(document.documentElement).getPropertyValue('--couleur-principale');



            /* HTML */
        /* Barre de nav */
let barre_nav = document.getElementById('nav-menu');
let menu_ouvert = false;    //booléen qui indique si le menu est ouvert ou non

        /* Modules (général)*/
let modules = document.getElementsByClassName('module');    // récupère les modules
let modules_on = false;
let nb_modules = parseInt(document.querySelectorAll('#main-container > *').length); // si on est amenés à avoir plus de 
                                                                                    // modules, le nombre se met à jour tout seul
        /* Module 1 */
        
let id_module = "container-module";
let box_img = document.getElementById("box-img");   // balise img du module 1

        /* Module 4 */

let sens = "up"; // indique le sens (ordre croissant ou décroissant) actuel de la liste