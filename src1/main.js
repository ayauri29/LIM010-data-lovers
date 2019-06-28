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
