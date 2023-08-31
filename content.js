let params = new URLSearchParams(document.location.search);
let id = params.get("id");
let contentElement = document.querySelector(".content_api")
console.log(id);

async function getCharacter(id) {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            console.log(response);


            contentElement.innerHTML = ` 
        <div class="chosen_character">
        <div class="allCharacter">
    <div> <img class= "img_character" src="${response.image}"></div>
    <div class="description_character">
    <button class ="button_name" onclick="getCharacter(${response.id})"> ${response.name} </button>
      <div> ${response.gender} </div>
        <div> ${response.location.name} </div>
        </div>
        </div>
        </div>
        `
        })
}


getCharacter(id);