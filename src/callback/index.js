//Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

function suma(a, b) {
  return a + b;
}

function call(a, b, callback) {
  return callback(a, b);
}

console.log(call(3, 3, suma));

setTimeout(() => {
    console.log("Hola javascript");
  }, 2000);

  function saludo(nombre){
    console.log(`Hola ${nombre} esto es un saludo`);
  }

setTimeout(saludo, 3000, 'Oscar');