/* 
try {}: let you test a block of code for errors
catch {}: let you handle the error
finally {}: let you execute code after trying catch, regardless of the result.
*/

try {

    console.log('Start of try runs.');
    unicycle;
    console.log('End of try runs - never reached :(')

} catch(err) {

    console.log('Error occured: ' + err);

} finally {

    console.log('Finally, this always runs.');

}

// console.log('...Then the execution continues.')

/* for the try/catch to work, the code must be runnable. 
It should be valid Javascript - it won't work if the syntax is wrong. */

// throw {}: let you create custom errors

let json = "{ 'age': 30 }";

try {

    let user = JSON.parse(json);
    if (!user.name) {
        throw new SyntaxError('Incomplete data: no name')  // cria um novo erro com name (SyntaxError) + message.
    }
    console.log(user.name);

} catch(err) {

    console.log('JSON Error: ' + err.message); // ocorrendo qualquer erro, seja ele criado ou não, vai aparecer aqui.

}

// error Object