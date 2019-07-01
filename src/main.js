const usuario = document.getElementById('user');
const contraseña = document.getElementById('pass');
const ingresar = document.getElementById('ingresar');
const screen_inicioSesion = document.getElementById('screen_inicioSesion');
const screen_home = document.getElementById('screen_home');
const screen_pokemon = document.getElementById('screen_pokemon');
const data = POKEMON.pokemon;

const claveIncorrecta = document.getElementById('claveIncorrecta');
const header = document.getElementById('header');
const footer = document.getElementById('footer');

let cont = 1;
document.getElementById('enter').addEventListener('submit', (enter) => {
  enter.preventDefault()
  const user = usuario.value;
  const pass = contraseña.value;
  if (pass === 'LABORATORIA' && user === 'LABORATORIA') {
    header.classList.remove('hide');
    footer.classList.remove('hide');
    screen_home.classList.remove('hide');
    screen_inicioSesion.classList.add('hide');
    /* document.getElementById('home').classList.add('active');
    document.getElementById('iHome').classList.add('active');*/
  }
  else if (cont > 2) {
    claveIncorrecta.innerHTML = ' Ha intentado demasiadas veces.';
    usuario.value = '';
    contraseña.value = '';
    ingresar.disabled = true;
    usuario.disabled = true;
    contraseña.disabled = true;
  }
  else {
    claveIncorrecta.innerHTML = ' ERROR! Introduzca una clave válida.';
    usuario.value = '';
    contraseña.value = '';
    usuario.focus();
    contraseña.focus();
    cont++;
  }
})

/* -------------------------------------*/

const home = document.getElementById('home');
home.addEventListener('click', () => {
  screen_home.classList.remove('hide');
  screen_pokemon.classList.add('hide');
  document.getElementById('pestana').classList.add('hide')
  home.classList.add('active');
  verTodos.classList.remove('active');
  document.getElementById('pokemones').classList.add('hide');
  huevos.classList.remove('active');
  /* document.getElementById('iHome').classList.add('active');
  document.getElementById('iFiltros').classList.remove('active');
  document.getElementById('iHuevos').classList.remove('active');*/
});

let text = '';
let arrayType = [];
pokemones.addEventListener('change', () => {
  document.getElementById('countEgg').innerHTML = '';
  document.getElementById('card1').innerHTML = '';
  document.getElementById('verTodos').innerHTML = '';
  const x = document.getElementById('pokemones').value;
  arrayType = buscarTipo(data, x);
  text = mostrarImg(arrayType);
  document.getElementById('demo').innerHTML = text;
});
const verTodos = document.getElementById('filtros');
verTodos.addEventListener('click', () => {
  screen_home.classList.add('hide');
  screen_pokemon.classList.remove('hide');
  document.getElementById('pestana').classList.add('hide');
  document.getElementById('pokemones').classList.remove('hide');
  home.classList.remove('active');
  verTodos.classList.add('active');
  huevos.classList.remove('active');
  /* document.getElementById('iHome').classList.remove('active');
  document.getElementById('iFiltros').classList.add('active');
  document.getElementById('iHuevos').classList.remove('active');*/

  document.getElementById('countEgg').innerHTML = '';
  document.getElementById('demo').innerHTML = '';
  document.getElementById('card1').innerHTML = '';
  let list = '';
  /* for (let i = 0; i < POKEMON.pokemon.length; i++) {  
    const card = `
      <div class="card">
        <img src="` + POKEMON.pokemon[i].img + `"/>
        <p class="nom">` + POKEMON.pokemon[i].name +`</p> 
      </div>
    </div>
      `;
      list += card; 

  }*/
  list = mostrarImg(data);
  document.getElementById('verTodos').innerHTML = list;
});

const huevos = document.getElementById('huevos');
huevos.addEventListener('click', ()=>{
  screen_home.classList.add('hide');
  screen_pokemon.classList.add('hide');
  document.getElementById('pestana').classList.remove('hide');
  document.getElementById('pokemones').classList.add('hide');
  home.classList.remove('active');
  verTodos.classList.remove('active');
  huevos.classList.add('active');
  /* document.getElementById('iHome').classList.remove('active');
  document.getElementById('iFltros').classList.remove('active');
  document.getElementById('iHuevos').classList.add('active');*/

  document.getElementById('verTodos').innerHTML = '';
  document.getElementById('demo').innerHTML = '';
  document.getElementById('card1').innerHTML = '';
  /* let count2 = 0;
  let count5 = 0;
  let count10 = 0;
  let ncount = 0;
  for (let i = 0; i < POKEMON.pokemon.length; i++) {
    if (POKEMON.pokemon[i].egg == '2 km'){
      count2++;
    }else if (POKEMON.pokemon[i].egg == '5 km'){
      count5++;
    }else if(POKEMON.pokemon[i].egg == '10 km'){
      count10++;
    }else{
      ncount++;
    }
  }
  count2 = Math.round(count2*100/151);
  count5 = Math.round(count5*100/151);
  count10 = Math.round(count10*100/151);
  ncount = Math.round(ncount*100/151);*/
  const eggs = buscarHuevos(data);
  document.getElementById('countEgg').innerHTML = 'Huevos de 2km: ' + eggs.count2 + '%<br>' + 'Huevos de 5km: ' + eggs.count5 + '%<br>' + 
  ' Huevos de 10km: ' + eggs.count10 + '%<br>' + ' No tienen huevos: ' + eggs.ncount + '%' ;
});