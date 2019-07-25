const usuario = document.getElementById('user');
const password = document.getElementById('pass');
const ingresar = document.getElementById('ingresar');
const screenLogin = document.getElementById('screen-login');
const screenHome = document.getElementById('screen-home');
const screenPokemon = document.getElementById('screen-pokemon');
const screenEclosionEgg = document.getElementById('screen-eclosion-egg');
const errorPass = document.getElementById('error-pass');
const header = document.getElementById('header');
const footer = document.getElementById('footer');
const searchByName = document.getElementById('search-by-name');
let data = '';
let eggs = '';

fetch('https://raw.githubusercontent.com/Laboratoria/LIM010-data-lovers/master/src/data/pokemon/pokemon.json')
  .then(response => {
    return response.json();
  })
  .then(dataPoke => {
    data = dataPoke.pokemon;
    eggs = searchEggs(data);
    fillTypeSelect();
    fillWeaknessSelect();
  })
  .catch((error) => { 
    console.log('Error');
  });

const typeSelect = document.getElementById('filter');
const fillTypeSelect = () =>{
  let types = [];
  for (let i = 0; i < data.length; i++) {
    types.push(data[i].type); 
  };

  types = types.toString().split(',');
  types = Array.from(new Set(types));

  let template = `<option value="0" selected disabled>Seleccionar un tipo</option>
                  <option value="1">Ver todos</option>`;

  for (let j = 0; j < types.length; j++) {
    template += `<option value=${types[j]}>${types[j]}</option>`;
  }

  typeSelect.innerHTML = template;
};

const weaknessSelect = document.getElementById('weakness');
const fillWeaknessSelect = () =>{
  let weakness = [];
  for (let i = 0; i < data.length; i++) {
    weakness.push(data[i].weaknesses); 
  };

  weakness = weakness.toString().split(',');
  weakness = Array.from(new Set(weakness));

  let template = '<option value="0" selected disabled>Seleccionar una debilidad</option>';

  for (let j = 0; j < weakness.length; j++) {
    template += `<option value=${weakness[j]}>${weakness[j]}</option>`;
  }

  weaknessSelect.innerHTML = template;
};

let cont = 1;
screenLogin.addEventListener('submit', (enter) => {
  enter.preventDefault();
  const user = usuario.value;
  const pass = password.value;
  if (pass === 'LABORATORIA' && user === 'LABORATORIA') {
    header.classList.remove('hide');
    footer.classList.remove('hide');
    screenHome.classList.remove('hide');
    screenLogin.classList.add('hide');
    home.classList.add('active');
  } else if (cont > 2) {
    errorPass.innerHTML = ' Ha intentado demasiadas veces.';
    usuario.value = '';
    password.value = '';
    ingresar.disabled = true;
    usuario.disabled = true;
    password.disabled = true;
  } else {
    errorPass.innerHTML = ' ERROR! Introduzca una clave válida.';
    usuario.value = '';
    password.value = '';
    usuario.focus();
    password.focus();
    cont++;
  }
});

const home = document.getElementById('home');
home.addEventListener('click', () => {
  screenHome.classList.remove('hide');
  screenPokemon.classList.add('hide');
  screenEclosionEgg.classList.add('hide');
  home.classList.add('active');
  seePokemons.classList.remove('active');
  document.getElementById('filter').classList.add('hide');
  eggsKm.classList.remove('active');
  document.getElementById('table').innerHTML = '';
  searchByName.classList.add('hide');
});

let text = '';
let arrayType = [];

filter.addEventListener('change', () => {
  document.getElementById('container-trap').classList.remove('hide');
  document.getElementById('count-egg').innerHTML = '';
  document.getElementById('pokemones').innerHTML = '';
  document.getElementById('search').value = '';
  const x = document.getElementById('filter').value;
  let count = {};
  console.log(x);
  if (x === '1') {
    count = divideAtrapped(data);
    text = showImg(sortId(data));
  } else {
    arrayType = searchType(data, x);
    count = divideAtrapped(arrayType);
    text = showImg(arrayType);
  }
 
  document.getElementById('weakness').selectedIndex = 0;
  document.getElementById('order').selectedIndex = 0;
  document.getElementById('count-trapped').innerHTML = 'Atrapados: ' + count.atrapado;
  document.getElementById('count-no-trapped').innerHTML = 'No atrapados: ' + count.noAtrapado;
  document.getElementById('pok-filtrados').innerHTML = text;
});

let texto = '';
let arrayDebil = [];

weakness.addEventListener('change', () => {
  document.getElementById('container-trap').classList.remove('hide');
  document.getElementById('count-egg').innerHTML = '';
  document.getElementById('pokemones').innerHTML = '';
  document.getElementById('search').value = '';
  const x = document.getElementById('filter').value;
  const debil = document.getElementById('weakness').value;
  let count = {};

  if (x === '0' || x === '1') {
    arrayDebil = searchOnlyWeakness(data, debil);
    count = divideAtrapped(arrayDebil);
    texto = showImg(arrayDebil);
    document.getElementById('order').selectedIndex = 0;
    document.getElementById('count-trapped').innerHTML = 'Atrapados: ' + count.atrapado;
    document.getElementById('count-no-trapped').innerHTML = 'No atrapados: ' + count.noAtrapado;
    document.getElementById('pok-filtrados').innerHTML = texto;
    document.getElementById('filter').selectedIndex = 0;
  } else {
    arrayDebil = searchWeakness(data, x, debil);
    if (arrayDebil.length === 0) {
      document.getElementById('pok-filtrados').innerHTML = '<img src="https://vignette.wikia.nocookie.net/pokpiruleta/images/e/e0/Squirtle_XY.gif/revision/latest?cb=20140624162904&path-prefix=es"><p class="white">No se encontraron resultados.</p>';
      document.getElementById('count-trapped').innerHTML = '';
      document.getElementById('container-trap').classList.add('hide');
      document.getElementById('count-no-trapped').innerHTML = '';
    } else {
      count = divideAtrapped(arrayDebil);
      texto = showImg(arrayDebil);
      document.getElementById('order').selectedIndex = 0;
      document.getElementById('count-trapped').innerHTML = 'Atrapados: ' + count.atrapado;
      document.getElementById('count-no-trapped').innerHTML = 'No atrapados: ' + count.noAtrapado;
      document.getElementById('pok-filtrados').innerHTML = texto;
    }
  }
});

let ordered = [];

order.addEventListener('change', () => {
  document.getElementById('container-trap').classList.remove('hide');
  document.getElementById('search').value = '';
  const tipo = document.getElementById('filter').value;
  const debil = document.getElementById('weakness').value;
  const order = document.getElementById('order').value;
  let text = '';
  if (debil === '0' && tipo === '0' || debil === '0' && tipo === '1') {
    ordered = orderData(data, order);
    text = showImg(ordered);
  } else if (debil === '0') {
    arrayType = searchType(data, tipo);
    ordered = orderData(arrayType, order);
    text = showImg(ordered);
  } else if (tipo === '0') {
    arrayDebil = searchOnlyWeakness(data, debil);
    ordered = orderData(arrayDebil, order);
    text = showImg(ordered);
  } else {
    arrayDebil = searchWeakness(data, tipo, debil);
    ordered = orderData(arrayDebil, order);
    text = showImg(ordered);
  }
  document.getElementById('pok-filtrados').innerHTML = text;
});

let list = '';
const seePokemons = document.getElementById('see-pokemons');
seePokemons.addEventListener('click', () => {
  document.getElementById('container-trap').classList.remove('hide');
  screenHome.classList.add('hide');
  screenPokemon.classList.remove('hide');
  screenEclosionEgg.classList.add('hide');
  searchByName.classList.remove('hide');
  document.getElementById('filter').classList.remove('hide');
  home.classList.remove('active');
  seePokemons.classList.add('active');
  eggsKm.classList.remove('active');
  document.getElementById('count-egg').innerHTML = '';
  document.getElementById('pok-filtrados').innerHTML = '';
  document.getElementById('table').innerHTML = '';
  document.getElementById('search').value = '';

  document.getElementById('order').selectedIndex = 0;
  document.getElementById('weakness').selectedIndex = 0;
  document.getElementById('filter').selectedIndex = 0;
  const count = divideAtrapped(data);
  document.getElementById('count-trapped').innerHTML = 'Atrapados: ' + count.atrapado;
  document.getElementById('count-no-trapped').innerHTML = 'No atrapados: ' + count.noAtrapado;

  list = showImg(sortId(data));

  document.getElementById('pokemones').innerHTML = list;
});

const search = document.getElementById('search');
search.addEventListener('input', event => {
  document.getElementById('order').selectedIndex = 0;
  document.getElementById('weakness').selectedIndex = 0;
  document.getElementById('filter').selectedIndex = 0;
  document.getElementById('count-egg').innerHTML = '';
  document.getElementById('pokemones').innerHTML = '';
  document.getElementById('pok-filtrados').innerHTML = '';
    
  if (event.target.value.length > 0) {
    document.getElementById('container-trap').classList.add('hide');
    document.getElementById('filters').classList.add('hide');
  } else {
    document.getElementById('container-trap').classList.remove('hide');
    document.getElementById('filters').classList.remove('hide');
    const count = divideAtrapped(data);
    document.getElementById('count-trapped').innerHTML = 'Atrapados: ' + count.atrapado;
    document.getElementById('count-no-trapped').innerHTML = 'No atrapados: ' + count.noAtrapado;
    showImg(sortId(data));
  }
  const foundPoke = searchName(data, event.target.value.toLowerCase());
  document.getElementById('pok-filtrados').innerHTML = showImg(foundPoke);
});

/*
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', () => {
  document.getElementById('order').selectedIndex = 0;
  document.getElementById('weakness').selectedIndex = 0;
  document.getElementById('filter').selectedIndex = 0;
  document.getElementById('count-egg').innerHTML = '';
  document.getElementById('pokemones').innerHTML = '';
  document.getElementById('pok-filtrados').innerHTML = '';
  document.getElementById('count-trapped').innerHTML = '';
  document.getElementById('count-no-trapped').innerHTML = '';
  document.getElementById('container-trap').classList.add('hide');
  const searchText = document.getElementById('search').value;
  let text = '';
  let arrayName = searchName(data, searchText);
  if (arrayName.length !== 0) {
    text = showImg(arrayName);
    document.getElementById('pok-filtrados').innerHTML = text;
  } else {
    document.getElementById('pok-filtrados').innerHTML = '<p class="white">No se encontraron resultados.</p>';
  }
});*/

const showImg = (array) => {
  let list = '';
  for (let i = 0; i < array.length; i++) {
    if (array[i].multipliers === null) {
      let card = `
      <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front-no">
              <p class="num">N.º ${array[i].num} </p>
              <p class="data-value white"><span class="data-type">Estado:</span>NO ATRAPADO</p>
              <p class="data-value white"><span class="data-type">Frec. aparición:</span>${array[i].spawn_chance} %</p>
              <img class="img-pok" src="${array[i].img}"/>
              <p class="nom orange">${array[i].name}</p>
              <p class="data-value white"><span class="data-type">Tipo:</span>${array[i].type.join(' - ')}</p>
          </div>
          <div class="flip-card-back">
            <p class="nom black">${array[i].name}</p>          
            <p class="data-value"><span class="data-type">Estatura:</span>${array[i].height}</p>
            <p class="data-value"><span class="data-type">Peso:</span>${array[i].weight}</p>
            <p class="data-value"><span class="data-type">Huevos:</span>${array[i].egg}</p>
            <p class="data-value"><span class="data-type">Tiempo de aparición:</span>${array[i].spawn_time}</p>
            <p class="data-value"><span class="data-type">Debilidades:</span>${array[i].weaknesses.join(' - ')}</p>`;

      if (array[i].hasOwnProperty('prev_evolution')) {
        card += `<p class="data-value"><span class="data-type">Pre-evoluciones:</span>${array[i].prev_evolution.map(evo => evo.name).join(' - ')}</p>`;
      } else {
        card += '<p class="data-value"><span class="data-type">Pre-evoluciones:</span>No tiene pre evoluciones</p>';
      }

      if (array[i].hasOwnProperty('next_evolution')) {
        card += `<p class="data-value"><span class="data-type">Evoluciones:</span>${array[i].next_evolution.map(evo => evo.name).join(' - ') }</p>`;
      } else {
        card += '<p class="data-value"><span class="data-type">Evoluciones:</span>No tiene evoluciones</p>';
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
              <p class="num">N.º ${array[i].num} </p>
              <p class="data-value blue"><span class="data-type">Estado:</span>ATRAPADO</p>
              <p class="data-value blue"><span class="data-type">Frec. aparición:</span>${array[i].spawn_chance}% </p>
              <img class="img-pok" src="${array[i].img}"/>
              <p class="nom orange">${array[i].name}</p>
              <p class="data-value blue"><span class="data-type">Tipo:</span>${array[i].type.join(' - ')}</p>
          </div>
          <div class="flip-card-back">
              <p class="nom black">${array[i].name}</p>   
              <p class="data-value"><span class="data-type">CP:</span>${array[i].multipliers.join(' - ')}</p>       
              <p class="data-value"><span class="data-type">Estatura:</span>${array[i].height}</p>
              <p class="data-value"><span class="data-type">Peso:</span>${array[i].weight}</p>
              <p class="data-value"><span class="data-type">Cant. caramelos:</span>${array[i].candy_count}</p>
              <p class="data-value"><span class="data-type">Huevos:</span>${array[i].egg}</p>
              <p class="data-value"><span class="data-type">Tiempo de aparición:</span>${array[i].spawn_time}</p>
              <p class="data-value"><span class="data-type">Debilidades:</span>${array[i].weaknesses.join(' - ')}</p>`;

      if (array[i].hasOwnProperty('prev_evolution')) {
        card += `<p class="data-value"><span class="data-type">Pre-evoluciones:</span>${array[i].prev_evolution.map(evo => evo.name).join(' - ')}</p>`;
      } else {
        card += '<p class="data-value"><span class="data-type">Pre-evoluciones:</span>No tiene pre evoluciones</p>';
      }

      if (array[i].hasOwnProperty('next_evolution')) {
        card += `<p class="data-value"><span class="data-type">Evoluciones:</span>${array[i].next_evolution.map(evo => evo.name).join(' - ')}</p>`;
      } else {
        card += '<p class="data-value"><span class="data-type">Evoluciones:</span>No tiene evoluciones</p>';
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

google.load('visualization', '1.0', { 'packages': ['corechart'] });
google.load('visualization', '1.0', { 'packages': ['table'] });

const graphicPie = () => {
  const dataDr = new google.visualization.DataTable();
  dataDr.addColumn('string', 'km');
  dataDr.addColumn('number', 'count');
  dataDr.addRows(
    [
      ['Huevos de 2km', eggs[0].length],
      ['Huevos de 5km', eggs[1].length],
      ['Huevos de 10km', eggs[2].length],
      ['No tiene huevos', eggs[3].length + 1]

    ]
  );

  const opc = {
    'title': 'Porcentaje de huevos a eclosionar por tipo de km',
    'width': 450,
    'height': 220,
  };
  const graphic = new google.visualization.PieChart(document.getElementById('charts'));
  graphic.draw(dataDr, opc);
  const eggs3 = eggs[3].length + 1;
  document.getElementById('count-egg').innerHTML = 'Huevos de 2km: ' + eggs[0].length + '<br>' + 'Huevos de 5km: ' + eggs[1].length + '<br>' +
    ' Huevos de 10km: ' + eggs[2].length + '<br>' + ' No tienen huevos: ' + eggs3;
};

const eggsKm = document.getElementById('eggs-km');
eggsKm.addEventListener('click', () => {
  google.setOnLoadCallback(eggsKm);

  screenHome.classList.add('hide');
  screenPokemon.classList.add('hide');
  screenEclosionEgg.classList.remove('hide');
  searchByName.classList.add('hide');
  document.getElementById('filter').classList.add('hide');
  home.classList.remove('active');
  seePokemons.classList.remove('active');
  eggsKm.classList.add('active');

  document.getElementById('pokemones').innerHTML = '';
  document.getElementById('pok-filtrados').innerHTML = '';

  document.getElementById('order').selectedIndex = 0;
  document.getElementById('weakness').selectedIndex = 0;
  document.getElementById('filter').selectedIndex = 0;
  graphicPie();
});

const egg2 = document.getElementById('2km');
egg2.addEventListener('click', () => {
  graphicPie();
  buildGraphic(0);
});

const egg5 = document.getElementById('5km');
egg5.addEventListener('click', () => {
  graphicPie();
  buildGraphic(1);
});

const egg10 = document.getElementById('10km');
egg10.addEventListener('click', () => {
  graphicPie();
  buildGraphic(2);
});

const buildGraphic = (index) => {
  const dataDraw = new google.visualization.DataTable();
  dataDraw.addColumn('string', 'Nombre');
  dataDraw.addColumn('string', 'Pokemon');
  dataDraw.addColumn('number', '% de aparición');

  let tabla = [];
  tabla = pushTable(eggs, index);

  dataDraw.addRows(tabla);

  const opciones = {
    'allowHtml': true,
    'showRowNumber': true,
    'width': '95%',
    'height': 410
  };
  const grafica = new google.visualization.Table(document.getElementById('table'));
  grafica.draw(dataDraw, opciones);
};

const up = document.querySelector('#up');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 200) {
    up.classList.remove('hide');
  } else {
    up.classList.add('hide');
  }
});

up.addEventListener('click', () => {
  window.scrollTo(0, 0);
});