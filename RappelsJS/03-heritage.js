'use strict';

/* class AnimalDomestique {
    
    constructor(nom){
        this.nom = nom;
    }

    dort(){
        console.log('ZZZzzzzZZZzzzzZzZZZzZzzZZzzZzz');    
    }
    mange(){
        console.log('Nom Nom NOM NOM nom nom Nom');
    }

}


class PetitChaton extends AnimalDomestique {}
 */

class Carre {

}

class Rectangle extends Carre {

    constructor(longueur,largeur) {
        this.longueur = longueur;
        this.largeur = largeur ? largeur : longueur; // Si la largeur est définie lors de l'appel du constructor, ça roule, sinon, bah la largeur sera égale à la hauteur
    }       // valeur de largeur si vrai : si faux

    calculSurface(){
        return this.longueur * this.largeur;
    }

}

class Losange extends Carre {

    constructor(longueur, petitAngle) {
        this.longueur = longueur;
        this.petitAngle = petitAngle;
    }

    calculSurface(){
        return this.longueur * this.longueur * Math.sin(this.petitAngle);
    }

}