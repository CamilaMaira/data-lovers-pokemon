/*boton para mostrar todos los pokemons*/

const btnShowPokemon = document.getElementById("show");
btnShowPokemon.addEventListener("click", showAllPokemon);

/* mostrar data pokemon*/
  function showAllPokemon () {
      fetch("https://raw.githubusercontent.com/camilamaira/SCL011-data-lovers/master/src/data/pokemon/pokemon.json")
      .then(answer => answer.json())
      .then(data1 => {
        const data =data1.pokemon
          /*console.log(data)*/

          /*imprimir en html dinamico*/
          let container = document.getElementById("showPokemon");
          data.forEach((show) => {
               container.innerHTML += 
               `<div class="cards">
                  <img src="${show.img}" width="100px" height:"100px" class:"img-fluid" alt="imgPokemon">
                   <h3>${show.name}</h3>
                   <p>${show.num}</p>
              </div>`
          });
        

/* filtrado x eggs */

const selectEgg = document.getElementById("selectEgg");
selectEgg.addEventListener("change", () => {

  let condition = selectEgg.options[selectEgg.selectedIndex].value;
  let eggFilter = window.filter.egg(data,condition);

  document.getElementById("showPokemon").innerHTML="";
  eggFilter.forEach((showEgg) => {
       container.innerHTML += 
       `<div class="cards">
          <img src="${showEgg.img}" width="100px" height:"100px" class:"img-fluid" alt="imgPokemon">
           <h3>${showEgg.name}</h3>
           <p>${showEgg.num}</p>
      </div>`
  });
});

/*filtrado x type*/

const selectType = document.getElementById("selectType");
selectType.addEventListener("change", () => {

  let conditionType = selectType.options[selectType.selectedIndex].value;
  let typeFilter = window.filter.type(data, conditionType);

  document.getElementById("showPokemon").innerHTML="";
  typeFilter.forEach((showType) => {
    container.innerHTML += 
    `<div class="cards">
    <img src="${showType.img}" width="100px" height:"100px" class:"img-fluid" alt="imgPokemon">
        <h3>${showType.name}</h3>
        <p>${showType.num}</p>
     </div>`
  });
});

/* filtrado x candy */

const selectCandy = document.getElementById("selectCandy");
selectCandy.addEventListener("change", () => {

  let conditionCandy = selectCandy.options[selectCandy.selectedIndex].value;
  let candyFilter = window.filter.candy(data, conditionCandy);

  document.getElementById("showPokemon").innerHTML="";
  candyFilter.forEach((showCandy) => {
    container.innerHTML += 
    `<div class="cards">
        <img src="${showCandy.img}" width="100px" height:"100px" class:"img-fluid" alt="imgPokemon">
        <h3>${showCandy.name}</h3>
        <p>${showCandy.num}</p>
        <p>${showCandy.candy_count}</p>
     </div>`
  });
});

/* filtrado x debilidad */

const selectWeakness = document.getElementById("selectWeakness");
selectWeakness.addEventListener("change", () => {

  let conditionWeakness = selectWeakness.options[selectWeakness.selectedIndex].value;
  let weaknessFilter = window.filter.weakness(data, conditionWeakness)

  document.getElementById("showPokemon").innerHTML="";
  weaknessFilter.forEach((showWeakness) => {
    container.innerHTML += 
    `<div class="cards">
        <img src="${showWeakness.img}" width="100px" height:"100px" class:"img-fluid" alt="imgPokemon">
        <h3>${showWeakness.name}</h3>
        <p>${showWeakness.num}</p>
        <p>${showWeakness.weaknesses}</p>
     </div>`
  });
});

/* orden */

const selectOrder = document.getElementById("order");
selectOrder.addEventListener("change", () => {

  let order = selectOrder.options[selectOrder.selectedIndex].value;
  let firstOrder = window.order.firstOrder(data, order);

  document.getElementById("showPokemon").innerHTML="";
  firstOrder.forEach((showPokemon) => {
    container.innerHTML += 
    `<div class="cards">
      <img src="${showPokemon.img}" width="100px" height:"100px" class:"img-fluid" alt="imgPokemon">
        <h3>${showPokemon.name}</h3>
        <p>${showPokemon.num}</p>
     </div>`
  });
});




/*estos corresponde a fetch, van al final*/
})
}









