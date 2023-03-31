window.addEventListener('DOMContentLoaded', () => {
    const apiChuckURL = "https://geek-jokes.sameerkumar.website/api?format=json";
    const chuckJokeButton = document.getElementById("pickdigimon");
    
  
    async function getChuckNorrisJoke() {
      const res = await fetch(apiChuckURL);
      const data = await res.json();
      const chuckJokeText = document.getElementById("jokeText");
      console.log(chuckJokeText);
      chuckJokeText.innerHTML = data.joke;
    } 
  
    chuckJokeButton.addEventListener('click', () => {
      getChuckNorrisJoke();
    });

  });
  
