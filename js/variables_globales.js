            /*  CSS */
// récupère la couleur principale du site via le CSS :root
let couleur_principale = window.getComputedStyle(document.documentElement).getPropertyValue('--couleur-principale'),
// durée de base des animations
duree_anim = '0.25s',


            /* HTML */
        /* Barre de nav */
barre_nav = document.getElementById('nav-menu'),
menu_ouvert = false,    //booléen qui indique si le menu est ouvert ou non

        /* Modules (général)*/
modules = document.getElementsByClassName('module'),    // récupère les modules
modules_on = false,
nb_modules = parseInt(document.querySelectorAll('#main-container > *').length), // si on est amenés à avoir plus de 
                                                                                    // modules, le nombre se met à jour tout seul
        /* Module 1 */
        
id_module = "container-module",
box_img = document.getElementById("box-img"),   // balise img du module 1

        /* Module 4 */

sens = "up"; // indique le sens (ordre croissant ou décroissant) actuel de la liste