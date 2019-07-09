const usuario = document.getElementById('user');
const password = document.getElementById('pass');
const ingresar = document.getElementById('ingresar');
const screenLogin = document.getElementById('screen-login');
const screenHome = document.getElementById('screen-home');
const screenPokemon = document.getElementById('screen-pokemon');
const screenEclosionEgg = document.getElementById('screen-eclosion-egg');
const claveIncorrecta = document.getElementById('clave-incorrecta');
const header = document.getElementById('header');
const footer = document.getElementById('footer');
const data = POKEMON.pokemon;

let cont = 1;
document.getElementById('enter').addEventListener('submit', (enter) => {
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
    claveIncorrecta.innerHTML = ' Ha intentado demasiadas veces.';
    usuario.value = '';
    password.value = '';
    ingresar.disabled = true;
    usuario.disabled = true;
    password.disabled = true;
  } else {
    claveIncorrecta.innerHTML = ' ERROR! Introduzca una clave válida.';
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
});
let text = '';
let arrayType = [];

filter.addEventListener('change', () => {
  document.getElementById('count-egg').innerHTML = '';
  document.getElementById('pokemones').innerHTML = '';
  const x = document.getElementById('filter').value;
  arrayType = searchType(data, x);
  const count = divideAtrapped(arrayType);
  text = showImg(arrayType);
  document.getElementById('weakness').selectedIndex = 0;
  document.getElementById('order').selectedIndex = 0;
  document.getElementById('count-trapped').innerHTML = 'Atrapados: ' + count.atrapado;
  document.getElementById('count-no-trapped').innerHTML = 'No atrapados: ' + count.noAtrapado;
  document.getElementById('pok-filtrados').innerHTML = text;
});

let texto = '';
let arrayDebil = [];

weakness.addEventListener('change', () => {
  document.getElementById('count-egg').innerHTML = '';
  document.getElementById('pokemones').innerHTML = '';
  const x = document.getElementById('filter').value;
  const debil = document.getElementById('weakness').value;
  let count = {};
  
  if (x === '0') {
    arrayDebil = searchOnlyWeakness(data, debil);
    count = divideAtrapped(arrayDebil);
    texto = showImg(arrayDebil);
    document.getElementById('order').selectedIndex = 0;
    document.getElementById('count-trapped').innerHTML = 'Atrapados: ' + count.atrapado;
    document.getElementById('count-no-trapped').innerHTML = 'No atrapados: ' + count.noAtrapado;
    document.getElementById('pok-filtrados').innerHTML = texto;
  } else {
    arrayDebil = searchWeakness(data, x, debil);
    if (arrayDebil.length === 0) {
      document.getElementById('pok-filtrados').innerHTML = '<img src="https://vignette.wikia.nocookie.net/pokpiruleta/images/e/e0/Squirtle_XY.gif/revision/latest?cb=20140624162904&path-prefix=es"><p>No se encontraron resultados.</p>';
      document.getElementById('count-trapped').innerHTML = '';
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

order.addEventListener('change', ()=>{
  const tipo = document.getElementById('filter').value;
  const debil = document.getElementById('weakness').value;
  const order = document.getElementById('order').value;
  let text = '';
  if (debil === '0' && tipo === '0') {
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
  screenHome.classList.add('hide');
  screenPokemon.classList.remove('hide');
  screenEclosionEgg.classList.add('hide');
  document.getElementById('filter').classList.remove('hide');
  home.classList.remove('active');
  seePokemons.classList.add('active');
  eggsKm.classList.remove('active');
  document.getElementById('count-egg').innerHTML = '';
  document.getElementById('pok-filtrados').innerHTML = '';
  
  document.getElementById('order').selectedIndex = 0;
  document.getElementById('weakness').selectedIndex = 0;
  document.getElementById('filter').selectedIndex = 0;
  const count = divideAtrapped(data);
  document.getElementById('count-trapped').innerHTML = 'Atrapados: ' + count.atrapado;
  document.getElementById('count-no-trapped').innerHTML = 'No atrapados: ' + count.noAtrapado;

  list = showImg(data);
  
  document.getElementById('pokemones').innerHTML = list;
});

google.load('visualization', '1.0', { 'packages': ['corechart'] });
google.load('visualization', '1.0', { 'packages': ['table'] });
const eggsKm = document.getElementById('eggs-km');
eggsKm.addEventListener('click', () => {
  google.setOnLoadCallback(eggsKm);

  screenHome.classList.add('hide');
  screenPokemon.classList.add('hide');
  screenEclosionEgg.classList.remove('hide');
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

const eggs = searchEggs(data);
const egg2 = document.getElementById('2km');
egg2.addEventListener('click', ()=>{
  graphicPie();
  buildGraphic(0);
});

const egg5 = document.getElementById('5km');
egg5.addEventListener('click', ()=>{
  graphicPie();
  buildGraphic(1);
});

const egg10 = document.getElementById('10km');
egg10.addEventListener('click', ()=>{
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

const graphicPie = () => {
  const dataDr = new google.visualization.DataTable();
  dataDr.addColumn('string', 'km');
  dataDr.addColumn('number', 'count');
  dataDr.addRows(
    [
      ['Huevos de 2km', eggs[0].length],
      ['Huevos de 5km', eggs[1].length],
      ['Huevos de 10km', eggs[2].length],
      ['No tiene huevos', eggs[3].length]

    ]
  );

  const opc = {
    'title': 'Porcentaje de huevos a eclosionar por tipo de km',
    'width': 450,
    'height': 220,
  };
  const graphic = new google.visualization.PieChart(document.getElementById('charts'));
  graphic.draw(dataDr, opc);
  document.getElementById('count-egg').innerHTML = 'Huevos de 2km: ' + eggs[0].length + '<br>' + 'Huevos de 5km: ' + eggs[1].length + '<br>' +
    ' Huevos de 10km: ' + eggs[2].length + '<br>' + ' No tienen huevos: ' + eggs[3].length;
};

const up = document.querySelector('#up');
window.addEventListener('scroll', () =>{
  if (window.pageYOffset > 200) {
    up.classList.remove('hide');
  } else {
    up.classList.add('hide');
  }
});

up.addEventListener('click', () =>{
  window.scrollTo(0, 0);
});
