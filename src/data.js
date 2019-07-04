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
        array.push({
          num: data[i].num,
          multipliers: data[i].multipliers,
          name: data[i].name,
          img: data[i].img,
          avgSpawns: data[i].avg_spawns,
          type: data[i].type,
          height: data[i].height,
          weight: data[i].weight,
          weaknesses: data[i].weaknesses,
          nextEvolution: data[i].next_evolution
        });
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
              <p class="nom">` + array[i].name + `</p>
              <p class="data-value white"><span class="data-type">Tipo:</span>` + array[i].type.join(' - ') + `</p>
          </div>
          <div class="flip-card-back">
     
              <p class="nom">` + array[i].name + `</p>          
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
              <p class="data-value white"><span class="data-type">Estado:</span>` + 'ATRAPADO' + `</p>
              <p class="data-value white"><span class="data-type">Frec. aparición:</span>` + array[i].avg_spawns + '%' + `</p>
              <img class="img-pok" src="` + array[i].img + `"/>
              <p class="nom">` + array[i].name + `</p>
              <p class="data-value white"><span class="data-type">Tipo:</span>` + array[i].type.join(' - ') + `</p>
          </div>
          <div class="flip-card-back">
  
              <p class="nom">` + array[i].name + `</p>   
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

const buscarHuevos = (data) => {
  let count2 = data.filter(pok => (pok.egg === '2 km')).length;
  let count5 = data.filter(pok => (pok.egg === '5 km')).length;
  let count10 = data.filter(pok => (pok.egg === '10 km')).length;
  let ncount = data.filter(pok => (pok.egg === 'Not in Eggs')).length;
  for (let i = 0; i < data.length; i++) {
    console.log(data[i].egg);
  }
  return {
    count2: count2,
    count5: count5,
    count10: count10,
    ncount: ncount
  };
};

window.buscarTipo = buscarTipo;
window.mostrarImg = mostrarImg;
window.buscarHuevos = buscarHuevos;
window.example = example;

