const usuario= document.getElementById('user');
const contraseña = document.getElementById('pass');
const ingresar = document.getElementById('ingresar');
const screen_inicioSesion = document.getElementById('screen_inicioSesion');
const screen_home = document.getElementById('screen_home');
const screen_pokemon = document.getElementById('screen_pokemon');

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
    /*document.getElementById('home').classList.add('active');
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

/*-------------------------------------*/
const home = document.getElementById('home');
home.addEventListener('click', () =>{
  screen_home.classList.remove('hide');
  screen_pokemon.classList.add('hide');
  document.getElementById('pestana').classList.add('hide')
  home.classList.add('active');
  verTodos.classList.remove('active');
  document.getElementById('pokemones').classList.add('hide');
  huevos.classList.remove('active');
  /*document.getElementById('iHome').classList.add('active');
  document.getElementById('iFiltros').classList.remove('active');
  document.getElementById('iHuevos').classList.remove('active');*/
})
const buscar = document.getElementById('buscar');
let text = "";
pokemones.addEventListener('change', () =>{
  const x = document.getElementById('pokemones').value;
  text = buscarPokemon(x);
  document.getElementById('demo').innerHTML = text;
});

const buscarPokemon = (string) => {
  let list = '';
  document.getElementById("countEgg").innerHTML="";
  document.getElementById('card1').innerHTML = "";
  document.getElementById('verTodos').innerHTML = "";
  for (let i = 0; i < POKEMON.pokemon.length; i++) {
    for (let j = 0; j < POKEMON.pokemon[i].type.length; j++) {
      if(POKEMON.pokemon[i].type[j] === string){
        const card = `
         <div class="card">
           <img src="` + POKEMON.pokemon[i].img + `"/>
           <p class="nom">` + POKEMON.pokemon[i].name +`</p> 
         </div>
         </div>
      `;
      list += card;

      }
    }
  }
  return list;
}

const verTodos = document.getElementById('filtros');
verTodos.addEventListener('click',() => {
  screen_home.classList.add('hide');
  screen_pokemon.classList.remove('hide');
  document.getElementById('pestana').classList.add('hide');
  document.getElementById('pokemones').classList.remove('hide');
  home.classList.remove('active');
  verTodos.classList.add('active');
  huevos.classList.remove('active');
  /*document.getElementById('iHome').classList.remove('active');
  document.getElementById('iFiltros').classList.add('active');
  document.getElementById('iHuevos').classList.remove('active');*/

  let list = "";
  document.getElementById("countEgg").innerHTML="";
  document.getElementById("demo").innerHTML="";
  document.getElementById('card1').innerHTML = "";
  for (let i = 0; i < POKEMON.pokemon.length; i++) {  
    const card = `
      <div class="card">
        <img src="` + POKEMON.pokemon[i].img + `"/>
        <p class="nom">` + POKEMON.pokemon[i].name +`</p> 
      </div>
    </div>
      `;
      list += card; 

  }
   document.getElementById("verTodos").innerHTML=list;
});

const huevos = document.getElementById('huevos');
huevos.addEventListener('click',()=>{
  screen_home.classList.add('hide');
  screen_pokemon.classList.add('hide');
  document.getElementById('pestana').classList.remove('hide');
  document.getElementById('pokemones').classList.add('hide');
  home.classList.remove('active');
  verTodos.classList.remove('active');
  huevos.classList.add('active');
  /*document.getElementById('iHome').classList.remove('active');
  document.getElementById('iFltros').classList.remove('active');
  document.getElementById('iHuevos').classList.add('active');*/

  document.getElementById("verTodos").innerHTML="";
  document.getElementById("demo").innerHTML="";
  document.getElementById('card1').innerHTML = "";
  let count2 = 0;
  let count5 = 0;
  let count10 = 0;
  let ncount = 0;
  for (let i = 0; i < POKEMON.pokemon.length; i++) {
    if(POKEMON.pokemon[i].egg == '2 km'){
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
  ncount = Math.round(ncount*100/151);
  document.getElementById('countEgg').innerHTML= 'Huevos de 2km: ' + count2 + "%<br>" + "Huevos de 5km: " + count5 + "%<br>" + 
  " Huevos de 10km: " + count10 + "%<br>" + " No tienen huevos: " + ncount + "%" ;
});