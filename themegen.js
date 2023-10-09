const prompt = require('prompt-sync') ();
const fs = require('fs');

const name = prompt('What is your name?');
console.log(`Howdy there, ${name}!`);

const color = prompt('What is your favorite color?');
console.log('Your results have been output to file.txt');

let data = `Howdy there, ${name}! Your favorite color is ${color}. Yippee!`;

fs.writeFile('file.txt', data, (err) => {
    if(err) throw err;
});