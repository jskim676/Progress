const pokemon = require('pokemon');

let poke = pokemon.all('ko');

console.log(poke);

console.log(poke.indexOf('파이리'));

const result = poke.filter(word => word.length !== 3);
console.log(result);


