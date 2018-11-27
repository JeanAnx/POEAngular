'use strict';

const materials = [
    'Plastique',
    'Bois',
    'Acier',
    'Caoutchouc',
    'Osier',
    'Inox',
    'Adamantium'
];


// Syntaxe de fonction fléchée
console.log(materials.map(material => material.length));

// Syntaxe d'expression de fonction
console.log(materials.map(function (material) { return material.length;}));

// Fonction sans paramètre qui retourne 'Coucou' / return impliqué
() => 'Coucou';

// Les corchets ne retournent pas 'Coucou'
() => { 'Coucou'; };


// (firstName => `Coucou ${firstname}`(`Jean`);
// (firstName, lastName) => `Coucou ${firstname}`

// Expression de Fonction à convertir en fonction fléchée
const demo1 = function (firstName,lastName) { 
    return { 
        first: firstName, 
        last: lastName 
    };
};

// >> 

var demo2 = (firstName, lastName) => ({ first: firstName , last: lastName}) ;

console.log(demo2('Jean','Anx'));

// POUR CONVERTIR UNE CHAÎNE DE CARACTÈRES EN INTEGER >> UTILISER L'OPÉRATEUR UNAIRE '+' >> PAR EXEMPLE +"27"

