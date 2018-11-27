'use strict'

class MaClasse {
    
    constructor(attribut,attribut2) {
        this.attribut = attribut;
        this.attribut2 = attribut2;
    }

    getAttributes() {
        console.log("Les attributs de cette instance sont : " + this.attribut + ' / ' + this.attribut2);
    }
}

var monInstance = new MaClasse('Guten Tag',true);
monInstance.getAttributes();

    /* RAPPEL SUR LES DÉCLARATIONS DE VARIABLES */

// let & const = portée de blocs seulement
// var = portée globale

    /* CONSEILS D'UTILISATION  

    var > - d'1% !!
    let > 9%
    const > à utiliser à 90% 

    */

{

    const a = { prop: 'Coucou'};
    const b = a;
    b.prop = 'Hello';
    console.log(a.prop); // Donne 'Hello'
    
    /*
    b = { prop: 'Salut !'}; // Erreur ! Uncaught "TypeError: Assignment to constant variable."
    */


}