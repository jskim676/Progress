const pokemon = {
  a : '꼬부기',
  b : '파이리',
  c : '치코리타',
  d : '리자몽'
}

// console.log(pokemon.a);
// console.log(pokemon["a"]);

let pokemonArr = [];

for(let props of pokemon) {
  console.log(pokemon[props]);
  pokemonArr.push(pokemon[props]);
}

console.log(pokemonArr);