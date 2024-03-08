(function () {
  let pokemonList = [
    { name: "Bulbasaur", height: ".7", type: ["grass", "poison"] },
    { name: "Blastoise", height: "1.6", type: "water" },
    { name: "Ditto", height: ".3", type: "normal" },
    { name: "Rattata", height: ".3", type: "normal" },
  ];

  pokemonList.forEach(function (pokmon) {
    if (pokmon.height >= 1) {
      document.write(
        pokmon.name +
          " (height: " +
          pokmon.height +
          "m) - " +
          "that's a big one" +
          "</br></br>"
      );
    } else if (0.5 < pokmon.height && pokmon.height < 1) {
      document.write(
        pokmon.name +
          " (height: " +
          pokmon.height +
          "m) - " +
          "that's medium" +
          "</br></br>"
      );
    } else {
      document.write(
        pokmon.name +
          " (height: " +
          pokmon.height +
          "m) - " +
          "that's small" +
          "</br></br>"
      );
    }
  });
})();


(function () {
  let pokemonRepository
})();


// displays pokemons and their heights
// for (i = 0; i < pokemonList.length; i++) {
//   let pokemonHeight = pokemonList[i].height;
//   let pokemonName = pokemonList[i].name;

//   if (pokemonList[i].height >= 1) {
//     document.write(
//       pokemonList[i].name +
//         " (height: " +
//         pokemonList[i].height +
//         "m) - " +
//         "that's a big one" +
//         "</br></br>"
//     );
//   } else if (0.5 < pokemonList[i].height && pokemonList[i].height < 1) {
//     document.write(
//       pokemonList[i].name +
//         " (height: " +
//         pokemonList[i].height +
//         "m) - " +
//         "that's medium" +
//         "</br></br>"
//     );
//   } else {
//     document.write(
//       pokemonList[i].name +
//         " (height: " +
//         pokemonList[i].height +
//         "m) - " +
//         "that's small" +
//         "</br></br>"
//     );
//   }
// }
