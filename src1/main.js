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
  
})