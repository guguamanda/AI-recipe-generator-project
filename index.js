function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "1e5495ae3fe80eb453c73of73afb2ect";
  let prompt = `User instructions: Generate a recipe with ${instructionsInput.value}`;
  let context =
    "You are a cooking expert and love to write short recipes. Your mission is to generate a four line recipe in basic HTML and each sentence should be on the next line. Do not include code fencing. Make sure to follow the user instructions. Do not include a tile to the recipe. Sign the recipe with 'SheCodes AI' in <strong> element at the end of the recipe";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="blink">Generating a recipe for you with ${instructionsInput.value}📜...</div>`;
  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
