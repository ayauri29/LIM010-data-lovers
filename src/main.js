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
const data = POKEMON.pokemon;

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
let text = '';
let arrayType = [];

filtro.addEventListener('change', () => {
  document.getElementById('count-egg').innerHTML = '';
  document.getElementById('pokemones').innerHTML = '';
  const x = document.getElementById('filtro').value;
  arrayType = buscarTipo(data, x);
  const count = separarAtrapados(arrayType);
  text = mostrarImg(arrayType);
  document.getElementById('debilidad').selectedIndex = 0;
  document.getElementById('order').selectedIndex = 0;
  document.getElementById('count-trapped').innerHTML = 'Atrapados: ' + count.atrapado;
  document.getElementById('count-no-trapped').innerHTML = 'No atrapados: ' + count.noAtrapado;
  document.getElementById('pok-filtrados').innerHTML = text;
});

let texto = '';
let arrayDebil = [];

debilidad.addEventListener('change', () => {
  document.getElementById('count-egg').innerHTML = '';
  // document.getElementById('pok-filtrados').innerHTML = '';
  document.getElementById('pokemones').innerHTML = '';
  const x = document.getElementById('filtro').value;
  const debil = document.getElementById('debilidad').value;
  arrayDebil = buscarDebil(data, x, debil);
  if (arrayDebil.length === 0) {
    document.getElementById('pok-filtrados').innerHTML = '<img src="https://vignette.wikia.nocookie.net/pokpiruleta/images/e/e0/Squirtle_XY.gif/revision/latest?cb=20140624162904&path-prefix=es"><p>No se encontraron resultados.</p>';
    document.getElementById('count-trapped').innerHTML = '';
    document.getElementById('count-no-trapped').innerHTML = '';
  } else {
    const count = separarAtrapados(arrayDebil);
    texto = mostrarImg(arrayDebil);
    document.getElementById('order').selectedIndex = 0;
    document.getElementById('count-trapped').innerHTML = 'Atrapados: ' + count.atrapado;
    document.getElementById('count-no-trapped').innerHTML = 'No atrapados: ' + count.noAtrapado;
    document.getElementById('pok-filtrados').innerHTML = texto;
  }
});

order.addEventListener('change', ()=>{
  let ordered = [];
  let text = '';
  const tipo = document.getElementById('filtro').value;
  const debil = document.getElementById('debilidad').value;
  const order = document.getElementById('order').value;
  if (debil === '0') {
    arrayType = buscarTipo(data, tipo);
    ordered = ordenar(arrayType, order);
    text = mostrarImg(ordered);
  } else {
    arrayDebil = buscarDebil(data, tipo, debil);
    const ordered = ordenar(arrayDebil, order);
    text = mostrarImg(ordered);
  }
  document.getElementById('pok-filtrados').innerHTML = text;
});

let list = '';
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
  
  document.getElementById('order').selectedIndex = 0;
  document.getElementById('debilidad').selectedIndex = 0;
  document.getElementById('filtro').selectedIndex = 0;
  const count = separarAtrapados(data);
  document.getElementById('count-trapped').innerHTML = 'Atrapados: ' + count.atrapado;
  document.getElementById('count-no-trapped').innerHTML = 'No atrapados: ' + count.noAtrapado;

  list = mostrarImg(data);
  
  document.getElementById('pokemones').innerHTML = list;
});

google.load('visualization', '1.0', { 'packages': ['corechart'] });
google.load('visualization', '1.0', { 'packages': ['table'] });
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

  document.getElementById('order').selectedIndex = 0;
  document.getElementById('debilidad').selectedIndex = 0;
  document.getElementById('filtro').selectedIndex = 0;

  const eggs = buscarHuevos(data);
  
  const dataDraw = new google.visualization.DataTable();
  dataDraw.addColumn('string', 'Pokemon');
  dataDraw.addColumn('number', '%Frec. aparición');
  dataDraw.addRows(
    [
      ['Huevos de 2km', eggs.count2],
      ['Huevos de 5km', eggs.count5],
    ]
  );
//https://stackoverflow.com/questions/12415689/how-to-dynamically-add-rows-columns-to-a-google-column-chart
  const dataDr = new google.visualization.DataTable();
  dataDr.addColumn('string', 'km');
  dataDr.addColumn('number', 'count');
  dataDr.addRows(
    [
      ['Huevos de 2km', eggs.count2],
      ['Huevos de 5km', eggs.count5],
      ['Huevos de 10km', eggs.count10],
      ['No tiene huevos', eggs.ncount]

    ]
  );

  const opciones = {
    'showRowNumber': true,
    'width': 300,
    'height': 220
  };
  const grafica = new google.visualization.Table(document.getElementById('table'));
  grafica.draw(dataDraw, opciones);

  const opc = {
    'title': 'Porcentaje a eclosionar por tipo de km',
    'width': 480,
    'height': 220
  };
  const grafic = new google.visualization.PieChart(document.getElementById('charts'));
  grafic.draw(dataDr, opc);
  
  document.getElementById('count-egg').innerHTML = 'Huevos de 2km: ' + eggs.count2 + '<br>' + 'Huevos de 5km: ' + eggs.count5 + '<br>' +
    ' Huevos de 10km: ' + eggs.count10 + '<br>' + ' No tienen huevos: ' + eggs.ncount;
});

const up = document.querySelector('#up');
window.addEventListener('scroll', () =>{
  if (window.pageYOffset > 200) {
    up.classList.remove('hide');
  } else {
    up.classList.add('hide');
  }
});

up.addEventListener('click',() =>{
  window.scrollTo(0,0);
});
