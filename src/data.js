// agregamos las funciones a nuestro objeto global window

const searchName = (data, name) => {
  const results = data.filter(dataRow => dataRow.name.toLowerCase().startsWith(name));
  return results;
};

const searchType = (data, tipo) => {
  let array = [];
  array = data.filter(datum => datum.type[0] === tipo || datum.type[1] === tipo);
  return array;
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

const searchWeakness = (data, tipo, weakness) => {
  const array = searchType(data, tipo);
  return searchOnlyWeakness(array, weakness);
};

const searchEggs = (dataPok) => {
  return [
    dataPok.filter(pok => (pok.egg === '2 km')),
    dataPok.filter(pok => (pok.egg === '5 km')),
    dataPok.filter(pok => (pok.egg === '10 km')),
    dataPok.filter(pok => (pok.egg === 'Not in Eggs'))
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
    tabla.push([array[index][i].name, `<img class="width" src=${array[index][i].img}>`, (array[index][i].spawn_chance)]);
  }
  return tabla;
};

window.searchName = searchName;
window.searchType = searchType;
window.divideAtrapped = divideAtrapped;
window.searchWeakness = searchWeakness;
window.searchOnlyWeakness = searchOnlyWeakness;
window.searchEggs = searchEggs;
window.orderData = orderData;
window.pushTable = pushTable;
window.sortId = sortId;