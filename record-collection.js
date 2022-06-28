const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
};

function updateRecords(records, id, prop, value) {

  // adicionar valor/propriedade
  if (value !== '') {
    if (prop !== 'tracks') {
    records[id][prop] = value;
    } else {
      if (records[id][prop] === undefined) {
        records[id].tracks = [value];
      } else {
        records[id][prop].push(value);
      }
    }
  // deletar propriedade
  } else {
    delete records[id][prop];
  }
  return records;
};

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
console.log(recordCollection);

/* 
INSERINDO VALORES
se o álbum não tiver a propriedade, criá-la + inserir o valor (prop)
se o álbum já tiver a propriedade, inserir o valor

[track] é uma array, então deve ser tratada diferente das outras propriedades.

APAGANDO VALORES
se value == ' ' apagar [prop]
*/

// eu preciso achar outra forma de criar uma nova propriedade
// eu preciso criar essa nova propriedade primeiro e, só depois, inserir o valor
// o código não está entendendo o que é 'prop'