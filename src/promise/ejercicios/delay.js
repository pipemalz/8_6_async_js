// En este desafío tienes la función delay la cual se espera que un tiempo específico retorne un mensaje

// La función deberá recibir dos parámetros:

// time: el tiempo de espera en milisegundos
// message: el mensaje que debe imprimir después del tiempo de espera
// La función delay debe retornar una promesa para poderlo usarlo de forma asíncrona.

// Nota: Debes usar la función setTimeout con el namespace window para poder monitorear su uso en la ejecución de pruebas, ejemplo:

// window.setTimeout(() => {
//   // code
// })

// Ejemplo 1:

// Input:
// delay(2000, "Hello after 2s")
// .then((message) => console.log(message))

// Output:
// after 2s
// "Hello after 2s"

function delay(time, message) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(message);
    }, time);
  });
}

delay(2000, "2 seconds late")
  .then((res) => console.log(res))
  .catch((err) => console.error(err))
  .finally(() => console.log("Finally"));
