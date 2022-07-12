// Constructor Function:
function Dog(name, color) {
    this.name = name;
    this.color = color;
} 

// Prototype: todas as instâncias de Dog terão certas propriedades com valores definidos. 
Dog.prototype = {
    numEyes: 2,
    numLegs: 4
}

// Creating a new Object calling the Constructor Dog
let terrier = new Dog('Belinha', 'white');

console.log(terrier); // Dog { name: 'Belinha', color: 'white'}
console.log(terrier instanceof Dog); // true (terrier é um objeto instância do Construtor Dog).
console.log(terrier.numEyes); // 2

// Inheritance
function Animal() {}; // Parent
Animal.prototype = {
    eat: function() {console.log('nom nom nom')} // Parent method
}

function Cat() {}; // Child
Cat.prototype = Object.create(Animal.prototype); 
Cat.prototype.constructor = Cat; 

let sphynx = new Cat; // Creating an object instance of Cat

Cat.prototype.meow = function() {console.log('Meow Meow')}; // Creating a child method
console.log(sphynx.eat());
console.log(sphynx.meow());

// Using Closure to protect properties from being modified externally
function Bird() {
    let weight = 15;
    this.getWeight = function () {return weight};
}
let ducky = new Bird();
console.log(ducky.getWeight());

// Immediately Invoked Function Expression (IIFE):
(function () {
    console.log("Chirp, chirp!");
})();

// Creating a Module with IIFE
let funModule = (function() {
    return {
      isCuteMixin: function(obj) {obj.isCute = function() {return true}},
      singMixin: function(obj) {obj.sing = function() {console.log("Singing to an awesome tune")}}
    } 
})();