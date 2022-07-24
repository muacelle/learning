const Person = function(firstAndLast) {
    let person = firstAndLast.split(' ');
    this.getFullName = function() {
        return person[0] + ' ' + person[1];
    };
    this.getFirstName = function() {
        return person[0];
    };
    this.getLastName = function() {
        return person[1];
    };
    this.setFullName = function(firstAndLast) {
        person = firstAndLast.split(' ');
    };
    this.setFirstName = function(first) {
        person[0] = first;
    };
    this.setLastName = function(last) {
        person[1] = last;
    };
};
  
const bob = new Person('Bob Ross');

// bob.setFullName('Haskel Curry');
bob.setFirstName('Haskel');
bob.setLastName('Curry');

console.log(bob.getFullName());