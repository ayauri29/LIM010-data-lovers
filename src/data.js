/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const buscarTipo = (data, tipo) => {
  let array = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].type.length; j++) {
      if (data[i].type[j] === tipo) {
        array.push({
          name: data[i].name,
          img: data[i].img
        });
      }
    }
  }
  return array;
};

const buscarDebil = (data, tipo, debilidad) => {
  let array = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].weaknesses.length; j++) {
      for (let x = 0; x < data[i].type.length; x++) {
        if (data[i].weaknesses[j] === debilidad && data[i].type[x] === tipo) {
          array.push({
            name: data[i].name,
            img: data[i].img
          });
        }
      }
    }
  }
  return array;
};

const mostrarImg = (array) => {
  let list = '';
  for (let i = 0; i < array.length; i++) {
    const card = `
    <div class="card">
    <p class="num">` + 'N.º ' + POKEMON.pokemon[i].num + `</p>
    <p class="pc">` + POKEMON.pokemon[i].multipliers + `</p>
    <img class="img-pok" src="` + POKEMON.pokemon[i].img + `"/>
    <p class="nom">` + POKEMON.pokemon[i].name + `</p>
    <p class="type">` + POKEMON.pokemon[i].type.join(' - ') + `</p>
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
window.buscarDebil = buscarDebil;
window.buscarHuevos = buscarHuevos;
window.mostrarImg = mostrarImg;
