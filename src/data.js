/* Manejo de data */

// esta es una función de ejemplo

// puedes ver como agregamos la función a nuestro objeto global window
const example = () => {
  return 'example';
};

const searchType = (data, tipo) => {
  let array = [];
  array = data.filter(datum => datum.type[0] === tipo || datum.type[1] === tipo);
  return array;
};
const showImg = (array) => {
  let list = '';
  for (let i = 0; i < array.length; i++) {
    if (array[i].multipliers === null) {
      let card = `
      <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front-no">
            
              <p class="num">` + 'N.º ' + array[i].num + `</p>
              <p class="data-value white"><span class="data-type">Estado:</span>` + 'NO ATRAPADO' + `</p>
              <p class="data-value white"><span class="data-type">Frec. aparición:</span>` + array[i].spawn_chance + '%' + `</p>
              <img class="img-pok" src="` + array[i].img + `"/>
              <p class="nom orange">` + array[i].name + `</p>
              <p class="data-value white"><span class="data-type">Tipo:</span>` + array[i].type.join(' - ') + `</p>
          </div>
          <div class="flip-card-back">
              <p class="nom black">` + array[i].name + `</p>          
              <p class="data-value"><span class="data-type">Estatura:</span>` + array[i].height + `</p>
              <p class="data-value"><span class="data-type">Peso:</span>` + array[i].weight + `</p>
              <p class="data-value"><span class="data-type">Huevos:</span>` + array[i].egg + `</p>
              <p class="data-value"><span class="data-type">Tiempo de aparición:</span>` + array[i].spawn_time + `</p>
              <p class="data-value"><span class="data-type">Debilidades:</span>` + array[i].weaknesses.join(' - ') + '</p>';

      if (array[i].hasOwnProperty('prev_evolution')) {
        card += '<p class="data-value"><span class="data-type">Pre-evoluciones:</span>' + array[i].prev_evolution.map(evo => evo.name).join(' - ') + '</p>';
      } else {
        card += '<p class="data-value"><span class="data-type">Pre-evoluciones:</span>' + 'No tiene pre evoluciones' + '</p>';
      }

      if (array[i].hasOwnProperty('next_evolution')) {
        card += '<p class="data-value"><span class="data-type">Evoluciones:</span>' + array[i].next_evolution.map(evo => evo.name).join(' - ') + '</p>';
      } else {
        card += '<p class="data-value"><span class="data-type">Evoluciones:</span>' + 'No tiene evoluciones' + '</p>';
      }
    
  
      card += ` </div>
        </div>
        </div>
            `;
      list += card;
    } else {
      let card = `
      <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
            
              <p class="num">` + 'N.º ' + array[i].num + `</p>
              <p class="data-value blue"><span class="data-type">Estado:</span>` + 'ATRAPADO' + `</p>
              <p class="data-value blue"><span class="data-type">Frec. aparición:</span>` + array[i].spawn_chance + '%' + `</p>
              <img class="img-pok" src="` + array[i].img + `"/>
              <p class="nom orange">` + array[i].name + `</p>
              <p class="data-value blue"><span class="data-type">Tipo:</span>` + array[i].type.join(' - ') + `</p>
          </div>
          <div class="flip-card-back">
  
              <p class="nom black">` + array[i].name + `</p>   
              <p class="data-value"><span class="data-type">CP:</span>` + array[i].multipliers.join(' - ') + `</p>       
              <p class="data-value"><span class="data-type">Estatura:</span>` + array[i].height + `</p>
              <p class="data-value"><span class="data-type">Peso:</span>` + array[i].weight + `</p>
              <p class="data-value"><span class="data-type">Cant. caramelos:</span>` + array[i].candy_count + `</p>
              <p class="data-value"><span class="data-type">Huevos:</span>` + array[i].egg + `</p>
              <p class="data-value"><span class="data-type">Tiempo de aparición:</span>` + array[i].spawn_time + `</p>
              <p class="data-value"><span class="data-type">Debilidades:</span>` + array[i].weaknesses.join(' - ') + '</p>';
      
      if (array[i].hasOwnProperty('prev_evolution')) {
        card += '<p class="data-value"><span class="data-type">Pre-evoluciones:</span>' + array[i].prev_evolution.map(evo => evo.name).join(' - ') + '</p>';
      } else {
        card += '<p class="data-value"><span class="data-type">Pre-evoluciones:</span>' + 'No tiene pre evoluciones' + '</p>';
      }
      
      if (array[i].hasOwnProperty('next_evolution')) {
        card += '<p class="data-value"><span class="data-type">Evoluciones:</span>' + array[i].next_evolution.map(evo => evo.name).join(' - ') + '</p>';
      } else {
        card += '<p class="data-value"><span class="data-type">Evoluciones:</span>' + 'No tiene evoluciones' + '</p>';
      }
            
  
      card += ` </div>
        </div>
        </div>
            `;

      list += card;
    }
  }
  return list;
};

const divideAtrapped = (array) => {
  let atrapado = 0;
  let noAtrapado = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].multipliers === null) {
      noAtrapado++;
    } else {
      atrapado++;
    }
  }
  return {
    atrapado: atrapado,
    noAtrapado: noAtrapado
  };
};

const searchWeakness = (data, tipo, weakness) => {
  let array = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].weaknesses.length; j++) {
      for (let x = 0; x < data[i].type.length; x++) {
        if (data[i].weaknesses[j] === weakness && data[i].type[x] === tipo) {
          array.push(data[i]);
        }
      }
    }
  }
  return array;
};

const searchOnlyWeakness = (data, weakness) => {
  let array = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].weaknesses.length; j++) {
      if (data[i].weaknesses[j] === weakness) {
        array.push(data[i]);
      }
    }
  }
  return array;
};

const searchEggs = (data) => {
  let count2 = data.filter(pok => (pok.egg === '2 km'));
  let count5 = data.filter(pok => (pok.egg === '5 km'));
  let count10 = data.filter(pok => (pok.egg === '10 km'));
  let ncount = data.filter(pok => (pok.egg === 'Not in Eggs'));

  return [
    count2,
    count5,
    count10,
    ncount,
  ];
};

const sortId = (array) => {
  let ordered = [];
  ordered = array.sort((first, second) => (first.id > second.id ? 1 : -1));
  return ordered;
};

const orderData = (array, condicion) => {
  let ordered = [];
  if (condicion === 'order-a-z') {
    ordered = array.sort((first, second) => (first.name > second.name ? 1 : -1));
  } else if (condicion === 'order-z-a') {
    ordered = array.sort((first, second) => (first.name < second.name ? 1 : -1));
  } else if (condicion === 'order-asc') {
    ordered = array.sort((first, second) => (first.spawn_chance > second.spawn_chance ? 1 : -1));
  } else {
    ordered = array.sort((first, second) => (first.spawn_chance < second.spawn_chance ? 1 : -1));
  }
  return ordered;
};

const pushTable = (array, index) => {
  const tabla = [];
  for (let i = 0; i < array[index].length; i++) {
    tabla.push([array[index][i].name, '<img class="width" src="' + array[index][i].img + '">', (array[index][i].spawn_chance)]);
  }
  return tabla;
};

window.searchType = searchType;
window.showImg = showImg;
window.divideAtrapped = divideAtrapped;
window.searchWeakness = searchWeakness;
window.searchOnlyWeakness = searchOnlyWeakness;
window.searchEggs = searchEggs;
window.orderData = orderData;
window.pushTable = pushTable;
window.example = example;

