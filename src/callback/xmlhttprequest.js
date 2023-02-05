const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const API = "https://api.escuelajs.co/api/v1";
const COMPLETED = 4;
const OK = 200;

function fetchData(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onreadystatechange = function (e) {
    if (xhr.readyState === COMPLETED) {
      if (xhr.status === OK) {
        callback(null, JSON.parse(xhr.responseText));
      } else {
        const error = new Error("Error " + url);
        return callback(error, null);
      }
    }
  };
  xhr.send();
}

fetchData(`${API}/products`, function (error, data) {
  if (error) return console.error(error);
  fetchData(`${API}/products/${data[0].id}`, function (error2, data2) {
    if (error2) return console.error(error2);
    fetchData(
      `${API}/categories/${data2.category.id}`,
      function (error3, data3) {
        if (error3) return console.error(error3);
        console.log(data[0]);
        console.log(data2.title);
        console.log(data3.name);
      }
    );
  });
});

// function fetchData(url, callback){
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://api.escuelajs.co/api/v1/products');
//     xhr.onreadystatechange = function(e){
//         if(xhr.readyState === 4){
//             if(xhr.status === 200){
//                 callback(null, JSON.parse(xhr.responseText));
//             }
//         }
//     }
//     xhr.send();
// }

// function print(error, response){
//     if(!error){
//         console.log(response[0])
//     }
// }

// fetchData('https://api.escuelajs.co/api/v1/products', print)
