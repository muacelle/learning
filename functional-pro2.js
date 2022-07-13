const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", 
"Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(list, bookName) {
    let newList = [...list, bookName];
    console.log(newList);
}

function remove(list, bookName) {
    const index = list.indexOf(bookName);
    let newList = [...list];
    if (index >= 0) {
        newList.splice(index, 1);
        console.log(newList);
    }
}

// Método .map()

const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
];

function names(userObj) {
    return userObj.name
}

const usersNames = users.map(names); 
// A função names será aplicada em cada um dos elementos de users
// Output = [ 'John', 'Amy', 'camperCat' ]

const watchList = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Director": "Christopher Nolan",
        "imdbRating": "8.8"
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Director": "Christopher Nolan",
        "imdbRating": "8.6"
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Director": "James Cameron",
        "imdbRating": "7.9"
    }
]

const ratings = watchList.map(movie => (
    {
        title: movie.Title,
        rating: movie.imdbRating
    }
));


// Implementing my own version of the map method

const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});

console.log(new_s); // [ 46, 130, 196, 10 ]