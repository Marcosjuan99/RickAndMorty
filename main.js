const contentElement = document.querySelector(".content_api");
const likesIds = []
const idKeys = ""
let characterString = ""
let liked = false;
let heart = document.querySelector(".heart")
let chraactersList = []

// localStorage.getItem("@rickAndMortyLikes")
// likesIds = ids.split(",").filter((likeId) => {
//   return likeId !== String(id)
// })


function cleanContentElement() {
  characterString = ''
}

function addLike(id) {


  if (!likesIds.includes(id)) {
    likesIds.push(String(id))

    // localStorage.setItem('@rickAndMortyLikes', `${likesIds}`)
  } else {
    // const ids = getLocalStorageItem('@rickAndMortyLikes')

    likesIds = likesIds.filter((likeId) => {
      return likeId !== String(id)
    })
  }

  cleanContentElement()
  chraactersList.forEach(showCharacters);
}

async function init() {
  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      const { info, results } = response;

      chraactersList = results

      chraactersList.forEach(showCharacters);
      contentElement.innerHTML = `<div class="character_container">${characterString}</div>`

    })
}
function showCharacters(character) {
  const isLiked = likesIds.includes(String(character.id))

  console.log(isLiked)

  const icon = !isLiked ? '<i class="ph-thin ph-heart"></i>' : '<i class="ph-fill ph-heart"></i>'

  console.log(icon)

  characterString = characterString + `
    <div class="allCharacter">
      <div> 
        <img class= "img_character" src="${character.image}"/>
      </div>
      <div class="description_character">
        <a class ="button_name" href="/content.html?id=${character.id}"> 
          ${character.name} 
        </a>
        <div> 
          ${character.gender}
        </div>
        <div>
          ${character.location.name}
        </div>
      </div>
      <div 
        id="${character.id}" 
        class ="heart" 
        onclick="addLike(${character.id})"
      >
      ${icon}
      </div> 
    </div>
  `
}

function getCharactersByIds() {
  fetch(`https://rickandmortyapi.com/api/location/${likesIds.join()}`)
  then((response) => {
    response.jason()
  })
    .then((response) => {
      console.log(response);
    })
}

function getLocalStorageItem(key) {
  return localStorage.getItem(key)
}

init();
