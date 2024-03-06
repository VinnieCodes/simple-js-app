let pokemonList = [
  { name: "Bulbasaur", height: ".7", type: ["grass", "poison"] },
  { name: "Blastoise", height: "1.6", type: "water" },
  { name: "Ditto", height: ".3", type: "normal" },
  { name: "Rattata", height: ".3", type: "normal" },
];

// displays pokemons and their heights
for (i = 0; i < pokemonList.length; i++) {
  let pokemonHeight = pokemonList[i].height;
  let pokemonName = pokemonList[i].name;

  if (pokemonHeight >= 1) {
    document.write(
      '<h1 class="header">' +
        pokemonName +
        " (height: " +
        pokemonHeight +
        "m) - " +
        "that's a big one" +
        "<br><br></h1>"
    );
  } else if (0.5 < pokemonHeight && pokemonHeight < 1) {
    document.write(
      '<h1 class="header">' +
        pokemonName +
        " (height: " +
        pokemonHeight +
        "m) - " +
        "that's medium" +
        "<br><br></h1>"
    );
  } else {
    document.write(
      '<h1 class="header">' +
        pokemonName +
        " (height: " +
        pokemonHeight +
        "m) - " +
        "that's small" +
        "<br><br></h1>"
    );
  }
}
