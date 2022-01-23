let url = "https://pokeapi.co/api/v2/pokemon?limit=10";
let blockBtn = document.querySelector(".buttons");
let blockCards = document.querySelector(".cards");
async function renderBtn() {
  let result = await fetch(url)
    .then((data) => data.json())
    .then((data) => {
      console.log(data.results);
      return data.results;
    });
  for (i = 0; i < result.length; i++) {
    let btn = document.createElement("div");
    btn.classList.add('btn_pokemons')
    btn.innerHTML = `<button onclick = "getCard('${result[i].url}')" class='btn_card' >${result[i].name}</button>`;
    
    blockBtn.append(btn);
  }
}
async function getCard(i) {
  let result2 = await fetch(i)
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      return data;
    });

  blockCards.innerHTML = `<h2>${result2.name}</h2><img src='${result2.sprites.other.dream_world.front_default}' class="img"/><p>снялся в ${result2.moves.length} серях</p><p>id: ${result2.id}</p><p>height: ${result2.height}</p><p>attack: ${result2.stats[1].base_stat}</p>`;
}
renderBtn();
