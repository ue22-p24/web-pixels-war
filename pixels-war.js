// pour l'instant on ne peut pas y toucher depuis l'interface
// il faut recharger la page pour changer de carte
const PIXEL_URL = "https://pixels-war.oie-lab.net"

// c'est sans doute habile de commencer avec la carte de test
// const MAP_ID = "0000"
const MAP_ID = "TEST"

document.addEventListener("DOMContentLoaded", async () => {

    const PREFIX = `${PIXEL_URL}/api/v1/${MAP_ID}`

    // pour savoir à quel serveur / carte on s'adresse
    // on les affiche en dur
    // pour l'instant on ne peut pas y toucher depuis l'interface
    // il faut recharger la page pour changer de carte
    document.getElementById("baseurl").value = PIXEL_URL
    document.getElementById("mapid").value = MAP_ID
    document.getElementById("baseurl").readOnly = true
    document.getElementById("mapid").readOnly = true

    const response = await fetch(`${PREFIX}/preinit`, {credentials: "include"})
    const json = await response.json()

    //TODO: maintenant que j'ai le json de preinit, je peux initialiser ma grille

    //TODO: maintenant que j'ai le JSON, afficher la grille, et récupérer l'id

    //TODO: maintenant que j'ai l'id, attacher la fonction refresh(id), à compléter, au clic du bouton refresh

    //TODO: attacher au clic de chaque pixel une fonction qui demande au serveur de colorer le pixel sous là forme :
    // http://pixels-war.oie-lab.net/api/v1/0000/set/id/x/y/r/g/b
    // la fonction getPickedColorInRGB ci-dessous peut aider

    //TODO: pourquoi pas rafraichir la grille toutes les 3 sec ?
    // voire même rafraichir la grille après avoir cliqué sur un pixel ?

    // cosmétique / commodité / bonus:

    // TODO: pour être efficace, il serait utile d'afficher quelque part
    // les coordonnées du pixel survolé par la souris

    //TODO: pour les rapides: afficher quelque part combien de temps
    // il faut attendre avant de pouvoir poster à nouveau

    //TODO: pour les avancés: ça pourrait être utile de pouvoir
    // choisir la couleur à partir d'un pixel ?



    //TODO: pour les élèves avancés, faire en sorte qu'on puisse changer de carte
    //      voir le bouton Connect dans le HTML

    // À compléter puis à attacher au bouton refresh en passant mon id une fois récupéré
    async function refresh(user_id) {
        const response = fetch(`${PREFIX}/deltas?id=${user_id}`, {credentials: "include"})
        const json = await response.json()
        //TODO: maintenant que j'ai le json des deltas, mettre à jour les pixels qui ont changé.
        // "Here be dragons" : comment récupérer le bon div ?

    }

    // Petite fonction facilitatrice pour récupérer la couleur cliquée en RGB
    function getPickedColorInRGB() {
        const colorHexa = document.getElementById("colorpicker").value

        const r = parseInt(colorHexa.substring(1, 3), 16)
        const g = parseInt(colorHexa.substring(3, 5), 16)
        const b = parseInt(colorHexa.substring(5, 7), 16)

        return [r, g, b]
    }

    // dans l'autre sens, pour mettre la couleur d'un pixel dans le color picker
    // (le color picker insiste pour avoir une couleur en hexadécimal...)
    function pickColorFrom(div) {
        // plutôt que de prendre div.style.backgroundColor
        // dont on ne connait pas forcément le format
        // on utilise ceci qui retourne un 'rbg(r, g, b)'
        const bg = window.getComputedStyle(div).backgroundColor
        // on garde les 3 nombres dans un tableau de chaines
        const [r, g, b] = bg.match(/\d+/g)
        // on les convertit en hexadécimal
        const rh = parseInt(r).toString(16).padStart(2, '0')
        const gh = parseInt(g).toString(16).padStart(2, '0')
        const bh = parseInt(b).toString(16).padStart(2, '0')
        const hex = `#${rh}${gh}${bh}`
        // on met la couleur dans le color picker
        document.getElementById("colorpicker").value = hex
    }

})
