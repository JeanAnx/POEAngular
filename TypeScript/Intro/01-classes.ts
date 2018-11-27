
class Person {

    // Déclaration préalable et typage des propriétés (avec les deux points)
    private firstName: string;
    lastName: string;

    constructor(firstName: string,lastName: string) {
        const localVariable: number = 123; // On peut également typer les variables locales
        this.firstName = firstName;
        this.lastName = lastName;
    }


/* AUTRE SYNTAXE POSSIBLE POUR LE CONSTRUCTEUR (MOINS VERBEUSE)

    constructor(
        private firstName: string,
        private lastName: string

    ) {
        const localVariable: number = 123;
    } 
*/

    introduce(): string { //On type également le retour de fonction
        return `Hello, my name is ${this.firstName} ${this.lastName}`;
    }

}

// Opérateurs de visibilité : Private, public, protected

// Les types basiques de JS

/* 
string
number
booleanundefined
null
any
string/number
string[] <=> Array<string> 
void (veut dire qu'on de retourne rien, tolérant si on retourne null ou undefined)
never > La fonction de retourne jamais
*/


