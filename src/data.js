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
          avg_spawns: data[i].avg_spawns,
          type: data[i].type,
          height: data[i].height,
          weight: data[i].weight,
          weaknesses: data[i].weaknesses
        });
      }
    }
  }
  return array;
};

const mostrarImg = (array) => {
  let list = '';
  for (let i = 0; i < array.length; i++) {
    const card = `
    <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
          
            <p class="num">` + 'N.º ' + array[i].num + `</p>
            <p class="avg">` + array[i].avg_spawns + `</p>
            <img class="img-pok" src="` + array[i].img + `"/>
            <p class="nom">` + array[i].name + `</p>
            <p class="type">` + array[i].type.join(' - ') + `</p>
        </div>
        <div class="flip-card-back">
            <p class="num">` + 'N.º ' + array[i].num + `</p>
            <p class="pc">` + array[i].multipliers + `</p>
            <p class="nom">` + array[i].name + `</p>
            <p class="type">` + array[i].type.join(' - ') + `</p>
            <p class="nom">` + array[i].height + `</p>
            <p class="nom">` + array[i].weight + `</p>
            <p class="type">` + array[i].weaknesses.join(' - ') + `</p>

          </div>
      </div>
      </div>
          `;
      
    list += card;
  }
  return list;
};

const buscarHuevos = (data) => {
  let count2 = 0;
  let count5 = 0;
  let count10 = 0;
  let ncount = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].egg === '2 km') {
      count2++;
    } else if (data[i].egg === '5 km') {
      count5++;
    } else if (data[i].egg === '10 km') {
      count10++;
    } else {
      ncount++;
    }
  }
  count2 = Math.round(count2 * 100 / 151);
  count5 = Math.round(count5 * 100 / 151);
  count10 = Math.round(count10 * 100 / 151);
  ncount = Math.round(ncount * 100 / 151);

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

