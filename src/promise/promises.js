const API = "https://api.escuelajs.co/api/v1";

// function fetchData(url){
//     return fetch(url)
// }

// fetch(`${API}/products`)
//   .then((response) => response.json())
//   .then(products=> console.log(products[0].title))
//   .catch(error=> console.log(error))
//   .finally(()=>console.log('Finally'))

fetch(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        const url = `${API}/products/${products[10].id}`;
        console.log(url)
        return fetch(url)
    })
    .then(response => response.json())
    .then(product => {
        console.log(product.title)
        return fetch(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name)
    })
    .catch(error=>console.log(error))
    .finally(()=>console.log('Finally'))