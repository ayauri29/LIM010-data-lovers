const usuario= document.getElementById('user');
const contraseña = document.getElementById('pass');
const ingresar = document.getElementById('ingresar');
/*const pantalla_inicioSesion = document.getElementById('pantalla_inicioSesion');*/

const claveIncorrecta = document.getElementById('claveIncorrecta');

let cont = 1;
document.getElementById('enter').addEventListener('submit', (enter) => {
  enter.preventDefault()
  const user = usuario.value;
  const pass = contraseña.value;
  if (pass === 'LABORATORIA' && user === 'LABORATORIA') {
    alert("Bienvenido");
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