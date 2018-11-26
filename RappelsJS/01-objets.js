'use strict';

(function(){

    console.log('Fonction test');
    
    var unObjet = {};
    unObjet.message = 'Bonjour';
    unObjet.direMessage = function() {
        console.log(this.message);
    }
})() // => Ces parenthèses appellent directement la fonction


// FONCTION CONSTRUCTEUR 
function Beatle(prenom,nom,age){
    this.prenom = prenom;
    this.nom = nom;
    this.age = age;
    this.introduce = function() {
        console.log('Hello, my name is ' + this.prenom); 
    }
}

var beatleJohn = new Beatle('John','Lennon','27');

beatleJohn.introduce();
Beatle.prototype.song = "";

beatleJohn.song = "Norwegian Wood";

Beatle.prototype.play = function() {
    console.log('*plays ' + this.song + '*');
}

beatleJohn.play();

var beatlePaul = new Beatle('Paul','McCartney','27');
beatlePaul.song ='Let it Be';

beatlePaul.introduce();
beatlePaul.play();