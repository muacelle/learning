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
    eat: function() {console.log('nom nom nom')}
}

function Cat() {}; // Child
Cat.prototype = Object.create(Animal.prototype); 
Cat.prototype.constructor = Cat; 

let sphynx = new Cat;
console.log(sphynx.eat());

Cat.prototype.meow = function() {console.log('Meow Meow')};
console.log(sphynx.meow());