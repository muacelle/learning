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

    for (i = 0; i < 4; i++) {
        let contactName = '';
        let contactProp = '';

        if (contacts[i].firstName == name) {
            contactName = contacts[i].firstName;
            for (j = 0; j < contacts[i].length; j++) {
                if (contacts[i][j] == prop) {
                    contactProp = contacts[i][prop]
                    return contactProp;
                }
            }
        }
        else if (contactName == '') {
            return 'No such contact';
        }
        else if (contactProp == '') {
            return 'No such property';
        }
    }
}


lookUpProfile('Akira', 'likes');

/*
Antes de mais nada, a função deve:
1. checar se <name> está na lista de contatos (em <firstName>) /false: return 'No such contact'
2. checar se <prop> é uma propriedade do contato em questão /false: return 'No such property'.

Se ambos forem verdade, a função deve:
1. retornar o valor da propriedade <prop> do contato em questão.
*/