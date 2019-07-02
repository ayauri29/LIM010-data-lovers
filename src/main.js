const usuario = document.getElementById('user');
const contraseña = document.getElementById('pass');
const ingresar = document.getElementById('ingresar');

const screenInicioSesion = document.getElementById('screen-inicio-sesion');
const screenHome = document.getElementById('screen-home');
const screenPokemon = document.getElementById('screen-pokemon');
const screenEclosionEgg = document.getElementById('screen-eclosion-egg');

const claveIncorrecta = document.getElementById('clave-incorrecta');
const header = document.getElementById('header');
const footer = document.getElementById('footer');

let cont = 1;
document.getElementById('enter').addEventListener('submit', (enter) => {
  enter.preventDefault();
  const user = usuario.value;
  const pass = contraseña.value;
  if (pass === 'LABORATORIA' && user === 'LABORATORIA') {
    header.classList.remove('hide');
    footer.classList.remove('hide');
    screenHome.classList.remove('hide');
    screenInicioSesion.classList.add('hide');
    home.classList.add('active');
  } else if (cont > 2) {
    claveIncorrecta.innerHTML = ' Ha intentado demasiadas veces.';
    usuario.value = '';
    contraseña.value = '';
    ingresar.disabled = true;
    usuario.disabled = true;
    contraseña.disabled = true;
  } else {
    claveIncorrecta.innerHTML = ' ERROR! Introduzca una clave válida.';
    usuario.value = '';
    contraseña.value = '';
    usuario.focus();
    contraseña.focus();
    cont++;
  }
});

const home = document.getElementById('home');
home.addEventListener('click', () => {
  screenHome.classList.remove('hide');
  screenPokemon.classList.add('hide');
  screenEclosionEgg.classList.add('hide');
  home.classList.add('active');
  verPokemones.classList.remove('active');
  document.getElementById('filtro').classList.add('hide');
  huevosKm.classList.remove('active');
});

const data = POKEMON.pokemon;

let text = '';
let arrayType = [];
filtro.addEventListener('change', () => {
  document.getElementById('count-egg').innerHTML = '';
  document.getElementById('count-filtro').innerHTML = '';
  document.getElementById('pokemones').innerHTML = '';
  const x = document.getElementById('filtro').value;
  arrayType = buscarTipo(data, x);
  console.log(x);
  console.log(arrayType);
  text = mostrarImg(arrayType);
  document.getElementById('pok-filtrados').innerHTML = text;
});

const verPokemones = document.getElementById('ver-pokemones');
verPokemones.addEventListener('click', () => {
  screenHome.classList.add('hide');
  screenPokemon.classList.remove('hide');
  screenEclosionEgg.classList.add('hide');
  document.getElementById('filtro').classList.remove('hide');
  home.classList.remove('active');
  verPokemones.classList.add('active');
  huevosKm.classList.remove('active');

  
  document.getElementById('count-egg').innerHTML = '';
  document.getElementById('pok-filtrados').innerHTML = '';
  document.getElementById('count-filtro').innerHTML = '';
  let list = '';
  list = mostrarImg(data);
  
  document.getElementById('pokemones').innerHTML = list;
});

google.load('visualization', '1.0', { 'packages': ['corechart'] });
const huevosKm = document.getElementById('huevos-km');
huevosKm.addEventListener('click', () => {
  google.setOnLoadCallback(huevosKm);

  screenHome.classList.add('hide');
  screenPokemon.classList.add('hide');
  screenEclosionEgg.classList.remove('hide');
  document.getElementById('filtro').classList.add('hide');
  home.classList.remove('active');
  verPokemones.classList.remove('active');
  huevosKm.classList.add('active');

  document.getElementById('pokemones').innerHTML = '';
  document.getElementById('pok-filtrados').innerHTML = '';

  let count2 = 0;
  let count5 = 0;
  let count10 = 0;
  let ncount = 0;
  const data = new google.visualization.DataTable();
  data.addColumn('string', 'km');
  data.addColumn('number', 'count');
  data.addRows(
    [
      ['Huevos de 2km', 14],
      ['Huevos de 5km', 42],
      ['Huevos de 10km', 17],
      ['No tiene huevos', 78]

    ]
  );

  for (let i = 0; i < POKEMON.pokemon.length; i++) {
    if (POKEMON.pokemon[i].egg === '2 km') {
      count2++;
    } else if (POKEMON.pokemon[i].egg === '5 km') {
      count5++;
    } else if (POKEMON.pokemon[i].egg === '10 km') {
      count10++;
    } else {
      ncount++;
    }
  }

  document.getElementById('count-egg').innerHTML = 'Huevos de 2km: ' + count2 + '<br>' + 'Huevos de 5km: ' + count5 + '<br>' +
    ' Huevos de 10km: ' + count10 + '<br>' + ' No tienen huevos: ' + ncount;


  const opciones = {
    'title': 'Porcentaje a eclosionar por tipo de km',
    'width': 480,
    'height': 220
  };
  const grafica = new google.visualization.PieChart(document.getElementById('charts'));
  grafica.draw(data, opciones);
});
