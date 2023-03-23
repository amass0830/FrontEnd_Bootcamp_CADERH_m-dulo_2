const pokemonSection = document.querySelector("section.pokemon")
const apiPokeURL = "https://pokeapi.co/api/v2/pokemon/pikachu";
console.log("Pokemon section: ", pokemonSection);

async function getDataPikachu() {
  const resPoke_Data = await fetch(apiPokeURL);
  const transformPoke_Data = await resPoke_Data.json();
  return transformPoke_Data;
}

async function showPokemons() {
  const pokemon = await getDataPikachu();
  const poketemplate = `
    <div class="pokemon">
      <h3>${pokemon.name}</h3>
      <p>${pokemon.id}</p>
      <p>${pokemon.base_experience}</p>
    </div>
  `;

  if (pokemonSection) {
    pokemonSection.innerHTML = poketemplate;
  } else {
    console.error("Could not find element with class name 'pokemon'");
  }
}

showPokemons();
