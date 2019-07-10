/* Manejo de data */

// esta es una función de ejemplo

// puedes ver como agregamos la función a nuestro objeto global window
const example = () => {
  return 'example';
};

const buscarTipo = (data, tipo) => {
  let array = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].type.length; j++) {
      if (data[i].type[j] === tipo) {
        array.push(data[i]);
      }
    }
  } 
  return array;
};

const mostrarImg = (array) => {
  let list = '';
  for (let i = 0; i < array.length; i++) {
    if (array[i].multipliers === null) {
      const card = `
      <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front-no">
            
              <p class="num">` + 'N.º ' + array[i].num + `</p>
              <p class="data-value white"><span class="data-type">Estado:</span>` + 'NO ATRAPADO' + `</p>
              <p class="data-value white"><span class="data-type">Frec. aparición:</span>` + array[i].avg_spawns + '%' + `</p>
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
              <p class="data-value"><span class="data-type">Debilidades:</span>` + array[i].weaknesses.join(' - ') + `</p>
              <p class="data-value"><span class="data-type">Evoluciones:</span>` + array[i].next_evolution + `</p>
  
            </div>
        </div>
        </div>
            `;
      /* if(array[i].filter(pok => (pok.next_evolution.length === 2)))*/
      list += card;
    } else {
      const card = `
      <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
            
              <p class="num">` + 'N.º ' + array[i].num + `</p>
              <p class="data-value blue"><span class="data-type">Estado:</span>` + 'ATRAPADO' + `</p>
              <p class="data-value blue"><span class="data-type">Frec. aparición:</span>` + array[i].avg_spawns + '%' + `</p>
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
              <p class="data-value"><span class="data-type">Debilidades:</span>` + array[i].weaknesses.join(' - ') + `</p>
              <p class="data-value"><span class="data-type">Evoluciones:</span>` + array[i].next_evolution + `</p>
            </div>
        </div>
        </div>
            `;

      list += card;
    }
  }
  return list;
};

const separarAtrapados = (array) => {
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

const buscarDebil = (data, tipo, debilidad) => {
  let array = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].weaknesses.length; j++) {
      for (let x = 0; x < data[i].type.length; x++) {
        if (data[i].weaknesses[j] === debilidad && data[i].type[x] === tipo) {
          array.push(data[i]);
        }
      }
    }
  }
  return array;
};

const buscarSoloDebil = (data, debilidad) => {
  let array = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].weaknesses.length; j++) {
      if (data[i].weaknesses[j] === debilidad) {
        array.push(data[i]);
      }
    }
  }
  return array;
};

const buscarHuevos = (data) => {
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

const ordenar = (array, condicion) => {
  let ordered = [];
  if (condicion === 'order-a-z') {
    ordered = array.sort((first, second) => {
      if (first.name > second.name) {
        return 1; 
      } else if (first.name === second.name) { 
        return 0; 
      }
      return -1;
    });
  } else if (condicion === 'order-z-a') {
    ordered = array.sort((first, second) => {
      if (first.name < second.name) { 
        return 1; 
      }
      if (first.name === second.name) { 
        return 0; 
      }
      return -1;
    });
  } else if (condicion === 'order-asc') {
    ordered = array.sort((first, second) => {
      if (first.avg_spawns > second.avg_spawns) { 
        return 1; 
      }
      if (first.avg_spawns === second.avg_spawns) { 
        return 0; 
      }
      return -1;
    });
  } else {
    ordered = array.sort((first, second) => {
      if (first.avg_spawns < second.avg_spawns) { 
        return 1; 
      }
      if (first.avg_spawns === second.avg_spawns) { 
        return 0; 
      }
      return -1;
    });
  }
  return ordered;
};

const llenarTabla = (array, index) => {
  const tabla = [];
  for (let i = 0; i < array[index].length; i++) {
    tabla.push([array[index][i].name, '<img src="' + array[index][i].img + '">', (array[index][i].spawn_chance)]);
  }
  return tabla;
};

window.buscarTipo = buscarTipo;
window.mostrarImg = mostrarImg;
window.separarAtrapados = separarAtrapados;
window.buscarDebil = buscarDebil;
window.buscarSoloDebil = buscarSoloDebil;
window.buscarHuevos = buscarHuevos;
window.ordenar = ordenar;
window.llenarTabla = llenarTabla;
window.example = example;