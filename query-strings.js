const query = new URLSearchParams({
    name: 'Marcelle',
    age: 27,
    occupation: 'Fullstack Developer'
});

console.log(query.toString()); // name=Marcelle&age=27&occupation=Fullstack+Developer

query.set('name', 'Emanuela');
const myName = query.get('name');

const newQuery = new URLSearchParams();
newQuery.set('name', 'Gil');
newQuery.set('age', '29');