window.addEventListener('DOMContentLoaded', () => {
  async function getpickedDigimon() {
    try {
      const apiDigimonURL = "https://digimon-api.vercel.app/api/digimon";
      const resPickedDigimon = await fetch(apiDigimonURL);

      if (!resPickedDigimon.ok) {
        throw new Error(`HTTP error! status: ${resPickedDigimon.status}`);
      }

      const dataPickedDigimon = await resPickedDigimon.json();

      if (Array.isArray(dataPickedDigimon) && dataPickedDigimon.length > 0) {
        // Shuffle the response data to get a random Digimon
        const shuffledDataPickedDigimon = dataPickedDigimon.sort(() => Math.random() - 0.5);

        const pickedDigimonInfoTemplate = `
          <div class="digimon">
            <img src="${shuffledDataPickedDigimon[0].img}">
            <h3>Nombre: ${shuffledDataPickedDigimon[0].name}</h3>
            <p>lvl: ${shuffledDataPickedDigimon[0].level}</p>
          </div>
        `;
        const pickedDigiInfo = document.querySelector("#pickedDigimonInfo");
        pickedDigiInfo.innerHTML = pickedDigimonInfoTemplate;

        // Show the pickedDigimon element
        const pickedDigimonElement = document.querySelector(".pickedDigimon");
        pickedDigimonElement.style.display = "block";
      } else {
        console.log("No data found in response.");
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const pickDigimonButton = document.querySelector("#pickdigimon");
  pickDigimonButton.addEventListener("click", getpickedDigimon);
});
