const apiPokeURL = "https://pokeapi.co/api/v2/pokemon/pikachu";

async function getDataPikachu() {
  const resPoke_Data = await fetch(apiPokeURL);
  const transformPoke_Data = await resPoke_Data.json();
  return transformPoke_Data;
}

async function showPokemons() {
  const pokemon = await getDataPikachu();
  const poketemplate = `
    <div class="pokemon">
      <h3>Name: ${pokemon.name}</h3>
      <p>Number: ${pokemon.id}</p>
      <p>${pokemon.stats[0].stat.name}: ${pokemon.stats[0].base_stat}</p>
      <p>${pokemon.stats[1].stat.name}: ${pokemon.stats[1].base_stat}</p>
      <p>${pokemon.stats[2].stat.name}: ${pokemon.stats[2].base_stat}</p>
      <p>${pokemon.stats[3].stat.name}: ${pokemon.stats[3].base_stat}</p>
      <p>${pokemon.stats[4].stat.name}: ${pokemon.stats[4].base_stat}</p>
      <p>${pokemon.stats[5].stat.name}: ${pokemon.stats[5].base_stat}</p>
    </div>
    `; 

  const pokemonSection = document.querySelector(".pokemon")
  if (pokemonSection) {
    pokemonSection.innerHTML = poketemplate;
  } else {
    console.error("Could not find element with class name 'pokemon'");
  }
}

showPokemons();
