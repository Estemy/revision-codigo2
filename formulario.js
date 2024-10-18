const formulario = document.querySelector("#formulario"); // const porque no cambia

formulario.onsubmit = function (e) {
  e.preventDefault(); // Previene la acción por defecto del formulario

  let n = formulario.elements[0]; // Cambie todas las "var" por "let" por que puede cambiar y por que var ya no se usa 
  let edad = formulario.elements[1];
  let na = formulario.elements[2];

  let nombre = n.value;
  let edadValor = edad.value;

  let i = na.selectedIndex;
  let nacionalidad = na.options[i].value;

  console.log(nombre, edadValor);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add("error");
  }
  if (edadValor < 18 || edadValor > 120) {
    edad.classList.add("error");
  }

  if (nombre.length > 0 && (edadValor >= 18 && edadValor < 120)) {
    agregarInvitado(nombre, edadValor, nacionalidad);
  }
}
