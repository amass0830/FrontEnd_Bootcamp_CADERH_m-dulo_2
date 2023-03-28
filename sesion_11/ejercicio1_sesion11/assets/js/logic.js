const apiChuckURL = "https://api.chucknorris.io/jokes/random";

async function getChuckNorrisJoke() {
  const resChuckJoke = await fetch(apiChuckURL);
  const chuckNorrisJoke = await resChuckJoke.json();
  return chuckNorrisJoke;
}

