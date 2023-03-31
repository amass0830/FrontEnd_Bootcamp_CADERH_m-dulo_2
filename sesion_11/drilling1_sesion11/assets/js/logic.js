window.addEventListener('DOMContentLoaded', () => {

  async function getGhibliMovie() {
    const apiGhibliURL = "https://studio-ghibli-films-api.herokuapp.com/api/Howl's%20Moving%20Castle";
    const resGhibliMovie = await fetch(apiGhibliURL);
    const dataGhibliMovie = await resGhibliMovie.json();
    const ghibliInfoTemplate = `
      <div class="howls-moving-castle">
        <img src =${dataGhibliMovie.poster}>
        <h3>Título: ${dataGhibliMovie.title}</h3>
        <p>Sinopsis: ${dataGhibliMovie.synopsis}</p>
        <h6>Título romanizado: ${dataGhibliMovie.hepburn}</h6>
        <h6>Año de Estreno: ${dataGhibliMovie.release}</h6>
        <h6>Director: ${dataGhibliMovie.director}</h6>
      </div>
    `; 
    const ghibliMovieInfo = document.querySelector(".ghibliInfo");
    ghibliMovieInfo.innerHTML = ghibliInfoTemplate;

    const showMovieButton = document.getElementById("moreGhibliInformation");
    const masInformacion = `<div><h6> Su puntuación en RottenTomatoes fue de: ${dataGhibliMovie.reviews.rottenTomatoes}</h6></div>`
  
    showMovieButton.addEventListener('click', () => {
       showMovieButton.insertAdjacentHTML('afterend', masInformacion);
    });
  } 

  getGhibliMovie();

});
