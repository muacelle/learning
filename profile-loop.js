const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    let contactProp = '';
    let contactName = '';
    for (i = 0; i < 4; i++) {
        if (contacts[i].firstName === name) {
            contactName = name;
            contactProp = contacts[i][prop];
        }
    }
    if (contactName === '') {
        console.log('No such name');
    } else {
        console.log(contactProp || 'No such property') 
    }
}

lookUpProfile('Harry', 'likes');

/*
A função deve:
1. checar se <name> está na lista de contatos (em <firstName>) /false: return 'No such contact'
2. checar se <prop> é uma propriedade do contato em questão /false: return 'No such property'.
3. retornar o valor da propriedade <prop> do contato em questão.
*/