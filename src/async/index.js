const fnAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve("Async!");
        }, 2000)
      : reject(new Error('Error'));
  });
};

const anotherFn = async ()=>{
    const response = await fnAsync();
    console.log(response);
    console.log('hello')
}

console.log('Before');
anotherFn();
console.log('After');

const msj = new Promise((res, rej)=>{
    setTimeout(()=> res('Mensaje recibido'), 4000)
})

async function imprimir(msj){
    const texto = await msj;
    console.log(texto)
}

imprimir(msj)