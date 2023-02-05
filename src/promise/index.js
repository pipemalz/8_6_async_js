const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// const myProm = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (Math.random() > Math.random()) {
//       resolve("Validado");
//     } else {
//       reject("Error en la ejecucion");
//     }
//   }, 2000);
// });

// myProm
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(()=>{
//     console.log('FInally');
// })

// function fetch(url){
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     return new Promise((resolve, reject)=>{
//         xhr.onreadystatechange = function(evento){
//             if(xhr.readyState === 4){
//                 if(xhr.status === 200){
//                     resolve(JSON.parse(xhr.responseText)[0]);
//                 }else{
//                     reject('Error');
//                 }
//             }
//         }
//         xhr.send();
//     })
// }
// fetch('https://api.escuelajs.co/api/v1/products')
//     .then(response => {
//         console.log(response);
//     })
//     .catch(error => {
//         console.error(error);
//     })
//     .finally(()=>{
//         console.info('Finally');
//     })

const cows = Math.floor(Math.random() * (20 - 5 + 1) + 5);
const countCows = new Promise((resolve, reject)=>{
    if(cows > 10){
        resolve(`We have enough milk, ${cows} cows.`);
    }else{
        reject(`There are no cows enough to supply the necessary milk, just ${cows} cows.`);
    }
});

countCows
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.error(err);
    })
    .finally(()=>{
        console.log('FInally');
    })